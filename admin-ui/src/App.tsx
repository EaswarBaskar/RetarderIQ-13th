import React, { useState, useEffect, useCallback } from 'react';
import { api, getStoredToken, DiagnosticCase, DiagnosticSummary, AdminUser, Pagination } from './services/api';
import { LoginView } from './components/LoginView';
import { Header } from './components/Header';
import { KpiCards } from './components/KpiCards';
import { ChartsSection } from './components/ChartsSection';
import { RecordedPlacesGlobe } from './components/RecordedPlacesGlobe';
import { CaseExplorer } from './components/CaseExplorer';
import { CaseDetailModal } from './components/CaseDetailModal';
import { TechnicianManagement } from './components/TechnicianManagement';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getStoredToken());
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [sseConnected, setSseConnected] = useState<boolean>(false);

  // Core Data
  const [summary, setSummary] = useState<DiagnosticSummary | null>(null);
  const [cases, setCases] = useState<DiagnosticCase[]>([]);
  const [allCases, setAllCases] = useState<DiagnosticCase[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 1,
  });

  // Filters State
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [granularity, setGranularity] = useState('day');

  // Selected Detail Modal
  const [selectedCase, setSelectedCase] = useState<DiagnosticCase | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Load paginated cases
  const loadCases = useCallback(
    async (page = 1, currentFilters = activeFilters) => {
      setLoading(true);
      try {
        const res = await api.getCases({
          page,
          pageSize: pagination.pageSize,
          ...currentFilters,
        });
        setCases(res.cases || []);
        setPagination({
          page: res.page,
          pageSize: res.pageSize,
          total: res.total,
          totalPages: res.totalPages,
        });
      } catch (err) {
        console.error('Failed to load cases:', err);
      } finally {
        setLoading(false);
      }
    },
    [activeFilters, pagination.pageSize]
  );

  // Load analytics & summary
  const loadAnalytics = useCallback(async () => {
    try {
      const [sumRes, allCasesRes] = await Promise.all([
        api.getSummary(granularity, dateFrom, dateTo),
        api.getAllCasesForAnalytics(),
      ]);
      setSummary(sumRes.summary);
      setAllCases(allCasesRes);
    } catch (err) {
      console.error('Failed to load analytics:', err);
    }
  }, [granularity, dateFrom, dateTo]);

  // Load users
  const loadUsers = useCallback(async () => {
    try {
      const res = await api.getUsers();
      setUsers(res.users || []);
    } catch (err) {
      console.error('Failed to load users:', err);
    }
  }, []);

  // Full Refresh
  const handleRefreshAll = async () => {
    setRefreshing(true);
    await Promise.all([loadCases(pagination.page), loadAnalytics(), loadUsers()]);
    setRefreshing(false);
  };

  // Initial Load & SSE
  useEffect(() => {
    if (!isAuthenticated) return;

    handleRefreshAll();

    // Connect Server-Sent Events for real-time live cases
    const disconnect = api.connectEvents(() => {
      setSseConnected(true);
      // Auto refresh table & summary when new diagnostic comes in
      loadCases(pagination.page);
      loadAnalytics();
    });

    setSseConnected(true);

    return () => {
      disconnect();
      setSseConnected(false);
    };
  }, [isAuthenticated]);

  const handleLogout = async () => {
    await api.logout();
    setIsAuthenticated(false);
  };

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setActiveFilters(newFilters);
    loadCases(1, newFilters);
  };

  const handlePageChange = (newPage: number) => {
    loadCases(newPage);
  };

  const handleViewCase = async (id: string) => {
    try {
      const fullCase = await api.getCaseDetail(id);
      setSelectedCase(fullCase);
      setIsDetailOpen(true);
    } catch (err) {
      console.error('Failed to view case:', err);
    }
  };

  const handleDeleteCases = async (ids: string[]) => {
    await api.deleteCases(ids);
    await handleRefreshAll();
  };

  const handleExportCsv = () => {
    if (allCases.length === 0) {
      alert('No records available to export.');
      return;
    }

    const columns = [
      'Diagnostic Case ID',
      'Diagnostic Status',
      'Diagnostic Language Name',
      'Admin Report Language',
      'FSE Name',
      'Technician Phone',
      'Vehicle Manufacturer',
      'Model',
      'Vehicle Registration No.',
      'Chassis No.',
      'Odometer Km',
      'Kms & Date of Sale',
      'Dealer / Location',
      'City',
      'State',
      'Region',
      'Suspected Product',
      'Recommended Part No.',
      'Complaint Attended on',
      'Diagnostic Feedback',
    ];

    const escapeCsv = (val: any) => `"${String(val ?? '').replace(/"/g, '""')}"`;

    const csvRows = [
      columns.join(','),
      ...allCases.map((item) => {
        const p = item.payload || {};
        return columns
          .map((col) => {
            const val =
              p[col] ?? (col === 'Diagnostic Case ID' ? item.case_number || item.id : '');
            if (col === 'Diagnostic Feedback' && typeof val === 'object' && val !== null) {
              return escapeCsv(val.clarity || '');
            }
            return escapeCsv(val);
          })
          .join(',');
      }),
    ];

    const blob = new Blob([csvRows.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `RetarderIQ_Diagnostics_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return <LoginView onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Navigation & Header */}
        <Header
          onRefresh={handleRefreshAll}
          onExportCsv={handleExportCsv}
          onLogout={handleLogout}
          refreshing={refreshing}
          sseConnected={sseConnected}
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          granularity={granularity}
          setGranularity={setGranularity}
          onApplyDateFilter={loadAnalytics}
        />

        {/* Top KPIs */}
        <KpiCards
          summary={summary}
          onFilterIncomplete={() => {
            handleFilterChange({ ...activeFilters, status: 'INCOMPLETE' });
          }}
        />

        {/* Charts & Visual Analytics */}
        <ChartsSection cases={allCases} />

        {/* 3D Globe of Field Diagnostic Records & Hubs */}
        <RecordedPlacesGlobe
          cases={allCases}
          users={users}
          onSelectPlace={(cityName) => {
            handleFilterChange({ ...activeFilters, search: cityName });
          }}
        />

        {/* Case Explorer Data Table */}
        <CaseExplorer
          cases={cases}
          pagination={pagination}
          loading={loading}
          onPageChange={handlePageChange}
          onFilterChange={handleFilterChange}
          onViewCase={handleViewCase}
          onDeleteCases={handleDeleteCases}
          statusFilterValue={activeFilters.status || ''}
        />

        {/* Technician Management Section */}
        <TechnicianManagement users={users} onReloadUsers={loadUsers} />

        {/* Case Details Drawer / Modal */}
        <CaseDetailModal
          caseItem={selectedCase}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onCaseUpdated={handleRefreshAll}
        />
      </div>
    </div>
  );
};


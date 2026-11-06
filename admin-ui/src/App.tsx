import React, { useState, useEffect, useCallback, useRef } from 'react';
import { api, getStoredToken, DiagnosticCase, DiagnosticSummary, AdminUser, Pagination } from './services/api';
import { LoginView } from './components/LoginView';
import { Header } from './components/Header';
import { KpiCards } from './components/KpiCards';
import { ChartsSection } from './components/ChartsSection';
import { RecordedPlacesGlobe } from './components/RecordedPlacesGlobe';
import { CaseExplorer } from './components/CaseExplorer';
import { CaseDetailModal } from './components/CaseDetailModal';
import { TechnicianManagement } from './components/TechnicianManagement';
import { getSessionStatus, getRegion, getManufacturer } from './lib/diagnosticUtils';

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

  // Track latest active filters & pagination in refs to avoid stale closures in SSE and background timers
  const activeFiltersRef = useRef(activeFilters);
  activeFiltersRef.current = activeFilters;

  const paginationRef = useRef(pagination);
  paginationRef.current = pagination;

  // Load paginated cases
  const loadCases = useCallback(
    async (page = 1, currentFilters = activeFiltersRef.current) => {
      setLoading(true);
      try {
        const res = await api.getCases({
          page,
          pageSize: paginationRef.current.pageSize,
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
    []
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

  // Full Refresh (preserves active filters)
  const handleRefreshAll = async () => {
    setRefreshing(true);
    await Promise.all([
      loadCases(paginationRef.current.page, activeFiltersRef.current),
      loadAnalytics(),
      loadUsers(),
    ]);
    setRefreshing(false);
  };

  // Initial Load & SSE
  useEffect(() => {
    if (!isAuthenticated) return;

    handleRefreshAll();

    // Connect Server-Sent Events for real-time live cases
    const disconnect = api.connectEvents((event: any) => {
      setSseConnected(true);

      // Keepalive / ping: connection health check only - NEVER clear user filters or reload data!
      if (!event || event.type === 'keepalive' || event.type === 'ping') {
        return;
      }

      // Live mutation event: reload data preserving current active filters!
      loadCases(paginationRef.current.page, activeFiltersRef.current);
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
    if (newFilters.dateFrom !== undefined && newFilters.dateFrom !== dateFrom) {
      setDateFrom(newFilters.dateFrom);
    }
    if (newFilters.dateTo !== undefined && newFilters.dateTo !== dateTo) {
      setDateTo(newFilters.dateTo);
    }
    loadCases(1, newFilters);
  };

  const handleApplyDateFilter = useCallback(async () => {
    const nextFilters = { ...activeFiltersRef.current };
    if (dateFrom) nextFilters.dateFrom = dateFrom;
    else delete nextFilters.dateFrom;

    if (dateTo) nextFilters.dateTo = dateTo;
    else delete nextFilters.dateTo;

    setActiveFilters(nextFilters);
    await Promise.all([
      loadCases(1, nextFilters),
      loadAnalytics(),
    ]);
  }, [dateFrom, dateTo, loadCases, loadAnalytics]);

  const handlePageChange = (newPage: number) => {
    loadCases(newPage, activeFiltersRef.current);
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
    const exportData = allCases.length > 0 ? allCases : cases;
    if (exportData.length === 0) {
      alert('No records available to export.');
      return;
    }

    const headers = [
      'Case ID',
      'Date',
      'Time',
      'Status',
      'FSE Name',
      'Technician Phone',
      'Vehicle Manufacturer',
      'Model',
      'Vehicle Registration No.',
      'Chassis No.',
      'Dealer / Location',
      'City',
      'State',
      'Region',
      'Suspected Product',
      'Recommended Part No.',
      'Admin Resolution Status',
      'Admin Resolution Remarks',
      'Complaint Attended on',
      'Created At',
      'Travels Name',
      'Odometer Km',
      'Diagnostic Language Name',
      'Diagnostic Feedback',
    ];

    const escapeCsv = (val: any) => `"${String(val ?? '').replace(/"/g, '""')}"`;

    const csvRows = [
      headers.join(','),
      ...exportData.map((item) => {
        const p = item.payload || {};

        // Always resolve Date and Time so no case has a blank date
        let dateVal = '';
        let timeVal = '';
        if (p['Complaint Attended on']) {
          dateVal = p['Complaint Attended on'];
        }
        if (item.created_at) {
          const d = new Date(item.created_at);
          if (!isNaN(d.getTime())) {
            if (!dateVal) {
              dateVal = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
            }
            timeVal = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          }
        }

        const caseId = item.case_number || p['Diagnostic Case ID'] || item.id;
        const status = getSessionStatus(p);
        const mfg = getManufacturer(p);
        const region = p.Region || getRegion(p);
        const adminRes = p['Admin Resolution'] || {};
        const feedback = typeof p['Diagnostic Feedback'] === 'object' && p['Diagnostic Feedback'] !== null
          ? (p['Diagnostic Feedback'].clarity || p['Diagnostic Feedback'].rating || '')
          : (p['Diagnostic Feedback'] || '');

        const rowMap: Record<string, any> = {
          'Case ID': caseId,
          'Date': dateVal,
          'Time': timeVal,
          'Status': status,
          'FSE Name': p['FSE Name'] || p['Technician Name'] || '',
          'Technician Phone': p['Technician Phone'] || p['phone'] || '',
          'Vehicle Manufacturer': mfg,
          'Model': p.Model || '',
          'Vehicle Registration No.': p['Vehicle Registration No.'] || p['Vehicle Registration'] || '',
          'Chassis No.': p['Chassis No.'] || p['Chassis'] || '',
          'Dealer / Location': p['Dealer / Location'] || p['Dealer'] || '',
          'City': p.City || '',
          'State': p.State || '',
          'Region': region,
          'Suspected Product': p['Suspected Product'] || '',
          'Recommended Part No.': p['Recommended Part No.'] || '',
          'Admin Resolution Status': adminRes.outcome || '',
          'Admin Resolution Remarks': adminRes.remarks || '',
          'Complaint Attended on': p['Complaint Attended on'] || dateVal,
          'Created At': item.created_at || '',
          'Travels Name': p['Travels Name'] || '',
          'Odometer Km': p['Odometer Km'] || p['Kms & Date of Sale'] || '',
          'Diagnostic Language Name': p['Diagnostic Language Name'] || p['Diagnostic Language'] || 'English',
          'Diagnostic Feedback': feedback,
        };

        return headers.map((h) => escapeCsv(rowMap[h])).join(',');
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
          onApplyDateFilter={handleApplyDateFilter}
        />

        {/* Top KPIs */}
        <KpiCards
          summary={summary}
          cases={allCases.length > 0 ? allCases : cases}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterIncomplete={() => {
            handleFilterChange({ ...activeFilters, status: 'INCOMPLETE' });
          }}
        />

        {/* Charts & Visual Analytics */}
        <ChartsSection
          cases={allCases.length > 0 ? allCases : cases}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onViewCase={handleViewCase}
        />

        {/* 3D Globe of Field Diagnostic Records & Hubs */}
        <RecordedPlacesGlobe
          cases={allCases.length > 0 ? allCases : cases}
          users={users}
          onSelectPlace={(placeInfo) => {
            if (typeof placeInfo === 'object' && placeInfo !== null) {
              const newFilter: Record<string, string> = { ...activeFilters };
              if (placeInfo.search !== undefined) {
                newFilter.search = placeInfo.search;
              }
              if (placeInfo.region) {
                newFilter.region = placeInfo.region;
              }
              handleFilterChange(newFilter);
            } else if (typeof placeInfo === 'string') {
              handleFilterChange({ ...activeFilters, search: placeInfo });
            }
            // Auto-scroll down smoothly to the Case Explorer data table so user immediately sees the records
            setTimeout(() => {
              const el = document.getElementById('case-explorer');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        />

        {/* Case Explorer Data Table */}
        <CaseExplorer
          id="case-explorer"
          cases={cases}
          pagination={pagination}
          loading={loading}
          activeFilters={activeFilters}
          onPageChange={handlePageChange}
          onFilterChange={handleFilterChange}
          onViewCase={handleViewCase}
          onDeleteCases={handleDeleteCases}
          statusFilterValue={activeFilters.status || ''}
          onExportCsv={handleExportCsv}
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


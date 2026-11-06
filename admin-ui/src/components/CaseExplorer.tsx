import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Input, Select } from './ui/Input';
import { Badge } from './ui/Badge';
import { DiagnosticCase, Pagination } from '../services/api';
import { getSessionStatus } from '../lib/diagnosticUtils';
import {
  Search,
  Filter,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  RotateCcw,
  MessageSquare,
  PhoneCall,
  Check,
  X,
} from 'lucide-react';

interface CaseExplorerProps {
  cases: DiagnosticCase[];
  pagination: Pagination;
  loading: boolean;
  onPageChange: (newPage: number) => void;
  onFilterChange: (filters: Record<string, string>) => void;
  onViewCase: (caseId: string) => void;
  onDeleteCases: (ids: string[]) => Promise<void>;
  statusFilterValue?: string;
}

export const CaseExplorer: React.FC<CaseExplorerProps> = ({
  cases,
  pagination,
  loading,
  onPageChange,
  onFilterChange,
  onViewCase,
  onDeleteCases,
  statusFilterValue = '',
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isDeleting, setIsDeleting] = useState(false);
  const [whatsAppNotice, setWhatsAppNotice] = useState('');

  const handleWhatsApp = (item: DiagnosticCase) => {
    const p = item.payload || {};
    const fse = p['FSE Name'] || 'Electrician';
    const vehicle = p['Vehicle Registration No.'] || p['Chassis No.'] || 'vehicle';
    const cId = item.case_number || p['Diagnostic Case ID'] || item.id;
    const confirmUrl = `${window.location.origin}/confirm.html?c=${encodeURIComponent(cId)}`;
    const message = `Hi ${fse}, RetarderIQ showed a fault on vehicle ${vehicle}. Did you rectify the issue? Tap here to confirm in 1 second: ${confirmUrl}`;

    const rawPhone = String(p['Technician Phone'] || '').replace(/[^0-9]/g, '');
    const phone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

    const waUrl = phone
      ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(confirmUrl);
      setWhatsAppNotice(`WhatsApp link copied for ${vehicle} (${fse})!`);
      setTimeout(() => setWhatsAppNotice(''), 4500);
    }
  };

  // Local filter states
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(statusFilterValue);
  const [region, setRegion] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [language, setLanguage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [kmRange, setKmRange] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Keep status in sync if prop changes (e.g. from KPI click)
  React.useEffect(() => {
    setStatus(statusFilterValue);
  }, [statusFilterValue]);

  const triggerFilter = (overrides: Record<string, string> = {}) => {
    const current = {
      search,
      status,
      region,
      manufacturer,
      language,
      feedback,
      kmRange,
      dateFrom,
      dateTo,
      ...overrides,
    };
    onFilterChange(current);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerFilter();
  };

  const resetFilters = () => {
    setSearch('');
    setStatus('');
    setRegion('');
    setManufacturer('');
    setLanguage('');
    setFeedback('');
    setKmRange('');
    setDateFrom('');
    setDateTo('');
    onFilterChange({
      search: '',
      status: '',
      region: '',
      manufacturer: '',
      language: '',
      feedback: '',
      kmRange: '',
      dateFrom: '',
      dateTo: '',
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(cases.map((c) => c.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleToggleSelect = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0) return;
    if (
      !window.confirm(
        `Are you sure you want to delete ${selectedIds.size} diagnostic report${
          selectedIds.size === 1 ? '' : 's'
        }? This cannot be undone.`
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      await onDeleteCases(Array.from(selectedIds));
      setSelectedIds(new Set());
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (p: Record<string, any>) => {
    const s = getSessionStatus(p);
    if (s === 'FAULT FOUND') return <Badge variant="destructive">Fault Found</Badge>;
    if (s === 'WORKING SATISFACTORY') return <Badge variant="success">Satisfactory</Badge>;
    if (s === 'CLOSED_BY_ADMIN' || s === 'CLOSED BY ADMIN') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-900 border border-purple-300">
          🟣 Closed by Admin
        </span>
      );
    }
    if (s === 'INCOMPLETE') return <Badge variant="warning">Incomplete</Badge>;
    return <Badge variant="secondary">{s}</Badge>;
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100">
        <div>
          <CardTitle>Case Explorer</CardTitle>
          <CardDescription>
            Search and manage vehicle diagnostic reports submitted by field technicians.
          </CardDescription>
        </div>

        <div className="flex items-center gap-2">
          {selectedIds.size > 0 && (
            <Button
              variant="danger"
              size="sm"
              disabled={isDeleting}
              onClick={handleDeleteSelected}
              className="text-xs"
            >
              <Trash2 className="h-3.5 w-3.5 mr-1" />
              Delete Selected ({selectedIds.size})
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="text-xs"
          >
            <Filter className="h-3.5 w-3.5 mr-1.5 text-slate-500" />
            Filters
            <ChevronDown
              className={`h-3.5 w-3.5 ml-1 transition-transform ${
                showFilters ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        {whatsAppNotice && (
          <div className="mb-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs px-3.5 py-2.5 rounded-lg flex items-center justify-between animate-in fade-in">
            <span className="font-semibold flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              {whatsAppNotice}
            </span>
            <button onClick={() => setWhatsAppNotice('')} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Case ID, Chassis No, Registration, Dealer, or Technician..."
              className="pl-9 h-9 text-xs"
            />
          </div>
          <Button type="submit" size="sm" className="h-9 px-4 text-xs font-semibold">
            Search
          </Button>
          {(search || status || region || manufacturer || language || feedback || kmRange || dateFrom || dateTo) && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="h-9 text-xs text-slate-500 hover:text-slate-800"
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1" />
              Reset
            </Button>
          )}
        </form>

        {/* Collapsible Advanced Filters */}
        {showFilters && (
          <div className="mb-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in duration-150">
            <div>
              <label className="block font-semibold text-slate-600 mb-1">Status</label>
              <Select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  triggerFilter({ status: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All statuses</option>
                <option value="FAULT FOUND">FAULT FOUND</option>
                <option value="WORKING SATISFACTORY">WORKING SATISFACTORY</option>
                <option value="CLOSED_BY_ADMIN">🟣 CLOSED BY ADMIN (VERIFIED)</option>
                <option value="INCOMPLETE">INCOMPLETE</option>
                <option value="REFERRED_FOR_REPLACEMENT">REFERRED FOR REPLACEMENT</option>
                <option value="VERIFICATION_PENDING">VERIFICATION PENDING</option>
                <option value="CLOSED">CLOSED</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">Region</label>
              <Select
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  triggerFilter({ region: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All regions</option>
                <option value="North">North (N)</option>
                <option value="East">East (E)</option>
                <option value="West">West (W)</option>
                <option value="South">South (S)</option>
                <option value="Central">Central</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">Vehicle OEM</label>
              <Select
                value={manufacturer}
                onChange={(e) => {
                  setManufacturer(e.target.value);
                  triggerFilter({ manufacturer: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All manufacturers</option>
                <option value="ASHOK LEYLAND">ASHOK LEYLAND</option>
                <option value="TATA MOTORS">TATA MOTORS</option>
                <option value="VECV">VECV</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">Diagnostic Language</label>
              <Select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  triggerFilter({ language: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All languages</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Kannada">Kannada</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">Feedback Rating</label>
              <Select
                value={feedback}
                onChange={(e) => {
                  setFeedback(e.target.value);
                  triggerFilter({ feedback: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All feedback</option>
                <option value="5">5 / 5 ★</option>
                <option value="4">4 / 5 ★</option>
                <option value="3">3 / 5 ★</option>
                <option value="2">2 / 5 ★</option>
                <option value="1">1 / 5 ★</option>
                <option value="none">Not provided</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">Odometer / KM</label>
              <Select
                value={kmRange}
                onChange={(e) => {
                  setKmRange(e.target.value);
                  triggerFilter({ kmRange: e.target.value });
                }}
                className="h-8 text-xs bg-white"
              >
                <option value="">All KM ranges</option>
                <option value="0-50000">0 – 50,000 km</option>
                <option value="50001-100000">50,001 – 100,000 km</option>
                <option value="100001-plus">100,001+ km</option>
              </Select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">From Date</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => {
                  setDateFrom(e.target.value);
                  triggerFilter({ dateFrom: e.target.value });
                }}
                className="h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">To Date</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => {
                  setDateTo(e.target.value);
                  triggerFilter({ dateTo: e.target.value });
                }}
                className="h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"
              />
            </div>
          </div>
        )}

        {/* Reports Data Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3 w-10">
                  <input
                    type="checkbox"
                    checked={cases.length > 0 && selectedIds.size === cases.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"
                  />
                </th>
                <th className="p-3">Case ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Technician</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Language</th>
                <th className="p-3">Dealer</th>
                <th className="p-3">Part Recommendation</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {loading ? (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-slate-400">
                    Loading diagnostic records...
                  </td>
                </tr>
              ) : cases.length === 0 ? (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-slate-400">
                    No matching diagnostic reports found.
                  </td>
                </tr>
              ) : (
                cases.map((item) => {
                  const p = item.payload || {};
                  const isChecked = selectedIds.has(item.id);
                  const caseId = item.case_number || p['Diagnostic Case ID'] || item.id.substring(0, 8);
                  const fseName = p['FSE Name'] || '-';
                  const vehicle = p['Vehicle Registration No.'] || p['Chassis No.'] || '-';
                  const lang = p['Diagnostic Language Name'] || p['Diagnostic Language'] || 'English';
                  const dealer = p['Dealer / Location'] || '-';
                  const part = p['Recommended Part No.'] || p['Suspected Product'] || '-';
                  const replacement = p['Replacement Status'] || 'NOT_REQUIRED';

                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-50/70 transition-colors ${
                        isChecked ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleSelect(item.id)}
                          className="h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"
                        />
                      </td>
                      <td className="p-3 font-semibold text-slate-900">{caseId}</td>
                      <td className="p-3 text-slate-500 whitespace-nowrap">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-3">{getStatusBadge(p)}</td>
                      <td className="p-3 text-slate-700 font-medium">{fseName}</td>
                      <td className="p-3 text-slate-700">
                        <div className="font-mono font-semibold text-slate-900 text-[11px]">{vehicle}</div>
                        {p['Travels Name'] && (
                          <div className="text-[10px] font-semibold text-[#0b5daa] mt-0.5 truncate max-w-[140px]" title={p['Travels Name']}>
                            {p['Travels Name']}
                          </div>
                        )}
                      </td>
                      <td className="p-3 text-slate-500">{lang}</td>
                      <td className="p-3 text-slate-600 max-w-[140px] truncate" title={dealer}>
                        {dealer}
                      </td>
                      <td className="p-3 text-slate-700">
                        <div className="font-medium truncate max-w-[160px]" title={part}>
                          {part}
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                          {replacement}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {!['CLOSED_BY_ADMIN', 'CLOSED BY ADMIN', 'WORKING SATISFACTORY'].includes(getSessionStatus(p)) && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleWhatsApp(item);
                                }}
                                title="Send WhatsApp 1-Tap Quick-Close Link"
                                className="h-7 w-7 inline-flex items-center justify-center rounded-md border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer shadow-xs"
                              >
                                <MessageSquare className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onViewCase(item.id);
                                }}
                                title="Telephonic Verification & Admin Closure"
                                className="h-7 w-7 inline-flex items-center justify-center rounded-md border border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer shadow-xs"
                              >
                                <PhoneCall className="h-3.5 w-3.5" />
                              </button>
                            </>
                          )}
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => onViewCase(item.id)}
                            className="h-7 px-2.5 text-[11px] font-semibold"
                          >
                            <ExternalLink className="h-3 w-3 mr-1 text-[#0b5daa]" />
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-xs text-slate-500">
          <div>
            Showing Page <span className="font-semibold text-slate-800">{pagination.page}</span> of{' '}
            <span className="font-semibold text-slate-800">{pagination.totalPages || 1}</span> (
            <span className="font-semibold text-slate-800">{pagination.total}</span> total reports)
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              disabled={pagination.page <= 1 || loading}
              onClick={() => onPageChange(pagination.page - 1)}
              className="h-8 px-2.5 text-xs"
            >
              <ChevronLeft className="h-3.5 w-3.5 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={pagination.page >= (pagination.totalPages || 1) || loading}
              onClick={() => onPageChange(pagination.page + 1)}
              className="h-8 px-2.5 text-xs"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


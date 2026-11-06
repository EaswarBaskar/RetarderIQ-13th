import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { DiagnosticCase } from '../services/api';
import {
  getRegion,
  getSessionStatus,
  getManufacturer,
  calculateFtrMetrics,
  getTopTechnicians,
  TopTechnicianItem,
} from '../lib/diagnosticUtils';
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  MousePointerClick,
  X,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

interface ChartsSectionProps {
  cases: DiagnosticCase[];
  activeFilters?: Record<string, string>;
  onFilterChange?: (filters: Record<string, string>) => void;
  onViewCase?: (caseId: string) => void;
}

const COLORS = [
  '#0b5daa', // primary blue
  '#10b981', // emerald green
  '#ef4444', // red
  '#f59e0b', // amber
  '#8b5cf6', // purple
  '#06b6d4', // cyan
  '#ec4899', // pink
  '#64748b', // slate
];

const STATUS_COLORS: Record<string, string> = {
  'FAULT FOUND': '#ef4444',
  'WORKING SATISFACTORY': '#10b981',
  'CLOSED_BY_ADMIN': '#8b5cf6',
  'CLOSED BY ADMIN': '#8b5cf6',
  'INCOMPLETE': '#f59e0b',
  'IN PROGRESS': '#3b82f6',
  'PAUSED': '#a855f7',
  'FORCE CLOSED / STALE': '#64748b',
};

const FEEDBACK_COLORS: Record<string, string> = {
  'No feedback submitted': '#2563eb',
  '5/5': '#06b6d4',
  '4/5': '#10b981',
  '3/5': '#f59e0b',
  '2/5': '#8b5cf6',
  '1/5': '#ef4444',
};

const LANGUAGE_COLORS: Record<string, string> = {
  English: '#2563eb',
  Tamil: '#06b6d4',
  Malayalam: '#10b981',
  Hindi: '#f59e0b',
  Telugu: '#8b5cf6',
  Kannada: '#ec4899',
};

const OEM_COLORS: Record<string, string> = {
  'ASHOK LEYLAND': '#0b5daa',
  'TATA MOTORS': '#ef4444',
  'VECV': '#f59e0b',
  'Not provided': '#64748b',
};

export const ChartsSection: React.FC<ChartsSectionProps> = ({
  cases,
  activeFilters = {},
  onFilterChange,
  onViewCase,
}) => {
  // Interactive Drill-down filter handler
  const handleFilterClick = (key: string, value: string) => {
    if (!onFilterChange) return;
    const current = (activeFilters[key] || '').toLowerCase().trim();
    const target = (value || '').toLowerCase().trim();
    const nextFilters = { ...activeFilters };

    if (current === target) {
      delete nextFilters[key];
    } else {
      nextFilters[key] = value;
    }

    onFilterChange(nextFilters);

    // Smooth scroll down to the Case Explorer data table
    setTimeout(() => {
      const el = document.getElementById('case-explorer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleClearFilters = () => {
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  const hasActiveFilters = Boolean(
    activeFilters &&
      (activeFilters.status ||
        activeFilters.search ||
        activeFilters.region ||
        activeFilters.manufacturer ||
        activeFilters.language ||
        activeFilters.feedback ||
        activeFilters.kmRange ||
        activeFilters.repeatOnly ||
        activeFilters.firstTimeOnly)
  );

  // Aggregate Case Status
  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    cases.forEach((item) => {
      const status = getSessionStatus(item.payload || {});
      counts[status] = (counts[status] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({
      name,
      value,
      color: STATUS_COLORS[name] || '#64748b',
    }));
  }, [cases]);

  // Aggregate Suspected Failure Distribution (all cases including uncompleted)
  const failureData = useMemo(() => {
    const counts: Record<string, number> = {};
    cases.forEach((item) => {
      const p = item.payload || {};
      const status = getSessionStatus(p);
      let prod = 'Not identified';
      if (status === 'FAULT FOUND') {
        prod = String(p['Suspected Product'] || p['Recommended Part No.'] || 'Other component').trim();
      } else if (p['Suspected Product']) {
        prod = String(p['Suspected Product']).trim();
      }
      counts[prod] = (counts[prod] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([name, value], i) => ({
        name: name.length > 22 ? name.substring(0, 20) + '…' : name,
        fullName: name,
        value,
        color: COLORS[i % COLORS.length],
      }));
  }, [cases]);

  // Aggregate Diagnostic Feedback Donut
  const feedbackData = useMemo(() => {
    const counts: Record<string, number> = {
      'No feedback submitted': 0,
      '5/5': 0,
      '4/5': 0,
      '3/5': 0,
      '2/5': 0,
      '1/5': 0,
    };
    cases.forEach((item) => {
      const p = item.payload || {};
      const feedback = p['Diagnostic Feedback'];
      let score: any = null;
      if (typeof feedback === 'object' && feedback !== null) {
        score = feedback.clarity ?? feedback.rating ?? feedback.score;
      } else if (feedback !== undefined && feedback !== null && String(feedback).trim() !== '') {
        score = feedback;
      }

      if (score !== null && score !== undefined && String(score).trim() !== '') {
        const key = `${String(score).replace('/5', '')}/5`;
        if (counts[key] !== undefined) {
          counts[key] += 1;
        } else {
          counts['No feedback submitted'] += 1;
        }
      } else {
        counts['No feedback submitted'] += 1;
      }
    });

    return Object.entries(counts)
      .filter(([, value]) => value > 0)
      .map(([name, value]) => ({
        name,
        value,
        color: FEEDBACK_COLORS[name] || '#64748b',
      }));
  }, [cases]);

  // Aggregate Diagnostic Language Used Donut
  const languageData = useMemo(() => {
    const counts: Record<string, number> = {};
    cases.forEach((item) => {
      const p = item.payload || {};
      const lang = String(
        p['Diagnostic Language Name'] ||
          p['Diagnostic Language'] ||
          'English'
      ).trim();
      counts[lang] = (counts[lang] || 0) + 1;
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value], i) => ({
        name,
        value,
        color: LANGUAGE_COLORS[name] || COLORS[i % COLORS.length],
      }));
  }, [cases]);

  // Aggregate Region Distribution (NEWS: North -> East -> West -> South)
  const regionData = useMemo(() => {
    const counts: Record<string, number> = {
      North: 0,
      East: 0,
      West: 0,
      South: 0,
    };
    cases.forEach((item) => {
      const reg = getRegion(item.payload || {});
      const normalizedReg = reg === 'Central' ? 'West' : reg;
      if (counts[normalizedReg] !== undefined) {
        counts[normalizedReg] += 1;
      } else {
        counts.West = (counts.West || 0) + 1;
      }
    });
    const newsOrder: Record<string, number> = {
      North: 1,
      East: 2,
      West: 3,
      South: 4,
    };
    return Object.entries(counts)
      .filter(([name, value]) => ['North', 'East', 'West', 'South'].includes(name) && value > 0)
      .sort((a, b) => {
        const orderA = newsOrder[a[0]] || 99;
        const orderB = newsOrder[b[0]] || 99;
        return orderA - orderB;
      })
      .map(([name, value], i) => ({
        name,
        value,
        color: COLORS[i % COLORS.length],
      }));
  }, [cases]);

  // Aggregate Vehicle Manufacturer (OEM)
  const manufacturerData = useMemo(() => {
    const counts: Record<string, number> = {};
    cases.forEach((item) => {
      const oem = getManufacturer(item.payload || {});
      counts[oem] = (counts[oem] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, value], i) => ({
        name,
        value,
        color: OEM_COLORS[name] || COLORS[i % COLORS.length],
      }));
  }, [cases]);

  // Aggregate Commercial Retarder Warranty (200,000 km standard policy)
  const warrantyData = useMemo(() => {
    const counts = { Warranty: 0, 'Post warranty': 0, 'Not specified': 0 };
    cases.forEach((item) => {
      const p = item.payload || {};
      const raw = p['Odometer Km'] ?? p['Kms & Date of Sale'] ?? p.Odometer ?? '';
      const match = String(raw).replace(/,/g, '').match(/\d+(?:\.\d+)?/);
      if (!match) {
        counts['Not specified'] += 1;
        return;
      }
      const km = parseFloat(match[0]);
      if (km < 200000) counts['Warranty'] += 1;
      else counts['Post warranty'] += 1;
    });
    return [
      { name: 'Under Warranty (<200k km)', target: '0-50000', value: counts['Warranty'], color: '#10b981' },
      { name: 'Post Warranty (≥200k km)', target: '100001-plus', value: counts['Post warranty'], color: '#f59e0b' },
    ].filter((d) => d.value > 0);
  }, [cases]);

  // First Time Right (FTR) & 30-Day Repeat Complaints
  const ftrMetrics = useMemo(() => calculateFtrMetrics(cases), [cases]);

  // Top 5 Technicians by Complaints Attended
  const topTechnicians = useMemo(() => getTopTechnicians(cases, 5), [cases]);

  return (
    <div className="space-y-4 mb-6">
      {/* Interactive Drill-down Filter Active Banner */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border border-blue-200 text-xs shadow-xs animate-in fade-in duration-200">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-extrabold text-[#0b5daa] flex items-center gap-1.5">
              <MousePointerClick className="h-4 w-4 text-[#0b5daa] animate-pulse" />
              Active Filter:
            </span>

            {activeFilters.status && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-[#0b5daa] font-bold border border-blue-300">
                <span>Status: {activeFilters.status}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('status', activeFilters.status || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-blue-200/60 p-0.5"
                  title="Remove status filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.search && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300">
                <span>Search / Part: {activeFilters.search}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('search', activeFilters.search || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-amber-200/60 p-0.5"
                  title="Remove search filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.region && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                <span>Region: {activeFilters.region}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('region', activeFilters.region || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-emerald-200/60 p-0.5"
                  title="Remove region filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.manufacturer && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 font-bold border border-purple-300">
                <span>OEM: {activeFilters.manufacturer}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('manufacturer', activeFilters.manufacturer || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-purple-200/60 p-0.5"
                  title="Remove manufacturer filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.language && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 font-bold border border-cyan-300">
                <span>Language: {activeFilters.language}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('language', activeFilters.language || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-cyan-200/60 p-0.5"
                  title="Remove language filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.feedback && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-bold border border-rose-300">
                <span>Rating: {activeFilters.feedback === 'none' ? 'No Feedback' : `${activeFilters.feedback}★`}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('feedback', activeFilters.feedback || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-rose-200/60 p-0.5"
                  title="Remove rating filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.kmRange && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-900 font-bold border border-teal-300">
                <span>Warranty / KM: {activeFilters.kmRange}</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('kmRange', activeFilters.kmRange || '')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-teal-200/60 p-0.5"
                  title="Remove warranty filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.repeatOnly === 'true' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-bold border border-rose-300">
                <span>🔴 Repeat Complaints (≤30 Days): {ftrMetrics.repeatCasesCount} reports</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('repeatOnly', 'true')}
                  className="hover:text-rose-600 cursor-pointer ml-0.5 rounded-full hover:bg-rose-200/60 p-0.5"
                  title="Remove repeat complaints filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {activeFilters.firstTimeOnly === 'true' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                <span>🟢 First-Time Right: {ftrMetrics.firstTimeCount} reports</span>
                <button
                  type="button"
                  onClick={() => handleFilterClick('firstTimeOnly', 'true')}
                  className="hover:text-emerald-700 cursor-pointer ml-0.5 rounded-full hover:bg-emerald-200/60 p-0.5"
                  title="Remove first-time filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleClearFilters}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b5daa] hover:text-[#084885] bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Clear All Filters
          </button>
        </div>
      )}

      {/* Primary Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Case Status Distribution Donut */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Case Status Breakdown</CardTitle>
            <CardDescription>Overall outcome of submitted diagnostic cases</CardDescription>
          </CardHeader>
          <CardContent>
            {statusData.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No case data available
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-64">
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const name = entry?.name || entry?.payload?.name;
                          if (name) handleFilterClick('status', name);
                        }}
                      >
                        {statusData.map((entry, index) => {
                          const isSelected = activeFilters?.status === entry.name;
                          return (
                            <Cell
                              key={`status-cell-${index}`}
                              fill={entry.color}
                              stroke={isSelected ? '#0f172a' : 'transparent'}
                              strokeWidth={isSelected ? 3 : 0}
                              style={{
                                filter: isSelected ? 'drop-shadow(0 0 8px rgba(0,0,0,0.45))' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-slate-800">{cases.length}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-1.5">
                  {statusData.map((item) => {
                    const isSelected = activeFilters?.status === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleFilterClick('status', item.name)}
                        className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-all cursor-pointer text-left w-full ${
                          isSelected
                            ? 'bg-blue-100/90 ring-2 ring-[#0b5daa] font-bold text-slate-900 shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                        title={`Click to filter cases by ${item.name}`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900 ml-2 shrink-0">
                          {item.value}{' '}
                          <span className="text-slate-400 font-normal">
                            ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Suspected Failure Distribution */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Suspected Failure Distribution</CardTitle>
            <CardDescription>Highest reported fault categories from field diagnostics</CardDescription>
          </CardHeader>
          <CardContent>
            {failureData.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No defect reports found in the current selection
              </div>
            ) : (
              <div className="h-64 cursor-pointer">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={failureData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={120}
                      tick={{ fontSize: 11, fill: '#475569' }}
                    />
                    <Tooltip
                      formatter={(val: any, _name: any, item: any) => [
                        `${val} reports (Click to filter)`,
                        item?.payload?.fullName,
                      ]}
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        borderColor: '#334155',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                    />
                    <Bar
                      dataKey="value"
                      radius={[0, 4, 4, 0]}
                      cursor="pointer"
                      onClick={(entry: any) => {
                        const target = entry?.fullName || entry?.payload?.fullName || entry?.name;
                        if (target) handleFilterClick('search', target);
                      }}
                    >
                      {failureData.map((entry, index) => {
                        const isSelected = activeFilters?.search === entry.fullName;
                        return (
                          <Cell
                            key={`failure-cell-${index}`}
                            fill={isSelected ? '#f59e0b' : entry.color || '#0b5daa'}
                            stroke={isSelected ? '#b45309' : 'transparent'}
                            strokeWidth={isSelected ? 2 : 0}
                            style={{
                              filter: isSelected ? 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.5))' : 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          />
                        );
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Operations & Technician Quality Row: FTR & Top 5 Technicians */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* First Time Right (FTR) & Repeat Complaints (≤30 Days) */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>First Time Right (FTR) & Repeat Complaints</CardTitle>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  <ShieldCheck className="h-3 w-3" />
                  30-Day Window
                </span>
              </div>
              <CardDescription>
                Vehicles returning for diagnosis within 30 days are tracked as Repeat Complaints
              </CardDescription>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl font-black text-teal-600 tracking-tight">{ftrMetrics.ftrRate}%</span>
              <span className="block text-[10px] uppercase font-bold text-slate-400">FTR Rate</span>
            </div>
          </CardHeader>
          <CardContent>
            {ftrMetrics.totalCases === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No diagnostic cases available
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-56">
                  {/* Donut */}
                  <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ftrMetrics.chartData}
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={3}
                          dataKey="value"
                          cursor="pointer"
                          onClick={(entry: any) => {
                            const name = String(entry?.name || entry?.payload?.name || '');
                            if (name.includes('Repeat')) {
                              handleFilterClick('repeatOnly', 'true');
                            } else {
                              handleFilterClick('firstTimeOnly', 'true');
                            }
                          }}
                        >
                          {ftrMetrics.chartData.map((entry, index) => {
                            const isRepeatEntry = entry.name.includes('Repeat');
                            const isSelected = isRepeatEntry
                              ? activeFilters.repeatOnly === 'true'
                              : activeFilters.firstTimeOnly === 'true';
                            return (
                              <Cell
                                key={`ftr-cell-${index}`}
                                fill={entry.color}
                                stroke={isSelected ? '#0f172a' : 'transparent'}
                                strokeWidth={isSelected ? 3 : 0}
                                style={{
                                  filter: isSelected ? 'drop-shadow(0 0 6px rgba(0,0,0,0.4))' : 'none',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                }}
                              />
                            );
                          })}
                        </Pie>
                        <Tooltip
                          formatter={(val: any, name: any) => [`${val} visits (Click to filter reports)`, name]}
                          contentStyle={{
                            backgroundColor: '#1e293b',
                            borderColor: '#334155',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '12px',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-xl font-black text-slate-800">{ftrMetrics.ftrRate}%</span>
                      <span className="text-[9px] uppercase font-bold text-slate-400">FTR</span>
                    </div>
                  </div>

                  {/* Summary Counts / Clickable Badges */}
                  <div className="w-full sm:w-1/2 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleFilterClick('firstTimeOnly', 'true')}
                      className={`p-2.5 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition-colors text-left ${
                        activeFilters.firstTimeOnly === 'true'
                          ? 'bg-emerald-100 border-emerald-500 ring-2 ring-emerald-500 font-bold text-slate-900 shadow-2xs'
                          : 'bg-emerald-50/70 hover:bg-emerald-100/80 border-emerald-100 text-slate-700'
                      }`}
                      title="Click to filter First-Time Right cases in table below"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-semibold text-emerald-950">First-Time Right</span>
                      </div>
                      <span className="font-extrabold text-emerald-700">
                        {ftrMetrics.firstTimeCount}{' '}
                        <span className="font-normal text-emerald-600 text-[11px]">({ftrMetrics.ftrRate}%)</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleFilterClick('repeatOnly', 'true')}
                      className={`p-2.5 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition-colors text-left ${
                        activeFilters.repeatOnly === 'true'
                          ? 'bg-rose-100 border-rose-500 ring-2 ring-rose-500 font-bold text-slate-900 shadow-2xs'
                          : 'bg-rose-50/70 hover:bg-rose-100/80 border-rose-100 text-slate-700'
                      }`}
                      title="Click to filter 5 Repeat Complaint reports in table below"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="font-semibold text-rose-950">Repeat (≤30 Days)</span>
                      </div>
                      <span className="font-extrabold text-rose-700">
                        {ftrMetrics.repeatCasesCount}{' '}
                        <span className="font-normal text-rose-600 text-[11px]">({ftrMetrics.repeatRate}%)</span>
                      </span>
                    </button>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Unique Vehicles Tracked</span>
                      <span className="font-bold text-slate-900">{ftrMetrics.uniqueVehiclesCount}</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Cases Breakdown by Dealer / Technician */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <span>Repeat Visits by Dealer & Technician (Click to open report)</span>
                    <span>{ftrMetrics.repeatCasesList.length} Flagged</span>
                  </div>
                  {ftrMetrics.repeatCasesList.length === 0 ? (
                    <div className="p-2.5 bg-emerald-50/40 rounded-lg border border-emerald-100 text-xs text-emerald-700 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Zero repeat complaints within 30 days across all field workshops!</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {ftrMetrics.repeatCasesList.map((item, idx) => (
                        <div
                          key={`rep-${idx}`}
                          onClick={() => {
                            if (item.caseNumber && onViewCase && item.caseNumber !== 'N/A') {
                              onViewCase(item.caseNumber);
                            } else {
                              handleFilterClick('search', item.vehicleReg !== 'N/A' ? item.vehicleReg : item.chassisNo);
                            }
                          }}
                          className="flex items-center justify-between p-2 rounded-md bg-slate-50 hover:bg-rose-50/70 hover:border-rose-200 transition-all text-xs border border-slate-100 cursor-pointer group"
                          title="Click to view full case details"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-700 group-hover:bg-rose-200 shrink-0">
                              REPEAT
                            </span>
                            <span className="font-bold text-slate-800 group-hover:text-rose-900">{item.vehicleReg}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-600 truncate">{item.technician}</span>
                            <span className="text-slate-400 hidden sm:inline">({item.dealer})</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <span className="text-[11px] font-semibold text-rose-600">
                              {item.daysBetween === 0 ? 'Repeat marked' : `Returned in ${item.daysBetween}d`}
                            </span>
                            <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Top 5 Technicians by Complaints Attended */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>Top 5 Technicians by Complaints</CardTitle>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  <Wrench className="h-3 w-3" />
                  Top Attended
                </span>
              </div>
              <CardDescription>
                Technicians with highest diagnostic volume and First Time Right (FTR) effectiveness
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {topTechnicians.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No technician diagnostic data available
              </div>
            ) : (
              <div className="space-y-4">
                {/* Horizontal Bar Chart */}
                <div className="h-56 cursor-pointer">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={topTechnicians}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" tick={{ fontSize: 11 }} />
                      <YAxis
                        dataKey="name"
                        type="category"
                        width={100}
                        tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as TopTechnicianItem;
                            return (
                              <div className="rounded-lg bg-slate-900 p-2.5 text-white shadow-xl text-xs border border-slate-700 space-y-1">
                                <div className="font-bold text-sm text-blue-300">{data.fullName}</div>
                                {data.dealer && <div className="text-[11px] text-slate-300">{data.dealer}</div>}
                                <div className="pt-1 border-t border-slate-700/80 flex items-center justify-between gap-4">
                                  <span className="text-slate-400">Total Cases:</span>
                                  <span className="font-bold">{data.totalComplaints}</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                  <span className="text-emerald-400">First-Time Right:</span>
                                  <span className="font-bold text-emerald-400">
                                    {data.totalComplaints - data.repeatCount}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                  <span className="text-rose-400">Repeat Visits (≤30d):</span>
                                  <span className="font-bold text-rose-400">{data.repeatCount}</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 font-bold">
                                  <span className="text-teal-300">FTR Rate:</span>
                                  <span className="text-teal-300">{data.ftrRate}%</span>
                                </div>
                                <div className="text-[10px] text-blue-200 italic pt-1 border-t border-slate-800">
                                  Click to filter cases by this technician
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar
                        dataKey="totalComplaints"
                        radius={[0, 4, 4, 0]}
                        name="Complaints"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const name = entry?.fullName || entry?.payload?.fullName || entry?.name;
                          if (name) handleFilterClick('search', name);
                        }}
                      >
                        {topTechnicians.map((entry, index) => {
                          const isSelected = activeFilters?.search === entry.fullName;
                          return (
                            <Cell
                              key={`tech-bar-${index}`}
                              fill={isSelected ? '#f59e0b' : '#0b5daa'}
                              style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                            />
                          );
                        })}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Top 5 Leaderboard Cards */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Top 5 FSE Performance Ranking (Click to filter)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {topTechnicians.map((tech) => {
                      const isSelected = activeFilters?.search === tech.fullName;
                      return (
                        <div
                          key={tech.rank}
                          onClick={() => handleFilterClick('search', tech.fullName)}
                          className={`p-2 rounded-lg border flex flex-col justify-between text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50/90 border-[#0b5daa] ring-2 ring-[#0b5daa] shadow-xs'
                              : 'bg-slate-50 border-slate-200/80 hover:border-blue-300 hover:bg-slate-100/70 hover:shadow-xs'
                          }`}
                          title={`Click to filter cases attended by ${tech.fullName}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="h-5 w-5 rounded-full bg-blue-100 text-[#0b5daa] font-black text-[10px] flex items-center justify-center shrink-0">
                              #{tech.rank}
                            </span>
                            <span
                              className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                                tech.ftrRate >= 90
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : tech.ftrRate >= 75
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-rose-100 text-rose-700'
                              }`}
                            >
                              {tech.ftrRate}% FTR
                            </span>
                          </div>
                          <div className="font-bold text-slate-900 truncate" title={tech.fullName}>
                            {tech.fullName}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate" title={tech.dealer}>
                            {tech.dealer || tech.city || 'Field FSE'}
                          </div>
                          <div className="mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">Cases</span>
                            <span className="font-extrabold text-slate-800">{tech.totalComplaints}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quality & Operations Row: Feedback Donut & Language Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Diagnostic Feedback Donut */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Diagnostic Feedback</CardTitle>
            <CardDescription>Technician survey ratings & diagnostic clarity feedback</CardDescription>
          </CardHeader>
          <CardContent>
            {feedbackData.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No feedback data available
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-64">
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={feedbackData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const name = entry?.name || entry?.payload?.name;
                          const targetVal = name.startsWith('No') ? 'none' : name.replace('/5', '');
                          handleFilterClick('feedback', targetVal);
                        }}
                      >
                        {feedbackData.map((entry, index) => {
                          const targetVal = entry.name.startsWith('No') ? 'none' : entry.name.replace('/5', '');
                          const isSelected = activeFilters?.feedback === targetVal;
                          return (
                            <Cell
                              key={`fb-cell-${index}`}
                              fill={entry.color}
                              stroke={isSelected ? '#0f172a' : 'transparent'}
                              strokeWidth={isSelected ? 3 : 0}
                              style={{
                                filter: isSelected ? 'drop-shadow(0 0 6px rgba(0,0,0,0.4))' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-slate-800">{cases.length}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-1.5">
                  {feedbackData.map((item) => {
                    const targetVal = item.name.startsWith('No') ? 'none' : item.name.replace('/5', '');
                    const isSelected = activeFilters?.feedback === targetVal;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleFilterClick('feedback', targetVal)}
                        className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-all cursor-pointer text-left w-full ${
                          isSelected
                            ? 'bg-blue-100/90 ring-2 ring-[#0b5daa] font-bold text-slate-900 shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                        title={`Click to filter cases with rating ${item.name}`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900 ml-2 shrink-0">
                          {item.value}{' '}
                          <span className="text-slate-400 font-normal">
                            ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Diagnostic Language Used Donut */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Diagnostic Language Used</CardTitle>
            <CardDescription>Session interface language selected in field</CardDescription>
          </CardHeader>
          <CardContent>
            {languageData.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No language data available
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-64">
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const name = entry?.name || entry?.payload?.name;
                          if (name) handleFilterClick('language', name);
                        }}
                      >
                        {languageData.map((entry, index) => {
                          const isSelected = activeFilters?.language?.toLowerCase() === entry.name.toLowerCase();
                          return (
                            <Cell
                              key={`lang-cell-${index}`}
                              fill={entry.color}
                              stroke={isSelected ? '#0f172a' : 'transparent'}
                              strokeWidth={isSelected ? 3 : 0}
                              style={{
                                filter: isSelected ? 'drop-shadow(0 0 6px rgba(0,0,0,0.4))' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-slate-800">{cases.length}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-1.5">
                  {languageData.map((item) => {
                    const isSelected = activeFilters?.language?.toLowerCase() === item.name.toLowerCase();
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleFilterClick('language', item.name)}
                        className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-all cursor-pointer text-left w-full ${
                          isSelected
                            ? 'bg-blue-100/90 ring-2 ring-[#0b5daa] font-bold text-slate-900 shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                        title={`Click to filter cases in ${item.name}`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900 ml-2 shrink-0">
                          {item.value}{' '}
                          <span className="text-slate-400 font-normal">
                            ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Secondary Insight Grid: Region, OEM, Warranty (Crystal clear with direct numbers & legends) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 1. Complaints by Region */}
        <Card className="transition-shadow hover:shadow-md flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Complaints by Region</CardTitle>
            <CardDescription>Zone distribution (NEWS)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-36 cursor-pointer">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData} margin={{ top: 18, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#475569', fontWeight: 600 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '11px',
                    }}
                  />
                  <Bar
                    dataKey="value"
                    radius={[4, 4, 0, 0]}
                    cursor="pointer"
                    label={{ position: 'top', fill: '#0b5daa', fontSize: 10, fontWeight: 700 }}
                    onClick={(entry: any) => {
                      const name = entry?.name || entry?.payload?.name;
                      if (name) handleFilterClick('region', name);
                    }}
                  >
                    {regionData.map((entry, index) => {
                      const isSelected = activeFilters?.region?.toLowerCase() === entry.name.toLowerCase();
                      return (
                        <Cell
                          key={`reg-cell-${index}`}
                          fill={isSelected ? '#f59e0b' : '#2563eb'}
                          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                        />
                      );
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Clickable Region Pills */}
            <div className="flex flex-wrap items-center justify-between gap-1 pt-2 border-t border-slate-100">
              {regionData.map((reg) => {
                const isSelected = activeFilters?.region?.toLowerCase() === reg.name.toLowerCase();
                return (
                  <button
                    key={reg.name}
                    type="button"
                    onClick={() => handleFilterClick('region', reg.name)}
                    className={`px-2 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-2xs font-extrabold ring-1 ring-amber-600'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    title={`Click to filter cases in ${reg.name}`}
                  >
                    {reg.name}: <span className="font-extrabold">{reg.value}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 2. OEM Vehicle Manufacturer (Clear Donut + Full Text Legend) */}
        <Card className="transition-shadow hover:shadow-md flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Vehicle Manufacturer</CardTitle>
            <CardDescription>Cases by OEM vehicle make</CardDescription>
          </CardHeader>
          <CardContent>
            {manufacturerData.length === 0 ? (
              <div className="flex h-44 items-center justify-center text-xs text-slate-400">
                No manufacturer data
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 h-44">
                {/* Donut on Left */}
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={manufacturerData}
                        innerRadius={38}
                        outerRadius={58}
                        paddingAngle={2}
                        dataKey="value"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const name = entry?.name || entry?.payload?.name;
                          if (name) handleFilterClick('manufacturer', name);
                        }}
                      >
                        {manufacturerData.map((entry, index) => {
                          const isSelected = activeFilters?.manufacturer?.toLowerCase() === entry.name.toLowerCase();
                          return (
                            <Cell
                              key={`m-${index}`}
                              fill={isSelected ? '#f59e0b' : entry.color}
                              stroke={isSelected ? '#0f172a' : 'transparent'}
                              strokeWidth={isSelected ? 3 : 0}
                              style={{
                                filter: isSelected ? 'drop-shadow(0 0 6px rgba(0,0,0,0.4))' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '11px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-lg font-bold text-slate-800">{cases.length}</span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">Total</span>
                  </div>
                </div>

                {/* Self-explanatory Legend on Right */}
                <div className="w-full sm:w-1/2 flex flex-col gap-1.5 overflow-hidden">
                  {manufacturerData.map((item) => {
                    const isSelected = activeFilters?.manufacturer?.toLowerCase() === item.name.toLowerCase();
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleFilterClick('manufacturer', item.name)}
                        className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-all cursor-pointer text-left w-full ${
                          isSelected
                            ? 'bg-blue-100/90 ring-2 ring-[#0b5daa] font-bold text-slate-900 shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700 bg-slate-50/60'
                        }`}
                        title={`Click to filter cases by ${item.name}`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate text-[11px] font-semibold">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900 ml-1.5 shrink-0 text-[11px]">
                          {item.value}{' '}
                          <span className="text-slate-400 font-normal text-[10px]">
                            ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 3. Commercial Retarder Warranty Status (Clear Donut + Full Text Legend) */}
        <Card className="transition-shadow hover:shadow-md flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Warranty Status</CardTitle>
            <CardDescription>Based on 200,000 km standard policy</CardDescription>
          </CardHeader>
          <CardContent>
            {warrantyData.length === 0 ? (
              <div className="flex h-44 items-center justify-center text-xs text-slate-400">
                No odometer data
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 h-44">
                {/* Donut on Left */}
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative cursor-pointer shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={warrantyData}
                        innerRadius={38}
                        outerRadius={58}
                        paddingAngle={2}
                        dataKey="value"
                        cursor="pointer"
                        onClick={(entry: any) => {
                          const target = entry?.target || entry?.payload?.target;
                          if (target) handleFilterClick('kmRange', target);
                        }}
                      >
                        {warrantyData.map((entry, index) => {
                          const isSelected = activeFilters?.kmRange === entry.target;
                          return (
                            <Cell
                              key={`w-${index}`}
                              fill={isSelected ? '#0b5daa' : entry.color}
                              stroke={isSelected ? '#0f172a' : 'transparent'}
                              strokeWidth={isSelected ? 3 : 0}
                              style={{
                                filter: isSelected ? 'drop-shadow(0 0 6px rgba(0,0,0,0.4))' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases (Click to filter)`, name]}
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '11px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-lg font-bold text-slate-800">{cases.length}</span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">Total</span>
                  </div>
                </div>

                {/* Self-explanatory Legend on Right */}
                <div className="w-full sm:w-1/2 flex flex-col gap-2 overflow-hidden">
                  {warrantyData.map((item) => {
                    const isSelected = activeFilters?.kmRange === item.target;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleFilterClick('kmRange', item.target)}
                        className={`flex items-center justify-between text-xs p-2 rounded-lg transition-all cursor-pointer text-left w-full ${
                          isSelected
                            ? 'bg-blue-100/90 ring-2 ring-[#0b5daa] font-bold text-slate-900 shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700 bg-slate-50/60'
                        }`}
                        title={`Click to filter cases: ${item.name}`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <div className="truncate">
                            <div className="font-semibold text-[11px] truncate">{item.name}</div>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 ml-1.5 shrink-0 text-[11px]">
                          {item.value}{' '}
                          <span className="text-slate-400 font-normal text-[10px]">
                            ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

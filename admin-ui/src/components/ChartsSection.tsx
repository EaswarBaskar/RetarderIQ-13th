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
import { ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
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

export const ChartsSection: React.FC<ChartsSectionProps> = ({ cases }) => {
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

  // Aggregate Region Distribution
  const regionData = useMemo(() => {
    const counts: Record<string, number> = {};
    cases.forEach((item) => {
      const reg = getRegion(item.payload || {});
      counts[reg] = (counts[reg] || 0) + 1;
    });
    const newsOrder: Record<string, number> = {
      North: 1,
      East: 2,
      West: 3,
      South: 4,
    };
    return Object.entries(counts)
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

  // Aggregate Vehicle Manufacturer
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
        color: COLORS[i % COLORS.length],
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
      { name: 'Warranty (<200k km)', value: counts['Warranty'], color: '#10b981' },
      { name: 'Post warranty (≥200k km)', value: counts['Post warranty'], color: '#f59e0b' },
    ].filter((d) => d.value > 0);
  }, [cases]);

  // First Time Right (FTR) & 30-Day Repeat Complaints
  const ftrMetrics = useMemo(() => calculateFtrMetrics(cases), [cases]);

  // Top 5 Technicians by Complaints Attended
  const topTechnicians = useMemo(() => getTopTechnicians(cases, 5), [cases]);

  return (
    <div className="space-y-4 mb-6">
      {/* Primary Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Case Status Distribution Donut */}
        <Card>
          <CardHeader>
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
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`status-cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases`, name]}
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

                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  {statusData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="truncate text-slate-600 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900 ml-2">
                        {item.value}{' '}
                        <span className="text-slate-400 font-normal">
                          ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Suspected Failure Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Suspected Failure Distribution</CardTitle>
            <CardDescription>Highest reported fault categories from field diagnostics</CardDescription>
          </CardHeader>
          <CardContent>
            {failureData.length === 0 ? (
              <div className="flex h-56 items-center justify-center text-xs text-slate-400">
                No defect reports found in the current selection
              </div>
            ) : (
              <div className="h-64">
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
                        `${val} reports`,
                        item.payload.fullName,
                      ]}
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        borderColor: '#334155',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="value" fill="#0b5daa" radius={[0, 4, 4, 0]} />
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
        <Card>
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
                  <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ftrMetrics.chartData}
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {ftrMetrics.chartData.map((entry, index) => (
                            <Cell key={`ftr-cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(val: any, name: any) => [`${val} visits`, name]}
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

                  {/* Summary Counts */}
                  <div className="w-full sm:w-1/2 flex flex-col gap-2.5">
                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-semibold text-emerald-950">First-Time Right</span>
                      </div>
                      <span className="font-extrabold text-emerald-700">
                        {ftrMetrics.firstTimeCount}{' '}
                        <span className="font-normal text-emerald-600 text-[11px]">({ftrMetrics.ftrRate}%)</span>
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="font-semibold text-rose-950">Repeat (≤30 Days)</span>
                      </div>
                      <span className="font-extrabold text-rose-700">
                        {ftrMetrics.repeatCasesCount}{' '}
                        <span className="font-normal text-rose-600 text-[11px]">({ftrMetrics.repeatRate}%)</span>
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Unique Vehicles Tracked</span>
                      <span className="font-bold text-slate-900">{ftrMetrics.uniqueVehiclesCount}</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Cases Breakdown by Dealer / Technician */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <span>Repeat Visits by Dealer & Technician</span>
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
                          className="flex items-center justify-between p-2 rounded-md bg-slate-50 hover:bg-slate-100/80 transition-colors text-xs border border-slate-100"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-700 shrink-0">
                              REPEAT
                            </span>
                            <span className="font-bold text-slate-800">{item.vehicleReg}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-600 truncate">{item.technician}</span>
                            <span className="text-slate-400 hidden sm:inline">({item.dealer})</span>
                          </div>
                          <span className="text-[11px] font-semibold text-rose-600 shrink-0 ml-2">
                            {item.daysBetween === 0 ? 'Repeat marked' : `Returned in ${item.daysBetween}d`}
                          </span>
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
        <Card>
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
                <div className="h-56">
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
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="totalComplaints" fill="#0b5daa" radius={[0, 4, 4, 0]} name="Complaints" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Top 5 Leaderboard Cards */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Top 5 FSE Performance Ranking
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {topTechnicians.map((tech) => (
                      <div
                        key={tech.rank}
                        className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between text-xs hover:border-blue-200 transition-colors"
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
                    ))}
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
        <Card>
          <CardHeader>
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
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={feedbackData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {feedbackData.map((entry, index) => (
                          <Cell key={`fb-cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases`, name]}
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

                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  {feedbackData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="truncate text-slate-600 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900 ml-2">
                        {item.value}{' '}
                        <span className="text-slate-400 font-normal">
                          ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Diagnostic Language Used Donut */}
        <Card>
          <CardHeader>
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
                <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageData}
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {languageData.map((entry, index) => (
                          <Cell key={`lang-cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any, name: any) => [`${val} cases`, name]}
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

                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  {languageData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="truncate text-slate-600 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900 ml-2">
                        {item.value}{' '}
                        <span className="text-slate-400 font-normal">
                          ({cases.length ? Math.round((item.value / cases.length) * 100) : 0}%)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Secondary Insight Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Complaints by Region */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Complaints by Region</CardTitle>
            <CardDescription>Zone distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '11px',
                    }}
                  />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* OEM Vehicle Manufacturer */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Vehicle Manufacturer</CardTitle>
            <CardDescription>OEM distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={manufacturerData}
                    innerRadius={30}
                    outerRadius={55}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {manufacturerData.map((entry, index) => (
                      <Cell key={`m-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '11px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Commercial Retarder Warranty Status */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Warranty Status</CardTitle>
            <CardDescription>Based on 200,000 km policy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={warrantyData}
                    innerRadius={30}
                    outerRadius={55}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {warrantyData.map((entry, index) => (
                      <Cell key={`w-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '11px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

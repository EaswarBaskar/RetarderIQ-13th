import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { DiagnosticCase } from '../services/api';
import { getRegion, getSessionStatus, getManufacturer } from '../lib/diagnosticUtils';
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
  'INCOMPLETE': '#f59e0b',
  'IN PROGRESS': '#3b82f6',
  'PAUSED': '#8b5cf6',
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
        score = feedback.rating ?? feedback.score;
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

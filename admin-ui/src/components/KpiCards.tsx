import React, { useMemo } from 'react';
import { Card } from './ui/Card';
import { DiagnosticSummary, DiagnosticCase } from '../services/api';
import { Activity, AlertTriangle, CheckCircle2, Clock, Users, ArrowRight, Timer, ShieldCheck, MousePointerClick } from 'lucide-react';
import { calculateFtrMetrics } from '../lib/diagnosticUtils';

interface KpiCardsProps {
  summary: DiagnosticSummary | null;
  cases?: DiagnosticCase[];
  activeFilters?: Record<string, string>;
  onFilterChange?: (filters: Record<string, string>) => void;
  onFilterIncomplete: () => void;
}

export const KpiCards: React.FC<KpiCardsProps> = ({
  summary,
  cases,
  activeFilters = {},
  onFilterChange,
  onFilterIncomplete,
}) => {
  const total = summary?.total ?? 0;
  const faults = summary?.faults ?? 0;
  const working = summary?.working ?? 0;
  const incomplete = summary?.incomplete ?? 0;
  const techTotal = summary?.techniciansTotal ?? 0;
  const techActive = summary?.techniciansActive ?? 0;

  const handleKpiClick = (filterKey: string, value: string) => {
    if (!onFilterChange) return;
    const current = (activeFilters[filterKey] || '').toLowerCase().trim();
    const target = (value || '').toLowerCase().trim();
    const nextFilters = { ...activeFilters };

    if (!value) {
      delete nextFilters.status;
      delete nextFilters.repeatOnly;
      delete nextFilters.firstTimeOnly;
      delete nextFilters.hasPhoto;
    } else if (current === target) {
      delete nextFilters[filterKey];
    } else {
      nextFilters[filterKey] = value;
    }

    onFilterChange(nextFilters);

    setTimeout(() => {
      const el = document.getElementById('case-explorer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Calculate total diagnostic inspection hours across all cases
  const { totalHoursText, avgMinutesText } = useMemo(() => {
    let totalMinutes = 0;
    let countedCases = 0;

    if (cases && cases.length > 0) {
      cases.forEach((c) => {
        const p = c.payload || {};
        const durStr = String(p['Diagnostic Duration'] || '').trim().toLowerCase();
        if (durStr && durStr !== '-') {
          const hrMatch = durStr.match(/([\d.]+)\s*(h|hr|hour)/);
          const minMatch = durStr.match(/([\d.]+)\s*(m|min)/);
          const secMatch = durStr.match(/([\d.]+)\s*(s|sec)/);

          let mins = 0;
          if (hrMatch) mins += parseFloat(hrMatch[1]) * 60;
          if (minMatch) mins += parseFloat(minMatch[1]);
          if (secMatch) mins += parseFloat(secMatch[1]) / 60;

          if (mins > 0) {
            totalMinutes += mins;
            countedCases++;
          }
        } else if (c.created_at && c.updated_at) {
          const diffMs = Math.max(0, new Date(c.updated_at).getTime() - new Date(c.created_at).getTime());
          const mins = diffMs / 60000;
          if (mins > 0 && mins < 720) {
            totalMinutes += mins;
            countedCases++;
          }
        }
      });
    }

    let hours = totalMinutes / 60;

    // Fallback if summary has totalHours / total_hours or averageCompletionHours
    if (hours === 0) {
      if (typeof summary?.totalHours === 'number' && summary.totalHours > 0) {
        hours = summary.totalHours;
      } else if (typeof summary?.total_hours === 'number' && summary.total_hours > 0) {
        hours = summary.total_hours;
      } else if (summary?.averageCompletionHours && summary?.total) {
        hours = Number(summary.averageCompletionHours) * summary.total;
      } else if (summary?.total) {
        hours = (summary.total * 18) / 60;
      }
    }

    const avgMins = countedCases > 0
      ? Math.round(totalMinutes / countedCases)
      : summary?.averageCompletionHours
      ? Math.round(Number(summary.averageCompletionHours) * 60)
      : 18;

    return {
      totalHoursText: hours >= 100 ? `${Math.round(hours)} hrs` : `${hours.toFixed(1)} hrs`,
      avgMinutesText: `~${avgMins}m avg`,
    };
  }, [cases, summary]);

  const ftrMetrics = useMemo(() => {
    return calculateFtrMetrics(cases || []);
  }, [cases]);

  const isFaultSelected = activeFilters.status === 'FAULT FOUND';
  const isWorkingSelected = activeFilters.status === 'WORKING SATISFACTORY';
  const isIncompleteSelected = activeFilters.status === 'INCOMPLETE';
  const isFtrSelected = activeFilters.repeatOnly === 'true';

  return (
    <div className="space-y-4 mb-6">
      {/* 6 Top KPI Cards including FTR and Total Hours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* 1. Total Cases */}
        <Card
          onClick={() => handleKpiClick('status', '')}
          className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-[#0b5daa] cursor-pointer hover:shadow-md transition-all group"
          title="Click to view all cases"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover:text-[#0b5daa] transition-colors">
              Total Cases
            </span>
            <div className="rounded-lg bg-blue-50 p-2 text-[#0b5daa] group-hover:bg-blue-100 transition-colors">
              <Activity className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900">
              {total.toLocaleString()}
            </span>
            <span className="text-[11px] font-medium text-slate-500">submitted</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Click to show all records</p>
        </Card>

        {/* 2. First Time Right (FTR) */}
        <Card
          onClick={() => handleKpiClick('repeatOnly', 'true')}
          className={`p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-teal-600 cursor-pointer hover:shadow-md transition-all group ${
            isFtrSelected ? 'ring-2 ring-teal-600 bg-teal-50/40' : ''
          }`}
          title="Click to filter repeat complaint cases"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              First Time Right (FTR)
            </span>
            <div className="rounded-lg bg-teal-50 p-2 text-teal-700 group-hover:bg-teal-100 transition-colors">
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-teal-700">
              {ftrMetrics.ftrRate}%
            </span>
            <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded">
              {ftrMetrics.repeatCasesCount === 0 ? 'Zero repeat' : `${ftrMetrics.repeatCasesCount} repeat`}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Click to filter repeat visits</p>
        </Card>

        {/* 3. Total Hours Card */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-indigo-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
              Total Hours
            </span>
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
              <Timer className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-indigo-950">
              {totalHoursText}
            </span>
            <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
              {avgMinutesText}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Total diagnostic inspection time</p>
        </Card>

        {/* 4. Fault Found */}
        <Card
          onClick={() => handleKpiClick('status', 'FAULT FOUND')}
          className={`p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-rose-500 cursor-pointer hover:shadow-md transition-all group ${
            isFaultSelected ? 'ring-2 ring-rose-500 bg-rose-50/40' : ''
          }`}
          title="Click to filter Fault Found cases"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
              Fault Found
            </span>
            <div className="rounded-lg bg-rose-50 p-2 text-rose-600 group-hover:bg-rose-100 transition-colors">
              <AlertTriangle className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-rose-600">
              {faults.toLocaleString()}
            </span>
            <span className="text-[11px] font-medium text-rose-500">
              {total > 0 ? `${Math.round((faults / total) * 100)}%` : '0%'}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Click to filter defect cases</p>
        </Card>

        {/* 5. Working Satisfactory */}
        <Card
          onClick={() => handleKpiClick('status', 'WORKING SATISFACTORY')}
          className={`p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-emerald-500 cursor-pointer hover:shadow-md transition-all group ${
            isWorkingSelected ? 'ring-2 ring-emerald-500 bg-emerald-50/40' : ''
          }`}
          title="Click to filter Satisfactory cases"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Working Satisfactory
            </span>
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-emerald-600">
              {working.toLocaleString()}
            </span>
            <span className="text-[11px] font-medium text-emerald-600">
              {total > 0 ? `${Math.round((working / total) * 100)}%` : '0%'}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Click to filter satisfactory cases</p>
        </Card>

        {/* 6. Incomplete Cases */}
        <Card
          onClick={onFilterIncomplete}
          className={`p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all group ${
            isIncompleteSelected ? 'ring-2 ring-amber-500 bg-amber-50/40' : ''
          }`}
          title="Click to filter incomplete cases"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                Incomplete Cases
              </span>
              <div className="rounded-lg bg-amber-50 p-2 text-amber-600 group-hover:bg-amber-100 transition-colors">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold tracking-tight text-amber-600">
                {incomplete.toLocaleString()}
              </span>
              <span className="text-[11px] font-medium text-amber-600">in-progress</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Technician follow-up required</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFilterIncomplete();
            }}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors group cursor-pointer"
          >
            <span>View incomplete cases</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </Card>
      </div>

      {/* Secondary Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-100/60 p-3 rounded-xl border border-slate-200/60 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <div className="font-bold text-slate-800">{techTotal}</div>
            <div className="text-[11px] text-slate-500">Registered Technicians</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-emerald-600">
            <span className="flex h-4 w-4 items-center justify-center font-bold">✓</span>
          </div>
          <div>
            <div className="font-bold text-slate-800">{techActive}</div>
            <div className="text-[11px] text-slate-500">Active Accounts</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-blue-600">
            <span className="flex h-4 w-4 items-center justify-center font-bold">●</span>
          </div>
          <div>
            <div className="font-bold text-slate-800">{summary?.open ?? 0}</div>
            <div className="text-[11px] text-slate-500">Open Escalations</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600">
            <span className="flex h-4 w-4 items-center justify-center font-bold">★</span>
          </div>
          <div>
            <div className="font-bold text-slate-800">{summary?.completed ?? 0}</div>
            <div className="text-[11px] text-slate-500">Closed Reports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

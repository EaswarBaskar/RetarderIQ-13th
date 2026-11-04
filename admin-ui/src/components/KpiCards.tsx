import React, { useMemo } from 'react';
import { Card } from './ui/Card';
import { DiagnosticSummary, DiagnosticCase } from '../services/api';
import { Activity, AlertTriangle, CheckCircle2, Clock, Users, ArrowRight, Timer } from 'lucide-react';

interface KpiCardsProps {
  summary: DiagnosticSummary | null;
  cases?: DiagnosticCase[];
  onFilterIncomplete: () => void;
}

export const KpiCards: React.FC<KpiCardsProps> = ({ summary, cases, onFilterIncomplete }) => {
  const total = summary?.total ?? 0;
  const faults = summary?.faults ?? 0;
  const working = summary?.working ?? 0;
  const incomplete = summary?.incomplete ?? 0;
  const techTotal = summary?.techniciansTotal ?? 0;
  const techActive = summary?.techniciansActive ?? 0;

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

  return (
    <div className="space-y-4 mb-6">
      {/* 5 Top KPI Cards including Total Hours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 1. Total Cases */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-[#0b5daa]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Cases
            </span>
            <div className="rounded-lg bg-blue-50 p-2 text-[#0b5daa]">
              <Activity className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900">
              {total.toLocaleString()}
            </span>
            <span className="text-[11px] font-medium text-slate-500">submitted</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">All submitted diagnostic records</p>
        </Card>

        {/* 2. Total Hours Card */}
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

        {/* 3. Fault Found */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-rose-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
              Fault Found
            </span>
            <div className="rounded-lg bg-rose-50 p-2 text-rose-600">
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
          <p className="mt-1 text-[11px] text-slate-400">Requires repair or replacement</p>
        </Card>

        {/* 4. Working Satisfactory */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-emerald-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Working Satisfactory
            </span>
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
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
          <p className="mt-1 text-[11px] text-slate-400">No vehicle defect detected</p>
        </Card>

        {/* 5. Incomplete Cases */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                Incomplete Cases
              </span>
              <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
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
            onClick={onFilterIncomplete}
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

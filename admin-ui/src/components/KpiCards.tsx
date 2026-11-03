import React from 'react';
import { Card } from './ui/Card';
import { DiagnosticSummary } from '../services/api';
import { Activity, AlertTriangle, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';

interface KpiCardsProps {
  summary: DiagnosticSummary | null;
  onFilterIncomplete: () => void;
}

export const KpiCards: React.FC<KpiCardsProps> = ({ summary, onFilterIncomplete }) => {
  const total = summary?.total ?? 0;
  const faults = summary?.faults ?? 0;
  const working = summary?.working ?? 0;
  const incomplete = summary?.incomplete ?? 0;
  const techTotal = summary?.techniciansTotal ?? 0;
  const techActive = summary?.techniciansActive ?? 0;

  return (
    <div className="space-y-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Cases */}
        <Card className="p-4 border-slate-200/90 shadow-xs relative overflow-hidden">
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

        {/* Fault Found */}
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

        {/* Working Satisfactory */}
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

        {/* Incomplete Cases */}
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
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors group"
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


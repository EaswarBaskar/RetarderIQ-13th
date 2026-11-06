import React from 'react';
import { Button } from './ui/Button';
import { Download, RefreshCw, LogOut, Calendar, Sparkles } from 'lucide-react';
import { isMockMode, setMockMode, setStoredToken } from '../services/api';

interface HeaderProps {
  onRefresh: () => void;
  onExportCsv: () => void;
  onLogout: () => void;
  refreshing: boolean;
  sseConnected: boolean;
  dateFrom: string;
  setDateFrom: (v: string) => void;
  dateTo: string;
  setDateTo: (v: string) => void;
  granularity: string;
  setGranularity: (v: string) => void;
  onApplyDateFilter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onRefresh,
  onExportCsv,
  onLogout,
  refreshing,
  sseConnected,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  granularity,
  setGranularity,
  onApplyDateFilter,
}) => {
  return (
    <header className="mb-6 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b5daa]">
              Retarder IQ · Operations
            </span>
            <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 border border-slate-200">
              <span
                className={`h-2 w-2 rounded-full ${
                  sseConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span>{sseConnected ? 'Live sync' : 'Sync standby'}</span>
            </div>
            {isMockMode() && (
              <button
                type="button"
                onClick={() => {
                  setMockMode(false);
                  setStoredToken(null);
                  window.location.reload();
                }}
                className="inline-flex items-center gap-1 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300 px-2.5 py-0.5 text-[11px] font-bold transition-colors cursor-pointer"
                title="Currently in Demo Mode. Click to exit and view live database reports."
              >
                <Sparkles className="h-3 w-3 text-amber-600" />
                Demo Mode (Click to Exit)
              </button>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
            Diagnostic Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Track field cases, technician activity, and recurring vehicle failures.
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <Button
            variant="secondary"
            size="sm"
            onClick={onExportCsv}
            className="text-xs shadow-xs"
          >
            <Download className="h-3.5 w-3.5 text-slate-500 mr-1.5" />
            Export CSV
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={onRefresh}
            disabled={refreshing}
            className="text-xs shadow-xs"
          >
            <RefreshCw
              className={`h-3.5 w-3.5 text-slate-500 mr-1.5 ${
                refreshing ? 'animate-spin' : ''
              }`}
            />
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={onLogout}
            className="text-xs shadow-xs"
          >
            <LogOut className="h-3.5 w-3.5 mr-1.5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Date filter operations overview bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[#0b5daa]" />
          <div>
            <h4 className="text-xs font-bold text-slate-800">Operations Filter</h4>
            <span className="text-[11px] text-slate-400">Filter reports &amp; analytics by date span</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">From:</span>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">To:</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">View:</span>
            <select
              value={granularity}
              onChange={(e) => setGranularity(e.target.value)}
              className="h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"
            >
              <option value="day">Daily</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
            </select>
          </div>

          <Button size="sm" variant="secondary" onClick={onApplyDateFilter} className="h-8 text-xs font-semibold">
            Apply Filter
          </Button>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { DiagnosticCase, api } from '../services/api';
import { getSessionStatus, getRegion, getManufacturer } from '../lib/diagnosticUtils';
import {
  printDiagnosticReport,
  normalizeFaults,
  normalizeHistory,
} from '../lib/diagnosticReportRenderer';
import { Printer, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

interface CaseDetailModalProps {
  caseItem: DiagnosticCase | null;
  isOpen: boolean;
  onClose: () => void;
  onCaseUpdated: () => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  caseItem,
  isOpen,
  onClose,
  onCaseUpdated,
}) => {
  const [updatingRegion, setUpdatingRegion] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  if (!caseItem) return null;

  const p = caseItem.payload || {};
  const status = getSessionStatus(p);
  const currentRegion = selectedRegion || p.Region || getRegion(p);
  const caseNumber = caseItem.case_number || p['Diagnostic Case ID'] || 'Diagnostic Case';
  const oem = getManufacturer(p);
  const dateStr = caseItem.created_at
    ? new Date(caseItem.created_at).toLocaleString()
    : new Date().toLocaleString();

  const faults = normalizeFaults(p);
  const history = normalizeHistory(p['Diagnostic Step History']);
  const stepEvidence = p['Step Evidence'] || {};
  const partOrders = Array.isArray(caseItem.part_orders) ? caseItem.part_orders : [];

  const handleRegionSave = async () => {
    if (!currentRegion) return;
    setUpdatingRegion(true);
    setSaveStatus('Saving…');
    try {
      await api.updateCaseRegion(caseItem.id, currentRegion);
      caseItem.payload.Region = currentRegion;
      setSaveStatus('Saved!');
      onCaseUpdated();
      setTimeout(() => setSaveStatus(''), 2500);
    } catch (err: any) {
      console.error('Failed to update region:', err);
      setSaveStatus(err.message || 'Error saving');
    } finally {
      setUpdatingRegion(false);
    }
  };

  const handlePrint = () => {
    printDiagnosticReport(caseItem);
  };

  const renderStatusBadge = () => {
    if (status === 'WORKING SATISFACTORY') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
          <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
          {status}
        </span>
      );
    }
    if (status === 'FAULT FOUND') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300">
          <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
        <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
        {status}
      </span>
    );
  };

  const renderField = (label: string, value: any) => (
    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</div>
      <div className="text-xs font-semibold text-slate-800 mt-0.5 break-words">
        {value || '—'}
      </div>
    </div>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        maxWidth="4xl"
      >
        <div className="space-y-5 text-slate-800">
          {/* Top Admin Action Bar: Region Editor & Print Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            {/* Region Editor */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-700 whitespace-nowrap">
                Admin Region:
              </label>
              <select
                value={currentRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="h-8 text-xs bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 px-2 focus:ring-1 focus:ring-[#0b5daa] focus:outline-none"
              >
                <option value="North">North (N)</option>
                <option value="East">East (E)</option>
                <option value="West">West (W)</option>
                <option value="South">South (S)</option>
                <option value="Central">Central</option>
                <option value="Other">Other</option>
              </select>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRegionSave}
                disabled={updatingRegion}
                className="h-8 text-xs px-2.5 font-semibold text-slate-700 bg-white"
              >
                Save
              </Button>
              {saveStatus && (
                <span className="text-xs font-semibold text-[#0b5daa] ml-1">{saveStatus}</span>
              )}
            </div>

            {/* Print / Export PDF button */}
            <Button
              variant="default"
              size="sm"
              onClick={handlePrint}
              className="h-8 text-xs font-bold bg-[#0b5daa] hover:bg-[#084885] text-white shadow-xs"
            >
              <Printer className="h-3.5 w-3.5 mr-1.5" />
              Print / Export PDF
            </Button>
          </div>

          {/* ============================================================== */}
          {/* EXACT 1-to-1 Retarder IQ Diagnostic Report Layout             */}
          {/* ============================================================== */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-5">
            {/* 1. Official Report Header */}
            <div className="relative pb-4 border-b-2 border-[#0b5daa] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h2 className="text-xl font-extrabold text-[#0b5daa] tracking-tight">
                  RETARDER IQ – Diagnostic Report
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Generated on: <span className="font-semibold text-slate-700">{dateStr}</span>
                </p>
              </div>
              <div className="self-start sm:self-auto bg-blue-50 text-[#0b5daa] border border-blue-200 px-3 py-1 rounded-lg text-xs font-extrabold tracking-wide">
                {caseNumber}
              </div>
            </div>

            {/* 2. Report Info Card (Technician & Vehicle Details) */}
            <div className="rounded-xl border-2 border-slate-200 bg-slate-50/70 p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Technician Details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100">
                    TECHNICIAN DETAILS
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {renderField('Name', p['FSE Name'])}
                    {renderField('Phone', p['Technician Phone'])}
                    {renderField('Workshop / Dealer', p['Dealer / Location'])}
                    {renderField('Location', [p.City, p.State].filter(Boolean).join(', '))}
                    {renderField('Region', currentRegion)}
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100">
                    VEHICLE DETAILS
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {renderField('Registration No.', p['Vehicle Registration No.'])}
                    {renderField('Travels / Fleet Name', p['Travels Name'])}
                    {renderField('Vehicle Manufacturer', oem)}
                    {renderField('Model', p.Model)}
                    {renderField('Odometer / Sale Date', p['Odometer Km'] ? `${Number(p['Odometer Km']).toLocaleString()} km` : p['Kms & Date of Sale'])}
                    {renderField('Chassis No.', p['Chassis No.'])}
                    {renderField('Emission Standard', p['Emission Standard'])}
                  </div>
                </div>
              </div>

              {/* Diagnostic Summary & Fault Details Box */}
              <div className="rounded-xl border border-blue-100 bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Summary */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100">
                    DIAGNOSTIC SUMMARY
                  </h3>
                  <div className="mb-2">
                    <span className="text-xs font-bold text-slate-600 mr-2">Outcome:</span>
                    {renderStatusBadge()}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {renderField('Session State', p['Session State'])}
                    {renderField(
                      'Current Step',
                      p['Diagnostic Current Step Label'] || p['Diagnostic Current Step']
                    )}
                    {renderField('Duration', p['Diagnostic Duration'] || (caseItem.created_at && p['Session Last Seen'] ? `${Math.max(1, Math.round((new Date(p['Session Last Seen']).getTime() - new Date(caseItem.created_at).getTime()) / 60000))} mins` : '—'))}
                    {renderField('Date Attended', p['Complaint Attended on'] || dateStr)}
                    {renderField('Language Used', p['Diagnostic Language Name'])}
                  </div>
                </div>

                {/* Fault Details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100">
                    FAULT DETAILS
                  </h3>
                  {!faults.length ? (
                    <div className="p-3 text-xs text-slate-500 italic bg-slate-50 rounded-lg">
                      No fault details recorded.
                    </div>
                  ) : (
                    faults.map((f, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border-l-4 border-l-rose-500 bg-rose-50/50 border border-rose-200/60 text-xs space-y-1.5"
                      >
                        {f.title && <div className="font-bold text-slate-900">{f.title}</div>}
                        <div className="text-rose-950 whitespace-pre-line leading-relaxed font-medium">
                          {f.action}
                        </div>
                        {(f.partNo || p['Recommended Part No.']) && (
                          <div className="mt-2 text-xs font-semibold text-amber-900 bg-amber-100/70 p-2 rounded border border-amber-200">
                            <strong>Recommended Part:</strong>{' '}
                            {f.brand ? `${f.brand} ` : ''}
                            {f.partNo || p['Recommended Part No.']}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* 3. Additional Diagnostic Details */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                Additional Diagnostic Details
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {renderField('Complaint Type', p['Complaint Type'])}
                {renderField('Suspected Product', p['Suspected Product'])}
                {renderField('Emission Standard', p['Emission Standard'])}
                {renderField('Under Warranty?', p['Vehicle under warranty period?'])}
                {renderField('Repeat Complaint?', p['Repeat complaint? Yes / No'])}
                {renderField('Region', currentRegion)}
              </div>
            </div>

            {/* 4. Customer Voice / Field Complaint */}
            {p['Customer Voice / Field Complaints reported'] && (
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  Technician Finding
                </h3>
                <div className="p-3.5 rounded-lg border border-amber-200 bg-amber-50 text-xs text-amber-950 leading-relaxed">
                  <strong className="block text-amber-900 mb-1">
                    Customer voice / field complaint:
                  </strong>
                  {p['Customer Voice / Field Complaints reported']}
                </div>
              </div>
            )}

            {/* Diagnostic Feedback */}
            {p['Diagnostic Feedback'] && (p['Diagnostic Feedback'].clarity || p['Diagnostic Feedback'].rating) && (
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  Diagnostic Feedback
                </h3>
                <div className="p-3.5 rounded-lg border border-amber-200 bg-amber-50/70 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-900">Diagnostic Clarity:</span>
                    <span className="text-amber-500 font-bold text-sm tracking-widest">
                      {'★'.repeat(Math.max(1, Math.min(5, Number(p['Diagnostic Feedback'].clarity || p['Diagnostic Feedback'].rating) || 0)))}
                      {'☆'.repeat(5 - Math.max(1, Math.min(5, Number(p['Diagnostic Feedback'].clarity || p['Diagnostic Feedback'].rating) || 0)))}
                    </span>
                    <span className="text-slate-600 font-semibold">
                      ({p['Diagnostic Feedback'].clarity || p['Diagnostic Feedback'].rating} / 5)
                    </span>
                  </div>
                  {p['Diagnostic Feedback'].comments && (
                    <div className="text-slate-600 italic">
                      "{p['Diagnostic Feedback'].comments}"
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 5. Failed-Step Evidence Photos */}
            {Object.keys(stepEvidence).length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  Failed-Step Evidence
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(stepEvidence).map(([stepKey, photo]: [string, any]) => (
                    <div
                      key={stepKey}
                      onClick={() => setPreviewImage({ src: photo.dataUrl, alt: stepKey })}
                      className="group cursor-pointer rounded-lg border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-md transition-all"
                    >
                      <img
                        src={photo.dataUrl}
                        alt={`Evidence for ${stepKey}`}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="p-2 text-[11px] font-bold text-slate-700 bg-white truncate">
                        {stepKey}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Step History Table */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                Step History
              </h3>
              {history.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200">
                      <tr>
                        <th className="px-3 py-2 text-center w-12">#</th>
                        <th className="px-3 py-2">Diagnostic Question</th>
                        <th className="px-3 py-2 w-24">Response</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {history.map((step, idx) => {
                        const isYes = String(step.response || '').toLowerCase() === 'yes';
                        const isNo = String(step.response || '').toLowerCase() === 'no';
                        return (
                          <tr key={idx} className="hover:bg-slate-50/80">
                            <td className="px-3 py-2 text-center text-slate-400 font-mono">
                              {String(idx + 1).padStart(2, '0')}
                            </td>
                            <td className="px-3 py-2 text-slate-800 font-medium">
                              {step.question}
                            </td>
                            <td
                              className={`px-3 py-2 font-bold ${
                                isYes
                                  ? 'text-emerald-700'
                                  : isNo
                                  ? 'text-rose-700'
                                  : 'text-slate-600'
                              }`}
                            >
                              {step.response}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-3 text-xs text-slate-400 italic bg-slate-50 rounded-lg">
                  No step-by-step history was recorded for this session.
                </div>
              )}
            </div>

            {/* 7. Part Order Requests */}
            {partOrders.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  Part Order Requests
                </h3>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200">
                      <tr>
                        <th className="px-3 py-2">Date</th>
                        <th className="px-3 py-2">Part Number</th>
                        <th className="px-3 py-2">Portal</th>
                        <th className="px-3 py-2">Technician</th>
                        <th className="px-3 py-2">Phone</th>
                        <th className="px-3 py-2">Notification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {partOrders.map((order: any, idx: number) => {
                        const op = order.payload || {};
                        return (
                          <tr key={idx} className="hover:bg-slate-50/80">
                            <td className="px-3 py-2 text-slate-500">
                              {new Date(order.createdAt).toLocaleString()}
                            </td>
                            <td className="px-3 py-2 font-bold text-slate-900">
                              {order.partNo || op.partNo || '—'}
                            </td>
                            <td className="px-3 py-2 text-slate-600">{order.portal || '—'}</td>
                            <td className="px-3 py-2 text-slate-800">
                              {op.technicianName || '—'}
                            </td>
                            <td className="px-3 py-2 text-slate-600">
                              {op.phoneNumber || '—'}
                            </td>
                            <td className="px-3 py-2 font-semibold text-emerald-700">
                              {order.whatsappStatus || 'Recorded'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Raw JSON Accordion */}
            <details className="text-xs text-slate-500 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
              <summary className="cursor-pointer font-bold hover:text-slate-800">
                View Raw Diagnostic Payload JSON
              </summary>
              <pre className="mt-2 max-h-48 overflow-y-auto rounded bg-slate-900 p-3 text-[11px] text-emerald-400 font-mono">
                {JSON.stringify(p, null, 2)}
              </pre>
            </details>
          </div>
        </div>
      </Modal>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden p-2 shadow-2xl">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
            <div className="p-2 text-center text-xs font-bold text-slate-700">
              {previewImage.alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

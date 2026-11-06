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
import {
  Printer,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  PhoneCall,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  X,
} from 'lucide-react';
import { getSuggestedResolutionPart } from '../lib/diagnosticUtils';

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

  // Admin Tele-Verification state
  const [showAdminCloseModal, setShowAdminCloseModal] = useState(false);
  const [adminOutcome, setAdminOutcome] = useState('Fault Found & Rectified');
  const [adminSuspectedPart, setAdminSuspectedPart] = useState('');
  const [adminRemarks, setAdminRemarks] = useState('');
  const [isSubmittingAdminClose, setIsSubmittingAdminClose] = useState(false);
  const [adminCloseError, setAdminCloseError] = useState('');
  const [whatsAppNotice, setWhatsAppNotice] = useState('');

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

  const handleOpenAdminCloseModal = () => {
    const suggested = getSuggestedResolutionPart(p);
    const techName = p['FSE Name'] || 'Electrician';
    setAdminSuspectedPart(suggested);
    setAdminOutcome('Fault Found & Rectified');
    setAdminRemarks(`Verified telephonically with Electrician ${techName}. ${suggested} checked/replaced, vehicle road-tested satisfactory.`);
    setAdminCloseError('');
    setShowAdminCloseModal(true);
  };

  const handleSubmitAdminClose = async () => {
    if (!adminSuspectedPart.trim()) {
      setAdminCloseError('Please enter the suspected/replaced part.');
      return;
    }
    setIsSubmittingAdminClose(true);
    setAdminCloseError('');
    try {
      await api.closeCaseByAdmin(caseItem.id, {
        outcome: adminOutcome,
        suspectedPart: adminSuspectedPart.trim(),
        remarks: adminRemarks.trim(),
      });
      caseItem.payload['Diagnostic Status'] = 'CLOSED_BY_ADMIN';
      caseItem.payload['Lifecycle Status'] = 'CLOSED';
      caseItem.payload['Session State'] = 'CLOSED_BY_ADMIN';
      caseItem.payload['Admin Resolution'] = {
        outcome: adminOutcome,
        suspectedPart: adminSuspectedPart.trim(),
        remarks: adminRemarks.trim(),
        closedAt: new Date().toISOString(),
        closedBy: 'Admin',
      };
      setShowAdminCloseModal(false);
      onCaseUpdated();
    } catch (err: any) {
      setAdminCloseError(err.message || 'Failed to close case.');
    } finally {
      setIsSubmittingAdminClose(false);
    }
  };

  const handleSendWhatsApp = () => {
    const fse = p['FSE Name'] || 'Electrician';
    const rawReg = String(p['Vehicle Registration No.'] || '').trim();
    const rawChassis = String(p['Chassis No.'] || '').trim();
    const vehicle = (rawReg && rawReg !== '-') ? rawReg : (rawChassis && rawChassis !== '-' ? rawChassis : 'vehicle');
    const cId = caseItem.case_number || p['Diagnostic Case ID'] || caseItem.id;
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
      setWhatsAppNotice('WhatsApp opened! 1-Tap link copied to clipboard.');
      setTimeout(() => setWhatsAppNotice(''), 4500);
    }
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
    if (status === 'CLOSED_BY_ADMIN' || status === 'CLOSED BY ADMIN') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-300">
          <PhoneCall className="h-3.5 w-3.5 text-purple-600" />
          CLOSED BY ADMIN (VERIFIED)
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

  const renderFormattedHtml = (content: any) => {
    if (content == null || content === '') return null;
    let str = String(content);
    if (!/<[a-z][\s\S]*>/i.test(str)) {
      str = str
        .replace(/\n/g, '<br>')
        .replace(/(Root Cause:)/gi, '<strong>$1</strong>')
        .replace(/(Corrective Action:)/gi, '<br><strong>$1</strong>');
    }
    return <span dangerouslySetInnerHTML={{ __html: str }} />;
  };

  const renderField = (label: string, value: any) => (
    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</div>
      <div className="text-xs font-semibold text-slate-800 mt-0.5 break-words">
        {value ? renderFormattedHtml(value) : '—'}
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

            {/* Quick Actions: Admin Tele-Verification & WhatsApp 1-Tap & Print */}
            <div className="flex flex-wrap items-center gap-2">
              {/* WhatsApp 1-Tap Button */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                title="Send WhatsApp 1-Tap Quick-Close Link to Technician"
                className="h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                WhatsApp 1-Tap
              </button>

              {/* Admin Close Button */}
              <button
                type="button"
                onClick={handleOpenAdminCloseModal}
                title="Mark case as resolved via telephonic verification with technician"
                className="h-8 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white px-3 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Mark Resolved by Admin
              </button>

              {/* Print / Export PDF button */}
              <Button
                variant="default"
                size="sm"
                onClick={handlePrint}
                className="h-8 text-xs font-bold bg-[#0b5daa] hover:bg-[#084885] text-white shadow-xs"
              >
                <Printer className="h-3.5 w-3.5 mr-1.5" />
                Print PDF
              </Button>
            </div>
          </div>

          {whatsAppNotice && (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs px-3.5 py-2 rounded-lg flex items-center justify-between animate-in fade-in">
              <span className="font-semibold flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                {whatsAppNotice}
              </span>
              <button onClick={() => setWhatsAppNotice('')} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

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

                  {p['Admin Resolution'] && (
                    <div className="p-3 mb-2 rounded-lg border border-purple-200 bg-purple-50 text-xs text-purple-950 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-purple-900">
                        <PhoneCall className="h-3.5 w-3.5 text-purple-600" />
                        <span>Admin Tele-Verification:</span>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-purple-200 text-purple-800 font-extrabold uppercase">
                          {p['Admin Resolution'].outcome || 'Fault Found & Rectified'}
                        </span>
                      </div>
                      <div className="text-[11px] text-purple-900">
                        <strong>Action Taken:</strong> {p['Admin Resolution'].suspectedPart || 'Inspected & rectified'}
                      </div>
                      {p['Admin Resolution'].remarks && (
                        <div className="text-[11px] text-purple-800 italic bg-white/70 p-1.5 rounded border border-purple-100">
                          "{p['Admin Resolution'].remarks}"
                        </div>
                      )}
                      <div className="text-[10px] text-purple-600">
                        Verified by {p['Admin Resolution'].closedBy || 'Admin'} · {p['Admin Resolution'].closedAt ? new Date(p['Admin Resolution'].closedAt).toLocaleString() : ''}
                      </div>
                    </div>
                  )}

                  {p['Technician Confirmation'] && (
                    <div className="p-2.5 mb-2 rounded-lg border border-emerald-200 bg-emerald-50 text-xs text-emerald-950 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="font-bold text-emerald-900">Confirmed via WhatsApp:</span>
                        <span className="font-semibold text-emerald-800">{p['Technician Confirmation'].outcome || 'Repaired & Tested OK'}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-medium">
                        {p['Technician Confirmation'].confirmedAt ? new Date(p['Technician Confirmation'].confirmedAt).toLocaleDateString() : ''}
                      </span>
                    </div>
                  )}
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
                        <div className="text-rose-950 leading-relaxed font-medium">
                          {renderFormattedHtml(f.action)}
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
                  {renderFormattedHtml(p['Customer Voice / Field Complaints reported'])}
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
                              {renderFormattedHtml(step.question)}
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
                              {renderFormattedHtml(step.response)}
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

      {/* 15-Second Admin Tele-Verification Closure Modal */}
      {showAdminCloseModal && (
        <Modal
          isOpen={showAdminCloseModal}
          onClose={() => !isSubmittingAdminClose && setShowAdminCloseModal(false)}
          maxWidth="lg"
        >
          <div className="space-y-4 text-slate-800">
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-purple-100">
              <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Telephonic Verification & Admin Closure
                </h3>
                <p className="text-xs text-slate-500">
                  Verify resolution with technician and officially close case <span className="font-bold text-purple-700">{caseNumber}</span>
                </p>
              </div>
            </div>

            {/* Quick Contact & Vehicle Info Strip */}
            <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="text-[10px] font-bold text-purple-700 uppercase">Electrician / FSE</div>
                <div className="font-bold text-slate-900 mt-0.5">{p['FSE Name'] || 'Technician'}</div>
                {p['Technician Phone'] ? (
                  <a
                    href={`tel:${p['Technician Phone']}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-800 hover:underline mt-0.5"
                  >
                    <PhoneCall className="h-3 w-3" />
                    {p['Technician Phone']}
                  </a>
                ) : (
                  <span className="text-slate-400 text-[11px]">No phone listed</span>
                )}
              </div>
              <div>
                <div className="text-[10px] font-bold text-purple-700 uppercase">Vehicle / Reg No.</div>
                <div className="font-bold text-slate-900 font-mono mt-0.5">
                  {(p['Vehicle Registration No.'] && p['Vehicle Registration No.'] !== '-') ? p['Vehicle Registration No.'] : (p['Chassis No.'] || 'Vehicle')}
                </div>
                <div className="text-[11px] text-slate-600 truncate mt-0.5">
                  {p['Dealer / Location'] || p.City || 'Depot Workshop'}
                </div>
              </div>
            </div>

            {/* Outcome Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Resolution Outcome
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'Fault Found & Rectified', label: 'Fault Found & Rectified', icon: '🔧' },
                  { id: 'Working Satisfactory', label: 'Working Satisfactory', icon: '✅' },
                  { id: 'Customer/Operator Error', label: 'Customer/Op Error', icon: 'ℹ️' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setAdminOutcome(opt.id);
                      setAdminRemarks(`Verified telephonically with Electrician ${p['FSE Name'] || 'technician'}. Outcome: ${opt.id}. ${adminSuspectedPart} checked, vehicle road-tested satisfactory.`);
                    }}
                    className={`p-2.5 rounded-lg border text-left text-xs font-bold transition-all cursor-pointer ${
                      adminOutcome === opt.id
                        ? 'border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-600/20'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-base mb-0.5">{opt.icon}</div>
                    <div>{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Suspected Part / Action Taken */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                Action Taken / Suspected Part <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={adminSuspectedPart}
                onChange={(e) => setAdminSuspectedPart(e.target.value)}
                placeholder="e.g. Wiring Harness / 10A Fuse / Retarder Coil"
                className="w-full h-9 px-3 rounded-lg border border-slate-300 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Auto-suggested from the diagnostic step reached by the electrician. You can edit this.
              </p>
            </div>

            {/* Admin Remarks */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                Admin Telephonic Remarks <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={adminRemarks}
                onChange={(e) => setAdminRemarks(e.target.value)}
                placeholder="Enter summary of phone call with technician..."
                className="w-full p-2.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none leading-relaxed"
              />
            </div>

            {adminCloseError && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {adminCloseError}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdminCloseModal(false)}
                disabled={isSubmittingAdminClose}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleSubmitAdminClose}
                disabled={isSubmittingAdminClose}
                className="text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1.5 shadow-sm"
              >
                {isSubmittingAdminClose ? (
                  <>Saving Verification...</>
                ) : (
                  <>
                    <PhoneCall className="h-3.5 w-3.5" />
                    Confirm & Close Case
                  </>
                )}
              </Button>
            </div>
          </div>
        </Modal>
      )}

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

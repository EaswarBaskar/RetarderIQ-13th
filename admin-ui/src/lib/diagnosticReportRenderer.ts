import { DiagnosticCase } from '../services/api';
import { getRegion, getSessionStatus, getManufacturer } from './diagnosticUtils';

export function escapeHtml(value: any): string {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case "'": return '&#39;';
      case '"': return '&quot;';
      default: return char;
    }
  });
}

export function cleanText(value: any): string {
  return String(value || '-')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .trim();
}

export interface FaultItem {
  title?: string;
  action?: string;
  partNo?: string;
  brand?: string;
  referenceParts?: Array<{ brand: string; number: string }>;
}

export function normalizeFaults(payload: Record<string, any>): FaultItem[] {
  if (Array.isArray(payload?.['Diagnostic Fault Details']) && payload['Diagnostic Fault Details'].length) {
    return payload['Diagnostic Fault Details'];
  }
  if (payload?.['Diagnostic Status'] === 'WORKING SATISFACTORY') {
    return [{ action: 'Retarder is working satisfactorily.' }];
  }
  const complaint = cleanText(payload?.['Customer Voice / Field Complaints reported']);
  if (complaint && complaint !== '-') {
    return complaint
      .split(/(?=Root Cause:)/i)
      .map((action) => ({ action: action.trim() }))
      .filter((entry) => entry.action && entry.action !== '-');
  }
  return [];
}

export interface StepHistoryItem {
  key?: string;
  question?: string;
  response?: string;
  evidence?: { dataUrl?: string };
}

export function normalizeHistory(rawHistory: any): StepHistoryItem[] {
  if (!Array.isArray(rawHistory)) return [];
  return rawHistory.map((entry, idx) => ({
    key: entry.key || `step_${idx + 1}`,
    question: cleanText(entry.question || entry.key || entry.title || `Diagnostic Step ${idx + 1}`),
    response: entry.response || entry.result || '-',
    evidence: entry.evidence,
  }));
}

/**
 * Generate 1-to-1 exact HTML for Retarder IQ Diagnostic Report
 */
export function generateDiagnosticReportHtml(item: DiagnosticCase): string {
  const p = item.payload || {};
  const caseNumber = item.case_number || p['Diagnostic Case ID'] || 'Diagnostic Case';
  const status = getSessionStatus(p);
  const statusClass =
    status === 'WORKING SATISFACTORY'
      ? 'status-ok'
      : status === 'FAULT FOUND'
      ? 'status-fault'
      : 'status-incomplete';

  const dateStr = item.created_at ? new Date(item.created_at).toLocaleString() : new Date().toLocaleString();
  const region = p.Region || getRegion(p);
  const oem = getManufacturer(p);

  const faults = normalizeFaults(p);
  const history = normalizeHistory(p['Diagnostic Step History']);
  const stepEvidence = p['Step Evidence'] || {};
  const partOrders = Array.isArray(item.part_orders) ? item.part_orders : [];

  const field = (label: string, value: any) => `
    <div class="detail-item">
      <small>${escapeHtml(label)}</small>
      <strong>${escapeHtml(value || '—')}</strong>
    </div>
  `;

  // Fault details HTML
  let faultDetailsHtml = '';
  if (!faults.length) {
    faultDetailsHtml = '<div class="fault-text">No fault details recorded.</div>';
  } else {
    faultDetailsHtml = faults
      .map((entry) => {
        const title = entry.title ? `<strong>${escapeHtml(entry.title)}</strong><br>` : '';
        const actionHtml = escapeHtml(cleanText(entry.action || entry.title || '-'))
          .replace(/(Root Cause:)/gi, '<strong style="color:#b91c1c;">$1</strong>')
          .replace(/(Corrective Action:)/gi, '<strong style="color:#1e3a8a;">$1</strong>');
        const part = entry.partNo || p['Recommended Part No.'];
        const partHtml =
          part && part !== '-' && part !== 'None'
            ? `<p class="recommendation"><strong>Recommended Part:</strong> ${escapeHtml(
                entry.brand ? `${entry.brand} ${part}` : part
              )}</p>`
            : '';
        return `
          <div class="fault-entry">
            <div class="fault-text">${title}${actionHtml}</div>
            ${partHtml}
          </div>
        `;
      })
      .join('');
  }

  // Evidence Photos HTML
  let evidenceHtml = '';
  const evidenceEntries = Object.entries(stepEvidence);
  if (evidenceEntries.length > 0) {
    evidenceHtml = `
      <div class="detail-section">
        <h3>Failed-Step Evidence</h3>
        <div class="evidence-grid">
          ${evidenceEntries
            .map(
              ([stepKey, photo]: [string, any]) => `
              <figure class="evidence-card">
                <img src="${escapeHtml(photo.dataUrl || '')}" alt="Evidence for ${escapeHtml(stepKey)}" />
                <figcaption>${escapeHtml(stepKey)}</figcaption>
              </figure>
            `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  // Step History Table Rows HTML
  let historyRowsHtml = '';
  if (history.length > 0) {
    historyRowsHtml = history
      .map((step, idx) => {
        const resp = String(step.response || '-');
        const isYes = resp.toLowerCase() === 'yes';
        const isNo = resp.toLowerCase() === 'no';
        const respClass = isYes ? 'resp-yes' : isNo ? 'resp-no' : '';
        return `
          <tr>
            <td style="text-align:center; font-weight:bold; color:#64748b;">${String(idx + 1).padStart(2, '0')}</td>
            <td>${escapeHtml(step.question)}</td>
            <td class="${respClass}">${escapeHtml(resp)}</td>
          </tr>
        `;
      })
      .join('');
  }

  // Part Orders Rows HTML
  let partOrdersHtml = '';
  if (partOrders.length > 0) {
    partOrdersHtml = `
      <div class="detail-section">
        <h3>Part Order Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Part Number</th>
              <th>Portal</th>
              <th>Technician</th>
              <th>Phone</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
            ${partOrders
              .map((order: any) => {
                const op = order.payload || {};
                return `
                  <tr>
                    <td>${escapeHtml(new Date(order.createdAt).toLocaleString())}</td>
                    <td><strong>${escapeHtml(order.partNo || op.partNo || '-')}</strong></td>
                    <td>${escapeHtml(order.portal || '-')}</td>
                    <td>${escapeHtml(op.technicianName || '-')}</td>
                    <td>${escapeHtml(op.phoneNumber || '-')}</td>
                    <td>${escapeHtml(order.whatsappStatus || 'Recorded')}</td>
                  </tr>
                `;
              })
              .join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(caseNumber)} - Retarder IQ Diagnostic Report</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 14mm;
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #172033;
      background: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 1.45;
      font-size: 13px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .report-container {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }
    /* Header */
    .report-header {
      position: relative;
      padding: 0 0 16px;
      border-bottom: 3px solid #0b5daa;
      margin-bottom: 20px;
    }
    .report-header h2 {
      margin: 0;
      color: #0b5daa;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.3px;
    }
    .report-header p {
      margin: 6px 0 0;
      color: #64748b;
      font-size: 12px;
    }
    .report-case {
      position: absolute;
      right: 0;
      top: 4px;
      color: #0b5daa;
      font-size: 13px;
      font-weight: 800;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 3px 10px;
      border-radius: 6px;
    }
    /* Info Card */
    .report-info-card {
      padding: 20px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      background: #f8fafc;
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .report-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .report-columns h3, .report-summary h3 {
      margin: 0 0 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #dbeafe;
      color: #0b5daa;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .report-summary {
      margin-top: 18px;
      padding: 16px;
      border: 1px solid #dbeafe;
      border-radius: 10px;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      page-break-inside: avoid;
    }
    .outcome-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 800;
      font-size: 12px;
      text-transform: uppercase;
    }
    .status-ok {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
    }
    .status-fault {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
    }
    .status-incomplete {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fcd34d;
    }
    .fault-entry {
      margin-bottom: 10px;
    }
    .fault-text {
      border-left: 4px solid #ef4444;
      padding-left: 12px;
      color: #991b1b;
      font-size: 12px;
      line-height: 1.5;
    }
    .recommendation {
      color: #7c2d12;
      font-size: 12px;
      margin: 8px 0 0;
      background: #fff7ed;
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid #ffedd5;
    }
    /* Section & Grids */
    .detail-section {
      margin-top: 18px;
      page-break-inside: avoid;
    }
    .detail-section h3 {
      font-size: 12px;
      text-transform: uppercase;
      color: #475569;
      margin: 0 0 10px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .detail-item {
      padding: 10px 12px;
      border: 1px solid #dbe4ef;
      border-radius: 8px;
      background: #ffffff;
    }
    .detail-item small {
      display: block;
      color: #64748b;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .detail-item strong {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #1e293b;
      overflow-wrap: anywhere;
    }
    .detail-callout {
      padding: 12px 14px;
      background: #fff7ed;
      border: 1px solid #fed7aa;
      border-radius: 8px;
      font-size: 12px;
      line-height: 1.5;
      color: #7c2d12;
    }
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      margin-top: 8px;
      page-break-inside: auto;
    }
    tr {
      page-break-inside: avoid;
    }
    th, td {
      padding: 8px 12px;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
    }
    th {
      background: #f1f5f9;
      color: #475569;
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
    }
    .resp-yes {
      color: #166534;
      font-weight: 700;
    }
    .resp-no {
      color: #dc2626;
      font-weight: 700;
    }
    /* Evidence */
    .evidence-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .evidence-card {
      margin: 0;
      border: 1px solid #dbe4ef;
      border-radius: 8px;
      overflow: hidden;
      background: #ffffff;
    }
    .evidence-card img {
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
      display: block;
    }
    .evidence-card figcaption {
      padding: 6px 10px;
      font-size: 11px;
      font-weight: 700;
      color: #334155;
    }
    .report-footer {
      margin-top: 30px;
      padding-top: 14px;
      border-top: 1px dashed #cbd5e1;
      text-align: center;
      color: #94a3b8;
      font-size: 11px;
    }
  </style>
</head>
<body>
  <div class="report-container">
    <!-- Header -->
    <div class="report-header">
      <h2>RETARDER IQ – Diagnostic Report</h2>
      <p>Generated on: ${escapeHtml(dateStr)}</p>
      <span class="report-case">${escapeHtml(caseNumber)}</span>
    </div>

    <!-- Technician & Vehicle Information -->
    <div class="report-info-card">
      <div class="report-columns">
        <div>
          <h3>TECHNICIAN DETAILS</h3>
          ${field('Name', p['FSE Name'])}
          ${field('Phone', p['Technician Phone'])}
          ${field('Workshop / Dealer', p['Dealer / Location'])}
          ${field('Location', [p.City, p.State].filter(Boolean).join(', '))}
          ${field('Region', region)}
        </div>
        <div>
          <h3>VEHICLE DETAILS</h3>
          ${field('Registration No.', p['Vehicle Registration No.'])}
          ${field('Vehicle Manufacturer', oem)}
          ${field('Model', p.Model)}
          ${field('Odometer / Sale Date', p['Odometer Km'] || p['Kms & Date of Sale'])}
          ${field('Chassis No.', p['Chassis No.'])}
          ${field('Emission Standard', p['Emission Standard'])}
        </div>
      </div>

      <!-- Diagnostic Summary & Fault Details -->
      <div class="report-summary">
        <div>
          <h3>DIAGNOSTIC SUMMARY</h3>
          <p style="margin: 0 0 10px;">
            <strong style="margin-right: 6px;">Outcome:</strong>
            <span class="outcome-pill ${statusClass}">${escapeHtml(status)}</span>
          </p>
          ${field('Session State', p['Session State'])}
          ${field('Current Step', p['Diagnostic Current Step Label'] || p['Diagnostic Current Step'])}
          ${field('Duration', p['Diagnostic Duration'])}
          ${field('Date Attended', p['Complaint Attended on'] || dateStr)}
          ${field('Language Used', p['Diagnostic Language Name'])}
        </div>
        <div>
          <h3>FAULT DETAILS</h3>
          ${faultDetailsHtml}
        </div>
      </div>
    </div>

    <!-- Additional Diagnostic Details -->
    <div class="detail-section">
      <h3>Additional Diagnostic Details</h3>
      <div class="detail-grid">
        ${field('Complaint Type', p['Complaint Type'])}
        ${field('Suspected Product', p['Suspected Product'])}
        ${field('Emission Standard', p['Emission Standard'])}
        ${field('Under Warranty?', p['Vehicle under warranty period?'])}
        ${field('Repeat Complaint?', p['Repeat complaint? Yes / No'])}
        ${field('Region', region)}
      </div>
    </div>

    <!-- Customer Voice / Field Complaint -->
    ${
      p['Customer Voice / Field Complaints reported']
        ? `
      <div class="detail-section">
        <h3>Technician Finding</h3>
        <div class="detail-callout">
          <strong>Customer voice / field complaint:</strong> ${escapeHtml(
            p['Customer Voice / Field Complaints reported']
          )}
        </div>
      </div>
    `
        : ''
    }

    <!-- Failed-step Evidence Photos -->
    ${evidenceHtml}

    <!-- Step History Table -->
    <div class="detail-section">
      <h3>Step History</h3>
      ${
        history.length > 0
          ? `
        <table>
          <thead>
            <tr>
              <th style="width: 45px; text-align: center;">#</th>
              <th>Diagnostic Question</th>
              <th style="width: 90px;">Response</th>
            </tr>
          </thead>
          <tbody>
            ${historyRowsHtml}
          </tbody>
        </table>
      `
          : '<p style="color: #94a3b8; font-style: italic; margin-top: 6px;">No step-by-step history was recorded for this session.</p>'
      }
    </div>

    <!-- Part Orders -->
    ${partOrdersHtml}

    <!-- Footer -->
    <div class="report-footer">
      Generated by Retarder IQ Field Diagnostic System · Brakes India Private Limited
    </div>
  </div>
</body>
</html>`;
}

/**
 * Print the diagnostic report via an isolated hidden iframe.
 * Guarantees zero repeated content, zero background UI leakage, and 100% 1-to-1 fidelity.
 */
export function printDiagnosticReport(item: DiagnosticCase): void {
  const html = generateDiagnosticReportHtml(item);

  let iframe = document.getElementById('riq-report-print-frame') as HTMLIFrameElement | null;
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'riq-report-print-frame';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';
    document.body.appendChild(iframe);
  }

  const iframeDoc = iframe.contentWindow?.document;
  if (!iframeDoc) {
    // Fallback: open print window if iframe document inaccessible
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 350);
    }
    return;
  }

  iframeDoc.open();
  iframeDoc.write(html);
  iframeDoc.close();

  // Give fonts and layout 250ms to render inside the iframe before opening the print dialog
  setTimeout(() => {
    try {
      iframe?.contentWindow?.focus();
      iframe?.contentWindow?.print();
    } catch (err) {
      console.error('Failed to trigger iframe print, opening window fallback:', err);
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
      }
    }
  }, 250);
}


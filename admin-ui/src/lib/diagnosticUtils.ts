export const stateRegionMap: Record<string, string> = {
  'Tamil Nadu': 'South',
  Kerala: 'South',
  Karnataka: 'South',
  'Andhra Pradesh': 'South',
  Telangana: 'South',
  Puducherry: 'South',
  Maharashtra: 'West',
  Gujarat: 'West',
  Goa: 'West',
  Rajasthan: 'West',
  'Delhi NCR': 'North',
  Delhi: 'North',
  Haryana: 'North',
  Punjab: 'North',
  'Uttar Pradesh': 'North',
  Uttarakhand: 'North',
  'Himachal Pradesh': 'North',
  'Jammu and Kashmir': 'North',
  'West Bengal': 'East',
  Bihar: 'East',
  Jharkhand: 'East',
  Odisha: 'East',
  Assam: 'East',
  'Madhya Pradesh': 'Central',
  Chhattisgarh: 'Central',
};

export function getRegion(payload: Record<string, any>): string {
  const explicit = String(payload?.Region || '').trim();
  if (explicit) return explicit;
  const state = String(payload?.State || '').trim();
  return stateRegionMap[state] || 'Other';
}

export function getSessionStatus(payload: Record<string, any>): string {
  const outcome = payload?.['Diagnostic Status'] || 'INCOMPLETE';
  if (['FAULT FOUND', 'WORKING SATISFACTORY', 'CLOSED_BY_ADMIN', 'CLOSED BY ADMIN'].includes(outcome)) return outcome;
  if (payload?.['Admin Resolution'] || payload?.['Closed By'] === 'ADMIN') return 'CLOSED_BY_ADMIN';
  const state = String(payload?.['Session State'] || '').toUpperCase();
  const lastSeen = Date.parse(payload?.['Session Last Seen'] || '');
  if (state === 'PAUSED') return 'PAUSED';
  if (state === 'RESUMED' || state === 'ACTIVE') {
    if (lastSeen && Date.now() - lastSeen > 90000) return 'FORCE CLOSED / STALE';
    return 'IN PROGRESS';
  }
  return outcome;
}

/**
 * Extracts or guesses the most probable suspected part/component or action
 * from the session payload to pre-fill the Admin Closure modal.
 */
export function getSuggestedResolutionPart(payload: Record<string, any>): string {
  if (!payload) return 'Wiring Harness / Fuse / Retarder Coil';
  const faults = payload['Diagnostic Fault Details'];
  if (Array.isArray(faults) && faults.length > 0 && faults[0]?.title) {
    return faults[0].title;
  }
  if (payload['Recommended Part No.']) {
    return `Recommended Part: ${payload['Recommended Part No.']}`;
  }
  const suspected = String(payload['Suspected Product'] || '').trim();
  if (suspected && !['INSPECTION IN PROGRESS', 'TBD', 'NOT IDENTIFIED', '-'].includes(suspected.toUpperCase())) {
    return suspected;
  }
  const stepLabel = String(payload['Diagnostic Current Step Label'] || payload['Diagnostic Current Step'] || '').trim();
  if (stepLabel && stepLabel !== '-') {
    return stepLabel;
  }
  const history = payload['Diagnostic Step History'];
  if (Array.isArray(history) && history.length > 0) {
    const last = history[history.length - 1];
    if (last?.question) return last.question;
  }
  return 'Wiring Harness / Fuse / Retarder Coil';
}

export function getManufacturer(payload: Record<string, any>): string {
  const explicit = String(payload?.['Vehicle Manufacturer'] || payload?.Customer || '').trim();
  const model = String(payload?.Model || '').toUpperCase();
  if (explicit && !['-', 'UNKNOWN', 'N/A'].includes(explicit.toUpperCase())) {
    return explicit;
  }
  if (model.includes('TML')) return 'TATA MOTORS';
  if (model.includes('ASHOK')) return 'ASHOK LEYLAND';
  if (model.includes('VECV')) return 'VECV';
  return 'Not provided';
}

export interface FtrMetrics {
  totalCases: number;
  repeatCasesCount: number;
  firstTimeCount: number;
  ftrRate: number;
  repeatRate: number;
  uniqueVehiclesCount: number;
  chartData: Array<{ name: string; value: number; color: string }>;
  dealerRepeats: Array<{ name: string; repeatCount: number; totalCount: number; ftrRate: number }>;
  techRepeats: Array<{ name: string; repeatCount: number; totalCount: number; ftrRate: number }>;
  repeatCasesList: Array<{
    caseNumber: string;
    vehicleReg: string;
    chassisNo: string;
    technician: string;
    dealer: string;
    daysBetween: number;
    date: string;
    fault: string;
  }>;
}

export interface TopTechnicianItem {
  rank: number;
  name: string;
  fullName: string;
  phone: string;
  dealer: string;
  city: string;
  totalComplaints: number;
  workingCount: number;
  faultCount: number;
  repeatCount: number;
  ftrRate: number;
}

export function normalizeVehicleId(val: any): string {
  if (!val) return '';
  const cleaned = String(val).toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (['NA', 'UNKNOWN', 'NONE', 'TEST', 'DEMO', '0000', '1234', ''].includes(cleaned)) return '';
  return cleaned.length >= 4 ? cleaned : '';
}

/**
 * Calculates First Time Right (FTR) and 30-Day Repeat Complaint metrics.
 * If a vehicle (matched by Reg or Chassis) visits again within 30 days,
 * the subsequent visit is flagged as a Repeat Complaint.
 */
export function calculateFtrMetrics(cases: any[]): FtrMetrics {
  if (!cases || cases.length === 0) {
    return {
      totalCases: 0,
      repeatCasesCount: 0,
      firstTimeCount: 0,
      ftrRate: 100,
      repeatRate: 0,
      uniqueVehiclesCount: 0,
      chartData: [{ name: 'First-Time Right (FTR)', value: 0, color: '#10b981' }],
      dealerRepeats: [],
      techRepeats: [],
      repeatCasesList: [],
    };
  }

  const vehicleCasesMap: Record<string, any[]> = {};
  const dealerStats: Record<string, { repeat: number; total: number }> = {};
  const techStats: Record<string, { repeat: number; total: number }> = {};
  const repeatCaseIds = new Set<string>();
  const repeatCasesList: any[] = [];

  // Sort chronologically ascending
  const sortedCases = [...cases].sort((a, b) => {
    const da = new Date(a.created_at || a.payload?.['Complaint Attended on'] || 0).getTime();
    const db = new Date(b.created_at || b.payload?.['Complaint Attended on'] || 0).getTime();
    return da - db;
  });

  sortedCases.forEach((c) => {
    const p = c.payload || {};
    const reg = normalizeVehicleId(p['Vehicle Registration No.'] || p['Vehicle Registration']);
    const chassis = normalizeVehicleId(p['Chassis No.'] || p['Chassis']);
    const vKey = reg || chassis;

    const dealer = String(p['Dealer / Location'] || p['Dealer'] || 'Unspecified Dealer').trim();
    const tech = String(p['FSE Name'] || p['Technician Name'] || p['Technician Phone'] || 'Unassigned FSE').trim();

    if (!dealerStats[dealer]) dealerStats[dealer] = { repeat: 0, total: 0 };
    dealerStats[dealer].total += 1;

    if (!techStats[tech]) techStats[tech] = { repeat: 0, total: 0 };
    techStats[tech].total += 1;

    if (!vKey) {
      if (String(p['Repeat complaint? Yes / No'] || '').toLowerCase() === 'yes') {
        const id = c.id || c.case_number;
        repeatCaseIds.add(id);
        dealerStats[dealer].repeat += 1;
        techStats[tech].repeat += 1;
        repeatCasesList.push({
          caseNumber: c.case_number || c.id || 'N/A',
          vehicleReg: p['Vehicle Registration No.'] || 'N/A',
          chassisNo: p['Chassis No.'] || 'N/A',
          technician: tech,
          dealer,
          daysBetween: 0,
          date: c.created_at || p['Complaint Attended on'] || '',
          fault: p['Suspected Product'] || p['Complaint Type'] || 'General complaint',
        });
      }
      return;
    }

    if (!vehicleCasesMap[vKey]) {
      vehicleCasesMap[vKey] = [];
    }
    vehicleCasesMap[vKey].push(c);
  });

  // Check 30-day window per vehicle
  Object.entries(vehicleCasesMap).forEach(([_vKey, vCases]) => {
    for (let i = 1; i < vCases.length; i++) {
      const prevCase = vCases[i - 1];
      const currCase = vCases[i];
      const prevDate = new Date(prevCase.created_at || prevCase.payload?.['Complaint Attended on'] || 0).getTime();
      const currDate = new Date(currCase.created_at || currCase.payload?.['Complaint Attended on'] || 0).getTime();

      const diffDays = Math.max(0, Math.round((currDate - prevDate) / (1000 * 60 * 60 * 24)));
      const isExplicitRepeat = String(currCase.payload?.['Repeat complaint? Yes / No'] || '').toLowerCase() === 'yes';

      if (diffDays <= 30 || isExplicitRepeat) {
        const id = currCase.id || currCase.case_number;
        if (!repeatCaseIds.has(id)) {
          repeatCaseIds.add(id);
          const p = currCase.payload || {};
          const dealer = String(p['Dealer / Location'] || p['Dealer'] || 'Unspecified Dealer').trim();
          const tech = String(p['FSE Name'] || p['Technician Name'] || p['Technician Phone'] || 'Unassigned FSE').trim();

          dealerStats[dealer].repeat = (dealerStats[dealer].repeat || 0) + 1;
          techStats[tech].repeat = (techStats[tech].repeat || 0) + 1;

          repeatCasesList.push({
            caseNumber: currCase.case_number || currCase.id || 'N/A',
            vehicleReg: p['Vehicle Registration No.'] || 'N/A',
            chassisNo: p['Chassis No.'] || 'N/A',
            technician: tech,
            dealer,
            daysBetween: diffDays,
            date: currCase.created_at || p['Complaint Attended on'] || '',
            fault: p['Suspected Product'] || p['Complaint Type'] || 'Repeat complaint',
          });
        }
      }
    }
  });

  const totalCases = cases.length;
  const repeatCasesCount = repeatCaseIds.size;
  const firstTimeCount = Math.max(0, totalCases - repeatCasesCount);
  const ftrRate = totalCases > 0 ? Math.round((firstTimeCount / totalCases) * 1000) / 10 : 100;
  const repeatRate = Math.round((100 - ftrRate) * 10) / 10;
  const uniqueVehiclesCount = Object.keys(vehicleCasesMap).length;

  const chartData = [
    { name: 'First-Time Right (FTR)', value: firstTimeCount, color: '#10b981' },
    { name: 'Repeat Visits (≤30 Days)', value: repeatCasesCount, color: '#ef4444' },
  ].filter((d) => d.value > 0);

  const dealerRepeats = Object.entries(dealerStats)
    .filter(([, s]) => s.total > 0)
    .map(([name, s]) => ({
      name,
      repeatCount: s.repeat,
      totalCount: s.total,
      ftrRate: Math.round(((s.total - s.repeat) / s.total) * 100),
    }))
    .sort((a, b) => b.repeatCount - a.repeatCount || b.totalCount - a.totalCount);

  const techRepeats = Object.entries(techStats)
    .filter(([, s]) => s.total > 0)
    .map(([name, s]) => ({
      name,
      repeatCount: s.repeat,
      totalCount: s.total,
      ftrRate: Math.round(((s.total - s.repeat) / s.total) * 100),
    }))
    .sort((a, b) => b.repeatCount - a.repeatCount || b.totalCount - a.totalCount);

  return {
    totalCases,
    repeatCasesCount,
    firstTimeCount,
    ftrRate,
    repeatRate,
    uniqueVehiclesCount,
    chartData,
    dealerRepeats,
    techRepeats,
    repeatCasesList,
  };
}

/**
 * Returns the Top N Technicians by total complaints / cases attended.
 */
export function getTopTechnicians(cases: any[], limit: number = 5): TopTechnicianItem[] {
  if (!cases || cases.length === 0) return [];
  const ftrMetrics = calculateFtrMetrics(cases);
  const repeatSet = new Set(ftrMetrics.repeatCasesList.map((r) => r.caseNumber));

  const techMap: Record<
    string,
    {
      fullName: string;
      phone: string;
      dealer: string;
      city: string;
      total: number;
      working: number;
      faults: number;
      repeats: number;
    }
  > = {};

  cases.forEach((c) => {
    const p = c.payload || {};
    const techName = String(p['FSE Name'] || p['Technician Name'] || 'Unassigned FSE').trim();
    if (!techName || techName.toUpperCase() === 'N/A' || techName === '-') return;

    if (!techMap[techName]) {
      techMap[techName] = {
        fullName: techName,
        phone: String(p['Technician Phone'] || '').trim(),
        dealer: String(p['Dealer / Location'] || p['Dealer'] || '').trim(),
        city: String(p['City'] || '').trim(),
        total: 0,
        working: 0,
        faults: 0,
        repeats: 0,
      };
    }

    const t = techMap[techName];
    t.total += 1;
    const st = String(p['Diagnostic Status'] || '');
    if (st === 'WORKING SATISFACTORY') t.working += 1;
    else if (st === 'FAULT FOUND') t.faults += 1;

    const caseId = c.case_number || c.id;
    if (repeatSet.has(caseId) || String(p['Repeat complaint? Yes / No'] || '').toLowerCase() === 'yes') {
      t.repeats += 1;
    }
  });

  return Object.values(techMap)
    .sort((a, b) => b.total - a.total)
    .slice(0, limit)
    .map((t, idx) => ({
      rank: idx + 1,
      name: t.fullName.length > 18 ? t.fullName.slice(0, 16) + '…' : t.fullName,
      fullName: t.fullName,
      phone: t.phone,
      dealer: t.dealer,
      city: t.city,
      totalComplaints: t.total,
      workingCount: t.working,
      faultCount: t.faults,
      repeatCount: t.repeats,
      ftrRate: t.total > 0 ? Math.round(((t.total - t.repeats) / t.total) * 100) : 100,
    }));
}



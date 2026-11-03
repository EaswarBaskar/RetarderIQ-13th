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
  if (['FAULT FOUND', 'WORKING SATISFACTORY'].includes(outcome)) return outcome;
  const state = String(payload?.['Session State'] || '').toUpperCase();
  const lastSeen = Date.parse(payload?.['Session Last Seen'] || '');
  if (state === 'PAUSED') return 'PAUSED';
  if (state === 'RESUMED' || state === 'ACTIVE') {
    if (lastSeen && Date.now() - lastSeen > 90000) return 'FORCE CLOSED / STALE';
    return 'IN PROGRESS';
  }
  return outcome;
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


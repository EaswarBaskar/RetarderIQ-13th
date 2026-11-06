import { mockCases, mockUsers, getMockSummary } from './mockData';
import { getSessionStatus, getRegion, getManufacturer, calculateFtrMetrics, caseHasPhoto } from '../lib/diagnosticUtils';

export interface DiagnosticCase {
  id: string;
  case_number: string;
  created_at: string;
  updated_at?: string;
  user_id?: string;
  payload: Record<string, any>;
  part_orders?: any[];
}

export interface DiagnosticSummary {
  total: number;
  faults: number;
  working: number;
  incomplete: number;
  open?: number;
  inProgress?: number;
  completed?: number;
  escalations?: number;
  techniciansTotal?: number;
  techniciansActive?: number;
  manufacturers?: string[];
  [key: string]: any;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'technician';
  technician_name?: string;
  technician_phone?: string;
  phone?: string;
  dealer_name?: string;
  technician_type?: string;
  vehicle_manufacturer?: string;
  vehicle_model?: string;
  city?: string;
  state?: string;
  gps_latitude?: number | string;
  gps_longitude?: number | string;
  gps_address?: string;
  gpsLatitude?: number | string;
  gpsLongitude?: number | string;
  gpsAddress?: string;
  active: boolean;
  created_at: string;
  last_login_at?: string;
  diagnostic_count?: number;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

const TOKEN_KEY = 'riq_admin_token';
const API_BASE_KEY = 'riq_api_base_url';
const MOCK_MODE_KEY = 'riq_mock_mode';

export function isMockMode(): boolean {
  return localStorage.getItem(MOCK_MODE_KEY) === 'true';
}

export function setMockMode(enabled: boolean) {
  if (enabled) {
    localStorage.setItem(MOCK_MODE_KEY, 'true');
  } else {
    localStorage.removeItem(MOCK_MODE_KEY);
  }
}

export function getApiBaseUrl(): string {
  const custom = localStorage.getItem(API_BASE_KEY);
  if (custom) return custom.replace(/\/$/, '');
  const winBase = (window as any).RIQ_API_BASE_URL;
  if (winBase) return String(winBase).replace(/\/$/, '');
  return '';
}

export function setApiBaseUrl(url: string) {
  const cleaned = url.trim().replace(/\/$/, '');
  if (cleaned) {
    localStorage.setItem(API_BASE_KEY, cleaned);
    (window as any).RIQ_API_BASE_URL = cleaned;
  } else {
    localStorage.removeItem(API_BASE_KEY);
    (window as any).RIQ_API_BASE_URL = '';
  }
}

export function getStoredToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string | null) {
  if (token) {
    sessionStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.removeItem(TOKEN_KEY);
  }
}

export async function requestApi<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getStoredToken();
  const apiBase = getApiBaseUrl();
  const fullUrl = `${apiBase}${path.startsWith('/') ? path : '/' + path}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(fullUrl, {
      cache: 'no-store',
      ...options,
      headers,
    });
  } catch (err: any) {
    throw new Error(
      `Unable to connect to API server at ${apiBase || window.location.origin}. Please ensure the backend is running.`
    );
  }

  const contentType = response.headers.get('content-type') || '';
  let data: any = {};

  if (contentType.includes('application/json')) {
    data = await response.json().catch(() => ({}));
  } else {
    if (response.status === 404) {
      throw new Error(
        `API endpoint ${path} returned 404 Not Found. Start the Express backend in 'server/' or click 'Demo Mode' below.`
      );
    }
    throw new Error(
      `Server returned ${response.status} (${contentType || 'non-JSON'}). Please verify backend connection.`
    );
  }

  if (!response.ok) {
    if (response.status === 401) {
      setStoredToken(null);
      window.location.reload();
    }
    throw new Error(data.error || data.message || `Request failed with status ${response.status}`);
  }

  return data;
}

export const api = {
  async login(email: string, password: string, enableMockIfRequested = false) {
    if (enableMockIfRequested) {
      setMockMode(true);
      const token = 'mock-admin-token-' + Date.now();
      setStoredToken(token);
      return { token, user: { role: 'admin', email: email || 'admin@example.com' } };
    }

    if (isMockMode()) {
      const token = 'mock-admin-token-' + Date.now();
      setStoredToken(token);
      return { token, user: { role: 'admin', email } };
    }

    const apiBase = getApiBaseUrl();
    const fullUrl = `${apiBase}/api/auth/login`;

    let res: Response;
    try {
      res = await fetch(fullUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
    } catch (err: any) {
      throw new Error(
        `Unable to connect to backend server at ${fullUrl}. You can enable 'Demo Mock Mode' below to preview the dashboard.`
      );
    }

    const contentType = res.headers.get('content-type') || '';
    let data: any = {};

    if (contentType.includes('application/json')) {
      data = await res.json().catch(() => ({}));
    } else {
      if (res.status === 404) {
        throw new Error(
          `API endpoint /api/auth/login returned 404. Your web server (${window.location.origin}) is running as a static file server. Click 'Explore Demo Mode' below to test the dashboard immediately.`
        );
      }
      throw new Error(`Server returned ${res.status} HTML. Verify API backend is running.`);
    }

    if (!res.ok) {
      throw new Error(data.error || 'Login failed');
    }
    if (data.user?.role !== 'admin') {
      throw new Error('Administrator account required.');
    }
    setStoredToken(data.token);
    return data;
  },

  async logout() {
    if (isMockMode()) {
      setStoredToken(null);
      return;
    }
    const token = getStoredToken();
    const apiBase = getApiBaseUrl();
    if (token) {
      try {
        await fetch(`${apiBase}/api/auth/logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          credentials: 'include',
        });
      } catch (err) {
        console.error('Logout error:', err);
      }
    }
    setStoredToken(null);
  },

  async getSummary(granularity = 'day', dateFrom = '', dateTo = ''): Promise<{ summary: DiagnosticSummary }> {
    if (isMockMode()) {
      return { summary: getMockSummary() };
    }
    const params = new URLSearchParams({ granularity });
    if (dateFrom) params.set('dateFrom', dateFrom);
    if (dateTo) params.set('dateTo', dateTo);
    return requestApi(`/api/diagnostics/summary?${params.toString()}`);
  },

  async getCases(params: Record<string, string | number>): Promise<{ cases: DiagnosticCase[]; page: number; pageSize: number; total: number; totalPages: number }> {
    if (isMockMode()) {
      const page = Number(params.page || 1);
      const pageSize = Number(params.pageSize || 10);
      const search = String(params.search || '').toLowerCase();
      const status = String(params.status || '');
      const region = String(params.region || '').toLowerCase();
      const manufacturer = String(params.manufacturer || '').toLowerCase();
      const language = String(params.language || '').toLowerCase();
      const feedback = String(params.feedback || '').toLowerCase();
      const kmRange = String(params.kmRange || '');
      const dateFrom = String(params.dateFrom || '');
      const dateTo = String(params.dateTo || '');
      const repeatOnly = String(params.repeatOnly || '').toLowerCase() === 'true';
      const firstTimeOnly = String(params.firstTimeOnly || '').toLowerCase() === 'true';
      const hasPhoto = String(params.hasPhoto || params.photo || '').toLowerCase();

      let filtered = [...mockCases];
      if (hasPhoto === 'has_photo' || hasPhoto === 'true' || hasPhoto === 'yes') {
        filtered = filtered.filter((c) => caseHasPhoto(c.payload || {}));
      } else if (hasPhoto === 'no_photo' || hasPhoto === 'false' || hasPhoto === 'no') {
        filtered = filtered.filter((c) => !caseHasPhoto(c.payload || {}));
      }
      if (repeatOnly) {
        const ftr = calculateFtrMetrics(mockCases);
        const repeatIds = new Set(ftr.repeatCasesList.map((r) => r.caseNumber || (r as any).id));
        filtered = filtered.filter((c) => repeatIds.has(c.case_number) || repeatIds.has(c.id));
      } else if (firstTimeOnly) {
        const ftr = calculateFtrMetrics(mockCases);
        const repeatIds = new Set(ftr.repeatCasesList.map((r) => r.caseNumber || (r as any).id));
        filtered = filtered.filter((c) => !repeatIds.has(c.case_number) && !repeatIds.has(c.id));
      }

      if (search) {
        filtered = filtered.filter((c) => {
          const text = (JSON.stringify(c.payload) + ' ' + (c.case_number || '') + ' ' + (c.id || '')).toLowerCase();
          if (search === 'ahmedabad' || search === 'ahemdabad') {
            return text.includes('ahmedabad') || text.includes('ahemdabad');
          }
          if (search === 'mangaluru' || search === 'mangalore') {
            return text.includes('mangaluru') || text.includes('mangalore');
          }
          if (search === 'morattandi' || search === 'morattandy' || search === 'மொரட்டாண்டி') {
            return text.includes('மொரட்டாண்டி') || text.includes('morattandi') || text.includes('cuddalore');
          }
          if (search === 'calicut' || search === 'kozhikode') {
            return text.includes('calicut') || text.includes('kozhikode');
          }
          if (search === 'kolkata') {
            return text.includes('kolkata') || text.includes('howrah') || text.includes('sankrail') || text.includes('akhurhati');
          }
          return text.includes(search);
        });
      }
      if (status) {
        filtered = filtered.filter((c) => {
          const s = getSessionStatus(c.payload || {});
          if (status === 'CLOSED_BY_ADMIN' || status === 'CLOSED BY ADMIN') {
            return s === 'CLOSED_BY_ADMIN' || s === 'CLOSED BY ADMIN';
          }
          return s === status || c.payload?.['Diagnostic Status'] === status;
        });
      }
      if (region) {
        filtered = filtered.filter((c) => {
          const r = String(c.payload?.Region || getRegion(c.payload || {})).toLowerCase();
          return r === region;
        });
      }
      if (manufacturer) {
        filtered = filtered.filter((c) => {
          const m = String(getManufacturer(c.payload || {})).toLowerCase();
          return m.includes(manufacturer);
        });
      }
      if (language) {
        filtered = filtered.filter((c) => {
          const l = String(c.payload?.['Diagnostic Language Name'] || c.payload?.['Diagnostic Language'] || 'English').toLowerCase();
          return l.includes(language);
        });
      }
      if (feedback) {
        filtered = filtered.filter((c) => {
          const fb = c.payload?.['Diagnostic Feedback'];
          let score = '';
          if (typeof fb === 'object' && fb !== null) {
            score = String(fb.clarity ?? fb.rating ?? fb.score ?? '');
          } else if (fb) {
            score = String(fb);
          }
          if (feedback === 'none') {
            return !score || score === '0';
          }
          return score.startsWith(feedback);
        });
      }
      if (kmRange) {
        filtered = filtered.filter((c) => {
          const raw = c.payload?.['Odometer Km'] ?? c.payload?.['Kms & Date of Sale'] ?? '';
          const match = String(raw).replace(/,/g, '').match(/\d+(?:\.\d+)?/);
          if (!match) return false;
          const km = parseFloat(match[0]);
          if (kmRange === '0-50000') return km <= 50000;
          if (kmRange === '50001-100000') return km > 50000 && km <= 100000;
          if (kmRange === '100001-plus') return km > 100000;
          return true;
        });
      }
      if (dateFrom) {
        const fromMs = new Date(dateFrom).getTime();
        filtered = filtered.filter((c) => {
          const t = new Date(c.created_at || c.payload?.['Complaint Attended on'] || 0).getTime();
          return t >= fromMs;
        });
      }
      if (dateTo) {
        const toMs = new Date(dateTo).getTime() + (24 * 60 * 60 * 1000 - 1);
        filtered = filtered.filter((c) => {
          const t = new Date(c.created_at || c.payload?.['Complaint Attended on'] || 0).getTime();
          return t <= toMs;
        });
      }

      const total = filtered.length;
      const totalPages = Math.ceil(total / pageSize) || 1;
      const start = (page - 1) * pageSize;
      const pageCases = filtered.slice(start, start + pageSize);

      return { cases: pageCases, page, pageSize, total, totalPages };
    }

    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        query.set(k, String(v));
      }
    });
    return requestApi(`/api/diagnostics?${query.toString()}`);
  },

  async getAllCasesForAnalytics(): Promise<DiagnosticCase[]> {
    if (isMockMode()) {
      return [...mockCases];
    }
    const first = await requestApi<{ cases: DiagnosticCase[]; totalPages: number }>('/api/diagnostics?page=1&pageSize=1000');
    let all = [...(first.cases || [])];
    const totalPages = first.totalPages || 1;
    if (totalPages > 1) {
      const rest = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          requestApi<{ cases: DiagnosticCase[] }>(`/api/diagnostics?page=${i + 2}&pageSize=1000`)
        )
      );
      rest.forEach((res) => {
        if (res.cases) all.push(...res.cases);
      });
    }
    return all;
  },

  async getCaseDetail(id: string): Promise<DiagnosticCase> {
    if (isMockMode()) {
      const item = mockCases.find((c) => c.id === id || c.case_number === id);
      if (!item) throw new Error('Case not found');
      return item;
    }
    return requestApi(`/api/admin/diagnostics/${encodeURIComponent(id)}`);
  },

  async updateCaseRegion(id: string, region: string) {
    if (isMockMode()) {
      const item = mockCases.find((c) => c.id === id);
      if (item && item.payload) {
        item.payload.Region = region;
      }
      return { success: true };
    }
    return requestApi(`/api/admin/diagnostics/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify({ region }),
    });
  },

  async closeCaseByAdmin(
    id: string,
    resolution: {
      outcome: string;
      suspectedPart: string;
      remarks: string;
      closedBy?: string;
    }
  ) {
    if (isMockMode()) {
      const item = mockCases.find((c) => c.id === id);
      if (item && item.payload) {
        item.payload['Diagnostic Status'] = 'CLOSED_BY_ADMIN';
        item.payload['Lifecycle Status'] = 'CLOSED';
        item.payload['Session State'] = 'CLOSED_BY_ADMIN';
        item.payload['Admin Resolution'] = {
          ...resolution,
          closedAt: new Date().toISOString(),
          closedBy: resolution.closedBy || 'Admin',
        };
      }
      return { success: true };
    }
    return requestApi(`/api/admin/diagnostics/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify({ admin_resolution: resolution }),
    });
  },

  async quickConfirmCase(id: string) {
    if (isMockMode()) {
      const item = mockCases.find((c) => c.id === id);
      if (item && item.payload) {
        item.payload['Diagnostic Status'] = 'WORKING SATISFACTORY';
        item.payload['Lifecycle Status'] = 'CLOSED';
        item.payload['Session State'] = 'COMPLETED';
        item.payload['Technician Confirmation'] = {
          outcome: 'REPAIRED_AND_TESTED_OK',
          confirmedAt: new Date().toISOString(),
          channel: 'WhatsApp 1-Tap',
        };
      }
      return { success: true };
    }
    return requestApi(`/api/public/case/${encodeURIComponent(id)}/confirm`, {
      method: 'POST',
      body: JSON.stringify({ outcome: 'REPAIRED_AND_TESTED_OK' }),
    });
  },

  async deleteCases(ids: string[]) {
    if (isMockMode()) {
      const set = new Set(ids);
      for (let i = mockCases.length - 1; i >= 0; i--) {
        if (set.has(mockCases[i].id)) {
          mockCases.splice(i, 1);
        }
      }
      return { deleted: ids.length };
    }
    return requestApi('/api/diagnostics', {
      method: 'DELETE',
      body: JSON.stringify({ ids }),
    });
  },

  async getUsers(): Promise<{ users: AdminUser[] }> {
    if (isMockMode()) {
      return { users: [...mockUsers] };
    }
    return requestApi('/api/users');
  },

  async getUserDetail(id: string): Promise<{ user: AdminUser; activity: any[] }> {
    if (isMockMode()) {
      const u = mockUsers.find((user) => user.id === id);
      if (!u) throw new Error('User not found');
      return {
        user: u,
        activity: [
          { action: 'Submitted diagnostic RIQ-2026-001', created_at: new Date(Date.now() - 3600000).toISOString() },
          { action: 'Completed vehicle inspection', created_at: new Date(Date.now() - 7200000).toISOString() },
        ],
      };
    }
    return requestApi(`/api/users/${encodeURIComponent(id)}`);
  },

  async createUser(payload: Record<string, any>) {
    if (isMockMode()) {
      const newUser: AdminUser = {
        id: 'u-' + Date.now(),
        email: payload.email,
        role: payload.role || 'technician',
        technician_name: payload.technicianName,
        phone: payload.technicianPhone,
        dealer_name: payload.dealerName,
        technician_type: payload.technicianType,
        vehicle_manufacturer: payload.vehicleManufacturer,
        vehicle_model: payload.vehicleModel,
        city: payload.city,
        state: payload.state,
        active: true,
        created_at: new Date().toISOString(),
        diagnostic_count: 0,
      };
      mockUsers.unshift(newUser);
      return { user: newUser };
    }
    return requestApi('/api/users', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async toggleUserActive(id: string, active: boolean) {
    if (isMockMode()) {
      const u = mockUsers.find((user) => user.id === id);
      if (u) u.active = active;
      return { success: true };
    }
    return requestApi(`/api/users/${encodeURIComponent(id)}/active`, {
      method: 'PATCH',
      body: JSON.stringify({ active }),
    });
  },

  async updateUserAssignment(id: string, vehicleManufacturer: string, vehicleModel: string) {
    if (isMockMode()) {
      const u = mockUsers.find((user) => user.id === id);
      if (u) {
        u.vehicle_manufacturer = vehicleManufacturer;
        u.vehicle_model = vehicleModel;
      }
      return { success: true };
    }
    return requestApi(`/api/users/${encodeURIComponent(id)}/assignment`, {
      method: 'PATCH',
      body: JSON.stringify({ vehicleManufacturer, vehicleModel }),
    });
  },

  async deleteUser(id: string) {
    if (isMockMode()) {
      const idx = mockUsers.findIndex((u) => u.id === id);
      if (idx !== -1) mockUsers.splice(idx, 1);
      return { success: true };
    }
    return requestApi(`/api/users/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },

  connectEvents(onMessage: (event: any) => void): () => void {
    if (isMockMode()) {
      const timer = setInterval(() => {
        onMessage({ type: 'keepalive', timestamp: Date.now() });
      }, 15000);
      return () => clearInterval(timer);
    }

    const token = getStoredToken();
    if (!token) return () => {};

    const abortController = new AbortController();
    let isConnected = true;
    const apiBase = getApiBaseUrl();

    async function stream() {
      try {
        const response = await fetch(`${apiBase}/api/admin/events`, {
          headers: { Authorization: `Bearer ${token}` },
          signal: abortController.signal,
        });

        if (!response.ok || !response.body) return;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (isConnected) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data:')) {
              try {
                const data = JSON.parse(line.replace(/^data:\s*/, ''));
                onMessage(data);
              } catch (e) {
                // ignore
              }
            }
          }
        }
      } catch (err: any) {
        if (err.name !== 'AbortError' && isConnected) {
          setTimeout(stream, 5000);
        }
      }
    }

    stream();

    return () => {
      isConnected = false;
      abortController.abort();
    };
  },
};

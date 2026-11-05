import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Input, Select } from './ui/Input';
import { Badge } from './ui/Badge';
import { Modal } from './ui/Modal';
import { AdminUser, api } from '../services/api';
import { UserPlus, Search, Shield, Trash2, Check, X, Eye, MapPin } from 'lucide-react';

interface TechnicianManagementProps {
  users: AdminUser[];
  onReloadUsers: () => Promise<void>;
}

const VEHICLE_MODELS: Record<string, string[]> = {
  'ASHOK LEYLAND': [
    '12M BS-IV (Retarder)',
    'Viking BS-IV (Retarder)',
    'Other BS-IV Retarder Bus',
    '12M BS-VI (Retarder)',
    'Viking BS-VI (Retarder)',
    'Other BS-VI Retarder Bus',
    '13.5M BS-VI (Retarder)',
  ],
  'TATA MOTORS': ['TML - 1822', 'TML - 1622'],
  VECV: ['VECV - 6016', 'VECV - 6019'],
};

export const TechnicianManagement: React.FC<TechnicianManagementProps> = ({
  users,
  onReloadUsers,
}) => {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'technician',
    technicianName: '',
    technicianPhone: '',
    dealerName: '',
    technicianType: '',
    vehicleManufacturer: '',
    vehicleModel: '',
    city: '',
    state: '',
  });

  // User detail state
  const [selectedUserDetail, setSelectedUserDetail] = useState<{
    user: AdminUser;
    activity: any[];
  } | null>(null);

  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter((u) => u.active).length;
    const techs = users.filter((u) => u.role === 'technician').length;
    return { total, active, techs };
  }, [users]);

  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return users;
    return users.filter((u) => {
      const match = [
        u.email,
        u.technician_name,
        u.dealer_name,
        u.city,
        u.state,
        u.vehicle_manufacturer,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return match.includes(q);
    });
  }, [users, search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'vehicleManufacturer') {
        next.vehicleModel = '';
      }
      return next;
    });
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await api.createUser(formData);
      setIsModalOpen(false);
      setFormData({
        email: '',
        password: '',
        role: 'technician',
        technicianName: '',
        technicianPhone: '',
        dealerName: '',
        technicianType: '',
        vehicleManufacturer: '',
        vehicleModel: '',
        city: '',
        state: '',
      });
      await onReloadUsers();
    } catch (err: any) {
      setError(err.message || 'Failed to create user');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (user: AdminUser) => {
    try {
      await api.toggleUserActive(user.id, !user.active);
      await onReloadUsers();
    } catch (err: any) {
      alert(err.message || 'Failed to update user status');
    }
  };

  const handleDeleteUser = async (user: AdminUser) => {
    if (
      !window.confirm(
        `Permanently delete ${user.email}? Linked diagnostic reports will be preserved without account ownership.`
      )
    ) {
      return;
    }

    try {
      await api.deleteUser(user.id);
      await onReloadUsers();
    } catch (err: any) {
      alert(err.message || 'Failed to delete user');
    }
  };

  const handleViewUserDetail = async (user: AdminUser) => {
    try {
      const data = await api.getUserDetail(user.id);
      setSelectedUserDetail(data);
    } catch (err: any) {
      alert(err.message || 'Failed to fetch user details');
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle>Technician Administration</CardTitle>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-700">
                {stats.total} total
              </span>
              <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                {stats.active} active
              </span>
              <span className="bg-blue-50 text-[#0b5daa] px-2 py-0.5 rounded-full font-bold">
                {stats.techs} technicians
              </span>
            </div>
          </div>
          <CardDescription className="mt-1">
            Manage named access, profiles, and authorized technician accounts.
          </CardDescription>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="text-xs font-semibold"
        >
          <UserPlus className="h-3.5 w-3.5 mr-1.5" />
          Create Account
        </Button>
      </CardHeader>

      <CardContent className="pt-4">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search accounts by email, technician name, dealer, city, or manufacturer..."
            className="pl-9 h-9 text-xs"
          />
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Email</th>
                <th className="p-3">Technician / Dealer</th>
                <th className="p-3">OEM &amp; Model</th>
                <th className="p-3">Location</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Created</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-slate-400">
                    No accounts found matching your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">{user.email}</td>
                    <td className="p-3">
                      <div className="font-medium text-slate-800">
                        {user.technician_name || '—'}
                      </div>
                      <div className="text-[11px] text-slate-500">{user.dealer_name || '—'}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-semibold text-slate-700">
                        {user.vehicle_manufacturer || '—'}
                      </div>
                      <div className="text-[11px] text-slate-500">{user.vehicle_model || '—'}</div>
                    </td>
                    <td className="p-3 text-slate-600">
                      <div>{[user.city, user.state].filter(Boolean).join(', ') || '—'}</div>
                      {(user.gps_latitude || user.gpsLatitude) && (user.gps_longitude || user.gpsLongitude) && (
                        <a
                          href={`https://www.google.com/maps?q=${user.gps_latitude || user.gpsLatitude},${user.gps_longitude || user.gpsLongitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-[#0b5daa] hover:underline font-mono mt-0.5"
                          title="View GPS on Google Maps"
                        >
                          <MapPin className="h-2.5 w-2.5 shrink-0" />
                          <span>
                            {Number(user.gps_latitude || user.gpsLatitude).toFixed(4)},{' '}
                            {Number(user.gps_longitude || user.gpsLongitude).toFixed(4)}
                          </span>
                        </a>
                      )}
                    </td>
                    <td className="p-3">
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleToggleActive(user)}
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                          user.active
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                        }`}
                        title="Click to toggle account status"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            user.active ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                        {user.active ? 'Active' : 'Disabled'}
                      </button>
                    </td>
                    <td className="p-3 text-slate-500 whitespace-nowrap">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewUserDetail(user)}
                          title="View Technician Activity"
                          className="h-7 w-7 text-slate-500 hover:text-[#0b5daa]"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteUser(user)}
                          title="Delete Account"
                          className="h-7 w-7 text-slate-500 hover:text-rose-600"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Create Technician Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create Technician Account"
          description="Provision a named account for a field technician or dealer workshop."
          maxWidth="lg"
        >
          {error && (
            <div className="mb-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleCreateSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email <span className="text-rose-500">*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tech@dealer.com"
                  className="h-8 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Temporary Password <span className="text-rose-500">*</span>
                </label>
                <Input
                  name="password"
                  type="password"
                  required
                  minLength={10}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Min 10 characters"
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Technician Name</label>
                <Input
                  name="technicianName"
                  value={formData.technicianName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="h-8 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mobile Number</label>
                <Input
                  name="technicianPhone"
                  value={formData.technicianPhone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Dealer / Workshop</label>
                <Input
                  name="dealerName"
                  value={formData.dealerName}
                  onChange={handleInputChange}
                  placeholder="Authorized Service Center"
                  className="h-8 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Technician Type</label>
                <Select
                  name="technicianType"
                  value={formData.technicianType}
                  onChange={handleInputChange}
                  className="h-8 text-xs"
                >
                  <option value="">Select type</option>
                  <option value="Authorized Dealer">Authorized Dealer</option>
                  <option value="Fleet Workshop">Fleet Workshop</option>
                  <option value="Roadside Assistance">Roadside Assistance</option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Vehicle OEM</label>
                <Select
                  name="vehicleManufacturer"
                  value={formData.vehicleManufacturer}
                  onChange={handleInputChange}
                  className="h-8 text-xs"
                >
                  <option value="">Select manufacturer</option>
                  <option value="ASHOK LEYLAND">ASHOK LEYLAND</option>
                  <option value="TATA MOTORS">TATA MOTORS</option>
                  <option value="VECV">VECV</option>
                </Select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Assigned Model
                </label>
                {formData.vehicleManufacturer && VEHICLE_MODELS[formData.vehicleManufacturer] ? (
                  <Select
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    className="h-8 text-xs"
                  >
                    <option value="">Select model</option>
                    {VEHICLE_MODELS[formData.vehicleManufacturer].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    placeholder="Exact model"
                    className="h-8 text-xs"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">City</label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Chennai, Pune, etc."
                  className="h-8 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">State</label>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Tamil Nadu, Maharashtra..."
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={submitting}>
                {submitting ? 'Creating...' : 'Create Account'}
              </Button>
            </div>
          </form>
        </Modal>

        {/* Technician Detail Activity Modal */}
        {selectedUserDetail && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedUserDetail(null)}
            title={`Technician Profile: ${selectedUserDetail.user.technician_name || selectedUserDetail.user.email}`}
            description={selectedUserDetail.user.email}
            maxWidth="md"
          >
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Role</span>
                  <div className="font-semibold">{selectedUserDetail.user.role}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Dealer</span>
                  <div className="font-semibold">{selectedUserDetail.user.dealer_name || '—'}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">OEM Assignment</span>
                  <div className="font-semibold">{selectedUserDetail.user.vehicle_manufacturer || '—'}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Assigned Model</span>
                  <div className="font-semibold">{selectedUserDetail.user.vehicle_model || '—'}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Phone</span>
                  <div className="font-semibold">{selectedUserDetail.user.technician_phone || selectedUserDetail.user.phone || '—'}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Registered</span>
                  <div className="font-semibold">
                    {new Date(selectedUserDetail.user.created_at).toLocaleDateString()}
                  </div>
                </div>
                {(selectedUserDetail.user.gps_latitude || selectedUserDetail.user.gpsLatitude) && (
                  <div className="col-span-2 pt-1 border-t border-slate-200">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Recorded GPS Location</span>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="font-mono text-slate-700">
                        {Number(selectedUserDetail.user.gps_latitude || selectedUserDetail.user.gpsLatitude).toFixed(4)},{' '}
                        {Number(selectedUserDetail.user.gps_longitude || selectedUserDetail.user.gpsLongitude).toFixed(4)}
                      </span>
                      <a
                        href={`https://www.google.com/maps?q=${selectedUserDetail.user.gps_latitude || selectedUserDetail.user.gpsLatitude},${selectedUserDetail.user.gps_longitude || selectedUserDetail.user.gpsLongitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0b5daa] hover:underline font-semibold flex items-center gap-1"
                      >
                        <MapPin className="h-3 w-3" />
                        Open Google Maps &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-2">Recent Account Activity</h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {selectedUserDetail.activity && selectedUserDetail.activity.length > 0 ? (
                    selectedUserDetail.activity.slice(0, 10).map((act: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-[11px]"
                      >
                        <span className="font-medium text-slate-700">{act.action}</span>
                        <span className="text-slate-400">
                          {new Date(act.created_at).toLocaleString()}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400 italic">No recent activity recorded.</p>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </CardContent>
    </Card>
  );
};


import React, { useState } from 'react';
import { api, getApiBaseUrl, setApiBaseUrl, isMockMode, setMockMode } from '../services/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { ShieldAlert, Lock, Mail, Wrench, Settings, Globe, Check, Sparkles } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // API Server configuration
  const [showServerConfig, setShowServerConfig] = useState(false);
  const [serverUrl, setServerUrl] = useState(getApiBaseUrl() || window.location.origin);
  const [serverSaved, setServerSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.login(email, password);
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate');
    } finally {
      setLoading(false);
    }
  };

  const handleLaunchDemoMode = async () => {
    setLoading(true);
    try {
      await api.login('admin@example.com', 'demo', true);
      onLoginSuccess();
    } finally {
      setLoading(false);
    }
  };

  const handleSaveServer = (e: React.FormEvent) => {
    e.preventDefault();
    setApiBaseUrl(serverUrl);
    setMockMode(false);
    setServerSaved(true);
    setTimeout(() => setServerSaved(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100/80 p-4">
      <Card className="w-full max-w-md shadow-xl border-slate-200">
        <CardHeader className="text-center pt-8 pb-4">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b5daa]/10 text-[#0b5daa]">
            <Wrench className="h-7 w-7" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
            Retarder IQ Admin
          </CardTitle>
          <CardDescription className="text-sm text-slate-500 mt-1">
            Sign in to manage diagnostic reports and technician accounts.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-8 space-y-4">
          {error && (
            <div className="rounded-lg bg-rose-50 border border-rose-200 p-3.5 text-xs text-rose-700 leading-relaxed">
              <div className="flex items-start gap-2">
                <ShieldAlert className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                <div className="space-y-2">
                  <span>{error}</span>
                  <div>
                    <button
                      type="button"
                      onClick={handleLaunchDemoMode}
                      className="inline-flex items-center gap-1 font-bold text-rose-800 underline hover:text-rose-900"
                    >
                      <Sparkles className="h-3 w-3" />
                      Switch to Local Demo Data &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  autoComplete="username"
                  className="pl-9"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  required
                  autoComplete="current-password"
                  className="pl-9"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-semibold"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>

          {/* Quick Demo Preview Button */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[11px] text-slate-400 font-semibold uppercase">Or</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleLaunchDemoMode}
            disabled={loading}
            className="w-full text-xs font-bold border-blue-200 bg-blue-50/50 text-[#0b5daa] hover:bg-blue-100/70"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-[#0b5daa]" />
            Explore with Demo Data (No DB Required)
          </Button>

          {/* Collapsible API Server Connection Settings */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowServerConfig(!showServerConfig)}
              className="w-full flex items-center justify-between text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Settings className="h-3.5 w-3.5 text-slate-400" />
                Backend API Connection
              </span>
              <span className="text-[11px] text-[#0b5daa] font-semibold">
                {showServerConfig ? 'Hide' : 'Configure'}
              </span>
            </button>

            {showServerConfig && (
              <form onSubmit={handleSaveServer} className="mt-3 space-y-2 text-xs animate-in fade-in duration-150">
                <p className="text-[11px] text-slate-500">
                  Target API server URL (leave empty if served on same domain):
                </p>
                <div className="flex gap-1.5">
                  <div className="relative flex-1">
                    <Globe className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                    <Input
                      type="url"
                      value={serverUrl}
                      onChange={(e) => setServerUrl(e.target.value)}
                      placeholder="http://localhost:3000"
                      className="pl-8 h-8 text-xs font-mono"
                    />
                  </div>
                  <Button type="submit" size="sm" variant="secondary" className="h-8 text-xs font-semibold px-3">
                    {serverSaved ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : 'Save'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

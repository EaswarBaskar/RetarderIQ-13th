import React, { useMemo, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Globe3D, GlobeMarker } from './ui/Globe3D';
import { DiagnosticCase, AdminUser } from '../services/api';
import { getRegion } from '../lib/diagnosticUtils';
import { MapPin, Globe, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { Badge } from './ui/Badge';

interface RecordedPlacesGlobeProps {
  cases: DiagnosticCase[];
  users: AdminUser[];
  onSelectPlace?: (placeName: string) => void;
}

const AVATAR_URLS = [
  'https://assets.aceternity.com/avatars/1.webp',
  'https://assets.aceternity.com/avatars/2.webp',
  'https://assets.aceternity.com/avatars/3.webp',
  'https://assets.aceternity.com/avatars/4.webp',
  'https://assets.aceternity.com/avatars/5.webp',
  'https://assets.aceternity.com/avatars/6.webp',
  'https://assets.aceternity.com/avatars/7.webp',
  'https://assets.aceternity.com/avatars/8.webp',
  'https://assets.aceternity.com/avatars/9.webp',
  'https://assets.aceternity.com/avatars/10.webp',
  'https://assets.aceternity.com/avatars/11.webp',
  'https://assets.aceternity.com/avatars/12.webp',
  'https://assets.aceternity.com/avatars/13.webp',
];

const DEFAULT_RECORD_PLACES: GlobeMarker[] = [
  // North (N)
  { lat: 28.6139, lng: 77.209, label: 'New Delhi Depot', region: 'North', city: 'Delhi', src: AVATAR_URLS[4], count: 12 },
  { lat: 51.5074, lng: -0.1278, label: 'London Tech Hub', region: 'North', city: 'London', src: AVATAR_URLS[1], count: 2 },
  // East (E)
  { lat: 22.5726, lng: 88.3639, label: 'Kolkata Fleet Center', region: 'East', city: 'Kolkata', src: AVATAR_URLS[5], count: 10 },
  { lat: 1.3521, lng: 103.8198, label: 'Singapore Logistics', region: 'East', city: 'Singapore', src: AVATAR_URLS[11], count: 3 },
  // West (W)
  { lat: 18.5204, lng: 73.8567, label: 'Pune Commercial Hub', region: 'West', city: 'Pune', src: AVATAR_URLS[3], count: 19 },
  { lat: 19.076, lng: 72.8777, label: 'Mumbai Terminal', region: 'West', city: 'Mumbai', src: AVATAR_URLS[6], count: 8 },
  { lat: 25.2048, lng: 55.2708, label: 'Dubai Export Depot', region: 'West', city: 'Dubai', src: AVATAR_URLS[9], count: 4 },
  // South (S - Last)
  { lat: 13.0827, lng: 80.2707, label: 'Chennai Hub', region: 'South', city: 'Chennai', src: AVATAR_URLS[0], count: 38 },
  { lat: 12.9716, lng: 77.5946, label: 'Bengaluru Central', region: 'South', city: 'Bengaluru', src: AVATAR_URLS[1], count: 24 },
  { lat: 9.9312, lng: 76.2673, label: 'Kochi Workshop', region: 'South', city: 'Kochi', src: AVATAR_URLS[2], count: 15 },
];

const ZONE_TARGETS: Record<string, { lat: number; lng: number }> = {
  North: { lat: 28.6139, lng: 77.209 }, // New Delhi (N)
  East: { lat: 22.5726, lng: 88.3639 }, // West Bengal / Kolkata (E)
  West: { lat: 19.5, lng: 73.0 }, // Maharashtra / Gujarat (W)
  South: { lat: 11.5, lng: 78.5 }, // Central South (Tamil Nadu / Karnataka) (S)
};

const NEWS_REGION_ORDER: Record<string, number> = {
  north: 1,
  east: 2,
  west: 3,
  south: 4,
};

export const RecordedPlacesGlobe: React.FC<RecordedPlacesGlobeProps> = ({
  cases,
  users,
  onSelectPlace,
}) => {
  const [selectedMarker, setSelectedMarker] = useState<GlobeMarker | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [focusLocation, setFocusLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Combine real diagnostic case locations with technician locations and avatars
  const allMarkers: GlobeMarker[] = useMemo(() => {
    const list: GlobeMarker[] = [];
    const seen = new Set<string>();

    let avatarIdx = 0;

    // 1. Extract from live cases
    cases.forEach((c) => {
      const p = c.payload || {};
      let lat = Number(p['GPS Latitude']);
      let lng = Number(p['GPS Longitude']);
      let label = String(p['Dealer / Location'] || p['City'] || 'Field Inspection').trim();
      const region = getRegion(p);

      if (!lat || !lng || isNaN(lat) || isNaN(lng)) {
        const city = String(p['City'] || '').toLowerCase();
        const found = DEFAULT_RECORD_PLACES.find((dp) => dp.label.toLowerCase().includes(city));
        if (found) {
          lat = found.lat;
          lng = found.lng;
        }
      }

      if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
        const key = `${lat.toFixed(2)},${lng.toFixed(2)}`;
        if (!seen.has(key)) {
          seen.add(key);
          list.push({
            lat,
            lng,
            label,
            region,
            src: AVATAR_URLS[avatarIdx % AVATAR_URLS.length],
            count: 1,
            status: p['Diagnostic Status'],
            city: p['City'],
            state: p['State'],
          });
          avatarIdx++;
        }
      }
    });

    // 2. Extract from technician accounts
    users.forEach((u) => {
      let lat = Number(u.gps_latitude || u.gpsLatitude);
      let lng = Number(u.gps_longitude || u.gpsLongitude);
      let label = u.dealer_name || u.technician_name || u.city || 'Workshop';
      const region = getRegion({ State: u.state });

      if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
        const key = `${lat.toFixed(2)},${lng.toFixed(2)}`;
        if (!seen.has(key)) {
          seen.add(key);
          list.push({
            lat,
            lng,
            label,
            region,
            src: AVATAR_URLS[avatarIdx % AVATAR_URLS.length],
            count: u.diagnostic_count || 1,
            city: u.city,
            state: u.state,
          });
          avatarIdx++;
        }
      }
    });

    // Preset hubs
    DEFAULT_RECORD_PLACES.forEach((dp) => {
      const key = `${dp.lat.toFixed(2)},${dp.lng.toFixed(2)}`;
      if (!seen.has(key)) {
        seen.add(key);
        list.push(dp);
      }
    });

    return list;
  }, [cases, users]);

  // Filter markers based on selected Cardinal Zone (ordered North -> East -> West -> South)
  const filteredMarkers = useMemo(() => {
    const list = selectedZone === 'All' 
      ? allMarkers 
      : allMarkers.filter((m) => m.region?.toLowerCase() === selectedZone.toLowerCase());

    return [...list].sort((a, b) => {
      const orderA = NEWS_REGION_ORDER[a.region?.toLowerCase() || ''] || 99;
      const orderB = NEWS_REGION_ORDER[b.region?.toLowerCase() || ''] || 99;
      if (orderA !== orderB) return orderA - orderB;
      return (b.count || 0) - (a.count || 0);
    });
  }, [allMarkers, selectedZone]);

  const handleZoneSelect = (zone: string) => {
    setSelectedZone(zone);
    if (zone !== 'All' && ZONE_TARGETS[zone]) {
      setFocusLocation(ZONE_TARGETS[zone]);
    } else {
      setFocusLocation({ lat: 20.5937, lng: 78.9629 }); // Center of India
    }
  };

  const getRegionBadge = (region?: string) => {
    switch (region?.toLowerCase()) {
      case 'north':
        return <span className="bg-blue-950/80 text-blue-300 border border-blue-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold">North (N)</span>;
      case 'east':
        return <span className="bg-amber-950/80 text-amber-300 border border-amber-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold">East (E)</span>;
      case 'west':
        return <span className="bg-purple-950/80 text-purple-300 border border-purple-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold">West (W)</span>;
      case 'south':
        return <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold">South (S)</span>;
      default:
        return <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold">{region || 'Central'}</span>;
    }
  };

  return (
    <Card className="mb-6 overflow-hidden border-slate-800 bg-[#070b14] text-white shadow-2xl">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 bg-[#0a0f1d] px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-cyan-400" />
            <CardTitle className="text-base text-white font-bold tracking-tight">
              Field Diagnostic Operations · 3D Earth Globe
            </CardTitle>
          </div>
          <CardDescription className="text-xs text-slate-400 mt-1">
            Real-time 3D visualization of recorded GPS inspections ordered by North, East, West, and South (N-E-W-S).
          </CardDescription>
        </div>

        {/* Cardinal Directions / Zones Navigation Selector in NEWS order: North -> East -> West -> South */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 font-bold uppercase px-2 flex items-center gap-1">
            <Navigation className="h-3 w-3 text-cyan-400" />
            Zones (NEWS):
          </span>
          {['All', 'North', 'East', 'West', 'South'].map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => handleZoneSelect(zone)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedZone === zone
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {zone === 'All' ? 'All' : `${zone} (${zone[0]})`}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left: 3D Earth Globe Canvas */}
          <div className="lg:col-span-8 p-4 flex flex-col items-center justify-center bg-[#030712] relative min-h-[480px]">
            <Globe3D
              markers={allMarkers}
              focusLocation={focusLocation}
              config={{
                atmosphereColor: '#4da6ff',
                atmosphereIntensity: 20,
                bumpScale: 5,
                autoRotateSpeed: 0.15,
              }}
              onMarkerClick={(marker) => {
                setSelectedMarker(marker);
                if (onSelectPlace && (marker.city || marker.label)) {
                  onSelectPlace(marker.city || marker.label);
                }
              }}
              className="h-[480px] w-full"
            />
            <div className="absolute bottom-3 text-center text-[11px] text-slate-500 pointer-events-none select-none">
              Scroll wheel or pinch to zoom · Drag to spin · Click North, East, West, South (NEWS) buttons above to focus
            </div>
          </div>

          {/* Right: Recorded Locations Sidebar */}
          <div className="lg:col-span-4 p-5 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0a0f1d] flex flex-col justify-between h-full space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  {selectedZone === 'All' ? 'All Active Hubs' : `${selectedZone} Zone Hubs`} ({filteredMarkers.length})
                </h4>
                {selectedZone !== 'All' && (
                  <button
                    onClick={() => handleZoneSelect('All')}
                    className="text-[10px] text-cyan-400 hover:underline"
                  >
                    View All
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                {filteredMarkers.slice(0, 8).map((place, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedMarker(place);
                      setFocusLocation({ lat: place.lat, lng: place.lng });
                      if (onSelectPlace && (place.city || place.label)) {
                        onSelectPlace(place.city || place.label);
                      }
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
                      selectedMarker?.label === place.label
                        ? 'border-cyan-500 bg-cyan-950/40 text-cyan-200'
                        : 'border-slate-800/80 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className="h-7 w-7 rounded-full overflow-hidden border border-cyan-400/80 shrink-0">
                        <img
                          src={place.src || AVATAR_URLS[idx % AVATAR_URLS.length]}
                          alt={place.label}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-slate-200 truncate">{place.label}</div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          {place.lat.toFixed(4)}, {place.lng.toFixed(4)}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex flex-col items-end gap-1">
                      {getRegionBadge(place.region)}
                      <span className="font-bold text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 text-[10px]">
                        {place.count} {place.count === 1 ? 'case' : 'cases'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Location Details */}
            {selectedMarker ? (
              <div className="rounded-lg bg-cyan-950/40 p-3 border border-cyan-800/70 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-cyan-300">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span>{selectedMarker.label}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${selectedMarker.lat},${selectedMarker.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline"
                  >
                    Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span className="font-mono">
                    GPS: {selectedMarker.lat.toFixed(4)}, {selectedMarker.lng.toFixed(4)}
                  </span>
                  {selectedMarker.region && (
                    <span className="text-cyan-300 font-semibold">{selectedMarker.region} Zone</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-slate-900/60 p-2.5 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Click any hub or zone to rotate the Earth</span>
                <Globe className="h-3.5 w-3.5 text-slate-500" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

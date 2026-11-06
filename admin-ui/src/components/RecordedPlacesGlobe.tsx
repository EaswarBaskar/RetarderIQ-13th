import React, { useMemo, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Globe3D, GlobeMarker, getRegionColor } from './ui/Globe3D';
import { DiagnosticCase, AdminUser } from '../services/api';
import { getRegion } from '../lib/diagnosticUtils';
import { MapPin, Globe, ExternalLink, Navigation, Search, Filter } from 'lucide-react';

interface RecordedPlacesGlobeProps {
  cases: DiagnosticCase[];
  users: AdminUser[];
  onSelectPlace?: (placeInfo: { search?: string; region?: string; label?: string } | string) => void;
}

// Coordinate dictionary for all Indian CV diagnostic centers & workshop locations
const INDIAN_CITY_COORDINATES: Record<string, { lat: number; lng: number; region: string; standardName: string }> = {
  // South (S)
  'chennai': { lat: 13.0827, lng: 80.2707, region: 'South', standardName: 'Chennai Retarder Hub' },
  'pocharam': { lat: 17.4678, lng: 78.6811, region: 'South', standardName: 'Pocharam Center' },
  'hyderabad': { lat: 17.3850, lng: 78.4867, region: 'South', standardName: 'Hyderabad Commercial Hub' },
  'madurai': { lat: 9.9252, lng: 78.1198, region: 'South', standardName: 'Madurai Workshop' },
  'salem': { lat: 11.6643, lng: 78.1460, region: 'South', standardName: 'Salem Fleet Depot' },
  'coimbatore': { lat: 11.0168, lng: 76.9558, region: 'South', standardName: 'Coimbatore Hub' },
  'morattandi': { lat: 12.0039, lng: 79.8032, region: 'South', standardName: 'Morattandi Service Point' },
  'மொரட்டாண்டி': { lat: 12.0039, lng: 79.8032, region: 'South', standardName: 'Morattandi Service Point' },
  'bengaluru': { lat: 12.9716, lng: 77.5946, region: 'South', standardName: 'Bengaluru Commercial Hub' },
  'bangalore': { lat: 12.9716, lng: 77.5946, region: 'South', standardName: 'Bengaluru Commercial Hub' },
  'mangalore': { lat: 12.9141, lng: 74.8560, region: 'South', standardName: 'Mangaluru Workshop' },
  'mangaluru': { lat: 12.9141, lng: 74.8560, region: 'South', standardName: 'Mangaluru Workshop' },
  'belagavi': { lat: 15.8497, lng: 74.4977, region: 'South', standardName: 'Belagavi Depot' },
  'vijayawada': { lat: 16.5062, lng: 80.6480, region: 'South', standardName: 'Vijayawada Depot' },
  'ettumanoor': { lat: 9.6703, lng: 76.5621, region: 'South', standardName: 'Ettumanoor Workshop' },
  'kochi': { lat: 9.9312, lng: 76.2673, region: 'South', standardName: 'Kochi Field Center' },
  'thiruvananthapuram': { lat: 8.5241, lng: 76.9366, region: 'South', standardName: 'Thiruvananthapuram Depot' },
  'calicut': { lat: 11.2588, lng: 75.7804, region: 'South', standardName: 'Calicut (Kozhikode) Depot' },
  'kozhikode': { lat: 11.2588, lng: 75.7804, region: 'South', standardName: 'Calicut (Kozhikode) Depot' },

  // West (W)
  'ahmedabad': { lat: 23.0225, lng: 72.5714, region: 'West', standardName: 'Ahmedabad Fleet Center' },
  'ahemdabad': { lat: 23.0225, lng: 72.5714, region: 'West', standardName: 'Ahmedabad Fleet Center' },
  'panvel': { lat: 18.9894, lng: 73.1175, region: 'West', standardName: 'Panvel (Mumbai) Fleet Depot' },
  'mumbai': { lat: 19.0760, lng: 72.8777, region: 'West', standardName: 'Mumbai Fleet Terminal' },
  'pune': { lat: 18.5204, lng: 73.8567, region: 'West', standardName: 'Pune Commercial Hub' },
  'malkapur': { lat: 20.8817, lng: 76.2023, region: 'West', standardName: 'Malkapur Workshop' },
  'lasalgaon': { lat: 20.1472, lng: 74.2289, region: 'West', standardName: 'Lasalgaon Depot' },
  'julwania': { lat: 21.8415, lng: 75.2284, region: 'West', standardName: 'Julwania Transit Hub' },

  // East (E)
  'howrah': { lat: 22.5958, lng: 88.2636, region: 'East', standardName: 'Howrah Fleet Center' },
  'sankrail': { lat: 22.5694, lng: 88.2396, region: 'East', standardName: 'Sankrail Industrial Center' },
  'akhurhati': { lat: 22.6100, lng: 88.2100, region: 'East', standardName: 'Akhurhati Depot' },
  'kolkata': { lat: 22.5726, lng: 88.3639, region: 'East', standardName: 'Kolkata Fleet Center' },

  // North (N)
  'dehradun': { lat: 30.3165, lng: 78.0322, region: 'North', standardName: 'Dehradun Field Station' },
  'delhi': { lat: 28.6139, lng: 77.2090, region: 'North', standardName: 'New Delhi Depot' },
  'new delhi': { lat: 28.6139, lng: 77.2090, region: 'North', standardName: 'New Delhi Depot' },
};

const ZONE_TARGETS: Record<string, { lat: number; lng: number }> = {
  North: { lat: 29.5, lng: 77.5 }, // North India
  East: { lat: 23.5, lng: 87.5 }, // East India (West Bengal / Kolkata)
  West: { lat: 21.0, lng: 74.0 }, // West India (Maharashtra / Gujarat)
  South: { lat: 13.0, lng: 78.5 }, // South India (Tamil Nadu / Karnataka / Telangana / Kerala)
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

  // Group real diagnostic cases and technician accounts dynamically by GPS / city
  const allMarkers: GlobeMarker[] = useMemo(() => {
    const hubMap = new Map<string, {
      lat: number;
      lng: number;
      label: string;
      region: string;
      city: string;
      state?: string;
      searchTerm: string;
      count: number;
      cases: DiagnosticCase[];
    }>();

    // 1. Group actual diagnostic cases by resolved GPS / Indian city
    cases.forEach((c) => {
      const p = c.payload || {};
      let lat = Number(p['GPS Latitude']);
      let lng = Number(p['GPS Longitude']);
      const rawCity = String(p['City'] || '').trim();
      const rawState = String(p['State'] || '').trim();
      const rawDealer = String(p['Dealer / Location'] || '').trim();
      const region = getRegion(p);

      const cityKey = rawCity.toLowerCase();
      const lookup = INDIAN_CITY_COORDINATES[cityKey] || 
        Object.entries(INDIAN_CITY_COORDINATES).find(([k]) => cityKey.includes(k) || k.includes(cityKey))?.[1];

      if ((!lat || !lng || isNaN(lat) || isNaN(lng)) && lookup) {
        lat = lookup.lat;
        lng = lookup.lng;
      }

      if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
        const standardLabel = lookup?.standardName || rawDealer || rawCity || 'Field Diagnostic Center';
        const key = `${lat.toFixed(2)},${lng.toFixed(2)}`;
        const existing = hubMap.get(key);
        if (existing) {
          existing.count += 1;
          existing.cases.push(c);
        } else {
          hubMap.set(key, {
            lat,
            lng,
            label: standardLabel,
            region: lookup?.region || region,
            city: rawCity,
            state: rawState,
            searchTerm: rawCity || standardLabel,
            count: 1,
            cases: [c],
          });
        }
      }
    });

    // 2. Also incorporate registered technician workshops if provided with GPS
    users.forEach((u) => {
      const lat = Number(u.gps_latitude || u.gpsLatitude);
      const lng = Number(u.gps_longitude || u.gpsLongitude);
      if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
        const key = `${lat.toFixed(2)},${lng.toFixed(2)}`;
        if (!hubMap.has(key)) {
          hubMap.set(key, {
            lat,
            lng,
            label: u.dealer_name || u.technician_name || u.city || 'Workshop',
            region: getRegion({ State: u.state }),
            city: u.city || '',
            state: u.state || '',
            searchTerm: u.city || u.dealer_name || '',
            count: u.diagnostic_count || 1,
            cases: [],
          });
        }
      }
    });

    // 3. Convert to markers list
    const result: GlobeMarker[] = Array.from(hubMap.values()).map((entry) => ({
      lat: entry.lat,
      lng: entry.lng,
      label: entry.label,
      region: entry.region,
      city: entry.city,
      state: entry.state,
      searchTerm: entry.searchTerm,
      count: entry.count,
    }));

    return result;
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
      setFocusLocation({ lat: 21.0, lng: 78.5 }); // Geographic center of India
    }
  };

  const handleMarkerClick = (marker: GlobeMarker) => {
    setSelectedMarker(marker);
    setFocusLocation({ lat: marker.lat, lng: marker.lng });
    if (onSelectPlace) {
      onSelectPlace({
        search: marker.searchTerm || marker.city || marker.label,
        region: marker.region,
        label: marker.label,
      });
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
        return <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold">{region || 'West'}</span>;
    }
  };

  const totalZoneCases = useMemo(() => {
    return filteredMarkers.reduce((sum, m) => sum + (m.count || 0), 0);
  }, [filteredMarkers]);

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
            Real-time 3D visualization of recorded GPS inspections across India ordered by North, East, West, and South (N-E-W-S).
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
              onMarkerClick={handleMarkerClick}
              className="h-[480px] w-full"
            />
            <div className="absolute bottom-3 text-center text-[11px] text-slate-500 pointer-events-none select-none">
              Scroll wheel or pinch to zoom · Drag to spin · Click any pin or NEWS button to focus India hubs
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
                <div className="flex items-center gap-2">
                  {selectedZone !== 'All' && (
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectPlace) {
                          onSelectPlace({ region: selectedZone, search: '' });
                        }
                      }}
                      className="text-[10px] bg-cyan-950 border border-cyan-800 text-cyan-300 hover:bg-cyan-900 px-2 py-0.5 rounded font-bold transition-all"
                      title={`Filter table for all ${selectedZone} cases`}
                    >
                      Filter Table ({totalZoneCases}) ⬇
                    </button>
                  )}
                  {selectedZone !== 'All' && (
                    <button
                      onClick={() => handleZoneSelect('All')}
                      className="text-[10px] text-cyan-400 hover:underline"
                    >
                      View All
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable list of all active hubs with actual case counts */}
              <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                {filteredMarkers.map((place, idx) => (
                  <div
                    key={`${place.lat}-${place.lng}-${idx}`}
                    onClick={() => handleMarkerClick(place)}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
                      selectedMarker?.label === place.label
                        ? 'border-cyan-500 bg-cyan-950/40 text-cyan-200'
                        : 'border-slate-800/80 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div
                        className="h-7 w-7 rounded-lg flex items-center justify-center font-extrabold text-xs text-white shrink-0 shadow-sm border border-white/20"
                        style={{
                          backgroundColor: getRegionColor(place.region),
                          boxShadow: `0 0 8px ${getRegionColor(place.region)}55`,
                        }}
                      >
                        {place.count && place.count > 0 ? (
                          <span>{place.count}</span>
                        ) : (
                          <MapPin className="h-3.5 w-3.5" />
                        )}
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
                {filteredMarkers.length === 0 && (
                  <div className="text-xs text-slate-500 text-center py-6">
                    No inspection hubs recorded for this zone yet.
                  </div>
                )}
              </div>
            </div>

            {/* Selected Location Details & 1-Tap Filter Button */}
            {selectedMarker ? (
              <div className="rounded-lg bg-cyan-950/40 p-3 border border-cyan-800/70 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-cyan-300 truncate">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{selectedMarker.label}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${selectedMarker.lat},${selectedMarker.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline shrink-0 ml-2"
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

                {/* 1-Tap Action to Filter Cases in Table Below */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectPlace) {
                      onSelectPlace({
                        search: selectedMarker.searchTerm || selectedMarker.city || selectedMarker.label,
                        region: selectedMarker.region,
                        label: selectedMarker.label,
                      });
                    }
                  }}
                  className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-xs shadow-sm transition-all"
                >
                  <Search className="h-3.5 w-3.5" />
                  View {selectedMarker.count} Matching Case{selectedMarker.count === 1 ? '' : 's'} in Table ⬇
                </button>
              </div>
            ) : (
              <div className="rounded-lg bg-slate-900/60 p-2.5 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Click any hub or zone pin to rotate and view matching cases</span>
                <Globe className="h-3.5 w-3.5 text-slate-500" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

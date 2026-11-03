import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { Plus, Minus, RotateCcw, Play, Pause, Compass } from 'lucide-react';

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label?: string;
  count?: number;
  status?: string;
  region?: string;
  city?: string;
  state?: string;
  [key: string]: any;
}

export interface Globe3DConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: Globe3DConfig;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
  className?: string;
  focusLocation?: { lat: number; lng: number } | null;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createProceduralEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGrad.addColorStop(0, '#0d1b2a');
    oceanGrad.addColorStop(0.5, '#1b263b');
    oceanGrad.addColorStop(1, '#0d1b2a');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2d5a3c';
    ctx.beginPath();
    ctx.ellipse(1100, 320, 380, 180, -0.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1320, 380);
    ctx.lineTo(1390, 380);
    ctx.lineTo(1355, 480);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(1080, 520, 200, 240, 0.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#285235';
    ctx.beginPath();
    ctx.ellipse(450, 280, 220, 150, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(550, 620, 140, 220, 0.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#594a2b';
    ctx.beginPath();
    ctx.ellipse(1650, 680, 120, 90, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        150 + Math.random() * 200,
        30 + Math.random() * 50,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  markers = [],
  config = {},
  onMarkerClick,
  onMarkerHover,
  className,
  focusLocation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [projectedMarkers, setProjectedMarkers] = useState<
    Array<{
      marker: GlobeMarker;
      x: number;
      y: number;
      visible: boolean;
      depth: number;
    }>
  >([]);

  // Auto-rotation toggle
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(true);
  isRotatingRef.current = isRotating;

  // Compass heading (degrees) to rotate compass needle with the Earth
  const [compassHeading, setCompassHeading] = useState(0);

  // Zoom and view control callbacks
  const zoomInRef = useRef<() => void>(() => {});
  const zoomOutRef = useRef<() => void>(() => {});
  const resetViewRef = useRef<() => void>(() => {});
  const setTargetRotationRef = useRef<(rotX: number, rotY: number) => void>(() => {});

  const configRef = useRef(config);
  configRef.current = config;
  const markersRef = useRef(markers);
  markersRef.current = markers;

  // Handle focusLocation changes (when user clicks a cardinal direction)
  useEffect(() => {
    if (!focusLocation) return;
    const { lat, lng } = focusLocation;
    // Calculate rotation to face (lat, lng) toward camera
    const radLng = (lng * Math.PI) / 180;
    const targetY = -radLng - Math.PI / 2;
    const targetX = (lat * Math.PI) / 180 * 0.45;
    setTargetRotationRef.current(targetX, targetY);
  }, [focusLocation]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    const DEFAULT_DISTANCE = 320;
    const MIN_DISTANCE = 160;
    const MAX_DISTANCE = 480;

    let currentCameraDistance = DEFAULT_DISTANCE;
    let targetCameraDistance = DEFAULT_DISTANCE;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, DEFAULT_DISTANCE);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const initialRotX = 0.28;
    const initialRotY = 4.2;
    globeGroup.rotation.x = initialRotX;
    globeGroup.rotation.y = initialRotY;

    let targetRotX: number | null = null;
    let targetRotY: number | null = null;

    setTargetRotationRef.current = (rotX: number, rotY: number) => {
      targetRotX = rotX;
      targetRotY = rotY;
      // Pause auto-rotation when focusing a specific region
      setIsRotating(false);
    };

    const globeRadius = 100;

    // 1. Earth Sphere
    const sphereGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const proceduralTexture = createProceduralEarthTexture();

    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: proceduralTexture,
      roughness: 0.65,
      metalness: 0.1,
      bumpScale: config.bumpScale ?? 0.05,
    });

    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';
    const earthTextureUrls = [
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    ];

    const loadTexture = (idx = 0) => {
      if (idx >= earthTextureUrls.length) return;
      textureLoader.load(
        earthTextureUrls[idx],
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          sphereMaterial.map = tex;
          sphereMaterial.needsUpdate = true;
        },
        undefined,
        () => loadTexture(idx + 1)
      );
    };
    loadTexture(0);

    const globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeMesh);

    // 2. Atmosphere Glow
    const atmosphereColor = config.atmosphereColor || '#4da6ff';
    const atmosphereGeometry = new THREE.SphereGeometry(globeRadius * 1.15, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 color;
        uniform float intensity;
        void main() {
          float rim = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(color, 1.0) * rim * (intensity / 10.0);
        }
      `,
      uniforms: {
        color: { value: new THREE.Color(atmosphereColor) },
        intensity: { value: config.atmosphereIntensity ?? 16.0 },
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphereMesh);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(300, 150, 250);
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(new THREE.Color(atmosphereColor), 1.0);
    backLight.position.set(-300, -100, -250);
    scene.add(backLight);

    // 4. Pin Lines
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const updatePins = () => {
      while (pinGroup.children.length > 0) {
        pinGroup.remove(pinGroup.children[0]);
      }

      const currentMarkers = markersRef.current;
      currentMarkers.forEach((m) => {
        const pinStemHeight = 18;
        const surfacePos = latLngToVector3(m.lat, m.lng, globeRadius);
        const elevatedPos = latLngToVector3(m.lat, m.lng, globeRadius + pinStemHeight);

        const dotGeom = new THREE.SphereGeometry(1.2, 12, 12);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xff3344 });
        const dot = new THREE.Mesh(dotGeom, dotMat);
        dot.position.copy(surfacePos);
        pinGroup.add(dot);

        const lineGeom = new THREE.BufferGeometry().setFromPoints([surfacePos, elevatedPos]);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.6,
        });
        const line = new THREE.Line(lineGeom, lineMat);
        pinGroup.add(line);
      });
    };
    updatePins();

    // 5. Interaction: Drag to rotate
    let isDragging = false;
    let isHovered = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('.globe-ctrl-btn')) return;
      isDragging = true;
      targetRotX = null;
      targetRotY = null;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      dragVelocity = { x: 0, y: 0 };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      dragVelocity = { x: deltaX * 0.005, y: deltaY * 0.005 };

      globeGroup.rotation.y += dragVelocity.x;
      globeGroup.rotation.x += dragVelocity.y;

      globeGroup.rotation.x = Math.max(-1.1, Math.min(1.1, globeGroup.rotation.x));
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    // 6. Interaction: Mouse Wheel Zoom
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.28;
      targetCameraDistance = Math.max(MIN_DISTANCE, Math.min(MAX_DISTANCE, targetCameraDistance + zoomDelta));
    };

    // 7. Touch Pinch-to-Zoom
    let initialPinchDist = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDist = Math.hypot(dx, dy);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = (initialPinchDist - dist) * 0.8;
        targetCameraDistance = Math.max(MIN_DISTANCE, Math.min(MAX_DISTANCE, targetCameraDistance + delta));
        initialPinchDist = dist;
      }
    };

    zoomInRef.current = () => {
      targetCameraDistance = Math.max(MIN_DISTANCE, targetCameraDistance - 45);
    };
    zoomOutRef.current = () => {
      targetCameraDistance = Math.min(MAX_DISTANCE, targetCameraDistance + 45);
    };
    resetViewRef.current = () => {
      targetCameraDistance = DEFAULT_DISTANCE;
      targetRotX = initialRotX;
      targetRotY = initialRotY;
      dragVelocity = { x: 0, y: 0 };
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    // 8. Animation loop
    let animationFrameId: number;
    const tempVec = new THREE.Vector3();
    const tempCameraDir = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      currentCameraDistance += (targetCameraDistance - currentCameraDistance) * 0.12;
      camera.position.z = currentCameraDistance;

      // Handle targeted rotation to a specific coordinate
      if (targetRotX !== null && targetRotY !== null) {
        globeGroup.rotation.x += (targetRotX - globeGroup.rotation.x) * 0.08;
        globeGroup.rotation.y += (targetRotY - globeGroup.rotation.y) * 0.08;
        if (
          Math.abs(targetRotX - globeGroup.rotation.x) < 0.001 &&
          Math.abs(targetRotY - globeGroup.rotation.y) < 0.001
        ) {
          targetRotX = null;
          targetRotY = null;
        }
      } else {
        const autoRotateSpeed = (configRef.current.autoRotateSpeed ?? 0.15) * 0.003;
        if (isRotatingRef.current && !isHovered && !isDragging) {
          globeGroup.rotation.y += autoRotateSpeed;
        }

        if (!isDragging) {
          dragVelocity.x *= 0.94;
          dragVelocity.y *= 0.94;
          globeGroup.rotation.y += dragVelocity.x;
          globeGroup.rotation.x += dragVelocity.y;
        }
      }

      // Update compass needle angle (in degrees)
      const headingDeg = ((-globeGroup.rotation.y * 180) / Math.PI) % 360;
      setCompassHeading(headingDeg);

      renderer.render(scene, camera);

      const currentMarkers = markersRef.current;
      const currentWidth = container.clientWidth;
      const currentHeight = container.clientHeight;

      const projected = currentMarkers.map((marker) => {
        const pinHeight = 18;
        const elevatedLocal = latLngToVector3(marker.lat, marker.lng, globeRadius + pinHeight);
        const surfaceLocal = latLngToVector3(marker.lat, marker.lng, globeRadius);

        tempVec.copy(elevatedLocal);
        globeGroup.localToWorld(tempVec);

        const surfaceWorld = surfaceLocal.clone();
        globeGroup.localToWorld(surfaceWorld);

        tempCameraDir.copy(camera.position).sub(surfaceWorld).normalize();
        const surfaceNormal = surfaceWorld.clone().normalize();
        const dotProduct = surfaceNormal.dot(tempCameraDir);
        const isVisible = dotProduct > 0.08;

        tempVec.project(camera);

        const x = ((tempVec.x + 1) * currentWidth) / 2;
        const y = ((-tempVec.y + 1) * currentHeight) / 2;

        return {
          marker,
          x,
          y,
          visible: isVisible && tempVec.z < 1,
          depth: tempVec.z,
        };
      });

      setProjectedMarkers(projected);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-[520px] bg-[#030712] overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-xl', className)}
    >
      {/* 🧭 Compass Rose Overlay (North / South / East / West) */}
      <div className="absolute bottom-4 left-4 z-30 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 shadow-xl pointer-events-auto">
        <div
          className="relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-950 border border-slate-700 shadow-inner"
          title="Compass heading — points toward North"
        >
          {/* Rotating compass needle */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
            style={{ transform: `rotate(${compassHeading}deg)` }}
          >
            {/* North Red Needle */}
            <div className="absolute top-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[9px] border-b-rose-500" />
            {/* South White Needle */}
            <div className="absolute bottom-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[9px] border-t-slate-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-white shadow-xs z-10" />
          </div>

          {/* Cardinal Letters around rim */}
          <span className="absolute top-0 text-[8px] font-extrabold text-rose-400">N</span>
          <span className="absolute bottom-0 text-[8px] font-bold text-slate-400">S</span>
          <span className="absolute right-0.5 text-[8px] font-bold text-slate-400">E</span>
          <span className="absolute left-0.5 text-[8px] font-bold text-slate-400">W</span>
        </div>

        <div className="text-[11px] leading-tight">
          <div className="font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1">
            <span>Cardinal Direction</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            Heading: {Math.round((compassHeading + 360) % 360)}°
          </div>
        </div>
      </div>

      {/* On-Screen Floating Controls */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-1.5 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-lg border border-slate-800 shadow-xl">
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause Rotation' : 'Resume Rotation'}
          className="globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          {isRotating ? <Pause className="h-4 w-4 text-cyan-400" /> : <Play className="h-4 w-4 text-emerald-400" />}
        </button>

        <div className="h-px bg-slate-800 my-0.5" />

        <button
          type="button"
          onClick={() => zoomInRef.current()}
          title="Zoom In (or use scroll wheel)"
          className="globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => zoomOutRef.current()}
          title="Zoom Out (or use scroll wheel)"
          className="globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>

        <div className="h-px bg-slate-800 my-0.5" />

        <button
          type="button"
          onClick={() => resetViewRef.current()}
          title="Reset View"
          className="globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* 2D Projected Floating Marker Avatars */}
      {projectedMarkers.map(({ marker, x, y, visible }, idx) => {
        if (!visible) return null;

        const avatarSrc =
          marker.src ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(marker.label || 'tech')}`;

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              onMarkerClick?.(marker);
            }}
            onMouseEnter={() => onMarkerHover?.(marker)}
            onMouseLeave={() => onMarkerHover?.(null)}
            className="group cursor-pointer transition-transform duration-150 hover:scale-125 z-20"
          >
            <div className="relative flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-slate-800 border-2 border-cyan-400 shadow-[0_0_12px_rgba(77,166,255,0.7)] overflow-hidden">
              <img
                src={avatarSrc}
                alt={marker.label || 'marker'}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://assets.aceternity.com/avatars/1.webp';
                }}
              />
            </div>

            {/* Hover Tooltip with Label + Region Badge (North / South / East / West) */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none whitespace-nowrap z-30 animate-in fade-in zoom-in-95 duration-100">
              <div className="bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-md shadow-xl border border-slate-700 flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{marker.label}</span>
                  {marker.count !== undefined && (
                    <span className="text-[10px] text-cyan-300">({marker.count})</span>
                  )}
                </div>
                {marker.region && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-800/60 mt-0.5">
                    {marker.region} Zone
                  </span>
                )}
              </div>
              <div className="w-1.5 h-1.5 bg-slate-900 border-r border-b border-slate-700 rotate-45 -mt-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

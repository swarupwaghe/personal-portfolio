"use client";

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

// Procedural SVG Gear Path generator for precise mechanical gear geometry
function createGearPath(
  teeth: number,
  outerRadius: number,
  innerRadius: number,
  holeRadius: number = 0
): string {
  const points: string[] = [];
  const angleStep = (Math.PI * 2) / teeth;
  const halfStep = angleStep / 2;
  const quarterStep = angleStep / 4;

  for (let i = 0; i < teeth; i++) {
    const angle = i * angleStep;

    // Root start
    const a0 = angle - quarterStep;
    const x0 = Math.cos(a0) * innerRadius;
    const y0 = Math.sin(a0) * innerRadius;

    // Tooth tip lead-in
    const a1 = angle - quarterStep * 0.55;
    const x1 = Math.cos(a1) * outerRadius;
    const y1 = Math.sin(a1) * outerRadius;

    // Tooth tip trailing
    const a2 = angle + quarterStep * 0.55;
    const x2 = Math.cos(a2) * outerRadius;
    const y2 = Math.sin(a2) * outerRadius;

    // Root end
    const a3 = angle + quarterStep;
    const x3 = Math.cos(a3) * innerRadius;
    const y3 = Math.sin(a3) * innerRadius;

    if (i === 0) {
      points.push(`M ${x0.toFixed(2)} ${y0.toFixed(2)}`);
    } else {
      points.push(`L ${x0.toFixed(2)} ${y0.toFixed(2)}`);
    }
    points.push(`L ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    points.push(`L ${x2.toFixed(2)} ${y2.toFixed(2)}`);
    points.push(`L ${x3.toFixed(2)} ${y3.toFixed(2)}`);
  }
  points.push('Z');

  // Cutout center hole (counter-clockwise path)
  if (holeRadius > 0) {
    points.push(
      `M ${holeRadius} 0 A ${holeRadius} ${holeRadius} 0 1 0 ${-holeRadius} 0 A ${holeRadius} ${holeRadius} 0 1 0 ${holeRadius} 0 Z`
    );
  }

  return points.join(' ');
}

export function InteractiveTechBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  // Smooth springs for fluid, physics-based rotation on scroll
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
  });

  // Gear rotation calculations (gear ratio linked)
  const mainGearRotation = useTransform(smoothScrollY, [0, 4000], [0, 540]);
  const darkGearRotation = useTransform(smoothScrollY, [0, 4000], [0, -720]);
  const orangeGearRotation = useTransform(smoothScrollY, [0, 4000], [0, 600]);
  const blueGearRotation = useTransform(smoothScrollY, [0, 4000], [0, -1200]);
  const hudRing1Rotation = useTransform(smoothScrollY, [0, 4000], [0, -360]);
  const hudRing2Rotation = useTransform(smoothScrollY, [0, 4000], [0, 450]);
  const hudRing3Rotation = useTransform(smoothScrollY, [0, 4000], [0, -180]);

  // Secondary top-right subtle gear rotation
  const trGear1Rotation = useTransform(smoothScrollY, [0, 4000], [0, 400]);
  const trGear2Rotation = useTransform(smoothScrollY, [0, 4000], [0, -600]);

  // Subtle parallax translation for depth
  const parallaxY = useTransform(smoothProgress, [0, 1], [0, -40]);

  // Memoized SVG paths for crisp performance
  const mainGearPath = useMemo(() => createGearPath(14, 110, 88, 42), []);
  const darkGearPath = useMemo(() => createGearPath(12, 75, 58, 22), []);
  const orangeGearPath = useMemo(() => createGearPath(10, 50, 38, 14), []);
  const blueGearPath = useMemo(() => createGearPath(8, 30, 22, 8), []);
  const miniGearPath = useMemo(() => createGearPath(9, 42, 32, 12), []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* 1. Underlying Technical Artwork Background with Ambient Dark Vignette & Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 35%, rgba(37, 99, 235, 0.12) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.08) 0%, transparent 40%),
            url('/images/bg-gears.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.38,
          filter: 'contrast(1.2) brightness(0.7) invert(0.05)',
        }}
      />

      {/* 2. Soft Blueprint Diagonal Lines & Ambient Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3. Interactive Motion Gears & HUD Mechanism Group (Bottom-Left / Center-Left) */}
      <motion.div
        style={{
          position: 'absolute',
          left: 'max(-40px, -2vw)',
          bottom: 'max(-40px, -4vh)',
          width: '580px',
          height: '580px',
          y: shouldReduceMotion ? 0 : parallaxY,
          transformOrigin: 'bottom left',
          opacity: 0.9,
        }}
      >
        <svg
          viewBox="0 0 580 580"
          width="100%"
          height="100%"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Gear Drop Shadows & Subtle Tech Glows */}
            <filter id="gearGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.2" />
              <feDropShadow dx="2" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
            </filter>
            <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
            </filter>
            {/* Gradients */}
            <linearGradient id="mainGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="darkGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="blueGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="orangeGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>

          {/* Connected Circuit & Schematic Lines */}
          <g stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.3" fill="none">
            {/* Circuit traces */}
            <path d="M 120 400 L 250 400 L 290 440 L 390 440" />
            <path d="M 120 400 C 180 320 280 320 330 380" strokeDasharray="3 3" />
            <path d="M 330 380 L 410 380 L 430 400" />
            <path d="M 200 240 L 200 180 L 240 140 L 320 140" />

            {/* Orbiting HUD Arc Guide */}
            <circle cx="120" cy="400" r="190" strokeDasharray="6 6" strokeOpacity="0.2" />
            <circle cx="120" cy="400" r="230" strokeOpacity="0.15" />

            {/* Hexagonal Tech Decals */}
            <polygon points="320,440 330,422 350,422 360,440 350,458 330,458" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(15, 23, 42, 0.7)" />
            <polygon points="365,470 372,458 388,458 395,470 388,482 372,482" stroke="#818cf8" strokeWidth="1" fill="rgba(15, 23, 42, 0.5)" />
            <polygon points="410,440 418,426 434,426 442,440 434,454 418,454" stroke="#64748b" strokeWidth="1" fill="rgba(15, 23, 42, 0.4)" />
          </g>

          {/* Node Connection Dots */}
          <g fill="#38bdf8">
            <circle cx="250" cy="400" r="3.5" />
            <circle cx="290" cy="440" r="4.5" />
            <circle cx="390" cy="440" r="3.5" />
            <circle cx="330" cy="380" r="3" />
            <circle cx="410" cy="380" r="3.5" />
            <circle cx="200" cy="180" r="3" />
          </g>

          {/* HUD Concentric Radar Arc 1 (With Directional Arrowheads) */}
          <motion.g
            style={{
              originX: '120px',
              originY: '400px',
              rotate: shouldReduceMotion ? 0 : hudRing1Rotation,
            }}
          >
            <circle
              cx="120"
              cy="400"
              r="150"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeDasharray="40 18 10 18"
              strokeOpacity="0.35"
            />
            {/* Arrowhead marker on HUD arc */}
            <polygon
              points="120,246 113,258 127,258"
              fill="#38bdf8"
              transform="rotate(35 120 400)"
            />
            <polygon
              points="120,246 113,258 127,258"
              fill="#38bdf8"
              transform="rotate(110 120 400)"
            />
            <polygon
              points="120,246 113,258 127,258"
              fill="#38bdf8"
              transform="rotate(220 120 400)"
            />
          </motion.g>

          {/* HUD Concentric Radar Arc 2 (Opposite Direction) */}
          <motion.g
            style={{
              originX: '120px',
              originY: '400px',
              rotate: shouldReduceMotion ? 0 : hudRing2Rotation,
            }}
          >
            <circle
              cx="120"
              cy="400"
              r="175"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
              strokeDasharray="70 25 15 25"
              strokeOpacity="0.35"
            />
            {/* Caliper ticks */}
            <line x1="120" y1="220" x2="120" y2="230" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(20 120 400)" />
            <line x1="120" y1="220" x2="120" y2="230" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(40 120 400)" />
            <line x1="120" y1="220" x2="120" y2="230" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(60 120 400)" />
            <line x1="120" y1="220" x2="120" y2="230" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(80 120 400)" />
            <line x1="120" y1="220" x2="120" y2="230" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(100 120 400)" />
          </motion.g>

          {/* HUD Outer Track with Node */}
          <motion.g
            style={{
              originX: '120px',
              originY: '400px',
              rotate: shouldReduceMotion ? 0 : hudRing3Rotation,
            }}
          >
            <circle
              cx="120"
              cy="400"
              r="205"
              fill="none"
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.3"
            />
            <circle cx="120" cy="195" r="4.5" fill="#38bdf8" />
          </motion.g>

          {/* 4. Orange Outlined Setting Gear (Top-Left Position: x=170, y=240) */}
          <motion.g
            style={{
              originX: '170px',
              originY: '240px',
              rotate: shouldReduceMotion ? 0 : orangeGearRotation,
            }}
          >
            <g transform="translate(170, 240)">
              {/* Outer Gear Outline */}
              <path
                d={orangeGearPath}
                fill="rgba(249, 115, 22, 0.15)"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinejoin="round"
                filter="url(#subtleShadow)"
              />
              {/* Center decorative ring */}
              <circle cx="0" cy="0" r="12" fill="none" stroke="#f97316" strokeWidth="2" />
              <circle cx="0" cy="0" r="4" fill="#fb923c" />
            </g>
          </motion.g>

          {/* 5. Dark Titanium Setting Gear (Interlocking at x=340, y=410) */}
          <motion.g
            style={{
              originX: '340px',
              originY: '410px',
              rotate: shouldReduceMotion ? 0 : darkGearRotation,
            }}
          >
            <g transform="translate(340, 410)">
              {/* Dark Gear Body */}
              <path
                d={darkGearPath}
                fill="url(#darkGearGrad)"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinejoin="round"
                filter="url(#gearGlow)"
              />
              {/* Inner ring and hub */}
              <circle cx="0" cy="0" r="32" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" strokeOpacity="0.6" />
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="7" fill="#38bdf8" />
            </g>
          </motion.g>

          {/* 6. Cyan/Sky Blue Accent Setting Gear (Bottom position: x=210, y=510) */}
          <motion.g
            style={{
              originX: '210px',
              originY: '510px',
              rotate: shouldReduceMotion ? 0 : blueGearRotation,
            }}
          >
            <g transform="translate(210, 510)">
              <path
                d={blueGearPath}
                fill="url(#blueGearGrad)"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeLinejoin="round"
                filter="url(#gearGlow)"
              />
              <circle cx="0" cy="0" r="7" fill="#f8fafc" />
            </g>
          </motion.g>

          {/* 7. Primary Large Mechanical Setting Gear (Center: x=120, y=400) */}
          <motion.g
            style={{
              originX: '120px',
              originY: '400px',
              rotate: shouldReduceMotion ? 0 : mainGearRotation,
            }}
          >
            <g transform="translate(120, 400)">
              {/* Gear Body with Cutout */}
              <path
                d={mainGearPath}
                fill="url(#mainGearGrad)"
                stroke="#475569"
                strokeWidth="2.5"
                strokeLinejoin="round"
                filter="url(#gearGlow)"
              />

              {/* 6 Spoke Beams connecting rim to hub */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1="0"
                  y1="-38"
                  x2="0"
                  y2="-88"
                  stroke="#475569"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform={`rotate(${deg})`}
                />
              ))}

              {/* Spoke Accent lines */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={`acc-${deg}`}
                  x1="0"
                  y1="-44"
                  x2="0"
                  y2="-82"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.7"
                  transform={`rotate(${deg})`}
                />
              ))}

              {/* Center Hub */}
              <circle cx="0" cy="0" r="38" fill="url(#mainGearGrad)" stroke="#475569" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="0" cy="0" r="8" fill="#38bdf8" />
            </g>
          </motion.g>
        </svg>
      </motion.div>

      {/* 8. Balanced Top-Right Floating Tech Gear Accent */}
      <motion.div
        style={{
          position: 'absolute',
          top: '40px',
          right: '-20px',
          width: '260px',
          height: '260px',
          opacity: 0.5,
          y: shouldReduceMotion ? 0 : parallaxY,
          transformOrigin: 'top right',
        }}
      >
        <svg viewBox="0 0 260 260" width="100%" height="100%" style={{ overflow: 'visible' }}>
          {/* Top-Right Secondary Gear 1 */}
          <motion.g
            style={{
              originX: '130px',
              originY: '110px',
              rotate: shouldReduceMotion ? 0 : trGear1Rotation,
            }}
          >
            <g transform="translate(130, 110)">
              <path
                d={miniGearPath}
                fill="rgba(30, 41, 59, 0.7)"
                stroke="#64748b"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="0" cy="0" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            </g>
          </motion.g>

          {/* Top-Right Interlocking Gear 2 */}
          <motion.g
            style={{
              originX: '195px',
              originY: '165px',
              rotate: shouldReduceMotion ? 0 : trGear2Rotation,
            }}
          >
            <g transform="translate(195, 165)">
              <path
                d={orangeGearPath}
                fill="none"
                stroke="#f97316"
                strokeWidth="1.8"
                strokeLinejoin="round"
                strokeOpacity="0.8"
              />
              <circle cx="0" cy="0" r="8" fill="#0f172a" stroke="#f97316" strokeWidth="1.2" />
            </g>
          </motion.g>

          {/* Faint HUD guide circle */}
          <circle cx="130" cy="110" r="75" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.25" />
        </svg>
      </motion.div>
    </div>
  );
}

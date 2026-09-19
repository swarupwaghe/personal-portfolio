"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SpatialCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number; // max tilt angle in degrees
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function SpatialCard({
  children,
  className = '',
  depth = 16,
  onClick,
  style,
}: SpatialCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values normalized [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Responsive physics spring for ultra-smooth 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 22 });

  // Map mouse offsets to rotateX and rotateY
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [depth, -depth]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-depth, depth]);

  // Dynamic 3D scale elevation on hover tilt
  const scale = useTransform(mouseXSpring, [-0.5, 0, 0.5], [1.015, 1.02, 1.015]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // CSS Custom Variables mutation for glare spot and 3D shadow position
    const glareX = Math.round((mouseX / rect.width) * 100);
    const glareY = Math.round((mouseY / rect.height) * 100);
    ref.current.style.setProperty('--glare-x', `${glareX}%`);
    ref.current.style.setProperty('--glare-y', `${glareY}%`);
    ref.current.style.setProperty('--tilt-x-val', `${(yPct * -depth).toFixed(2)}deg`);
    ref.current.style.setProperty('--tilt-y-val', `${(xPct * depth).toFixed(2)}deg`);
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.classList.add('hovered');
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.classList.remove('hovered');
    }
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`spatial-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1200,
        willChange: 'transform',
        ...style,
      }}
    >
      {/* 3D Corner HUD Crosshairs floating in space */}
      <span className="hud-corner top-left depth-layer-4">+</span>
      <span className="hud-corner top-right depth-layer-4">+</span>
      <span className="hud-corner bottom-left depth-layer-4">+</span>
      <span className="hud-corner bottom-right depth-layer-4">+</span>

      {/* Dynamic Specular Light Glare Overlay */}
      <div className="spatial-specular-glare" />

      {/* 3D Edge Bevel Highlights */}
      <div className="spatial-bevel-border" />

      {/* Volumetric Content Layer */}
      <div className="spatial-card-content">{children}</div>
    </motion.div>
  );
}



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
  depth = 10,
  onClick,
  style,
}: SpatialCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values normalized [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth 60fps 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  // Map mouse offsets to rotateX and rotateY
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [depth, -depth]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-depth, depth]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Direct CSS variable mutation (0 React re-renders!)
    ref.current.style.setProperty('--glare-x', `${Math.round((mouseX / rect.width) * 100)}%`);
    ref.current.style.setProperty('--glare-y', `${Math.round((mouseY / rect.height) * 100)}%`);
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
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
    >
      {/* Dynamic Specular Light Glare Overlay using CSS Custom Variables */}
      <div className="spatial-specular-glare" />
      {/* Volumetric Content Layer */}
      <div className="spatial-card-content">{children}</div>
    </motion.div>
  );
}

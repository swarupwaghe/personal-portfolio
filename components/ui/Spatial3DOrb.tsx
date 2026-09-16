"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Spatial3DOrb() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 140;
    const height = 140;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. High-End Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4, 30);
    cyanLight.position.set(4, 4, 4);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4, 30);
    emeraldLight.position.set(-4, -4, 2);
    scene.add(emeraldLight);

    const violetLight = new THREE.PointLight(0xa78bfa, 2.5, 30);
    violetLight.position.set(0, 5, -3);
    scene.add(violetLight);

    // 3. Inner Luminous Core
    const innerCoreGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.2,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    scene.add(innerCore);

    // 4. Outer Translucent Holographic Glass Crystal Sphere
    const glassGeo = new THREE.IcosahedronGeometry(1.3, 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.4,
      wireframe: false,
    });
    const glassOrb = new THREE.Mesh(glassGeo, glassMat);
    scene.add(glassOrb);

    // 5. Outer Sleek Geometry Frame
    const wireframeGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframeMesh);

    // 6. Sleek Glowing Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // 7. Micro Particle Aura
    const auraCount = 50;
    const auraGeo = new THREE.BufferGeometry();
    const auraPos = new Float32Array(auraCount * 3);
    for (let i = 0; i < auraCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.8;
      auraPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      auraPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      auraPos[i * 3 + 2] = r * Math.cos(phi);
    }
    auraGeo.setAttribute('position', new THREE.BufferAttribute(auraPos, 3));
    const auraMat = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const auraPoints = new THREE.Points(auraGeo, auraMat);
    scene.add(auraPoints);

    // 8. Animation Loop with Floating Physics
    let animId: number;
    let speedMult = 1;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      speedMult += ((isHovered ? 2.2 : 1) - speedMult) * 0.08;

      // Soft Floating Y Oscillation
      const floatY = Math.sin(elapsedTime * 1.8) * 0.12;
      glassOrb.position.y = floatY;
      innerCore.position.y = floatY;
      wireframeMesh.position.y = floatY;

      // Rotations
      glassOrb.rotation.y += 0.008 * speedMult;
      glassOrb.rotation.x += 0.005 * speedMult;

      wireframeMesh.rotation.y -= 0.006 * speedMult;
      wireframeMesh.rotation.z += 0.004 * speedMult;

      ring1.rotation.z += 0.012 * speedMult;
      ring2.rotation.z -= 0.014 * speedMult;
      auraPoints.rotation.y += 0.005 * speedMult;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isHovered]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="spatial-3d-orb-container depth-layer-4"
      title="Holographic Cyber Core"
      style={{
        width: '140px',
        height: '140px',
        margin: '0 auto 8px',
        cursor: 'pointer',
        filter: 'drop-shadow(0 0 20px rgba(52, 211, 153, 0.45)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.3))',
        transition: 'transform 0.3s ease',
      }}
    />
  );
}

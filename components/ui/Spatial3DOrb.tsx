"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Spatial3DOrb() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 180;
    const height = 180;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. High-End Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4.5, 30);
    cyanLight.position.set(4, 4, 4);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4.5, 30);
    emeraldLight.position.set(-4, -4, 2);
    scene.add(emeraldLight);

    const violetLight = new THREE.PointLight(0xc084fc, 3, 30);
    violetLight.position.set(0, 5, -3);
    scene.add(violetLight);

    // 3. Inner Luminous Core
    const innerCoreGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 1.4,
      roughness: 0.1,
      metalness: 0.3,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    scene.add(innerCore);

    // 4. Outer Translucent Holographic Glass Crystal Sphere
    const glassGeo = new THREE.IcosahedronGeometry(1.35, 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.5,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.5,
      wireframe: false,
    });
    const glassOrb = new THREE.Mesh(glassGeo, glassMat);
    scene.add(glassOrb);

    // 5. Outer Sleek Geometry Wireframe Frame
    const wireframeGeo = new THREE.IcosahedronGeometry(1.78, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframeMesh);

    // Outer Octahedron Ring frame
    const octOuterGeo = new THREE.OctahedronGeometry(2.1, 0);
    const octOuterMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const octOuterMesh = new THREE.Mesh(octOuterGeo, octOuterMat);
    scene.add(octOuterMesh);

    // 6. Sleek Glowing Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.25, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.7,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // 7. Micro Particle Aura
    const auraCount = 70;
    const auraGeo = new THREE.BufferGeometry();
    const auraPos = new Float32Array(auraCount * 3);
    for (let i = 0; i < auraCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.1 + Math.random() * 0.9;
      auraPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      auraPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      auraPos[i * 3 + 2] = r * Math.cos(phi);
    }
    auraGeo.setAttribute('position', new THREE.BufferAttribute(auraPos, 3));
    const auraMat = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.07,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const auraPoints = new THREE.Points(auraGeo, auraMat);
    scene.add(auraPoints);

    // Group for Drag-to-Rotate Interaction
    const interactiveGroup = new THREE.Group();
    scene.add(interactiveGroup);
    interactiveGroup.add(glassOrb);
    interactiveGroup.add(innerCore);
    interactiveGroup.add(wireframeMesh);
    interactiveGroup.add(octOuterMesh);

    // Mouse drag handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      rotationVelocityRef.current = {
        x: deltaY * 0.006,
        y: deltaX * 0.006,
      };

      interactiveGroup.rotation.x += rotationVelocityRef.current.x;
      interactiveGroup.rotation.y += rotationVelocityRef.current.y;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 8. Animation Loop with Floating Physics & Inertia Momentum
    let animId: number;
    let speedMult = 1;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      speedMult += ((isHovered ? 2.2 : 1) - speedMult) * 0.08;

      // Soft Floating Y Oscillation
      const floatY = Math.sin(elapsedTime * 1.8) * 0.12;
      interactiveGroup.position.y = floatY;

      // Inertia decay if not dragging
      if (!isDraggingRef.current) {
        interactiveGroup.rotation.y += 0.008 * speedMult + rotationVelocityRef.current.y;
        interactiveGroup.rotation.x += 0.005 * speedMult + rotationVelocityRef.current.x;
        rotationVelocityRef.current.x *= 0.94;
        rotationVelocityRef.current.y *= 0.94;
      }

      wireframeMesh.rotation.z += 0.004 * speedMult;
      octOuterMesh.rotation.y -= 0.007 * speedMult;

      ring1.rotation.z += 0.014 * speedMult;
      ring2.rotation.z -= 0.016 * speedMult;
      auraPoints.rotation.y += 0.006 * speedMult;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
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
      title="Interactive 3D Cyber Core (Click & Drag to Rotate)"
      style={{
        width: '180px',
        height: '180px',
        margin: '0 auto 12px',
        cursor: isDraggingRef.current ? 'grabbing' : 'grab',
        filter: 'drop-shadow(0 0 25px rgba(52, 211, 153, 0.5)) drop-shadow(0 0 45px rgba(56, 189, 248, 0.35))',
        transition: 'transform 0.3s ease, filter 0.3s ease',
      }}
    />
  );
}


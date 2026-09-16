"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, High-Performance Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080c, 0.012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Performance optimization
      powerPreference: 'high-performance',
      precision: 'mediump',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x38bdf8, 2, 70);
    cyanPointLight.position.set(20, 20, 20);
    scene.add(cyanPointLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 2, 70);
    emeraldPointLight.position.set(-20, -20, 10);
    scene.add(emeraldPointLight);

    // 3. Floating 3D Geometric Meshes
    // Main TorusKnot
    const torusKnotGeo = new THREE.TorusKnotGeometry(4.5, 0.8, 64, 12);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(-24, 12, -15);
    scene.add(torusKnot);

    // Secondary Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(26, -10, -10);
    scene.add(ico);

    // Octahedron Accent
    const octGeo = new THREE.OctahedronGeometry(4, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(18, 18, -20);
    scene.add(oct);

    // 4. GPU-Accelerated 3D Particle System
    const particleCount = 160;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }

    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.9,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 5. Throttled Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * -10;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Smooth 60FPS RAF Loop (GPU Rotations, Zero CPU Array Mutating)
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(scene.position);

      // GPU Rotations
      torusKnot.rotation.x += 0.004;
      torusKnot.rotation.y += 0.006;

      ico.rotation.x -= 0.003;
      ico.rotation.y += 0.005;

      oct.rotation.y += 0.006;

      particleSystem.rotation.y += 0.0006;
      particleSystem.rotation.x += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

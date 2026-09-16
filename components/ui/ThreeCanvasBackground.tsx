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
    scene.fog = new THREE.FogExp2(0x05080c, 0.01);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 38;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Dynamic 3D Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x38bdf8, 3, 90);
    cyanPointLight.position.set(25, 25, 25);
    scene.add(cyanPointLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 3, 90);
    emeraldPointLight.position.set(-25, -25, 20);
    scene.add(emeraldPointLight);

    const purplePointLight = new THREE.PointLight(0xa78bfa, 2.5, 80);
    purplePointLight.position.set(0, 30, -10);
    scene.add(purplePointLight);

    // 3. Floating 3D Geometric Meshes
    // Main TorusKnot
    const torusKnotGeo = new THREE.TorusKnotGeometry(5.2, 0.9, 100, 16);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(-26, 14, -12);
    scene.add(torusKnot);

    // Secondary Icosahedron with Inner Solid Core
    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(28, -12, -8);
    scene.add(ico);

    // Solid Inner Core of Icosahedron
    const icoCoreGeo = new THREE.IcosahedronGeometry(3.5, 0);
    const icoCoreMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });
    const icoCore = new THREE.Mesh(icoCoreGeo, icoCoreMat);
    icoCore.position.copy(ico.position);
    scene.add(icoCore);

    // Octahedron Accent
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(22, 22, -18);
    scene.add(oct);

    // Dodecahedron Floating Mesh
    const dodecaGeo = new THREE.DodecahedronGeometry(4, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const dodeca = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodeca.position.set(-20, -18, -15);
    scene.add(dodeca);

    // 3D Orbital Rings System
    const orbitalRingGeo = new THREE.TorusGeometry(12, 0.08, 16, 100);
    const orbitalRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.2,
    });
    const orbitalRing = new THREE.Mesh(orbitalRingGeo, orbitalRingMat);
    orbitalRing.position.set(0, 0, -25);
    orbitalRing.rotation.x = Math.PI / 3;
    scene.add(orbitalRing);

    // 4. GPU-Accelerated 3D Particle System
    const particleCount = 280;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;
      scales[i] = Math.random() * 0.8 + 0.4;
    }

    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.1,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 5. Throttled Mouse & Scroll Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 14;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * -14;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Smooth 60FPS RAF Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(scene.position);

      // GPU Rotations
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.007;

      ico.rotation.x -= 0.004;
      ico.rotation.y += 0.006;
      icoCore.rotation.x -= 0.004;
      icoCore.rotation.y += 0.006;

      oct.rotation.y += 0.008;
      oct.rotation.z += 0.004;

      dodeca.rotation.x += 0.006;
      dodeca.rotation.y -= 0.005;

      orbitalRing.rotation.z += 0.002;
      orbitalRing.rotation.y += 0.003;

      particleSystem.rotation.y += 0.0008;
      particleSystem.rotation.x += 0.0005;

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


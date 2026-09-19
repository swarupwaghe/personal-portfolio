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
    const torusKnotGeo = new THREE.TorusKnotGeometry(5.8, 1.1, 120, 16);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      roughness: 0.1,
      metalness: 0.9,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(-28, 16, -10);
    scene.add(torusKnot);

    // Secondary Icosahedron with Inner Solid Core
    const icoGeo = new THREE.IcosahedronGeometry(7.5, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(30, -14, -6);
    scene.add(ico);

    // Solid Inner Core of Icosahedron
    const icoCoreGeo = new THREE.IcosahedronGeometry(3.8, 0);
    const icoCoreMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 0.9,
      roughness: 0.1,
    });
    const icoCore = new THREE.Mesh(icoCoreGeo, icoCoreMat);
    icoCore.position.copy(ico.position);
    scene.add(icoCore);

    // Floating Cyber Cube 1 (Left accent)
    const cube1Geo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const cube1Mat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cube1 = new THREE.Mesh(cube1Geo, cube1Mat);
    cube1.position.set(-24, -16, -12);
    scene.add(cube1);

    // Floating Cyber Cube 2 (Right accent)
    const cube2Geo = new THREE.BoxGeometry(5.5, 5.5, 5.5);
    const cube2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const cube2 = new THREE.Mesh(cube2Geo, cube2Mat);
    cube2.position.set(26, 20, -16);
    scene.add(cube2);

    // Octahedron Accent
    const octGeo = new THREE.OctahedronGeometry(5.5, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(24, 24, -18);
    scene.add(oct);

    // Dodecahedron Floating Mesh
    const dodecaGeo = new THREE.DodecahedronGeometry(4.8, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const dodeca = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodeca.position.set(-22, -22, -14);
    scene.add(dodeca);

    // 3D Orbital Rings System
    const orbitalRingGeo = new THREE.TorusGeometry(14, 0.1, 16, 120);
    const orbitalRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
    });
    const orbitalRing = new THREE.Mesh(orbitalRingGeo, orbitalRingMat);
    orbitalRing.position.set(0, 0, -28);
    orbitalRing.rotation.x = Math.PI / 3;
    scene.add(orbitalRing);

    // Animated 3D Cyber Perspective Grid Plane at Horizon
    const gridHelper = new THREE.GridHelper(180, 45, 0x38bdf8, 0x1e293b);
    gridHelper.position.set(0, -32, -15);
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.22;
    }
    scene.add(gridHelper);

    // 4. GPU-Accelerated 3D Particle System
    const particleCount = 420;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      scales[i] = Math.random() * 0.8 + 0.4;
    }

    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.25,
      transparent: true,
      opacity: 0.8,
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
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 18;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * -18;
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
      torusKnot.rotation.x += 0.006;
      torusKnot.rotation.y += 0.008;

      ico.rotation.x -= 0.005;
      ico.rotation.y += 0.007;
      icoCore.rotation.x -= 0.005;
      icoCore.rotation.y += 0.007;

      cube1.rotation.x += 0.007;
      cube1.rotation.y += 0.009;

      cube2.rotation.x -= 0.006;
      cube2.rotation.z += 0.008;

      oct.rotation.y += 0.009;
      oct.rotation.z += 0.005;

      dodeca.rotation.x += 0.007;
      dodeca.rotation.y -= 0.006;

      orbitalRing.rotation.z += 0.003;
      orbitalRing.rotation.y += 0.004;

      particleSystem.rotation.y += 0.0009;
      particleSystem.rotation.x += 0.0006;

      // Infinite scroll grid motion effect
      gridHelper.position.z = (Date.now() * 0.004) % 4 - 15;

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


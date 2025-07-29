'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const ThreeDSpace = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 2000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const starVertices: number[] = [];
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 3000;
      const y = (Math.random() - 0.5) * 3000;
      const z = (Math.random() - 0.5) * 3000;
      starVertices.push(x, y, z);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    const starColor = theme === 'light' ? 0x1a1a1a : 0xaaaaaa; // gray-900 for light, original for dark

    const starMaterial = new THREE.PointsMaterial({ 
        color: starColor,
        size: 0.7,
        transparent: true
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      stars.rotation.y = -elapsedTime * 0.02;

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onMouseMove);
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeDSpace;

'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ThreeDSpace = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isMobileLike = isMobileViewport || isCoarsePointer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 2000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobileLike ? 1.5 : 2));
    currentMount.appendChild(renderer.domElement);

    const starCount = prefersReducedMotion ? 6000 : isMobileLike ? 9000 : 15000;
    const starVertices: number[] = [];
    for (let i = 0; i < starCount; i++) {
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

    const scrollState = { progress: 0 };
    const gsapContext = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(scrollState, {
          progress: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: isMobileLike ? 1.25 : 1.1,
          },
        });
      }
    }, currentMount);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    };
    if (!isMobileLike && !prefersReducedMotion) {
      document.addEventListener('mousemove', onMouseMove);
    }

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const scrollProgress = scrollState.progress;
      const scrollYStrength = prefersReducedMotion ? 0.2 : isMobileLike ? 0.45 : 0.72;
      const scrollXStrength = prefersReducedMotion ? 0.03 : isMobileLike ? 0.06 : 0.1;
      const cameraDepthStrength = prefersReducedMotion ? 80 : isMobileLike ? 150 : 240;
      const mouseStrength = prefersReducedMotion ? 0 : isMobileLike ? 0 : 0.5;

      stars.rotation.y = -elapsedTime * 0.018 + scrollProgress * scrollYStrength;
      stars.rotation.x = scrollProgress * scrollXStrength;

      camera.position.z = 1000 - scrollProgress * cameraDepthStrength;

      camera.position.x += (mouseX * mouseStrength - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * mouseStrength - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobileLike ? 1.5 : 2));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      gsapContext.revert();

      window.removeEventListener('resize', handleResize);
      if (!isMobileLike && !prefersReducedMotion) {
        document.removeEventListener('mousemove', onMouseMove);
      }

      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();

      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeDSpace;

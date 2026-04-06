"use client";

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeDSpace from '@/components/3d-space';
import { AppHeader } from '@/components/header';
import { AppFooter } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { SplashScreen } from '@/components/splash-screen';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show splash for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    let mm: gsap.MatchMedia | null = null;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.scroll-3d-section');

      mm = gsap.matchMedia();

      const createSectionTweens = (config: {
        opacity: number;
        y: number;
        z: number;
        scale: number;
        rotationX: number;
        rotationY: number;
        start: string;
        end: string;
        scrub: number;
      }) => {
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            {
              opacity: config.opacity,
              y: config.y,
              z: config.z,
              scale: config.scale,
              rotationX: config.rotationX,
              rotationY: config.rotationY,
              transformPerspective: 1000,
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: config.start,
                end: config.end,
                scrub: config.scrub,
              },
            }
          );
        });
      };

      mm.add('(prefers-reduced-motion: reduce)', () => {
        sections.forEach((section) => {
          gsap.set(section, {
            opacity: 1,
            clearProps: 'transform',
          });
        });
      });

      mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
        createSectionTweens({
          opacity: 0.86,
          y: 26,
          z: -80,
          scale: 0.985,
          rotationX: 4,
          rotationY: -1.5,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1.2,
        });
      });

      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        createSectionTweens({
          opacity: 0.74,
          y: 44,
          z: -150,
          scale: 0.965,
          rotationX: 8,
          rotationY: -3,
          start: 'top 92%',
          end: 'top 45%',
          scrub: 1.1,
        });
      });
    }, contentRef);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence> */}

    {/*   {!loading && ( */}
        <div className="relative flex flex-col min-h-screen">
          <ScrollProgressBar />
          <ThreeDSpace />
          <AppHeader />
          <main className="flex-grow">
            <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-8 [perspective:1000px]">
              <section className="scroll-3d-section will-change-transform">
                <HeroSection />
              </section>
              <section className="scroll-3d-section will-change-transform">
                <SkillsSection />
              </section>
              <section className="scroll-3d-section will-change-transform">
                <ExperienceSection />
              </section>
              <section className="scroll-3d-section will-change-transform">
                <ProjectsSection />
              </section>
              <section className="scroll-3d-section will-change-transform">
                <ContactSection />
              </section>
            </div>
          </main>
          <div className="w-full bg-transparent backdrop-blur-sm border-t border-border/50 flex justify-center py-4">
            <AppFooter />
          </div>
        </div>
     {/*  )} */}
    </>
  );
}

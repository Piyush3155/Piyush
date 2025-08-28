"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show splash for 2 seconds
    return () => clearTimeout(timer);
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <HeroSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
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

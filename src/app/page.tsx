import ThreeDSpace from '@/components/3d-space';
import { AppHeader } from '@/components/header';
import { AppFooter } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
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
      <div className="w-full bg-background/80 backdrop-blur-sm border-t border-border/50 flex justify-center py-4">
      <AppFooter />
      </div>
    </div>
  );
}

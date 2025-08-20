import Image from 'next/image';
import { ParticleTextEffect } from '../particle-text-effect';
import { ShiningText } from '../ui/shining-text';

export function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-32 md:py-40 font-headline">
      <div className="container mx-auto text-center flex flex-col items-center m-[50px] md:m-0">
        <Image
          src="/piyush.jpeg"
          alt="Piyush"
          width={172}
          height={172}
          data-ai-hint="profile picture"
          className="rounded-full mx-auto mb-8 border-2 border-accent shadow-lg w-100 z-10"
          style={{ fontFamily: 'var(--font-spacecraft)' }}
        />

        <div className="w-full flex justify-center mt-4 absolute top-[240px] md:top-44 md:left-0">
          <ParticleTextEffect />
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 mt-[180px] md:mt-60 z-10">
          <a href="#projects" className="font-semibold leading-6 text-primary-foreground group">
           <ShiningText text={"View My Work →"}/> <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

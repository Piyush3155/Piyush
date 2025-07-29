
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-32 md:py-40">
      <div className="container mx-auto text-center">
        <Image
          src="https://placehold.co/128x128.png"
          alt="Piyush"
          width={128}
          height={128}
          data-ai-hint="profile picture"
          className="rounded-full mx-auto mb-8 border-4 border-accent shadow-lg"
        />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Piyush
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
          Full-Stack Developer & UI/UX Enthusiast crafting digital experiences that are out of this world.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#projects" className="font-semibold leading-6 text-primary-foreground group">
            View My Work <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

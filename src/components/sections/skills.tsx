'use client';

import React from 'react';

const skills = [
  {
    name: 'Python',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 14.5c0-2-1.5-3.5-3.5-3.5s-3.5 1.5-3.5 3.5 1.5 3.5 3.5 3.5 3.5-1.5 3.5-3.5z"/><path d="M18 18c0 2.5-2 4.5-4.5 4.5S9 20.5 9 18s2-4.5 4.5-4.5S18 15.5 18 18z"/><path d="M9.5 9.5c0 2-1.5 3.5-3.5 3.5S2.5 11.5 2.5 9.5 4 6 6 6s3.5 1.5 3.5 3.5z"/><path d="M6 6c0-2.5 2-4.5 4.5-4.5S15 3.5 15 6s-2 4.5-4.5 4.5S6 8.5 6 6z"/></svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M15 6v12a3 3 0 0 0 3 3h0"/><path d="M9 18v-5a3 3 0 0 0-3-3h0"/></svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 15V9l7.7 10.6A9 9 0 1 1 3.4 8.2"/><path d="M15 12V9"/></svg>
    ),
  },
  {
    name: 'React.js',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19"/><path d="M21 5V19"/><ellipse cx="12" cy="19" rx="9" ry="3"/><circle cx="12" cy="12" r="1"/></svg>
    ),
  },
  {
    name: 'TailwindCSS',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6zm0-12C6 0 0 6 0 12s6 12 12 12c.9 0 1.8-.1 2.7-.3c-1.8-1.4-3-3.6-3-6.3c0-3.9 3.1-7 7-7c2.2 0 4.2.9 5.6 2.4C22.9 9.8 24 8 24 6c0-3.3-2.7-6-6-6H6z"/></svg>
    ),
  },
  {
    name: 'Git/GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h-1a2 2 0 1 0 0 4h1a2 2 0 1 0 0-4Z"/><path d="M12 2a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0V2Z"/><path d="M12 8a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0V8Z"/><path d="M12 16a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Z"/><path d="M18 12a2 2 0 1 0-4 0h0a2 2 0 1 0 4 0Z"/></svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
  },
];

const SkillsList = ({isDuplicate = false}: {isDuplicate?: boolean}) => (
    <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll ${isDuplicate ? 'aria-hidden:true' : ''}`}>
        {skills.map((skill, index) => (
            <li key={index} className="flex-shrink-0">
                {React.cloneElement(skill.icon, { className: 'w-12 h-12 text-accent' })}
            </li>
        ))}
    </ul>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Technical Universe</h2>
          <p className="mt-4 text-lg text-muted-foreground">A constellation of my skills and technologies.</p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <SkillsList />
            <SkillsList isDuplicate />
        </div>
      </div>
    </section>
  );
}

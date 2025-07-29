import React from 'react';
import { Button } from '@/components/ui/button';
import { AiOptimizer } from './ai-optimizer';

export function AppHeader() {
  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-accent"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold font-headline sm:inline-block">
              OrbitalFolio
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden sm:flex items-center gap-4">
              <nav className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" asChild>
                    <a href={link.href}>{link.name}</a>
                  </Button>
                ))}
              </nav>
              <AiOptimizer />
          </div>
        </div>
      </div>
    </header>
  );
}

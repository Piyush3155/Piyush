
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AiOptimizer } from './ai-optimizer';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from './theme-toggle';
import { Separator } from './ui/separator';

export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

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
              <ThemeToggle />
          </div>
          <div className="sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Explore the sections of my portfolio.
                  </SheetDescription>
                </SheetHeader>
                <Separator className="my-4" />
                <nav className="grid gap-4 py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <Separator className="my-4" />
                <div className="grid gap-4 py-2">
                    <div onClick={handleLinkClick}><AiOptimizer /></div>
                    <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

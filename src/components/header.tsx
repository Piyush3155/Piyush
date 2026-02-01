'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { ThemeToggle } from './theme-toggle';
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
    <header
      className="fixed top-4 px-4 left-1/2 -translate-x-1/2 z-[50] w-[95vw] max-w-4xl rounded-2xl border border-border/40 bg-background/80 shadow-xl backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 font-headline transition-all"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
    >
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center m-4">
          <a href="/" className="flex items-center space-x-2">
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
            <span className="font-bold font-headline flex gap-4">
              <h1>P I Y U S H </h1><h1>  G U R A V</h1>
            </span>
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="backdrop-blur-xl bg-transparent">
                <SheetHeader>
                  <SheetTitle>P I Y U S H</SheetTitle>
                  
                </SheetHeader>

                <Separator className="my-4" />

                {/* Nav Links */}
                <nav className="grid gap-4 py-2 ">
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

                {/* Theme Toggle */}
                {/* <div className="grid gap-4 py-2">
                  <ThemeToggle />
                </div> */}

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-6">
                  <a
                    href="https://instagram.com/09_piyush_02"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/piyush-gurav-674409262/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/piyush3155"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4">
            <nav className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <a href={link.href}>{link.name}</a>
                </Button>
              ))}
            </nav>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

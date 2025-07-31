import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

export function AppFooter() {
  const githubRepoUrl = "https://github.com/piyush3155/piyush-portfolio";

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex gap-14">
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
      
        <p className="text-sm text-muted-foreground text-center leading-loose">
          Built by Piyush. The source code is available on{' '}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-primary-foreground hover:text-accent transition-colors"
          >
            GitHub
          </a>
          .
        </p>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Piyush Gurav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

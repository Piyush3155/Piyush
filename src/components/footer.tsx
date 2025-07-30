import React from 'react';

export function AppFooter() {
  const githubRepoUrl = "https://github.com/piyush3155/orbitalfolio";

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
        <p className="text-sm leading-loose text-muted-foreground text-center">
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
      </div>
    </footer>
  );
}

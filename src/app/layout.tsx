import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import localFont from 'next/font/local';
import { Analytics } from "@vercel/analytics/react"
// Metadata
export const metadata: Metadata = {
  title: 'PIYUSH GURAV',
  description: 'A 3D portfolio in space',
};

// Local Fonts
const Spacecraft = localFont({
  src: [
    {
      path: './fonts/SPACECRAFT.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-spacecraft',
});

const Modern = localFont({
  src: [
    {
      path: './fonts/ModernAesthetic-DemoVersion-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-modern',
});

const Space = localFont({
  src: [
    {
      path: './fonts/spacedemo.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-space',
});

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${Spacecraft.variable} ${Modern.variable} ${Space.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
           <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

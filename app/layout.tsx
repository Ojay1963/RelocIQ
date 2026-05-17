import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RelocIQ — Live Smarter. Move Anywhere.',
  description: 'Global relocation intelligence. Check visa requirements and compare cost of living for any destination worldwide.',
  metadataBase: new URL('https://relociq.com'),
  openGraph: {
    title: 'RelocIQ — Live Smarter. Move Anywhere.',
    description: 'Global relocation intelligence. Check visa requirements and compare cost of living for any destination worldwide.',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

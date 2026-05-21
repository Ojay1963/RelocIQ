import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://relociq.com'),
  title: {
    default: 'RelocIQ — Free Visa & Cost of Living Tool for Moving Abroad',
    template: '%s | RelocIQ',
  },
  description:
    'Plan your move abroad for free. Get instant visa requirements, cost of living comparisons, and expert relocation guides for 50+ countries. No signup needed.',
  keywords:
    'moving abroad, relocation tool, visa requirements, cost of living, expat guide, digital nomad, international relocation',
  authors: [{ name: 'RelocIQ', url: 'https://relociq.com' }],
  creator: 'RelocIQ',
  publisher: 'RelocIQ',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'RelocIQ',
    title: 'RelocIQ — Free Visa & Cost of Living Tool for Moving Abroad',
    description:
      'Plan your relocation for free. Instant visa requirements, cost of living comparisons, and expert guides for 50+ countries.',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'RelocIQ — Plan Your Move Abroad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@relociq',
    creator: '@relociq',
    title: 'RelocIQ — Free Visa & Cost of Living Tool',
    description:
      'Plan your move abroad for free. Instant visa requirements + cost of living for 50+ countries.',
    images: ['https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  alternates: { canonical: 'https://relociq.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex flex-col flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

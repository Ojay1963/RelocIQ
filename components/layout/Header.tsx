'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { GlobeLogo } from '@/components/ui/GlobeLogo';

const NAV_LINKS = [
  { href: '/guides', label: 'Guides' },
  { href: '/cities', label: 'Cities' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <GlobeLogo />
          <span className="text-xl font-bold text-slate-900 dark:text-white">RelocIQ</span>
        </Link>

        {/* Desktop nav — hidden below sm */}
        <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-6 text-sm">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Start Free
          </Link>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Start Free
          </Link>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md"
        >
          <nav aria-label="Mobile navigation" className="container mx-auto px-4 py-3 flex flex-col gap-1 max-w-5xl">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

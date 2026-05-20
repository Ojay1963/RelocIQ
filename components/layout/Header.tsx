import Link from 'next/link';
import { GlobeLogo } from '@/components/ui/GlobeLogo';

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GlobeLogo />
          <span className="text-xl font-bold text-slate-900 dark:text-white">RelocIQ</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/guides" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors hidden sm:block">
            Guides
          </Link>
          <Link href="/cities" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors hidden sm:block">
            Cities
          </Link>
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Start Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

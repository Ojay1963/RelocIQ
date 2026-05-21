import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { MapPin, ArrowRight } from 'lucide-react';
import { GUIDE_COUNTRIES } from '@/lib/countries';
import { toSlug } from '@/lib/utils/toSlug';

export default function NotFound() {
  const topGuides = GUIDE_COUNTRIES.slice(0, 8);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main id="main-content" className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="mb-8">
          <p className="text-8xl font-black text-slate-200 dark:text-slate-800 mb-4 select-none">404</p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Page not found</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            That page doesn&apos;t exist. Try one of the destinations below or search from the homepage.
          </p>
        </div>

        {/* CTA back home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Go to Homepage <ArrowRight size={15} />
          </Link>
        </div>

        {/* Popular destinations */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Popular destination guides
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {topGuides.map(country => (
              <Link
                key={country}
                href={`/guides/${toSlug(country)}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <MapPin size={12} /> {country}
              </Link>
            ))}
          </div>
          <Link
            href="/guides"
            className="mt-4 inline-flex items-center gap-1 text-xs text-blue-500 hover:underline"
          >
            Browse all {GUIDE_COUNTRIES.length} guides <ArrowRight size={11} />
          </Link>
        </div>
      </main>
    </div>
  );
}

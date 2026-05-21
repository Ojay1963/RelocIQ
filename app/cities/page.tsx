import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { GUIDE_CITY_SLUGS } from '@/lib/countries';
import { CITY_CONTENT } from '@/lib/cityContent';
import { ArrowRight, Star, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'City Guides — 40 Expat & Nomad City Guides | RelocIQ',
  description:
    'Browse free city guides for 40 top expat and digital nomad cities. Cost breakdowns, neighbourhoods, nomad scores, and monthly budgets.',
  alternates: { canonical: 'https://relociq.com/cities' },
  openGraph: {
    title: 'City Guides — 40 Expat Cities | RelocIQ',
    description: 'Free cost of living and expat guides for 40 top cities worldwide.',
    type: 'article',
  },
};

export default function CitiesIndex() {
  const citiesByRegion: Record<string, string[]> = {
    'Southeast Asia': ['bangkok', 'chiang-mai', 'bali', 'ho-chi-minh-city', 'hanoi', 'da-nang', 'phuket', 'penang'],
    'Europe': ['lisbon', 'porto', 'barcelona', 'madrid', 'berlin', 'amsterdam', 'prague', 'vienna', 'budapest', 'istanbul', 'athens', 'milan', 'florence', 'paris', 'rome', 'munich'],
    'Latin America': ['medellín', 'mexico-city', 'buenos-aires', 'santiago', 'bogota'],
    'Middle East & Africa': ['dubai', 'cape-town', 'marrakech'],
    'Asia Pacific': ['singapore', 'kuala-lumpur', 'taipei', 'tokyo', 'sydney', 'melbourne'],
    'Eastern Europe & Caucasus': ['tbilisi', 'tallinn'],
  };

  // Catch any slugs not in a region
  const assigned = new Set(Object.values(citiesByRegion).flat());
  const uncategorised = GUIDE_CITY_SLUGS.filter(s => !assigned.has(s));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-5xl">

        <div className="mb-8">
          <p className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-1">Browse All</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">City Guides</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl">
            Detailed cost breakdowns, neighbourhood guides, and nomad scores for {GUIDE_CITY_SLUGS.length} top expat cities.
          </p>
        </div>

        {Object.entries(citiesByRegion).map(([region, slugs]) => {
          const available = slugs.filter(s => CITY_CONTENT[s]);
          if (!available.length) return null;
          return (
            <section key={region} className="mb-10">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" /> {region}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {available.map(slug => {
                  const city = CITY_CONTENT[slug];
                  if (!city) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/cities/${slug}`}
                      className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {city.city}
                        </p>
                        <div className="flex items-center gap-1 shrink-0">
                          <Star size={11} className="text-amber-400 fill-amber-400" />
                          <span className="text-xs font-bold text-amber-500">{city.nomadScore}/10</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{city.country}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          From {city.monthlyBudget.budget}/mo
                        </span>
                        <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                          Guide <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Uncategorised fallback */}
        {uncategorised.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">More Cities</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {uncategorised.map(slug => {
                const city = CITY_CONTENT[slug];
                if (!city) return null;
                return (
                  <Link
                    key={slug}
                    href={`/cities/${slug}`}
                    className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {city.city}
                    </p>
                    <p className="text-xs text-slate-400 mb-2">{city.country}</p>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      From {city.monthlyBudget.budget}/mo
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Want a personalised cost comparison?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Enter your income and passport — we&apos;ll show you exactly what your money buys in any city.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Get My Free Report <ArrowRight size={16} />
          </Link>
        </div>

      </main>
    </div>
  );
}

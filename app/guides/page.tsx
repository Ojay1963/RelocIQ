import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { GUIDE_COUNTRIES } from '@/lib/countries';
import { GUIDE_CONTENT } from '@/lib/guideContent';
import { COST_INDEX_DATA } from '@/lib/countries';
import { ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { toSlug } from '@/lib/utils/toSlug';

export const metadata: Metadata = {
  title: 'Relocation Guides — 50+ Country Guides | RelocIQ',
  description:
    'Browse free relocation guides for 50+ countries. Visa requirements, cost of living, top cities, and expat tips — all in one place.',
  alternates: { canonical: 'https://relociq.com/guides' },
  openGraph: {
    title: 'Relocation Guides — 50+ Countries | RelocIQ',
    description: 'Free visa, cost of living, and expat guides for 50+ countries worldwide.',
    type: 'article',
  },
};

const TIER_LABEL: Record<string, string> = {
  budget: 'Budget',
  mid: 'Mid-range',
  premium: 'Premium',
};
const TIER_STYLE: Record<string, string> = {
  budget: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  mid: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  premium: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
};

export default function GuidesIndex() {
  const costMap = Object.fromEntries(
    COST_INDEX_DATA.map(d => [toSlug(d.country), d])
  );

  const grouped: Record<string, typeof GUIDE_COUNTRIES> = {
    budget: [],
    mid: [],
    premium: [],
    other: [],
  };

  for (const country of GUIDE_COUNTRIES) {
    const slug = toSlug(country);
    const tier = costMap[slug]?.tier ?? 'other';
    (grouped[tier] ?? grouped.other).push(country);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Guides' },
        ]} />

        <div className="mb-8">
          <p className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-1">Browse All</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Relocation Guides
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl">
            Free visa, cost of living, and expat guides for {GUIDE_COUNTRIES.length} countries. Click any country to read the full guide.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Total guides', value: `${GUIDE_COUNTRIES.length}` },
            { label: 'Budget destinations', value: `${grouped.budget.length}` },
            { label: 'Free to use', value: 'Always' },
          ].map(s => (
            <div key={s.label} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Grouped by tier */}
        {(['budget', 'mid', 'premium'] as const).map(tier => {
          const countries = grouped[tier];
          if (!countries.length) return null;
          return (
            <section key={tier} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{TIER_LABEL[tier]} Countries</h2>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${TIER_STYLE[tier]}`}>
                  {countries.length} countries
                </span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {countries.map(country => {
                  const slug = toSlug(country);
                  const guide = GUIDE_CONTENT[slug];
                  const cost = costMap[slug];
                  return (
                    <Link
                      key={slug}
                      href={`/guides/${slug}`}
                      className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-blue-400 shrink-0 mt-0.5" />
                          <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {country}
                          </p>
                        </div>
                        {cost && (
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                            {cost.monthly}/mo
                          </span>
                        )}
                      </div>
                      {guide && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {guide.overview.slice(0, 90)}…
                        </p>
                      )}
                      <div className="flex items-center gap-1 mt-2 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read guide <ArrowRight size={11} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Other countries not in cost index */}
        {grouped.other.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">More Destinations</h2>
            <div className="flex flex-wrap gap-2">
              {grouped.other.map(country => {
                const slug = toSlug(country);
                return (
                  <Link
                    key={slug}
                    href={`/guides/${slug}`}
                    className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {country}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Not sure where to move?</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Enter your passport and income — get an instant personalised relocation report comparing any countries you choose.
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

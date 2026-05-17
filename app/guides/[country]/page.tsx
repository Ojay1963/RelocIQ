import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { GUIDE_CONTENT } from '@/lib/guideContent';
import { GUIDE_COUNTRIES } from '@/lib/countries';
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return GUIDE_COUNTRIES.map(country => ({
    country: country.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const guide = GUIDE_CONTENT[country];
  if (!guide) return {};
  return {
    title: `Moving to ${guide.country} — Visa, Cost of Living & Expat Guide | RelocIQ`,
    description: guide.overview.slice(0, 155),
    alternates: { canonical: `/guides/${country}` },
    openGraph: {
      title: `Moving to ${guide.country} — Complete Relocation Guide`,
      description: guide.overview.slice(0, 155),
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { country } = await params;
  const guide = GUIDE_CONTENT[country];
  if (!guide) notFound();

  const otherCountries = GUIDE_COUNTRIES
    .filter(c => c.toLowerCase().replace(/\s+/g, '-') !== country)
    .slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Moving to ${guide.country} — Complete Relocation Guide`,
    description: guide.overview.slice(0, 155),
    author: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    publisher: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    datePublished: '2024-01-01',
    url: `https://relociq.com/guides/${country}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 mb-8 text-white">
            <p className="text-blue-300 text-sm mb-2 font-medium uppercase tracking-wide">
              Relocation Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Moving to {guide.country}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-blue-200">
              <span>Capital: {guide.capital}</span>
              <span>Currency: {guide.currency}</span>
              <span>Language: {guide.language}</span>
              <span>Timezone: {guide.timezone}</span>
            </div>
          </div>

          <div className="grid gap-6">
            <Section title="Overview">{guide.overview}</Section>
            <Section title="Cost of Living Summary">{guide.costOfLiving}</Section>
            <Section title="Visa Overview">{guide.visaOverview}</Section>
            <Section title="Why People Move Here">{guide.whyMoveHere}</Section>

            {/* Top Cities */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Top Cities</h2>
              <div className="flex flex-wrap gap-2">
                {guide.topCities.map(city => (
                  <span
                    key={city}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    <MapPin size={13} /> {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Practical Tips</h2>
              <ul className="space-y-3">
                {guide.practicalTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Ready to plan your move to {guide.country}?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Get instant visa requirements and cost of living analysis personalised for you.
              </p>
              <Link
                href={`/?destinations=${encodeURIComponent(guide.country)}`}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                Check My Eligibility <ArrowRight size={16} />
              </Link>
            </div>

            {/* Also Explore */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Also Explore</h3>
              <div className="flex flex-wrap gap-2">
                {otherCountries.map(c => (
                  <Link
                    key={c}
                    href={`/guides/${c.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

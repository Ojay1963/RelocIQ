import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { GUIDE_CONTENT } from '@/lib/guideContent';
import { GUIDE_COUNTRIES } from '@/lib/countries';
import { getCountryPhoto, CITY_NAME_TO_SLUG } from '@/lib/photos';
import { CostBreakdownChart } from '@/components/CostBreakdownChart';
import { COUNTRY_COST_DATA } from '@/lib/countryCostData';
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

  const heroPhoto = getCountryPhoto(country, 1200, 400);

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

        {/* Hero photo */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <Image src={heroPhoto} alt={`Moving to ${guide.country}`} fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto max-w-4xl">
              <p className="text-blue-300 text-sm mb-2 font-medium uppercase tracking-wide">Relocation Guide</p>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Moving to {guide.country}</h1>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-blue-200">
                <span>Capital: {guide.capital}</span>
                <span>Currency: {guide.currency}</span>
                <span>Language: {guide.language}</span>
                <span>Timezone: {guide.timezone}</span>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl">

          <div className="grid gap-6">
            <Section title="Overview">{guide.overview}</Section>

            {/* Cost of Living — visual breakdown */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Cost of Living</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">{guide.costOfLiving}</p>
              {COUNTRY_COST_DATA[country] ? (
                <CostBreakdownChart
                  rows={COUNTRY_COST_DATA[country].rows}
                  totalRange={COUNTRY_COST_DATA[country].totalRange}
                  note={COUNTRY_COST_DATA[country].note}
                />
              ) : null}
            </div>

            <Section title="Visa Overview">{guide.visaOverview}</Section>
            <Section title="Why People Move Here">{guide.whyMoveHere}</Section>

            {/* Top Cities */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Top Cities</h2>
              <div className="flex flex-wrap gap-2">
                {guide.topCities.map(city => {
                  const slug = CITY_NAME_TO_SLUG[city];
                  if (slug) {
                    return (
                      <Link
                        key={city}
                        href={`/cities/${slug}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                      >
                        <MapPin size={13} /> {city}
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={city}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium"
                    >
                      <MapPin size={13} /> {city}
                    </span>
                  );
                })}
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

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { CITY_CONTENT } from '@/lib/cityContent';
import { GUIDE_CITY_SLUGS } from '@/lib/countries';
import { getCityPhoto } from '@/lib/photos';
import { CheckCircle2, MapPin, Wifi, Shield, Bus, Sun, Monitor, Star, ArrowRight } from 'lucide-react';
import { BreadcrumbLD } from '@/components/BreadcrumbLD';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CityBreakdownChart } from '@/components/CostBreakdownChart';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return GUIDE_CITY_SLUGS.map(slug => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const content = CITY_CONTENT[city];
  if (!content) return {};
  const ogImage = getCityPhoto(city, 1200, 630);
  return {
    title: `Living in ${content.city} — Cost, Neighbourhoods & Nomad Guide | RelocIQ`,
    description: content.overview.slice(0, 155),
    alternates: { canonical: `https://relociq.com/cities/${city}` },
    openGraph: {
      title: `Living in ${content.city} — Complete City Guide for Expats & Nomads`,
      description: content.overview.slice(0, 155),
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `Living in ${content.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const content = CITY_CONTENT[city];
  if (!content) notFound();

  const heroPhoto = getCityPhoto(city, 1200, 400);

  const otherCities = GUIDE_CITY_SLUGS
    .filter(s => s !== city)
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Living in ${content.city} — Complete City Guide for Expats & Nomads`,
    description: content.overview.slice(0, 155),
    image: heroPhoto,
    author: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    publisher: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    datePublished: '2024-01-01',
    dateModified: '2025-05-01',
    url: `https://relociq.com/cities/${city}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbLD items={[
        { name: 'Home', href: '/' },
        { name: 'Cities', href: '/cities' },
        { name: content.city, href: `/cities/${city}` },
      ]} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Header />

        {/* Hero photo */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <Image src={heroPhoto} alt={`${content.city} cityscape`} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1200px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">City Guide</span>
                <span className="text-slate-400">•</span>
                <Link href={`/guides/${content.countrySlug}`} className="text-blue-300 text-sm hover:text-white transition-colors">
                  {content.country} Guide →
                </Link>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Living in {content.city}</h1>
              <p className="text-blue-100 text-sm mb-3">{content.tagline}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-amber-200 text-sm font-medium">Nomad Score: {content.nomadScore}/10</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                  <MapPin size={13} className="text-blue-300" />
                  <span className="text-blue-200 text-sm">{content.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Cities', href: '/cities' },
            { name: content.city },
          ]} />

          <div className="grid gap-6">
            {/* Overview */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">City Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{content.overview}</p>
            </div>

            {/* Cost of Living — visual chart */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Cost of Living Breakdown</h2>
              <CityBreakdownChart
                items={content.costBreakdown}
                monthlyBudget={content.monthlyBudget}
                label={`Monthly cost of living breakdown for ${content.city}`}
              />
            </div>

            {/* Best For */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {content.bestFor.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Neighbourhoods */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Neighbourhoods</h2>
              <div className="space-y-3">
                {content.neighbourhoods.map(n => (
                  <div key={n.name} className="flex items-start gap-3">
                    <MapPin size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">{n.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400"> — {n.vibe}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Info */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Practical Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <PracticalItem icon={<Sun size={15} />} label="Climate" value={content.practicalInfo.climate} />
                <PracticalItem icon={<Wifi size={15} />} label="Internet" value={content.practicalInfo.internet} />
                <PracticalItem icon={<Monitor size={15} />} label="Co-working" value={content.practicalInfo.coworking} />
                <PracticalItem icon={<Shield size={15} />} label="Safety" value={content.practicalInfo.safety} />
                <PracticalItem icon={<Bus size={15} />} label="Transport" value={content.practicalInfo.transport} />
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Top Highlights</h2>
              <ul className="space-y-3">
                {content.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Ready to move to {content.city}?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Check visa requirements and compare your cost of living instantly.
              </p>
              <Link
                href={`/?destinations=${encodeURIComponent(content.country)}`}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                Check My Eligibility <ArrowRight size={16} />
              </Link>
            </div>

            {/* Also Explore */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Explore Other Cities</h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map(slug => {
                  const c = CITY_CONTENT[slug];
                  return (
                    <Link
                      key={slug}
                      href={`/cities/${slug}`}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {c?.city ?? slug}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}


function PracticalItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
      <span className="text-blue-500 mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
      </div>
    </div>
  );
}

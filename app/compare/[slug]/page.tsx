import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { COMPARE_CONTENT } from '@/lib/compareContent';
import { COMPARE_SLUGS } from '@/lib/countries';
import { CheckCircle2, XCircle, Trophy, ArrowRight, Minus } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARE_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = COMPARE_CONTENT[slug];
  if (!content) return {};
  return {
    title: `${content.metaTitle} | RelocIQ`,
    description: content.description,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.description,
      type: 'article',
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const content = COMPARE_CONTENT[slug];
  if (!content) notFound();

  const otherSlugs = COMPARE_SLUGS.filter(s => s !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.metaTitle,
    description: content.description,
    author: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    publisher: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    datePublished: '2024-01-01',
    url: `https://relociq.com/compare/${slug}`,
  };

  const scoreA = content.categories.filter(c => c.winner === 'A').length;
  const scoreB = content.categories.filter(c => c.winner === 'B').length;
  const ties = content.categories.filter(c => c.winner === 'tie').length;

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
            <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">Country Comparison</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h1>
            <p className="text-slate-300 text-sm leading-relaxed">{content.description}</p>
          </div>

          {/* Score Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4 text-center">
              Head-to-Head Score ({content.categories.length} categories)
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{scoreA}</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">{content.countryA.name}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4">
                <p className="text-3xl font-bold text-slate-500">{ties}</p>
                <p className="text-xs text-slate-400 mt-1">Ties</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-4">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{scoreB}</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">{content.countryB.name}</p>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content.intro}</p>
          </div>

          {/* Side-by-Side Basics */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <CountryCard country={content.countryA} side="A" />
            <CountryCard country={content.countryB} side="B" />
          </div>

          {/* Category Comparison */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Category Breakdown</h2>
            <div className="space-y-4">
              {content.categories.map((cat, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{cat.category}</h3>
                    <WinnerBadge winner={cat.winner} nameA={content.countryA.name} nameB={content.countryB.name} />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={18} className="text-amber-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Our Verdict</h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{content.verdict}</p>
          </div>

          {/* Who Should Choose */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-5">
              <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2 text-sm">Choose {content.countryA.name} if...</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.whoShouldChooseA}</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 text-sm">Choose {content.countryB.name} if...</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.whoShouldChooseB}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Check your personal visa eligibility
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
              Compare both countries against your specific passport and income instantly.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href={`/?destinations=${encodeURIComponent(content.countryA.name)}`}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                Check {content.countryA.name} <ArrowRight size={14} />
              </Link>
              <Link
                href={`/?destinations=${encodeURIComponent(content.countryB.name)}`}
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                Check {content.countryB.name} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* More Comparisons */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">More Comparisons</h3>
            <div className="flex flex-wrap gap-2">
              {otherSlugs.map(s => {
                const c = COMPARE_CONTENT[s];
                return (
                  <Link
                    key={s}
                    href={`/compare/${s}`}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {c?.title.split('—')[0].trim() ?? s}
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function CountryCard({ country, side }: { country: { name: string; slug: string; monthlyCost: string; visa: string; internet: string; safety: string; climate: string; pros: string[]; cons: string[] }; side: 'A' | 'B' }) {
  const borderColor = side === 'A' ? 'border-blue-200 dark:border-blue-800' : 'border-emerald-200 dark:border-emerald-800';
  const headerBg = side === 'A' ? 'bg-blue-500' : 'bg-emerald-500';

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border ${borderColor} overflow-hidden`}>
      <div className={`${headerBg} p-4`}>
        <Link href={`/guides/${country.slug}`} className="font-bold text-white text-lg hover:underline">
          {country.name}
        </Link>
        <p className="text-white/80 text-sm mt-0.5">{country.monthlyCost}/month</p>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <InfoRow label="Visa" value={country.visa} />
        <InfoRow label="Internet" value={country.internet} />
        <InfoRow label="Safety" value={country.safety} />
        <InfoRow label="Climate" value={country.climate} />
        <div className="pt-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1.5 text-xs uppercase tracking-wide">Pros</p>
          <ul className="space-y-1">
            {country.pros.map((p, i) => (
              <li key={i} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400 text-xs">
                <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1.5 text-xs uppercase tracking-wide">Cons</p>
          <ul className="space-y-1">
            {country.cons.map((c, i) => (
              <li key={i} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400 text-xs">
                <XCircle size={12} className="text-red-400 mt-0.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}: </span>
      <span className="text-xs text-slate-600 dark:text-slate-400">{value}</span>
    </div>
  );
}

function WinnerBadge({ winner, nameA, nameB }: { winner: 'A' | 'B' | 'tie'; nameA: string; nameB: string }) {
  if (winner === 'tie') {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full">
        <Minus size={10} /> Tie
      </span>
    );
  }
  if (winner === 'A') {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-full">
        <Trophy size={10} /> {nameA}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full">
      <Trophy size={10} /> {nameB}
    </span>
  );
}

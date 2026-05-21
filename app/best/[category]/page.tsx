import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { BEST_CONTENT, getBestContent } from '@/lib/bestContent';
import { BEST_CATEGORY_SLUGS } from '@/lib/countries';
import { Trophy, ArrowRight, HelpCircle, ChevronRight } from 'lucide-react';
import { BreadcrumbLD } from '@/components/BreadcrumbLD';
import { Breadcrumb } from '@/components/Breadcrumb';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return BEST_CATEGORY_SLUGS.map(slug => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const content = getBestContent(category);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.description,
    alternates: { canonical: `https://relociq.com/best/${category}` },
    openGraph: {
      title: content.metaTitle,
      description: content.description,
      type: 'article',
    },
  };
}

export default async function BestPage({ params }: Props) {
  const { category } = await params;
  const content = getBestContent(category);
  if (!content) notFound();

  const otherCategories = BEST_CATEGORY_SLUGS.filter(s => s !== category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.metaTitle,
    description: content.description,
    author: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    publisher: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    datePublished: '2024-01-01',
    dateModified: '2025-05-01',
    url: `https://relociq.com/best/${category}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbLD items={[
        { name: 'Home', href: '/' },
        { name: 'Best Of', href: '/best' },
        { name: content.title, href: `/best/${category}` },
      ]} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Best Of', href: '/best/best-countries-for-digital-nomads' },
            { name: content.title },
          ]} />

          {/* Hero */}
          <div className="bg-gradient-to-r from-amber-900/80 to-slate-900 rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={18} className="text-amber-400" />
              <span className="text-amber-200 text-sm font-medium uppercase tracking-wide">Best Of Rankings</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{content.description}</p>
          </div>

          {/* Intro */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content.intro}</p>
          </div>

          {/* Country Rankings */}
          <div className="space-y-4 mb-8">
            {content.countries.map((entry, idx) => (
              <div
                key={entry.country}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex gap-4"
              >
                {/* Rank */}
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: idx === 0 ? 'linear-gradient(135deg,#F59E0B,#D97706)' :
                                idx === 1 ? 'linear-gradient(135deg,#94A3B8,#64748B)' :
                                idx === 2 ? 'linear-gradient(135deg,#CD7F32,#92400E)' :
                                'linear-gradient(135deg,#3B82F6,#1D4ED8)',
                    color: '#fff',
                  }}
                >
                  #{idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <Link
                        href={`/guides/${entry.slug}`}
                        className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {entry.country}
                      </Link>
                      <span className="ml-2 text-xs font-semibold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full">
                        {entry.highlight}
                      </span>
                    </div>
                    <Link
                      href={`/?destinations=${encodeURIComponent(entry.country)}`}
                      className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                    >
                      Check visa <ChevronRight size={12} />
                    </Link>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {entry.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <HelpCircle size={20} className="text-blue-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {content.faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5 text-sm">{item.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Find your perfect country match
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
              Get personalised visa requirements and cost of living analysis for any country.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Run My Relocation Report <ArrowRight size={16} />
            </Link>
          </div>

          {/* More Rankings */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">More Rankings</h3>
            <div className="flex flex-wrap gap-2">
              {otherCategories.map(slug => {
                const c = BEST_CONTENT[slug];
                return (
                  <Link
                    key={slug}
                    href={`/best/${slug}`}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    {c?.title ?? slug}
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

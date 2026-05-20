import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { HomeInteractive } from '@/components/HomeInteractive';
import { GUIDE_COUNTRIES, GUIDE_CITY_SLUGS, COST_INDEX_DATA } from '@/lib/countries';
import { CITY_CONTENT } from '@/lib/cityContent';
import {
  MapPin, Plane, BarChart2, Wallet, Banknote, Laptop, Sun,
  ClipboardList, Shield, GraduationCap, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'RelocIQ — Free Visa & Cost of Living Tool for Moving Abroad',
  description:
    'Plan your move abroad for free. Get instant visa requirements, monthly cost of living breakdowns, and expert relocation guides for 50+ countries. No signup needed.',
  keywords:
    'moving abroad, relocation tool, visa requirements, cost of living comparison, expat guide, digital nomad countries, international relocation, relocate overseas',
  openGraph: {
    title: 'RelocIQ — Free Visa & Cost of Living Tool for Moving Abroad',
    description:
      'Plan your relocation for free. Instant visa requirements, cost of living comparisons, and expert guides for 50+ countries. No account needed.',
    type: 'website',
    url: 'https://relociq.com',
    siteName: 'RelocIQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RelocIQ — Free Visa & Cost of Living Tool',
    description:
      'Plan your move abroad for free. Instant visa requirements + cost of living for 50+ countries.',
  },
  alternates: { canonical: 'https://relociq.com' },
};

const FEATURED_DESTINATIONS = [
  { country: 'Portugal', slug: 'portugal', tag: 'Most Popular', monthly: '$2,000', color: 'bg-blue-500' },
  { country: 'Thailand', slug: 'thailand', tag: 'Digital Nomad #1', monthly: '$950', color: 'bg-emerald-500' },
  { country: 'Georgia', slug: 'georgia', tag: 'Budget Champion', monthly: '$700', color: 'bg-amber-500' },
  { country: 'UAE', slug: 'uae', tag: '0% Tax', monthly: '$3,500', color: 'bg-violet-500' },
  { country: 'Colombia', slug: 'colombia', tag: 'Up & Coming', monthly: '$1,100', color: 'bg-rose-500' },
  { country: 'Germany', slug: 'germany', tag: 'Career Mover', monthly: '$2,400', color: 'bg-slate-600' },
];

const BEST_OF_CARDS = [
  { slug: 'cheapest-countries-in-europe', label: 'Cheapest in Europe', icon: <Banknote size={18} />, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' },
  { slug: 'best-countries-for-digital-nomads', label: 'Best for Nomads', icon: <Laptop size={18} />, color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' },
  { slug: 'best-countries-for-retirement', label: 'Best for Retirement', icon: <Sun size={18} />, color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30' },
  { slug: 'easiest-work-visas', label: 'Easiest Work Visas', icon: <ClipboardList size={18} />, color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30' },
  { slug: 'safest-countries-to-live', label: 'Safest Countries', icon: <Shield size={18} />, color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30' },
  { slug: 'best-countries-for-students', label: 'Best for Students', icon: <GraduationCap size={18} />, color: 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800' },
];

const TRENDING_COMPARES = [
  { slug: 'portugal-vs-spain', label: 'Portugal vs Spain' },
  { slug: 'dubai-vs-singapore', label: 'Dubai vs Singapore' },
  { slug: 'mexico-vs-colombia', label: 'Mexico vs Colombia' },
  { slug: 'canada-vs-australia', label: 'Canada vs Australia' },
];

const GLOBAL_STATS = [
  { value: '50+', label: 'Country Guides' },
  { value: '25', label: 'City Guides' },
  { value: '195', label: 'Countries Analysed' },
  { value: '8', label: 'Comparisons' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://relociq.com/#website',
      url: 'https://relociq.com',
      name: 'RelocIQ',
      description:
        'Free relocation planning tool. Check visa requirements and compare cost of living for 50+ countries worldwide.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://relociq.com/guides/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://relociq.com/#organization',
      name: 'RelocIQ',
      url: 'https://relociq.com',
      description:
        'RelocIQ provides free relocation intelligence including visa requirements, cost of living data, and expat guides for 50+ countries worldwide.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is RelocIQ free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, RelocIQ is completely free. No account or signup is required to get your relocation report.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does RelocIQ do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RelocIQ checks visa requirements for your passport, compares cost of living between countries, and provides detailed expat guides — all in one free tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many countries does RelocIQ cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RelocIQ covers 195 countries for visa checks, 50+ countries with full relocation guides, and 25+ cities with detailed cost breakdowns.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-5xl">

          {/* ── Hero ── */}
          <section className="text-center mb-10" aria-label="Site introduction">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm px-3 py-1.5 rounded-full mb-4 border border-blue-100 dark:border-blue-900">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Free · No signup required · 195 countries covered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Plan Your Move Abroad —{' '}
              <span className="text-blue-500">Visa &amp; Cost of Living Made Simple</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              Tell us your passport country and where you want to live. We instantly check your visa options and show exactly how far your money goes — completely free, no account needed.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-2 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
                Enter your passport
              </div>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:block">→</span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
                Pick your destinations
              </div>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:block">→</span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
                Get your free relocation report
              </div>
            </div>
          </section>

          {/* ── Interactive form / loading / report (client component) ── */}
          <HomeInteractive />

          {/* ── Stats ── */}
          <div className="grid grid-cols-4 gap-3 mt-8 mb-8">
            {GLOBAL_STATS.map(stat => (
              <div key={stat.label} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ── What is RelocIQ ── */}
          <section className="mb-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8" aria-label="About RelocIQ">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">What is RelocIQ?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              RelocIQ is a free relocation planning tool built for anyone thinking about moving to another country. Whether you&apos;re a digital nomad, retiree, career mover, or expat family — we give you the data you need in seconds, with no jargon and no signup.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center shrink-0">
                  <ClipboardList size={17} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">Visa Requirements</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Instantly see if you need a visa, how long you can stay, and what visa type applies to your situation and purpose of travel.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
                  <Wallet size={17} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">Cost of Living</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    See real monthly costs for rent, food, transport, and more — then compare them against what you currently spend at home.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center shrink-0">
                  <BarChart2 size={17} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">Side-by-Side Comparison</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Compare up to three countries at once so you can find which destination fits your budget, lifestyle, and goals best.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Featured Destinations ── */}
          <section className="mb-10" aria-label="Featured relocation destinations">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Destinations</h2>
              <Link href="/guides" className="text-sm text-blue-500 hover:underline flex items-center gap-1">
                All guides <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {FEATURED_DESTINATIONS.map(dest => (
                <Link
                  key={dest.slug}
                  href={`/guides/${dest.slug}`}
                  className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`${dest.color} w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}>
                      <MapPin size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{dest.country}</p>
                      <span className="text-xs bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">{dest.tag}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">From <strong className="text-slate-700 dark:text-slate-300">{dest.monthly}</strong>/mo</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Free Tools ── */}
          <section className="mb-10" aria-label="Free relocation tools">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Free Relocation Tools</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <Link href="/tools/visa-free" className="group bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 text-white hover:from-blue-600 hover:to-blue-800 transition-all hover:shadow-lg">
                <Plane size={24} className="mb-2 opacity-90" />
                <p className="font-bold">Visa-Free Explorer</p>
                <p className="text-xs text-blue-200 mt-1">Find countries you can visit without a visa</p>
              </Link>
              <Link href="/tools/cost-index" className="group bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl p-5 text-white hover:from-emerald-600 hover:to-emerald-800 transition-all hover:shadow-lg">
                <BarChart2 size={24} className="mb-2 opacity-90" />
                <p className="font-bold">Cost Index</p>
                <p className="text-xs text-emerald-200 mt-1">Global cost of living ranked &amp; compared</p>
              </Link>
              <Link href="/tools/salary-stretcher" className="group bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl p-5 text-white hover:from-violet-600 hover:to-violet-800 transition-all hover:shadow-lg">
                <Wallet size={24} className="mb-2 opacity-90" />
                <p className="font-bold">Salary Stretcher</p>
                <p className="text-xs text-violet-200 mt-1">How far does your salary go worldwide?</p>
              </Link>
            </div>
          </section>

          {/* ── Best Of Rankings ── */}
          <section className="mb-10" aria-label="Best country rankings">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Best Of Rankings</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {BEST_OF_CARDS.map(card => (
                <Link
                  key={card.slug}
                  href={`/best/${card.slug}`}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${card.color}`}>
                    {card.icon}
                  </div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">{card.label}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Trending Comparisons ── */}
          <section className="mb-10" aria-label="Country comparisons">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Trending Comparisons</h2>
            <div className="grid grid-cols-2 gap-3">
              {TRENDING_COMPARES.map(comp => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{comp.label}</span>
                  <ArrowRight size={14} className="text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* ── Top Expat Cities ── */}
          <section className="mb-10" aria-label="Top expat cities">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Top Expat Cities</h2>
              <Link href="/cities" className="text-sm text-blue-500 hover:underline flex items-center gap-1">
                All cities <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {GUIDE_CITY_SLUGS.slice(0, 8).map(slug => {
                const city = CITY_CONTENT[slug];
                return (
                  <Link
                    key={slug}
                    href={`/cities/${slug}`}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group"
                  >
                    <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{city?.city ?? slug}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{city?.country}</p>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">{city?.monthlyBudget.budget}/mo</p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ── Cheapest Countries ── */}
          <section className="mb-10" aria-label="Cheapest countries to live in">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cheapest Countries Right Now</h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              {COST_INDEX_DATA.filter(d => d.tier === 'budget').slice(0, 6).map((entry, i) => (
                <div key={entry.country} className={`flex items-center justify-between px-5 py-3 ${i < 5 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 w-4">#{i + 1}</span>
                    <Link
                      href={`/guides/${entry.country.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-medium text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {entry.country}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:block w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${entry.score}%` }} />
                    </div>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{entry.monthly}/mo</span>
                  </div>
                </div>
              ))}
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/50 text-center">
                <Link href="/tools/cost-index" className="text-sm text-blue-500 hover:underline font-medium inline-flex items-center gap-1">
                  View all {COST_INDEX_DATA.length} countries <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>

          {/* ── Country Guides ── */}
          <section className="mb-6" aria-label="All country relocation guides">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Country Guides</h2>
              <span className="text-sm text-slate-400">{GUIDE_COUNTRIES.length} countries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {GUIDE_COUNTRIES.map(country => (
                <Link
                  key={country}
                  href={`/guides/${country.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {country}
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { RelocForm } from '@/components/form/RelocForm';
import { LoadingState } from '@/components/report/LoadingState';
import { ReportView } from '@/components/report/ReportView';
import { LeadCapture } from '@/components/monetisation/LeadCapture';
import { GUIDE_COUNTRIES, GUIDE_CITY_SLUGS, COST_INDEX_DATA } from '@/lib/countries';
import { CITY_CONTENT } from '@/lib/cityContent';
import { MapPin, Plane, BarChart2, Wallet, Banknote, Laptop, Sun, ClipboardList, Shield, GraduationCap, ArrowRight } from 'lucide-react';
import type { FormData, ReportData } from '@/types';

const FEATURED_DESTINATIONS = [
  { country: "Portugal", slug: "portugal", tag: "Most Popular", monthly: "$2,000", color: "bg-blue-500" },
  { country: "Thailand", slug: "thailand", tag: "Digital Nomad #1", monthly: "$950", color: "bg-emerald-500" },
  { country: "Georgia", slug: "georgia", tag: "Budget Champion", monthly: "$700", color: "bg-amber-500" },
  { country: "UAE", slug: "uae", tag: "0% Tax", monthly: "$3,500", color: "bg-violet-500" },
  { country: "Colombia", slug: "colombia", tag: "Up & Coming", monthly: "$1,100", color: "bg-rose-500" },
  { country: "Germany", slug: "germany", tag: "Career Mover", monthly: "$2,400", color: "bg-slate-600" },
];

type BestIconKey = 'banknote' | 'laptop' | 'sun' | 'clipboard' | 'shield' | 'graduation';
const BEST_ICONS: Record<BestIconKey, React.ReactNode> = {
  banknote: <Banknote size={18} />,
  laptop: <Laptop size={18} />,
  sun: <Sun size={18} />,
  clipboard: <ClipboardList size={18} />,
  shield: <Shield size={18} />,
  graduation: <GraduationCap size={18} />,
};

const BEST_OF_CARDS: { slug: string; label: string; icon: BestIconKey; color: string }[] = [
  { slug: "cheapest-countries-in-europe", label: "Cheapest in Europe", icon: "banknote", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30" },
  { slug: "best-countries-for-digital-nomads", label: "Best for Nomads", icon: "laptop", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30" },
  { slug: "best-countries-for-retirement", label: "Best for Retirement", icon: "sun", color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30" },
  { slug: "easiest-work-visas", label: "Easiest Work Visas", icon: "clipboard", color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30" },
  { slug: "safest-countries-to-live", label: "Safest Countries", icon: "shield", color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30" },
  { slug: "best-countries-for-students", label: "Best for Students", icon: "graduation", color: "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800" },
];

const TRENDING_COMPARES = [
  { slug: "portugal-vs-spain", label: "Portugal vs Spain" },
  { slug: "dubai-vs-singapore", label: "Dubai vs Singapore" },
  { slug: "mexico-vs-colombia", label: "Mexico vs Colombia" },
  { slug: "canada-vs-australia", label: "Canada vs Australia" },
];

const GLOBAL_STATS = [
  { value: "50+", label: "Country Guides" },
  { value: "25", label: "City Guides" },
  { value: "195", label: "Countries Analysed" },
  { value: "8", label: "Comparisons" },
];

function HomeContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<'form' | 'loading' | 'report'>('form');
  const [formData, setFormData] = useState<FormData | null>(null);
  const [reports, setReports] = useState<ReportData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const passport = searchParams.get('passport');
    const destinations = searchParams.get('destinations');
    const income = searchParams.get('income');
    const currency = searchParams.get('currency');
    const purpose = searchParams.get('purpose');

    if (passport && destinations && income && currency && purpose) {
      const prefilled: FormData = {
        passportCountry: passport,
        destinations: destinations.split(','),
        monthlyIncome: income,
        currency,
        purpose,
      };
      setFormData(prefilled);
      runReport(prefilled);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function runReport(data: FormData) {
    setStep('loading');
    setError(null);
    try {
      const results = await Promise.all(
        data.destinations.map(async (destination) => {
          const [visaRes, compareRes] = await Promise.all([
            fetch('/api/visa', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                passportCountry: data.passportCountry,
                destinationCountry: destination,
                purpose: data.purpose,
              }),
            }),
            fetch('/api/compare', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                homeCountry: data.passportCountry,
                destinationCountry: destination,
                monthlyIncome: data.monthlyIncome,
                currency: data.currency,
              }),
            }),
          ]);
          const visa = await visaRes.json();
          const compare = await compareRes.json();
          return { destination, visa, compare } as ReportData;
        })
      );
      setReports(results);
      setStep('report');
    } catch {
      setError('Something went wrong generating your report. Please try again.');
      setStep('form');
    }
  }

  async function handleSubmit(data: FormData) {
    setFormData(data);
    await runReport(data);
  }

  async function handleAddDestination(destination: string) {
    if (!formData) return;
    setFormData(prev => prev ? { ...prev, destinations: [...prev.destinations, destination] } : prev);
    try {
      const [visaRes, compareRes] = await Promise.all([
        fetch('/api/visa', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            passportCountry: formData.passportCountry,
            destinationCountry: destination,
            purpose: formData.purpose,
          }),
        }),
        fetch('/api/compare', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            homeCountry: formData.passportCountry,
            destinationCountry: destination,
            monthlyIncome: formData.monthlyIncome,
            currency: formData.currency,
          }),
        }),
      ]);
      const visa = await visaRes.json();
      const compare = await compareRes.json();
      setReports(prev => [...prev, { destination, visa, compare }]);
    } catch {
      setError('Could not load data for this destination.');
    }
  }

  function handleShareLink() {
    if (!formData) return;
    const params = new URLSearchParams({
      passport: formData.passportCountry,
      destinations: formData.destinations.join(','),
      income: formData.monthlyIncome,
      currency: formData.currency,
      purpose: formData.purpose,
    });
    const url = `${window.location.origin}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Shareable link copied to clipboard!');
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                  Live Smarter.{' '}
                  <span className="text-blue-500">Move Anywhere.</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Instant visa intelligence and cost of living analysis for your dream destination.
                </p>
              </div>
              {error && (
                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg p-4 mb-6 text-center text-sm">
                  {error}
                </div>
              )}
              <RelocForm onSubmit={handleSubmit} initialData={formData} />

              {/* Global Stats Bar */}
              <div className="grid grid-cols-4 gap-3 mt-8 mb-8">
                {GLOBAL_STATS.map(stat => (
                  <div key={stat.label} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Featured Destinations */}
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Destinations</h2>
                  <Link href="/guides/portugal" className="text-sm text-blue-500 hover:underline flex items-center gap-1">All guides <ArrowRight size={13} /></Link>
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

              {/* Tools */}
              <section className="mb-10">
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

              {/* Best Of Rankings */}
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Best Of Rankings</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BEST_OF_CARDS.map(card => (
                    <Link
                      key={card.slug}
                      href={`/best/${card.slug}`}
                      className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${card.color}`}>
                        {BEST_ICONS[card.icon]}
                      </div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">{card.label}</p>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Trending Comparisons */}
              <section className="mb-10">
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

              {/* Budget Cities */}
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Top Expat Cities</h2>
                  <Link href="/cities/bangkok" className="text-sm text-blue-500 hover:underline flex items-center gap-1">All cities <ArrowRight size={13} /></Link>
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

              {/* Cost Tiers Preview */}
              <section className="mb-10">
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

              {/* Country Guide Grid */}
              <section className="mb-6">
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
            </motion.div>
          )}

          {step === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingState />
            </motion.div>
          )}

          {step === 'report' && formData && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ReportView
                reports={reports}
                formData={formData}
                onAddDestination={handleAddDestination}
                onShareLink={handleShareLink}
                onNewSearch={() => {
                  setStep('form');
                  setReports([]);
                  setFormData(null);
                  setError(null);
                }}
              />
              <LeadCapture formData={formData} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}

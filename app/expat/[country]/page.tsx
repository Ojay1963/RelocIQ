import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { EXPAT_CONTENT } from '@/lib/expatContent';
import { EXPAT_SLUGS } from '@/lib/countries';
import { getCountryPhoto } from '@/lib/photos';
import {
  Users, MapPin, Globe, Briefcase, DollarSign, Smartphone,
  Calendar, HelpCircle, ThumbsUp, ThumbsDown, ArrowRight, Star, Banknote
} from 'lucide-react';

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return EXPAT_SLUGS.map(slug => ({ country: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const content = EXPAT_CONTENT[country];
  if (!content) return {};
  return {
    title: `Expat Life in ${content.country} — Community, Costs & Culture Guide | RelocIQ`,
    description: content.intro.slice(0, 155),
    alternates: { canonical: `/expat/${country}` },
    openGraph: {
      title: `Living as an Expat in ${content.country} — Complete Guide`,
      description: content.intro.slice(0, 155),
      type: 'article',
    },
  };
}

const BARRIER_COLORS = {
  Low: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400',
  Medium: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400',
  High: 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400',
};

const COST_COLORS = {
  Budget: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400',
  'Mid-range': 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400',
  Expensive: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400',
  Premium: 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400',
};

export default async function ExpatPage({ params }: Props) {
  const { country } = await params;
  const content = EXPAT_CONTENT[country];
  if (!content) notFound();

  const heroPhoto = getCountryPhoto(country, 1200, 400);
  const integrationColor = content.integrationScore >= 8 ? 'text-emerald-500' : content.integrationScore >= 6 ? 'text-amber-500' : 'text-red-500';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Hero */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <Image src={heroPhoto} alt={`Expat life in ${content.country}`} fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-blue-400" />
              <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">Expat Life Guide</span>
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              <h1 className="text-2xl md:text-4xl font-bold text-white">Living as an Expat in {content.country}</h1>
              <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                <Star size={13} className={`fill-current ${integrationColor}`} />
                <span className={`text-sm font-bold ${integrationColor}`}>{content.integrationScore}/10</span>
                <span className="text-white/60 text-xs ml-1">integration</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-2">{content.tagline}</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard label="Expat Population" value={content.expatPopulation} icon={<Users size={16} />} color="blue" />
            <StatCard label="Language Barrier" value={content.languageBarrier} icon={<Globe size={16} />} color="violet" badge={BARRIER_COLORS[content.languageBarrier]} />
            <StatCard label="Cost Level" value={content.costLevel} icon={<DollarSign size={16} />} color="emerald" badge={COST_COLORS[content.costLevel]} />
            <StatCard label="Integration" value={`${content.integrationScore}/10`} icon={<Star size={16} />} color="amber" />
          </div>

          {/* Intro */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content.intro}</p>
          </div>

          {/* Top Nationalities */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe size={18} className="text-blue-500" /> Top Expat Nationalities
            </h2>
            <div className="flex flex-wrap gap-2">
              {content.mainNationalities.map(nat => (
                <span key={nat} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full text-sm border border-blue-200 dark:border-blue-800">{nat}</span>
              ))}
            </div>
          </div>

          {/* Social Life */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Users size={18} className="text-violet-500" /> Social Life & Culture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{content.socialLife}</p>
          </div>

          {/* Top Communities */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <Users size={18} className="text-blue-500" /> Expat Communities & Forums
            </h2>
            <div className="space-y-3">
              {content.communities.map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{c.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-full">{c.platform}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{c.notes}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">{c.members}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Neighbourhoods */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <MapPin size={18} className="text-red-500" /> Top Expat Neighbourhoods
            </h2>
            <div className="space-y-3">
              {content.topNeighbourhoods.map((n, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{n.name}</h3>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">{n.rentRange}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{n.vibe}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Popular with: {n.popular}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Working as an Expat */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Briefcase size={18} className="text-amber-500" /> Working as an Expat
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{content.workingAsExpat}</p>
          </div>

          {/* Tax + Banking side by side */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-5">
              <h2 className="font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                <DollarSign size={16} /> Tax Considerations
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.taxConsiderations}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl p-5">
              <h2 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Banknote size={16} /> Banking & Money
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.bankingAndMoney}</p>
            </div>
          </div>

          {/* Local Culture */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe size={18} className="text-emerald-500" /> Local Culture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{content.localCulture}</p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5">
              <h2 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <ThumbsUp size={16} /> Pros
              </h2>
              <ul className="space-y-2">
                {content.prosAndCons.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-emerald-500 font-bold mt-0.5 shrink-0">+</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <h2 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <ThumbsDown size={16} /> Cons
              </h2>
              <ul className="space-y-2">
                {content.prosAndCons.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-red-500 font-bold mt-0.5 shrink-0">−</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Useful Apps */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Smartphone size={18} className="text-blue-500" /> Essential Apps
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.usefulApps.map((app, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">{app.name}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded">{app.category}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{app.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual Events */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Calendar size={18} className="text-violet-500" /> Annual Events & Festivals
            </h2>
            <ul className="space-y-2">
              {content.annualEvents.map((event, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-violet-500 mt-1 shrink-0">•</span> {event}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <HelpCircle size={18} className="text-blue-500" /> Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {content.faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1.5">{item.question}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Ready to move to {content.country}?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Check your visa options and estimated living costs in minutes.</p>
            <Link href={`/?destinations=${encodeURIComponent(content.country)}`} className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
              Check My Eligibility <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  label, value, icon, color, badge
}: {
  label: string; value: string; icon: React.ReactNode;
  color: 'blue' | 'violet' | 'emerald' | 'amber'; badge?: string;
}) {
  const bg = {
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
    violet: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800',
    amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
  };
  const iconColor = {
    blue: 'text-blue-500', violet: 'text-violet-500', emerald: 'text-emerald-500', amber: 'text-amber-500',
  };
  return (
    <div className={`rounded-2xl border p-4 ${bg[color]}`}>
      <div className={`mb-2 ${iconColor[color]}`}>{icon}</div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{label}</p>
      {badge ? (
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge}`}>{value}</span>
      ) : (
        <p className="font-bold text-sm text-slate-900 dark:text-white leading-tight">{value}</p>
      )}
    </div>
  );
}

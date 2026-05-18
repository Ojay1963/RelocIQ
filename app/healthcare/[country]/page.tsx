import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { HEALTHCARE_CONTENT } from '@/lib/healthcareContent';
import { HEALTHCARE_SLUGS } from '@/lib/countries';
import { getCountryPhoto } from '@/lib/photos';
import { Heart, Shield, DollarSign, Phone, CheckCircle2, HelpCircle, ArrowRight, Star } from 'lucide-react';

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return HEALTHCARE_SLUGS.map(slug => ({ country: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const content = HEALTHCARE_CONTENT[country];
  if (!content) return {};
  return {
    title: `Healthcare in ${content.country} — Hospitals, Costs & Insurance Guide | RelocIQ`,
    description: content.intro.slice(0, 155),
    alternates: { canonical: `/healthcare/${country}` },
    openGraph: { title: `Healthcare in ${content.country} — Expat Guide`, description: content.intro.slice(0, 155), type: 'article' },
  };
}

export default async function HealthcarePage({ params }: Props) {
  const { country } = await params;
  const content = HEALTHCARE_CONTENT[country];
  if (!content) notFound();

  const heroPhoto = getCountryPhoto(country, 1200, 400);

  const ratingColor = content.systemRating >= 8 ? 'text-emerald-500' : content.systemRating >= 6 ? 'text-amber-500' : 'text-red-500';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Hero */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <Image src={heroPhoto} alt={`Healthcare in ${content.country}`} fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={16} className="text-red-400" />
              <span className="text-red-300 text-sm font-medium uppercase tracking-wide">Healthcare Guide</span>
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              <h1 className="text-2xl md:text-4xl font-bold text-white">Healthcare in {content.country}</h1>
              <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                <Star size={13} className={`fill-current ${ratingColor}`} />
                <span className={`text-sm font-bold ${ratingColor}`}>{content.systemRating}/10</span>
                <span className="text-white/60 text-xs ml-1">system rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {/* Intro */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content.intro}</p>
          </div>

          {/* Public vs Private */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-5">
              <h2 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Shield size={16} /> Public Healthcare
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.publicHealthcare}</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5">
              <h2 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                <Heart size={16} /> Private Healthcare
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.privateHealthcare}</p>
            </div>
          </div>

          {/* Hospitals */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <Heart size={18} className="text-red-500" /> Top Hospitals
            </h2>
            <div className="space-y-4">
              {content.hospitals.map((h, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-900 dark:text-white">{h.name}</h3>
                        {h.jciAccredited && (
                          <span className="text-xs bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-medium">JCI Accredited</span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full capitalize font-medium ${
                          h.type === 'international' ? 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400' :
                          h.type === 'private' ? 'bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400' :
                          'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>{h.type}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{h.city}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{h.avgConsultation}</p>
                      <p className="text-xs text-slate-400">consultation</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {h.specialties.map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-full">{s}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{h.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Costs */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <DollarSign size={18} className="text-emerald-500" /> Typical Medical Costs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Procedure</th>
                    <th className="text-right py-2 text-xs font-semibold text-blue-500 uppercase tracking-wide">Public</th>
                    <th className="text-right py-2 text-xs font-semibold text-emerald-500 uppercase tracking-wide">Private</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {content.typicalCosts.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 text-slate-700 dark:text-slate-300">{row.procedure}</td>
                      <td className="py-2.5 text-right text-slate-500 dark:text-slate-400 text-xs">{row.publicCost}</td>
                      <td className="py-2.5 text-right font-semibold text-slate-900 dark:text-white text-xs">{row.privateCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Insurance */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <Shield size={18} className="text-blue-500" /> Health Insurance Options
            </h2>
            <div className="space-y-4">
              {content.insurancePlans.map((plan, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{plan.provider}</h3>
                      <p className="text-xs text-slate-500">{plan.plan}</p>
                    </div>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm shrink-0">{plan.monthlyPremium}/mo</p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Coverage: {plan.coverage}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{plan.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pharmacies */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Pharmacies</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content.pharmacies}</p>
          </div>

          {/* Emergency Numbers */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Phone size={18} className="text-red-500" /> Emergency Numbers
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.emergencyNumbers.map((e, i) => (
                <div key={i} className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-xl px-4 py-3">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{e.service}</span>
                  <span className="font-bold text-red-600 dark:text-red-400 text-sm">{e.number}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expat Advice */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Expat Health Tips</h2>
            <ul className="space-y-3">
              {content.expatsAdvice.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" /> {tip}
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
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Planning to move to {content.country}?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Get visa requirements and cost of living analysis instantly.</p>
            <Link href={`/?destinations=${encodeURIComponent(content.country)}`} className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
              Check My Eligibility <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

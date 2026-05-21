import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { SCHOOLS_CONTENT } from '@/lib/schoolsContent';
import { SCHOOLS_SLUGS } from '@/lib/countries';
import { getCountryPhoto } from '@/lib/photos';
import { GraduationCap, BookOpen, DollarSign, CheckCircle2, HelpCircle, ArrowRight, Star, Globe } from 'lucide-react';
import { BreadcrumbLD } from '@/components/BreadcrumbLD';
import { Breadcrumb } from '@/components/Breadcrumb';

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return SCHOOLS_SLUGS.map(slug => ({ country: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const content = SCHOOLS_CONTENT[country];
  if (!content) return {};
  const ogImage = getCountryPhoto(country, 1200, 630);
  return {
    title: `Schools & Universities in ${content.country} — Fees & Admission Guide | RelocIQ`,
    description: content.intro.slice(0, 155),
    alternates: { canonical: `https://relociq.com/schools/${country}` },
    openGraph: {
      title: `Studying in ${content.country} — Complete Guide`,
      description: content.intro.slice(0, 155),
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `Schools in ${content.country}` }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
  };
}

export default async function SchoolsPage({ params }: Props) {
  const { country } = await params;
  const content = SCHOOLS_CONTENT[country];
  if (!content) notFound();

  const heroPhoto = getCountryPhoto(country, 1200, 400);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Schools & Universities in ${content.country} — Fees & Admission Guide`,
    description: content.intro.slice(0, 155),
    image: heroPhoto,
    author: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    publisher: { '@type': 'Organization', name: 'RelocIQ', url: 'https://relociq.com' },
    datePublished: '2024-01-01',
    dateModified: '2025-05-01',
    url: `https://relociq.com/schools/${country}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbLD items={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: content.country, href: `/guides/${country}` },
        { name: 'Schools', href: `/schools/${country}` },
      ]} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Hero with photo */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <Image src={heroPhoto} alt={`${content.country} city landscape`} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1200px" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-blue-400" />
              <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">Education Guide</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Schools & Universities in {content.country}
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: content.country, href: `/guides/${country}` },
          { name: 'Schools' },
        ]} />

        <div className="grid gap-6">
          {/* Intro */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content.intro}</p>
          </div>

          {/* System Overview */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe size={18} className="text-blue-500" /> Education System Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{content.systemOverview}</p>
          </div>

          {/* Universities */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-500" /> Universities & Higher Education
            </h2>
            <div className="space-y-4">
              {content.universities.map((uni, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{uni.name}</h3>
                      {uni.ranking && (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                          <Star size={11} className="fill-amber-500 text-amber-500" /> {uni.ranking}
                        </span>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{uni.annualFee}</p>
                      <p className="text-xs text-slate-400">per year</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {uni.programs.map(p => (
                      <span key={p} className="text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full">{p}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{uni.notes}</p>
                  <p className="text-xs text-slate-400 mt-1">Language: {uni.language}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Schools */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <BookOpen size={18} className="text-emerald-500" /> International Schools (K–12)
            </h2>
            <div className="space-y-4">
              {content.internationalSchools.map((school, i) => (
                <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white">{school.name}</h3>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{school.annualFee}</p>
                      <p className="text-xs text-slate-400">per year</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {school.programs.map(p => (
                      <span key={p} className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full">{p}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{school.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Language Schools */}
          {content.languageSchools.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Language Schools</h2>
              <div className="space-y-3">
                {content.languageSchools.map((school, i) => (
                  <div key={i} className="flex gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{school.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{school.notes}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-violet-600 dark:text-violet-400 text-sm">{school.annualFee}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cost of Studying */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <DollarSign size={18} className="text-emerald-500" /> Annual Cost of Studying
            </h2>
            <div className="space-y-2">
              {content.costOfStudying.map((row, i) => (
                <div key={i} className={`flex justify-between py-2 text-sm ${i < content.costOfStudying.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : 'font-bold text-slate-900 dark:text-white'}`}>
                  <span className={i < content.costOfStudying.length - 1 ? 'text-slate-600 dark:text-slate-400' : ''}>{row.item}</span>
                  <span className={i < content.costOfStudying.length - 1 ? 'font-semibold text-slate-900 dark:text-white' : 'text-emerald-600 dark:text-emerald-400'}>{row.cost}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Visa */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Student Visa Information</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{content.studentVisa}</p>
          </div>

          {/* Scholarships */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Scholarships & Funding</h2>
            <ul className="space-y-2">
              {content.scholarships.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Top Study Cities */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Top Study Cities</h2>
            <div className="flex flex-wrap gap-2">
              {content.topCities.map(city => (
                <span key={city} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm">{city}</span>
              ))}
            </div>
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
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Planning to study in {content.country}?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Check your student visa requirements and estimated costs instantly.</p>
            <Link href={`/?destinations=${encodeURIComponent(content.country)}&purpose=Study`} className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
              Check Student Visa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

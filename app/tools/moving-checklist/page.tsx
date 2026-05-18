'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';

const CHECKLIST = [
  {
    phase: "6–12 Months Before",
    color: "blue",
    items: [
      { id: 'research-visa', text: 'Research visa options for your destination country', critical: true },
      { id: 'passport-validity', text: 'Check passport validity (most countries require 6+ months)', critical: true },
      { id: 'budget-plan', text: 'Create a relocation budget (one-time costs + first 3 months living)', critical: true },
      { id: 'income-proof', text: 'Gather proof of income documents (bank statements, tax returns, pay slips)', critical: true },
      { id: 'health-checkup', text: 'Get a full health check-up and dental work done at home', critical: false },
      { id: 'research-neighbourhoods', text: 'Research neighbourhoods in your destination city', critical: false },
      { id: 'learn-language', text: 'Start language learning (even basic phrases help enormously)', critical: false },
      { id: 'facebook-groups', text: 'Join expat Facebook groups and forums for your destination', critical: false },
    ]
  },
  {
    phase: "3–6 Months Before",
    color: "violet",
    items: [
      { id: 'apply-visa', text: 'Apply for your visa or residence permit', critical: true },
      { id: 'health-insurance', text: 'Research and purchase international health insurance', critical: true },
      { id: 'notify-bank', text: 'Notify your bank of the move; open local bank account if possible', critical: true },
      { id: 'tax-advice', text: 'Consult a cross-border tax advisor (especially US, UK citizens)', critical: true },
      { id: 'shipping-quotes', text: 'Get shipping/freight quotes for your belongings', critical: false },
      { id: 'housing-search', text: 'Begin remote housing search (Airbnb first month, then apartment search)', critical: true },
      { id: 'school-research', text: 'Research schools if moving with children', critical: false },
      { id: 'driving-licence', text: 'Get International Driving Permit (IDP) from your home country', critical: false },
      { id: 'vaccinations', text: 'Check destination country vaccination requirements', critical: false },
      { id: 'apostille-docs', text: 'Get key documents apostilled (birth certificate, marriage cert, degree)', critical: false },
    ]
  },
  {
    phase: "1–3 Months Before",
    color: "amber",
    items: [
      { id: 'book-flights', text: 'Book one-way flights', critical: true },
      { id: 'confirm-housing', text: 'Confirm first accommodation (short-term rental or furnished apartment)', critical: true },
      { id: 'mail-forwarding', text: 'Set up mail forwarding from your current address', critical: false },
      { id: 'cancel-subscriptions', text: 'Cancel local subscriptions (gym, magazines, streaming, etc.)', critical: false },
      { id: 'inform-contacts', text: 'Inform government bodies of your departure (HMRC/IRS/relevant agency)', critical: true },
      { id: 'declutter', text: 'Sell, donate or store belongings you are not taking', critical: false },
      { id: 'backup-docs', text: 'Scan and cloud-backup all important documents', critical: true },
      { id: 'medication', text: 'Get 3+ months supply of prescription medications', critical: false },
      { id: 'vpn', text: 'Set up VPN for accessing home country streaming/banking', critical: false },
      { id: 'emergency-fund', text: 'Ensure you have 3 months emergency fund in accessible accounts', critical: true },
    ]
  },
  {
    phase: "1–2 Weeks Before",
    color: "orange",
    items: [
      { id: 'confirm-insurance', text: 'Confirm health insurance policy and download emergency contacts', critical: true },
      { id: 'pack-documents', text: 'Pack important documents in carry-on (not checked luggage)', critical: true },
      { id: 'local-sim', text: 'Research local SIM card options for day of arrival', critical: false },
      { id: 'airport-transfer', text: 'Book airport transfer for arrival', critical: false },
      { id: 'cash', text: 'Get some local currency cash for first few days', critical: true },
      { id: 'inform-family', text: 'Share your contact details and address with family', critical: false },
      { id: 'phone-plan', text: 'Confirm your phone works in the destination country (or unlock it)', critical: false },
      { id: 'power-adaptors', text: 'Pack power adaptors for destination country socket type', critical: false },
    ]
  },
  {
    phase: "First Week Arrival",
    color: "emerald",
    items: [
      { id: 'sim-card', text: 'Buy a local SIM card with data', critical: true },
      { id: 'bank-account', text: 'Open a local bank account (Wise/Revolut as bridge in the meantime)', critical: true },
      { id: 'register-address', text: 'Register your address with local authorities if required', critical: true },
      { id: 'tax-number', text: 'Apply for local tax identification number (NIF, TIN, etc.)', critical: true },
      { id: 'healthcare-register', text: 'Register with local healthcare system (SNS number, GP registration etc.)', critical: true },
      { id: 'explore-neighbourhood', text: 'Explore your neighbourhood — find supermarkets, pharmacy, transport', critical: false },
      { id: 'meetup-groups', text: 'Attend an expat meetup or language exchange', critical: false },
      { id: 'emergency-contacts', text: 'Save local emergency numbers in your phone', critical: true },
    ]
  },
  {
    phase: "First Month",
    color: "slate",
    items: [
      { id: 'residence-permit', text: 'Apply for residence permit (if not done before arrival)', critical: true },
      { id: 'long-term-housing', text: 'Secure long-term housing (1-year lease if settling)', critical: true },
      { id: 'driving-conversion', text: 'Start driving licence conversion process if needed', critical: false },
      { id: 'school-enrol', text: 'Enrol children in school', critical: false },
      { id: 'social-events', text: 'Attend 2+ social events (InterNations, Meetup.com, expat Facebook groups)', critical: false },
      { id: 'tax-registration', text: 'Register as tax resident if applicable', critical: true },
      { id: 'utility-setup', text: 'Set up utilities and internet in your new home', critical: false },
      { id: 'local-apps', text: 'Download local essential apps (transport, food delivery, maps)', critical: false },
    ]
  },
];

const PHASE_COLORS: Record<string, { header: string; badge: string; check: string }> = {
  blue: { header: 'bg-blue-500', badge: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400', check: 'text-blue-500' },
  violet: { header: 'bg-violet-500', badge: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400', check: 'text-violet-500' },
  amber: { header: 'bg-amber-500', badge: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400', check: 'text-amber-500' },
  orange: { header: 'bg-orange-500', badge: 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400', check: 'text-orange-500' },
  emerald: { header: 'bg-emerald-500', badge: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400', check: 'text-emerald-500' },
  slate: { header: 'bg-slate-600', badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300', check: 'text-slate-500' },
};

export default function MovingChecklistTool() {
  const total = CHECKLIST.flatMap(p => p.items).length;
  const critical = CHECKLIST.flatMap(p => p.items).filter(i => i.critical).length;

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const doneCount = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((doneCount / total) * 100);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <CheckSquare size={20} className="text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium uppercase tracking-wide">Moving Tool</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">International Moving Checklist</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {total} tasks across 6 phases — from 12 months out to your first month abroad. {critical} critical tasks you cannot miss.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{doneCount} of {total} tasks complete</span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{progress}%</span>
          </div>
          <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mt-2 text-center">
              You are ready to move!
            </p>
          )}
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {CHECKLIST.map(phase => {
            const colors = PHASE_COLORS[phase.color];
            const phaseChecked = phase.items.filter(i => checked[i.id]).length;
            return (
              <div key={phase.phase} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className={`${colors.header} px-5 py-3 flex items-center justify-between`}>
                  <h2 className="font-bold text-white">{phase.phase}</h2>
                  <span className="text-white/80 text-sm">{phaseChecked}/{phase.items.length}</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {phase.items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left group"
                    >
                      {checked[item.id]
                        ? <CheckSquare size={18} className={`${colors.check} mt-0.5 shrink-0`} />
                        : <Square size={18} className="text-slate-300 dark:text-slate-600 mt-0.5 shrink-0 group-hover:text-slate-400" />
                      }
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm ${checked[item.id] ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          {item.text}
                        </span>
                        {item.critical && !checked[item.id] && (
                          <span className="ml-2 text-xs font-semibold text-red-500">Critical</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Know where you are moving to?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Get instant visa requirements and cost of living analysis for your destination.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
            Run My Relocation Report <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}

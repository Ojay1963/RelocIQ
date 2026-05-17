'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { COST_INDEX_DATA } from '@/lib/countries';
import { TrendingDown, ArrowRight, Filter } from 'lucide-react';

type Tier = 'all' | 'budget' | 'mid' | 'high' | 'premium';

const TIER_COLORS: Record<string, { bg: string; text: string; bar: string }> = {
  budget: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', bar: 'bg-emerald-500' },
  mid: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-400', bar: 'bg-blue-500' },
  high: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400', bar: 'bg-amber-500' },
  premium: { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-700 dark:text-red-400', bar: 'bg-red-500' },
};

export default function CostIndexTool() {
  const [selectedTier, setSelectedTier] = useState<Tier>('all');

  const filtered = COST_INDEX_DATA
    .filter(d => selectedTier === 'all' || d.tier === selectedTier)
    .sort((a, b) => a.score - b.score);

  const tierCounts = {
    all: COST_INDEX_DATA.length,
    budget: COST_INDEX_DATA.filter(d => d.tier === 'budget').length,
    mid: COST_INDEX_DATA.filter(d => d.tier === 'mid').length,
    high: COST_INDEX_DATA.filter(d => d.tier === 'high').length,
    premium: COST_INDEX_DATA.filter(d => d.tier === 'premium').length,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown size={20} className="text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium uppercase tracking-wide">Cost Index</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Global Cost of Living Index</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {COST_INDEX_DATA.length} countries ranked from cheapest to most expensive, with real monthly budget estimates. Lower score = cheaper.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Budget (under 50)', count: tierCounts.budget, tier: 'budget', example: 'Georgia, Vietnam' },
            { label: 'Mid-Range (50–65)', count: tierCounts.mid, tier: 'mid', example: 'Portugal, Mexico' },
            { label: 'High (65–80)', count: tierCounts.high, tier: 'high', example: 'Germany, Canada' },
            { label: 'Premium (80+)', count: tierCounts.premium, tier: 'premium', example: 'Singapore, Norway' },
          ].map(({ label, count, tier, example }) => {
            const colors = TIER_COLORS[tier];
            return (
              <button
                key={tier}
                onClick={() => setSelectedTier(selectedTier === tier ? 'all' : tier as Tier)}
                className={`${colors.bg} border border-transparent rounded-xl p-3 text-left transition-all hover:scale-[1.02] ${selectedTier === tier ? 'ring-2 ring-blue-500' : ''}`}
              >
                <p className={`text-lg font-bold ${colors.text}`}>{count}</p>
                <p className={`text-xs font-medium ${colors.text}`}>{label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{example}</p>
              </button>
            );
          })}
        </div>

        {/* Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 mb-4 flex items-center gap-3 flex-wrap">
          <Filter size={15} className="text-slate-400 shrink-0" />
          <div className="flex gap-2 flex-wrap">
            {(['all', 'budget', 'mid', 'high', 'premium'] as Tier[]).map(tier => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  selectedTier === tier
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tier === 'all' ? `All (${tierCounts.all})` : `${tier} (${tierCounts[tier]})`}
              </button>
            ))}
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {filtered.length} countries shown
            </span>
            <span className="text-xs text-slate-400">Lower score = more affordable</span>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filtered.map((entry, idx) => {
              const colors = TIER_COLORS[entry.tier];
              const countrySlug = entry.country.toLowerCase().replace(/[\s()]/g, c => c === ' ' ? '-' : '').replace(/-+/g, '-');
              return (
                <div key={entry.country} className="px-5 py-4 flex items-center gap-4">
                  {/* Rank */}
                  <span className="text-sm font-bold text-slate-400 w-6 shrink-0">
                    {idx + 1}
                  </span>

                  {/* Country */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <Link
                        href={`/guides/${countrySlug}`}
                        className="font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {entry.country}
                      </Link>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${colors.bg} ${colors.text}`}>
                        {entry.tier}
                      </span>
                    </div>
                    {/* Score bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${colors.bar} transition-all`}
                          style={{ width: `${entry.score}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 w-8 text-right shrink-0">{entry.score}</span>
                    </div>
                  </div>

                  {/* Monthly cost */}
                  <div className="text-right shrink-0">
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{entry.monthly}</p>
                    <p className="text-xs text-slate-400">per month</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology Note */}
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
          <strong className="text-slate-700 dark:text-slate-300">Methodology:</strong> Cost index scores (1–100) represent relative cost of living for a single person living comfortably in the country&apos;s most popular expat city. Monthly estimates assume a 1-bedroom apartment in an expat-friendly neighbourhood, eating out 50% of the time, and using local transport. Scores sourced from Numbeo, ECA International, and Mercer Cost of Living surveys (2024–2025 data).
        </div>

        {/* CTA */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            See how your income stretches
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
            Get personalised cost analysis based on your actual income and lifestyle in any country.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              Compare My Cost of Living <ArrowRight size={16} />
            </Link>
            <Link
              href="/tools/salary-stretcher"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              Salary Stretcher Tool <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

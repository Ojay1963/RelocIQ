'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { COST_INDEX_DATA } from '@/lib/countries';
import { DollarSign, TrendingUp, ArrowRight, Star } from 'lucide-react';

const USD_RATES: Record<string, number> = {
  USD: 1, EUR: 1.08, GBP: 1.27, CAD: 0.74, AUD: 0.65,
  SGD: 0.74, INR: 0.012, BRL: 0.19, MXN: 0.058, NGN: 0.00065,
};

export default function SalaryStretcherClient() {
  const [income, setIncome] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [calculated, setCalculated] = useState(false);

  const incomeUSD = useMemo(() => {
    const val = parseFloat(income.replace(/,/g, ''));
    if (isNaN(val)) return 0;
    return val * (USD_RATES[currency] ?? 1);
  }, [income, currency]);

  const results = useMemo(() => {
    if (!calculated || incomeUSD === 0) return [];
    return COST_INDEX_DATA.map(entry => {
      const ratio = incomeUSD / (entry.score * 35);
      const lifestyle = ratio >= 2.5 ? 'Luxury' : ratio >= 1.5 ? 'Comfortable' : ratio >= 1 ? 'Budget' : 'Tight';
      const savings = Math.max(0, incomeUSD - entry.score * 30);
      return { ...entry, ratio: Math.round(ratio * 10) / 10, lifestyle, savings: Math.round(savings) };
    }).sort((a, b) => b.ratio - a.ratio);
  }, [calculated, incomeUSD]);

  const lifestyleColors: Record<string, string> = {
    Luxury: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30',
    Comfortable: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30',
    Budget: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30',
    Tight: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30',
  };

  const handleCalculate = () => {
    const val = parseFloat(income.replace(/,/g, ''));
    if (isNaN(val) || val <= 0) return;
    setCalculated(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 to-violet-900 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign size={20} className="text-violet-400" />
            <span className="text-violet-300 text-sm font-medium uppercase tracking-wide">Salary Stretcher</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">How Far Does Your Salary Go?</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Enter your monthly income and see exactly what lifestyle it buys you in {COST_INDEX_DATA.length} countries worldwide.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
          <h2 className="font-bold text-slate-900 dark:text-white mb-4">Your Monthly Income</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="relative sm:col-span-2">
              <DollarSign size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="number"
                placeholder="e.g. 3500"
                value={income}
                onChange={e => { setIncome(e.target.value); setCalculated(false); }}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={currency}
              onChange={e => { setCurrency(e.target.value); setCalculated(false); }}
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(USD_RATES).map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleCalculate}
            disabled={!income || parseFloat(income) <= 0}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <TrendingUp size={16} /> Calculate Lifestyle in Every Country
          </button>
        </div>

        {/* Results */}
        {calculated && results.length > 0 && (
          <>
            {/* Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Your <strong className="text-slate-900 dark:text-white">{currency} {parseFloat(income).toLocaleString()}/month</strong> (≈ <strong className="text-slate-900 dark:text-white">${incomeUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</strong>) provides:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm">
                {(['Luxury', 'Comfortable', 'Budget', 'Tight'] as const).map(level => {
                  const count = results.filter(r => r.lifestyle === level).length;
                  return (
                    <div key={level} className={`rounded-lg p-2 ${lifestyleColors[level]}`}>
                      <p className="font-bold text-lg">{count}</p>
                      <p className="text-xs">{level}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Picks */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4">
              <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                Best Value for Your Income
              </h2>
              <div className="grid gap-3">
                {results.slice(0, 5).map((entry, idx) => {
                  const countrySlug = entry.country.toLowerCase().replace(/[\s()]/g, c => c === ' ' ? '-' : '').replace(/-+/g, '-');
                  return (
                    <div key={entry.country} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                      <span className="text-sm font-bold text-slate-400 w-4 shrink-0">#{idx + 1}</span>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/guides/${countrySlug}`}
                          className="font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {entry.country}
                        </Link>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${lifestyleColors[entry.lifestyle]}`}>
                            {entry.lifestyle} living
                          </span>
                          <span className="text-xs text-slate-400">{entry.monthly}/month local estimate</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{entry.ratio}x</p>
                        <p className="text-xs text-slate-400">stretch</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Full Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
              <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">All Countries Ranked by Value</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[600px] overflow-y-auto">
                {results.map((entry, idx) => {
                  const countrySlug = entry.country.toLowerCase().replace(/[\s()]/g, c => c === ' ' ? '-' : '').replace(/-+/g, '-');
                  return (
                    <div key={entry.country} className="px-5 py-3 flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-5 shrink-0">{idx + 1}</span>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/guides/${countrySlug}`}
                          className="text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {entry.country}
                        </Link>
                        <p className="text-xs text-slate-400">{entry.monthly}/month estimate</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${lifestyleColors[entry.lifestyle]}`}>
                        {entry.lifestyle}
                      </span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 w-12 text-right shrink-0">
                        {entry.ratio}x
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* How It Works */}
        {!calculated && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Enter Income', desc: 'Input your monthly take-home pay in your local currency.' },
                { step: '2', title: 'We Convert', desc: 'We convert to USD and calculate purchasing power in each country using our cost index.' },
                { step: '3', title: 'See Results', desc: 'See your lifestyle tier (Luxury/Comfortable/Budget/Tight) in every country, ranked by best value.' },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Ready to plan your actual move?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
            Get AI-powered visa requirements and personalised cost analysis for your specific situation.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Run Full Relocation Report <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}

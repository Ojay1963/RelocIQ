'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { ALL_COUNTRIES } from '@/lib/countries';
import { Plane, Globe, Search, ChevronRight } from 'lucide-react';
import { toSlug } from '@/lib/utils/toSlug';

const VISA_FREE_DATA: Record<string, { countries: string[]; count: number }> = {
  "United States": {
    count: 186,
    countries: ["Portugal","Spain","France","Germany","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","United Kingdom","Ireland","Canada","Australia","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","India","South Africa","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan","Lebanon"]
  },
  "United Kingdom": {
    count: 187,
    countries: ["Portugal","Spain","France","Germany","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","Ireland","Canada","Australia","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","India","South Africa","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan"]
  },
  "Canada": {
    count: 185,
    countries: ["Portugal","Spain","France","Germany","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","United Kingdom","Ireland","Australia","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","India","South Africa","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan"]
  },
  "Germany": {
    count: 190,
    countries: ["Portugal","Spain","France","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","United Kingdom","Ireland","Canada","United States","Australia","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","India","South Africa","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan","Lebanon","Ukraine","Serbia","North Macedonia","Albania","Montenegro","Bosnia and Herzegovina"]
  },
  "Australia": {
    count: 185,
    countries: ["Portugal","Spain","France","Germany","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","United Kingdom","Ireland","Canada","United States","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","India","South Africa","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan"]
  },
  "India": {
    count: 60,
    countries: ["Bhutan","Nepal","Maldives","Indonesia","Jamaica","Trinidad and Tobago","Fiji","Mauritius","Seychelles","Zimbabwe","Cambodia","Laos","Thailand","Malaysia","Senegal","Tanzania","Kenya","Uganda","Rwanda","Malawi","Zambia","Mozambique","Bolivia","Ecuador","El Salvador","Honduras","Nicaragua","Micronesia","Vanuatu","Samoa","Tonga","Kiribati"]
  },
  "Nigeria": {
    count: 46,
    countries: ["Benin","Burkina Faso","Cameroon","Chad","Ghana","Guinea","Guinea-Bissau","Ivory Coast","Liberia","Mali","Mauritania","Niger","Senegal","Sierra Leone","Togo","Indonesia","Malaysia","Cambodia","Laos","Vietnam","Maldives","Mauritius","Seychelles","Jamaica","Trinidad and Tobago","Bolivia","Ecuador","Haiti","Kenya","Rwanda","Tanzania","Uganda","Zambia","Zimbabwe","Mozambique","Malawi","Ethiopia","Vanuatu","Samoa","Tonga","Fiji","Kiribati"]
  },
  "South Africa": {
    count: 103,
    countries: ["Portugal","Spain","France","Germany","Italy","Netherlands","Belgium","Luxembourg","Greece","Austria","Switzerland","Sweden","Norway","Denmark","Finland","Iceland","Czech Republic","Poland","Hungary","Slovakia","Slovenia","Croatia","Romania","Bulgaria","Estonia","Latvia","Lithuania","Malta","Cyprus","United Kingdom","Ireland","Canada","United States","Australia","New Zealand","Japan","South Korea","Singapore","Israel","Mexico","Brazil","Chile","Argentina","Colombia","Peru","Costa Rica","Panama","Ecuador","Bahamas","Barbados","Trinidad and Tobago","Jamaica","Belize","Georgia","Turkey","UAE","Qatar","Bahrain","Kuwait","Oman","Malaysia","Thailand","Indonesia","Philippines","Vietnam","Cambodia","Sri Lanka","Nepal","Kenya","Tanzania","Rwanda","Senegal","Ghana","Morocco","Tunisia","Egypt","Jordan"]
  },
};

const PASSPORT_GROUPS = [
  { label: "Strongest Passports", countries: ["Germany","Sweden","Finland","France","Japan","Singapore","South Korea","Netherlands","Denmark","Norway","Switzerland","Austria","Belgium","Luxembourg","Italy","Spain","Portugal","United States","United Kingdom","Canada","Australia","New Zealand","Ireland","Iceland"] },
  { label: "Mid-Tier Passports", countries: ["Brazil","Argentina","Chile","Mexico","Malaysia","Thailand","South Africa","Turkey","Georgia","Serbia","North Macedonia","Croatia","Bulgaria","Romania","Hungary"] },
  { label: "Emerging Passports", countries: ["India","Nigeria","Kenya","Ghana","Philippines","Indonesia","Vietnam","Cambodia","Sri Lanka","Nepal","Bangladesh","Pakistan","Egypt","Morocco","Tunisia"] },
];

export default function VisaFreeClient() {
  const [passport, setPassport] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<{ countries: string[]; count: number } | null>(null);

  const filteredCountries = result
    ? result.countries.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleSearch = () => {
    if (!passport) return;
    const data = VISA_FREE_DATA[passport];
    if (data) {
      setResult(data);
    } else {
      setResult({ count: 0, countries: [] });
    }
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Plane size={20} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium uppercase tracking-wide">Visa-Free Tool</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Passport Visa-Free Explorer</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            See how many countries you can visit visa-free with your passport, and which destinations are the most accessible.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
          <h2 className="font-bold text-slate-900 dark:text-white mb-4">Select Your Passport</h2>
          <div className="flex gap-3 flex-col sm:flex-row">
            <label htmlFor="passport-select" className="sr-only">Passport country</label>
            <select
              id="passport-select"
              value={passport}
              onChange={e => setPassport(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose your passport country...</option>
              {ALL_COUNTRIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              disabled={!passport}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <Globe size={16} /> See Access
            </button>
          </div>

          {/* F-10: quick-select suggestions when no search yet */}
          {result === null && (
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="text-xs text-slate-400">Popular:</span>
              {['United States', 'United Kingdom', 'Germany'].map(c => (
                <button
                  key={c}
                  onClick={() => setPassport(c)}
                  aria-label={`Select ${c} as passport country`}
                  className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results */}
        {result !== null && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
            {result.count === 0 ? (
              <div className="text-center py-8">
                <Globe size={40} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 dark:text-slate-400">
                  Detailed visa-free data for <strong>{passport}</strong> is coming soon.
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  Use our <Link href="/" className="text-blue-500 hover:underline">main tool</Link> for personalised visa analysis.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{passport} Passport</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{result.count} countries visa-free or visa-on-arrival</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{result.count}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">countries</p>
                  </div>
                </div>

                <div className="relative mb-4">
                  <label htmlFor="country-filter" className="sr-only">Filter countries</label>
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="country-filter"
                    type="text"
                    placeholder="Filter countries..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredCountries.map(country => (
                    <Link
                      key={country}
                      href={`/guides/${toSlug(country)}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors group"
                    >
                      {country}
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Passport Power Tiers */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Passport Power Tiers</h2>
          <div className="space-y-5">
            {PASSPORT_GROUPS.map(group => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">{group.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.countries.map(c => (
                    <button
                      key={c}
                      onClick={() => setPassport(c)}
                      aria-label={`Select ${c} as passport country`}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Want detailed visa requirements?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
            Get AI-powered visa analysis with processing times, costs, and documents required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Run Full Visa Report <Plane size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}

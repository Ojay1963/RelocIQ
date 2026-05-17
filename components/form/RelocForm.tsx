'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountrySelect } from './CountrySelect';
import { ALL_COUNTRIES, CURRENCIES, PURPOSES } from '@/lib/countries';
import type { FormData } from '@/types';

interface Props {
  onSubmit: (data: FormData) => void;
  initialData?: FormData | null;
}

export function RelocForm({ onSubmit, initialData }: Props) {
  const [passportCountry, setPassportCountry] = useState(initialData?.passportCountry || '');
  const [destinations, setDestinations] = useState<string[]>(initialData?.destinations || ['']);
  const [monthlyIncome, setMonthlyIncome] = useState(initialData?.monthlyIncome || '');
  const [currency, setCurrency] = useState(initialData?.currency || 'USD');
  const [purpose, setPurpose] = useState(initialData?.purpose || 'Work');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setPassportCountry(initialData.passportCountry);
      setDestinations(initialData.destinations.length ? initialData.destinations : ['']);
      setMonthlyIncome(initialData.monthlyIncome);
      setCurrency(initialData.currency);
      setPurpose(initialData.purpose);
    }
  }, [initialData]);

  function validate() {
    const e: Record<string, string> = {};
    if (!passportCountry) e.passport = 'Select your passport country';
    if (destinations.some(d => !d)) e.destinations = 'Select all destination countries';
    if (!monthlyIncome || isNaN(Number(monthlyIncome)) || Number(monthlyIncome) <= 0)
      e.income = 'Enter a valid income amount';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      passportCountry,
      destinations: destinations.filter(Boolean),
      monthlyIncome,
      currency,
      purpose,
    });
  }

  function addDestination() {
    if (destinations.length < 3) setDestinations([...destinations, '']);
  }

  function removeDestination(index: number) {
    setDestinations(destinations.filter((_, i) => i !== index));
  }

  function updateDestination(index: number, value: string) {
    const updated = [...destinations];
    updated[index] = value;
    setDestinations(updated);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 max-w-2xl mx-auto"
    >
      <div className="space-y-5">
        {/* Passport */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Passport Country
          </label>
          <CountrySelect
            countries={ALL_COUNTRIES}
            value={passportCountry}
            onChange={setPassportCountry}
            placeholder="Select your passport country..."
          />
          {errors.passport && <p className="text-red-500 text-xs mt-1">{errors.passport}</p>}
        </div>

        {/* Destinations */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Destination(s)
          </label>
          <div className="space-y-2">
            {destinations.map((dest, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="flex-1">
                  <CountrySelect
                    countries={ALL_COUNTRIES}
                    value={dest}
                    onChange={(v) => updateDestination(i, v)}
                    placeholder={`Destination ${i + 1}...`}
                  />
                </div>
                {destinations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDestination(i)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
          {errors.destinations && <p className="text-red-500 text-xs mt-1">{errors.destinations}</p>}
          {destinations.length < 3 && (
            <button
              type="button"
              onClick={addDestination}
              className="mt-2 flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              <Plus size={16} /> Add another destination
            </button>
          )}
        </div>

        {/* Income + Currency */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Monthly Income
            </label>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="e.g. 3000"
              min="1"
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {errors.income && <p className="text-red-500 text-xs mt-1">{errors.income}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Purpose of Move
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PURPOSES.map(p => (
              <button
                key={p}
                type="button"
                onClick={() => setPurpose(p)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                  purpose === p
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-base font-semibold rounded-xl flex items-center justify-center gap-2"
        >
          Generate My RelocIQ Report <ArrowRight size={18} />
        </Button>
      </div>
    </motion.form>
  );
}

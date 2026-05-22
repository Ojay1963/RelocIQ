'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { RelocForm } from '@/components/form/RelocForm';
import { LoadingState } from '@/components/report/LoadingState';
import { ReportView } from '@/components/report/ReportView';
import { LeadCapture } from '@/components/monetisation/LeadCapture';
import type { FormData, ReportData } from '@/types';

function HomeInteractiveContent() {
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
    <AnimatePresence mode="wait">
      {step === 'form' && (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {error && (
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg p-4 mb-6 text-center text-sm">
              {error}
            </div>
          )}
          <RelocForm onSubmit={handleSubmit} initialData={formData} />
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
  );
}

export function HomeInteractive() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      }
    >
      <HomeInteractiveContent />
    </Suspense>
  );
}

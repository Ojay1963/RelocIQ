'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { RelocForm } from '@/components/form/RelocForm';
import { LoadingState } from '@/components/report/LoadingState';
import { ReportView } from '@/components/report/ReportView';
import { LeadCapture } from '@/components/monetisation/LeadCapture';
import type { FormData, ReportData } from '@/types';

const SESSION_KEY = 'relociq_form';

// ── F-06: Error boundary ────────────────────────────────────────────────────
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onReset: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-12 px-4">
          <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-5xl mb-4">⚠️</p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Something went wrong
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              We couldn&apos;t generate your report. This is usually temporary — please try again.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                this.props.onReset();
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Main interactive component ──────────────────────────────────────────────
function Inner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<'form' | 'loading' | 'report'>('form');
  const [formData, setFormData] = useState<FormData | null>(null);
  const [reports, setReports] = useState<ReportData[]>([]);
  const [error, setError] = useState<string | null>(null);

  // ── F-03: Toast state ─────────────────────────────────────────────────────
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(message: string) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMsg(message);
    toastTimer.current = setTimeout(() => setToastMsg(null), 3000);
  }

  // ── F-08 + URL params: restore state on mount ─────────────────────────────
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
      return;
    }

    // F-08: fall back to sessionStorage if no URL params
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const data = JSON.parse(saved) as FormData;
        setFormData(data);
      }
    } catch {
      // sessionStorage unavailable (private browsing, etc.)
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

      // F-07: push params to browser URL so the address bar is shareable
      const params = new URLSearchParams({
        passport: data.passportCountry,
        destinations: data.destinations.join(','),
        income: data.monthlyIncome,
        currency: data.currency,
        purpose: data.purpose,
      });
      window.history.replaceState(null, '', '?' + params.toString());
    } catch {
      setError('Something went wrong generating your report. Please try again.');
      setStep('form');
    }
  }

  async function handleSubmit(data: FormData) {
    setFormData(data);
    // F-08: persist to sessionStorage
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
    } catch {
      // ignore write failures
    }
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

  // F-07: share URL is now just the current browser URL (already has params)
  function handleShareLink() {
    if (!formData) return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Shareable link copied!');
    }).catch(() => {
      showToast('Copy failed — share from the address bar directly.');
    });
  }

  return (
    <>
      {/* F-03: Toast notification */}
      {toastMsg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium pointer-events-none"
        >
          {toastMsg}
        </div>
      )}

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
                // F-08: clear saved state; F-07: clean up URL
                try {
                  sessionStorage.removeItem(SESSION_KEY);
                  window.history.replaceState(null, '', window.location.pathname);
                } catch {
                  // ignore
                }
              }}
            />
            <LeadCapture formData={formData} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── F-06: Wrap Inner in ErrorBoundary ────────────────────────────────────────
export function HomeInteractiveContent() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <Suspense
      fallback={
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      }
    >
      <ErrorBoundary onReset={() => setResetKey(k => k + 1)}>
        <Inner key={resetKey} />
      </ErrorBoundary>
    </Suspense>
  );
}

'use client';

import { useState } from 'react';
import { Mail, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { FormData } from '@/types';

export function LeadCapture({ formData }: { formData: FormData }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          passportCountry: formData.passportCountry,
          destinationCountry: formData.destinations.join(', '),
          income: formData.monthlyIncome,
          currency: formData.currency,
        }),
      });
      setSubmitted(true);
    } catch {
      // silent fail — still show success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <div className="relative max-w-2xl mx-auto bg-slate-900 dark:bg-slate-800 text-white rounded-2xl shadow-2xl border border-slate-700 p-4 md:p-5">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="flex flex-col sm:flex-row items-center gap-4 pr-6">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm md:text-base">
                Get your free personalised RelocIQ Roadmap
              </p>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                Step-by-step plan to your destination, delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto shrink-0">
              <div className="relative flex-1 sm:w-52">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-8 pr-3 py-2 bg-slate-800 dark:bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 whitespace-nowrap"
              >
                {loading ? '...' : <><ArrowRight size={14} /> Get Roadmap</>}
              </Button>
            </form>
          </div>
        ) : (
          <p className="text-center text-emerald-400 font-medium py-1">
            Your roadmap is on its way! Check your inbox.
          </p>
        )}
      </div>
    </div>
  );
}

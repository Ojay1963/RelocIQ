'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Plus, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VisaCard } from './VisaCard';
import { CostCard } from './CostCard';
import { AffiliateSection } from '@/components/monetisation/AffiliateSection';
import { CountrySelect } from '@/components/form/CountrySelect';
import { ALL_COUNTRIES } from '@/lib/countries';
import type { ReportData, FormData } from '@/types';

interface Props {
  reports: ReportData[];
  formData: FormData;
  onAddDestination: (destination: string) => void;
  onShareLink: () => void;
  onNewSearch: () => void;
}

export function ReportView({ reports, formData, onAddDestination, onShareLink, onNewSearch }: Props) {
  const [newDest, setNewDest] = useState('');
  const [adding, setAdding] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  async function handleAddDestination() {
    if (!newDest) return;
    setAdding(true);
    await onAddDestination(newDest);
    setNewDest('');
    setAdding(false);
    setShowAddForm(false);
  }

  return (
    <div className="space-y-8 pb-32">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your RelocIQ Report</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {formData.passportCountry} passport · {formData.currency} {Number(formData.monthlyIncome).toLocaleString()}/month · {formData.purpose}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onShareLink} className="flex items-center gap-2">
            <Share2 size={15} /> Copy Link
          </Button>
          <Button variant="outline" size="sm" onClick={onNewSearch} className="flex items-center gap-2">
            <RefreshCw size={15} /> New Search
          </Button>
        </div>
      </div>

      {/* Report cards */}
      {reports.map((report, i) => (
        <motion.div
          key={report.destination}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6">
            <h3 className="text-2xl font-bold text-white">{report.destination}</h3>
            <p className="text-blue-200 text-sm mt-1">
              {formData.passportCountry} → {report.destination}
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            <VisaCard data={report.visa} />
            <div className="md:pl-6 pt-6 md:pt-0">
              <CostCard data={report.compare} currency={formData.currency} income={formData.monthlyIncome} />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Add destination */}
      <div className="flex flex-col sm:flex-row gap-3">
        {!showAddForm && reports.length < 3 && (
          <Button variant="outline" onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
            <Plus size={16} /> Compare another country
          </Button>
        )}
        {showAddForm && (
          <div className="flex gap-2 flex-1">
            <div className="flex-1">
              <CountrySelect
                countries={ALL_COUNTRIES}
                value={newDest}
                onChange={setNewDest}
                placeholder="Select country to compare..."
              />
            </div>
            <Button
              onClick={handleAddDestination}
              disabled={adding || !newDest}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              {adding ? 'Loading...' : 'Add'}
            </Button>
            <Button variant="outline" onClick={() => { setShowAddForm(false); setNewDest(''); }}>
              Cancel
            </Button>
          </div>
        )}
      </div>

      <AffiliateSection />
    </div>
  );
}

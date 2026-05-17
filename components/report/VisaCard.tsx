import { CheckCircle2, Clock, DollarSign, FileText, AlertTriangle } from 'lucide-react';
import type { VisaData } from '@/types';

interface Props { data: VisaData }

const DIFFICULTY_STYLES: Record<string, string> = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  Moderate: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400',
};

export function VisaCard({ data }: Props) {
  const visaBadge = data.visaRequired
    ? { label: 'Visa Required', style: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400' }
    : { label: 'Visa Not Required', style: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400' };

  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold text-slate-900 dark:text-white">Visa Intelligence</h4>

      <div className="flex flex-wrap gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${visaBadge.style}`}>
          {visaBadge.label}
        </span>
        {data.visaType && data.visaType !== 'None' && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
            {data.visaType}
          </span>
        )}
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${DIFFICULTY_STYLES[data.difficultyRating] ?? DIFFICULTY_STYLES.Moderate}`}>
          {data.difficultyRating}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
            <Clock size={12} /> Processing Time
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{data.processingTime || 'N/A'}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
            <DollarSign size={12} /> Approximate Cost
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{data.cost || 'Free'}</p>
        </div>
      </div>

      {data.documents && data.documents.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-semibold mb-2">
            <FileText size={12} /> Required Documents
          </div>
          <ul className="space-y-1.5">
            {data.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.notes && (
        <p className="text-xs text-slate-500 dark:text-slate-400 italic border-l-2 border-blue-200 pl-3">
          {data.notes}
        </p>
      )}

      <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
        <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-xs text-amber-700 dark:text-amber-400">
          Verify with official government sources before travelling.
        </p>
      </div>
    </div>
  );
}

import { Home, ShoppingCart, Bus, Wifi, Heart, Music, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { CompareData } from '@/types';

interface Props { data: CompareData; currency: string; income: string }

const COMPARISON_CONFIG: Record<string, { style: string; Icon: React.ElementType; label: string }> = {
  Better: { style: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400', Icon: TrendingUp, label: 'Better than home' },
  Worse:  { style: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400', Icon: TrendingDown, label: 'Worse than home' },
  Similar:{ style: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400', Icon: Minus, label: 'Similar to home' },
};

const COST_ROWS = [
  { key: 'rent',          label: 'Rent',          Icon: Home },
  { key: 'food',          label: 'Food',          Icon: ShoppingCart },
  { key: 'transport',     label: 'Transport',     Icon: Bus },
  { key: 'internet',      label: 'Internet',      Icon: Wifi },
  { key: 'healthcare',    label: 'Healthcare',    Icon: Heart },
  { key: 'entertainment', label: 'Entertainment', Icon: Music },
] as const;

export function CostCard({ data }: Props) {
  const cfg = COMPARISON_CONFIG[data.homeComparison] ?? COMPARISON_CONFIG.Similar;
  const { Icon: CompIcon } = cfg;
  const scoreColor = data.lifestyleScore >= 7 ? 'text-emerald-500' : data.lifestyleScore >= 5 ? 'text-amber-500' : 'text-red-500';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h4 className="text-base font-bold text-slate-900 dark:text-white">Cost of Living</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${cfg.style}`}>
          <CompIcon size={12} /> {cfg.label}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {COST_ROWS.map(({ key, label, Icon }) => (
          <div key={key} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
              <Icon size={11} /> {label}
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {(data as unknown as Record<string, string>)[key] ?? 'N/A'}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Total Monthly Estimate</span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{data.totalMonthlyEstimate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Lifestyle Score</span>
          <span className={`text-sm font-bold ${scoreColor}`}>{data.lifestyleScore}/10</span>
        </div>
      </div>

      {data.summary && (
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{data.summary}</p>
      )}
    </div>
  );
}

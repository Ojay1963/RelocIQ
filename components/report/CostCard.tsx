import {
  Home, ShoppingCart, Bus, Zap, Wifi, Heart, Music,
  TrendingUp, TrendingDown, Minus, CircleDollarSign,
} from 'lucide-react';
import type { CompareData } from '@/types';

interface Props {
  data: CompareData;
  currency: string;
  income: string;
}

const COMPARISON_CONFIG = {
  Better:  { badge: 'bg-emerald-500 text-white', label: 'Cheaper than home',  Icon: TrendingDown },
  Worse:   { badge: 'bg-red-500 text-white',     label: 'More expensive',     Icon: TrendingUp },
  Similar: { badge: 'bg-slate-500 text-white',   label: 'Similar to home',    Icon: Minus },
} as const;

function deltaStyle(delta: number) {
  if (delta < -10) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';
  if (delta < 0)   return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
  if (delta > 10)  return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300';
  if (delta > 0)   return 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300';
  return 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300';
}

function barColor(delta: number) {
  if (delta < 0) return 'bg-emerald-400';
  if (delta > 0) return 'bg-red-400';
  return 'bg-slate-400';
}

export function CostCard({ data, currency, income }: Props) {
  const cfg = COMPARISON_CONFIG[data.homeComparison] ?? COMPARISON_CONFIG.Similar;
  const { Icon: CompIcon } = cfg;

  const incomeNum = parseFloat(income) || 0;
  const totalRaw = data.totalMonthlyRaw || 0;
  const remaining = incomeNum - totalRaw;
  const spentPct = incomeNum > 0 ? Math.min(100, Math.round((totalRaw / incomeNum) * 100)) : 0;
  const disposablePct = Math.max(0, 100 - spentPct);
  const overBudget = remaining < 0;

  const scoreColor =
    data.lifestyleScore >= 7 ? 'text-emerald-500'
    : data.lifestyleScore >= 5 ? 'text-amber-500'
    : 'text-red-500';

  const scoreBarColor =
    data.lifestyleScore >= 7 ? 'bg-emerald-500'
    : data.lifestyleScore >= 5 ? 'bg-amber-500'
    : 'bg-red-500';

  const categories = [
    { key: 'rent',          label: 'Rent',           Icon: Home,          amount: data.rent,          raw: data.rentRaw ?? 0,          note: data.rentNote,          delta: data.rentDelta          ?? 0 },
    { key: 'food',          label: 'Food & Groceries',Icon: ShoppingCart,  amount: data.food,          raw: data.foodRaw ?? 0,          note: data.foodNote,          delta: data.foodDelta          ?? 0 },
    { key: 'transport',     label: 'Transport',       Icon: Bus,           amount: data.transport,     raw: data.transportRaw ?? 0,     note: data.transportNote,     delta: data.transportDelta     ?? 0 },
    { key: 'utilities',     label: 'Utilities',       Icon: Zap,           amount: data.utilities,     raw: data.utilitiesRaw ?? 0,     note: data.utilitiesNote,     delta: data.utilitiesDelta     ?? 0 },
    { key: 'internet',      label: 'Internet',        Icon: Wifi,          amount: data.internet,      raw: data.internetRaw ?? 0,      note: data.internetNote,      delta: data.internetDelta      ?? 0 },
    { key: 'healthcare',    label: 'Healthcare',      Icon: Heart,         amount: data.healthcare,    raw: data.healthcareRaw ?? 0,    note: undefined,              delta: data.healthcareDelta    ?? 0 },
    { key: 'entertainment', label: 'Entertainment',   Icon: Music,         amount: data.entertainment, raw: data.entertainmentRaw ?? 0, note: undefined,              delta: data.entertainmentDelta ?? 0 },
  ];

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-slate-900 dark:text-white">Cost of Living</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${cfg.badge}`}>
          <CompIcon size={11} /> {cfg.label}
        </span>
      </div>

      {/* Hero: total + income bar */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-2xl p-5">
        <p className="text-slate-400 text-xs uppercase tracking-widest text-center mb-1">Total Monthly Estimate</p>
        <p className="text-5xl font-black text-white text-center mb-1 tracking-tight">{data.totalMonthlyEstimate}</p>
        <p className="text-slate-500 text-xs text-center mb-4">per month, all categories included</p>

        {incomeNum > 0 && (
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-400">
                Your income: <span className="text-slate-200 font-semibold">{currency} {incomeNum.toLocaleString()}</span>
              </span>
              <span className={overBudget ? 'text-red-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                {overBudget
                  ? `Over budget by ${Math.abs(remaining).toLocaleString()}`
                  : `${currency} ${remaining.toLocaleString()} left over`}
              </span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${overBudget ? 'bg-red-500' : 'bg-emerald-500'}`}
                style={{ width: `${spentPct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1.5">
              <span className="text-slate-500">{spentPct}% of income spent</span>
              <span className={overBudget ? 'text-red-400' : 'text-emerald-400'}>{disposablePct}% disposable</span>
            </div>
          </div>
        )}
      </div>

      {/* Category breakdown */}
      <div className="space-y-2">
        {categories.map(({ key, label, Icon, amount, raw, note, delta }) => {
          const pct = totalRaw > 0 ? Math.round((raw / totalRaw) * 100) : 0;
          return (
            <div key={key} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-600">
                    <Icon size={13} className="text-slate-600 dark:text-slate-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight truncate">{label}</p>
                    {note && <p className="text-xs text-slate-400 leading-tight truncate">{note}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${deltaStyle(delta)}`}>
                    {delta > 0 ? '+' : ''}{delta}%
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white w-16 text-right">{amount}</span>
                </div>
              </div>
              {/* Proportion bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${barColor(delta)} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-slate-400 w-8 text-right shrink-0">{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Purchasing power */}
      {data.purchasingPower && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
              <CircleDollarSign size={15} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-0.5">Purchasing Power</p>
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-snug">{data.purchasingPower}</p>
            </div>
          </div>
        </div>
      )}

      {/* Score + savings */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Lifestyle Score</p>
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`h-3 flex-1 rounded-sm ${i < data.lifestyleScore ? scoreBarColor : 'bg-slate-200 dark:bg-slate-700'}`}
              />
            ))}
          </div>
          <p className={`text-2xl font-black ${scoreColor}`}>{data.lifestyleScore}<span className="text-sm font-medium text-slate-400">/10</span></p>
        </div>

        {data.savingsVsHome && (
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wide font-bold">Savings vs Home</p>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 font-semibold leading-snug">{data.savingsVsHome}</p>
          </div>
        )}
      </div>

      {/* Biggest saving */}
      {data.biggestSaving && (
        <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3">
          <TrendingDown size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">{data.biggestSaving}</p>
        </div>
      )}

      {/* Verdict */}
      {data.verdict && (
        <div className="border-l-4 border-blue-400 pl-4 py-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 italic leading-relaxed">&ldquo;{data.verdict}&rdquo;</p>
        </div>
      )}

      {/* Summary */}
      {data.summary && (
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{data.summary}</p>
      )}

    </div>
  );
}

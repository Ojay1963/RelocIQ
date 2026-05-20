import { Home, ShoppingCart, Bus, Zap, Wifi, Heart, Music } from 'lucide-react';
import type { CostRow } from '@/lib/countryCostData';

interface Props {
  rows: CostRow[];
  totalRange: string;
  note?: string;
}

const CATEGORY_CONFIG: Record<CostRow['category'], { Icon: React.ElementType; color: string; bar: string }> = {
  rent:          { Icon: Home,          color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30',        bar: 'bg-blue-500' },
  food:          { Icon: ShoppingCart,  color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30', bar: 'bg-emerald-500' },
  transport:     { Icon: Bus,           color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30',    bar: 'bg-amber-500' },
  utilities:     { Icon: Zap,           color: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30', bar: 'bg-orange-500' },
  internet:      { Icon: Wifi,          color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30', bar: 'bg-violet-500' },
  healthcare:    { Icon: Heart,         color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30',        bar: 'bg-rose-500' },
  entertainment: { Icon: Music,         color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30', bar: 'bg-indigo-500' },
};

export function CostBreakdownChart({ rows, totalRange, note }: Props) {
  const maxRaw = Math.max(...rows.map(r => r.raw), 1);
  const totalRaw = rows.reduce((sum, r) => sum + r.raw, 0);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mb-0.5">
            Estimated monthly total
          </p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">{totalRange}</p>
        </div>
        {note && (
          <p className="text-xs text-slate-400 italic">{note}</p>
        )}
      </div>

      {/* Rows */}
      <div className="space-y-2.5 mb-5">
        {rows.map(row => {
          const cfg = CATEGORY_CONFIG[row.category];
          const { Icon } = cfg;
          const barPct = Math.round((row.raw / maxRaw) * 100);
          const sharePct = totalRaw > 0 ? Math.round((row.raw / totalRaw) * 100) : 0;

          return (
            <div key={row.label} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cfg.color}`}>
                    <Icon size={13} />
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{row.label}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-xs text-slate-400">{sharePct}%</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white w-28 text-right">{row.range}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cfg.bar} transition-all`}
                    style={{ width: `${barPct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend strip */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
        {rows.map(row => {
          const cfg = CATEGORY_CONFIG[row.category];
          return (
            <div key={row.label} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${cfg.bar}`} />
              <span className="text-xs text-slate-500 dark:text-slate-400">{row.label.split(' ')[0]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── City page variant ─────────────────────────────────────────────────────────
// Takes the free-form costBreakdown items from CityContent and renders them
// as proportional horizontal bars.

interface CityItem { item: string; cost: string }

interface CityChartProps {
  items: CityItem[];
  monthlyBudget: { budget: string; comfortable: string; luxury: string };
}

function parseMidpoint(cost: string): number {
  const nums = cost.match(/[\d,]+/g)?.map(n => parseFloat(n.replace(/,/g, ''))) ?? [0];
  if (nums.length >= 2) return (nums[0] + nums[1]) / 2;
  return nums[0] ?? 0;
}

// Assign a colour class based on the item's position in the list (first = rent = blue, etc.)
const ROW_COLORS = [
  'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-orange-500',
  'bg-violet-500', 'bg-rose-500', 'bg-indigo-500', 'bg-slate-500',
];

export function CityBreakdownChart({ items, monthlyBudget }: CityChartProps) {
  const raws = items.map(i => parseMidpoint(i.cost));
  const maxRaw = Math.max(...raws, 1);

  return (
    <div>
      {/* Budget tiers */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Budget', amount: monthlyBudget.budget, style: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400' },
          { label: 'Comfortable', amount: monthlyBudget.comfortable, style: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400' },
          { label: 'Luxury', amount: monthlyBudget.luxury, style: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400' },
        ].map(t => (
          <div key={t.label} className={`rounded-xl border p-3 text-center ${t.style}`}>
            <p className="text-xs font-medium uppercase tracking-wide opacity-70 mb-0.5">{t.label}</p>
            <p className="text-lg font-bold">{t.amount}</p>
            <p className="text-xs opacity-60">per month</p>
          </div>
        ))}
      </div>

      {/* Item bars */}
      <div className="space-y-2.5">
        {items.map((item, i) => {
          const raw = raws[i];
          const barPct = Math.round((raw / maxRaw) * 100);
          const barColor = ROW_COLORS[i % ROW_COLORS.length];
          return (
            <div key={item.item}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-700 dark:text-slate-300 truncate mr-3">{item.item}</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white shrink-0">{item.cost}</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{ width: `${barPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

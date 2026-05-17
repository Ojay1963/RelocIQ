import { ExternalLink, Shield, CreditCard, Briefcase } from 'lucide-react';

const AFFILIATES = [
  {
    Icon: Shield,
    title: 'Visa Agencies',
    description: 'Expert visa consultants to handle your application end-to-end.',
    cta: 'Get a Free Quote',
    href: '#visa-agencies',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    Icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive expat and travel insurance for your move abroad.',
    cta: 'Compare Plans',
    href: '#travel-insurance',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    Icon: CreditCard,
    title: 'Expat Banking',
    description: 'Multi-currency accounts with no hidden fees for global citizens.',
    cta: 'Open Account',
    href: '#expat-banking',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
  },
  {
    Icon: Briefcase,
    title: 'Remote Job Boards',
    description: 'Thousands of remote-friendly roles from top global employers.',
    cta: 'Browse Jobs',
    href: '#remote-jobs',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
  },
];

export function AffiliateSection() {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recommended Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AFFILIATES.map(({ Icon, title, description, cta, href, color, bg }) => (
          <div
            key={title}
            className={`${bg} border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col gap-3`}
          >
            <div className={color}><Icon size={22} /></div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{description}</p>
            </div>
            <a
              href={href}
              className="mt-auto text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              {cta} <ExternalLink size={11} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

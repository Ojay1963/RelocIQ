import type { Metadata } from 'next';
import type { Lead } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ password?: string }>;
}

export default async function AdminLeadsPage({ searchParams }: Props) {
  const { password } = await searchParams;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!password || password !== adminPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8 max-w-sm w-full mx-4">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Admin Access Required</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Add{' '}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs font-mono">
              ?password=yourpassword
            </code>{' '}
            to the URL to access this page.
          </p>
        </div>
      </div>
    );
  }

  let leads: Lead[] = [];
  try {
    leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
  } catch {
    // SQLite unavailable in serverless environments (e.g. Vercel)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Leads <span className="text-slate-400 font-normal">({leads.length})</span>
          </h1>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  {['Email', 'From', 'Going To', 'Income', 'Date'].map(h => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{lead.email}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{lead.passportCountry || '—'}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{lead.destinationCountry || '—'}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      {lead.currency} {lead.income}
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-500 text-xs">
                      {new Date(lead.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-slate-400">
                      No leads yet. Share your RelocIQ link to start collecting!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

import type { Metadata } from 'next';
import CostIndexClient from './CostIndexClient';

export const metadata: Metadata = {
  title: 'Global Cost of Living Index — 50+ Countries Ranked',
  description: 'Compare cost of living across 50+ countries. From budget to premium tiers, find the most affordable places to live abroad with real monthly estimates.',
  alternates: { canonical: 'https://relociq.com/tools/cost-index' },
  openGraph: {
    title: 'Global Cost of Living Index — 50+ Countries Ranked',
    description: 'Compare cost of living across 50+ countries. From budget to premium tiers, find the most affordable places to live abroad with real monthly estimates.',
    type: 'website',
  },
};

export default function CostIndexPage() {
  return <CostIndexClient />;
}

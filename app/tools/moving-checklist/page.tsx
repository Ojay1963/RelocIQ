import type { Metadata } from 'next';
import MovingChecklistClient from './MovingChecklistClient';

export const metadata: Metadata = {
  title: 'International Moving Checklist — 50 Tasks Across 6 Phases',
  description: 'Complete moving abroad checklist covering everything from 12 months before departure to your first month overseas. 23 critical tasks you cannot miss.',
  alternates: { canonical: 'https://relociq.com/tools/moving-checklist' },
  openGraph: {
    title: 'International Moving Checklist — 50 Tasks Across 6 Phases',
    description: 'Complete moving abroad checklist covering everything from 12 months before departure to your first month overseas. 23 critical tasks you cannot miss.',
    type: 'website',
  },
};

export default function MovingChecklistPage() {
  return <MovingChecklistClient />;
}

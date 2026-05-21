import type { Metadata } from 'next';
import SalaryStretcherClient from './SalaryStretcherClient';

export const metadata: Metadata = {
  title: 'Salary Stretcher — How Far Does Your Income Go Abroad?',
  description: 'Enter your monthly income and see what lifestyle it buys in 50+ countries. Compare purchasing power and find where your money goes furthest.',
  alternates: { canonical: 'https://relociq.com/tools/salary-stretcher' },
  openGraph: {
    title: 'Salary Stretcher — How Far Does Your Income Go Abroad?',
    description: 'Enter your monthly income and see what lifestyle it buys in 50+ countries. Compare purchasing power and find where your money goes furthest.',
    type: 'website',
  },
};

export default function SalaryStretcherPage() {
  return <SalaryStretcherClient />;
}

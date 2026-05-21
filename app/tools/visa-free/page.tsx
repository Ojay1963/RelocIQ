import type { Metadata } from 'next';
import VisaFreeClient from './VisaFreeClient';

export const metadata: Metadata = {
  title: 'Passport Visa-Free Explorer — Check Your Visa Access',
  description: 'Discover how many countries you can visit visa-free with your passport. Check access by country and compare passport power tiers worldwide.',
  alternates: { canonical: 'https://relociq.com/tools/visa-free' },
  openGraph: {
    title: 'Passport Visa-Free Explorer — Check Your Visa Access',
    description: 'Discover how many countries you can visit visa-free with your passport. Check access by country and compare passport power tiers worldwide.',
    type: 'website',
  },
};

export default function VisaFreePage() {
  return <VisaFreeClient />;
}

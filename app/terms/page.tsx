import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Terms of Use | RelocIQ',
  description: 'Terms and conditions for using RelocIQ.',
  alternates: { canonical: 'https://relociq.com/terms' },
  robots: { index: false },
};

const SECTION_CLASS = 'mb-8';
const H2_CLASS = 'text-lg font-bold text-slate-900 dark:text-white mb-3';
const P_CLASS = 'text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3';
const UL_CLASS = 'list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400 text-sm mb-3';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main id="main-content" className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Terms of Use</h1>
        <p className="text-xs text-slate-400 mb-10">Last updated: 1 May 2025</p>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Acceptance of terms</h2>
          <p className={P_CLASS}>
            By accessing or using RelocIQ (<strong>relociq.com</strong>) you agree to these Terms
            of Use. If you do not agree, please stop using the site.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Nature of the service</h2>
          <p className={P_CLASS}>
            RelocIQ provides AI-generated relocation information — including visa requirements and
            cost-of-living estimates — for informational purposes only. The content is generated
            automatically and may not reflect the latest regulations or real-world conditions.
          </p>
          <p className={P_CLASS}>
            <strong>Nothing on this site constitutes legal, immigration, financial, or tax advice.</strong>{' '}
            Always verify visa requirements with the official embassy or consulate of your destination
            country before making travel or relocation decisions.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Acceptable use</h2>
          <p className={P_CLASS}>You agree not to:</p>
          <ul className={UL_CLASS}>
            <li>Use the service for any unlawful purpose.</li>
            <li>Attempt to overload, disrupt, or reverse-engineer the service.</li>
            <li>Submit false, misleading, or malicious input to the AI systems.</li>
            <li>Scrape or systematically harvest content without prior written permission.</li>
            <li>
              Use automated tools to send requests at a rate that exceeds the published rate limits.
            </li>
          </ul>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Intellectual property</h2>
          <p className={P_CLASS}>
            The RelocIQ name, logo, and site design are the property of RelocIQ. AI-generated
            report content is provided for your personal, non-commercial use. You may not reproduce
            or distribute it commercially without permission.
          </p>
          <p className={P_CLASS}>
            Country images are sourced from Unsplash and are subject to the{' '}
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Unsplash License
            </a>
            .
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Disclaimer of warranties</h2>
          <p className={P_CLASS}>
            The service is provided <strong>&ldquo;as is&rdquo;</strong> without warranties of any
            kind, express or implied. We do not warrant that the information is accurate, complete,
            or current. Use of the service is at your own risk.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Limitation of liability</h2>
          <p className={P_CLASS}>
            To the fullest extent permitted by law, RelocIQ shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from your use of, or inability
            to use, the service or the information it provides.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Changes to the service or these terms</h2>
          <p className={P_CLASS}>
            We may modify or discontinue the service, or update these terms, at any time without
            prior notice. Continued use of the site after changes to the terms constitutes
            acceptance of the revised terms.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Governing law</h2>
          <p className={P_CLASS}>
            These terms are governed by the laws of the jurisdiction in which RelocIQ operates.
            Any disputes shall be resolved in the courts of that jurisdiction.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Contact</h2>
          <p className={P_CLASS}>
            Questions about these terms? Email{' '}
            <a href="mailto:legal@relociq.com" className="text-blue-500 hover:underline">
              legal@relociq.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

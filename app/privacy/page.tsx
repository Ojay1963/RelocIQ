import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy | RelocIQ',
  description: 'How RelocIQ collects, uses, and protects your information.',
  alternates: { canonical: 'https://relociq.com/privacy' },
  robots: { index: false },
};

const SECTION_CLASS = 'mb-8';
const H2_CLASS = 'text-lg font-bold text-slate-900 dark:text-white mb-3';
const P_CLASS = 'text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3';
const UL_CLASS = 'list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400 text-sm mb-3';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main id="main-content" className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-400 mb-10">Last updated: 1 May 2025</p>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>What we are</h2>
          <p className={P_CLASS}>
            RelocIQ (<strong>relociq.com</strong>) is a free relocation intelligence tool that provides
            visa requirements and cost-of-living information for countries worldwide.
            No account or signup is required to use the core features.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Information we collect</h2>
          <p className={P_CLASS}>We collect only what is necessary to provide the service:</p>
          <ul className={UL_CLASS}>
            <li>
              <strong>Form inputs</strong> — passport country, destination countries, monthly income,
              currency, and travel purpose. These are sent to our AI provider to generate your report
              and are not stored on our servers.
            </li>
            <li>
              <strong>Lead capture (optional)</strong> — if you voluntarily submit your email and a
              question through the interest form, that data is stored securely so we can follow up.
              You can request deletion at any time.
            </li>
            <li>
              <strong>Server logs</strong> — standard request logs (IP address hashed, timestamp,
              route, response status). Retained for up to 30 days for abuse prevention.
            </li>
          </ul>
          <p className={P_CLASS}>We do not use cookies, tracking pixels, or third-party analytics.</p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>How we use your information</h2>
          <ul className={UL_CLASS}>
            <li>To generate your personalised relocation report via our AI provider (Anthropic).</li>
            <li>To respond to questions submitted through the interest form.</li>
            <li>To detect and prevent abuse of the service (rate limiting).</li>
          </ul>
          <p className={P_CLASS}>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Third-party services</h2>
          <ul className={UL_CLASS}>
            <li>
              <strong>Anthropic (Claude AI)</strong> — your form inputs are sent to Anthropic&apos;s
              API to generate relocation reports. Anthropic&apos;s{' '}
              <a
                href="https://www.anthropic.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                privacy policy
              </a>{' '}
              applies to data processed by their API.
            </li>
            <li>
              <strong>Unsplash</strong> — destination photos are served directly from Unsplash&apos;s
              CDN. No personal data is shared with Unsplash.
            </li>
            <li>
              <strong>Vercel</strong> — the site is hosted on Vercel. Standard infrastructure logs
              may be retained per{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Vercel&apos;s privacy policy
              </a>
              .
            </li>
          </ul>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Your rights</h2>
          <p className={P_CLASS}>
            You may request access to, correction of, or deletion of any personal data we hold
            (e.g. email addresses submitted via the interest form). To make a request, email us at{' '}
            <a href="mailto:privacy@relociq.com" className="text-blue-500 hover:underline">
              privacy@relociq.com
            </a>
            .
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Changes to this policy</h2>
          <p className={P_CLASS}>
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the
            top of this page reflects when changes were last made. Continued use of the site after
            changes constitutes acceptance of the revised policy.
          </p>
        </div>

        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>Contact</h2>
          <p className={P_CLASS}>
            Questions about this policy? Email{' '}
            <a href="mailto:privacy@relociq.com" className="text-blue-500 hover:underline">
              privacy@relociq.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

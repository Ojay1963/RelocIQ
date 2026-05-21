import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                RelocIQ
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Free visa requirements and cost of living intelligence for 195 countries. No signup needed.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Explore</p>
              <ul className="space-y-2">
                <li><Link href="/guides" className="hover:text-white transition-colors">Country Guides</Link></li>
                <li><Link href="/cities" className="hover:text-white transition-colors">City Guides</Link></li>
                <li><Link href="/best/best-countries-for-digital-nomads" className="hover:text-white transition-colors">Best Of</Link></li>
                <li><Link href="/compare/portugal-vs-spain" className="hover:text-white transition-colors">Compare</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Tools</p>
              <ul className="space-y-2">
                <li><Link href="/tools/visa-free" className="hover:text-white transition-colors">Visa-Free Explorer</Link></li>
                <li><Link href="/tools/cost-index" className="hover:text-white transition-colors">Cost Index</Link></li>
                <li><Link href="/tools/salary-stretcher" className="hover:text-white transition-colors">Salary Stretcher</Link></li>
                <li><Link href="/tools/moving-checklist" className="hover:text-white transition-colors">Moving Checklist</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Legal</p>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">© {new Date().getFullYear()} RelocIQ. All rights reserved.</p>
          <p className="text-xs">AI-powered relocation intelligence for modern movers.</p>
        </div>
      </div>
    </footer>
  );
}

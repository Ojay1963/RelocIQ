import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-xs text-slate-500 dark:text-slate-400 mb-5">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={11} className="text-slate-300 dark:text-slate-600 shrink-0" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-slate-700 dark:text-slate-300 font-medium" aria-current="page">
              {item.name}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

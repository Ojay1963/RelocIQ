'use client';

import dynamic from 'next/dynamic';

const HomeInteractiveContent = dynamic(
  () => import('./HomeInteractiveContent').then(m => m.HomeInteractiveContent),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    ),
  },
);

export function HomeInteractive() {
  return <HomeInteractiveContent />;
}

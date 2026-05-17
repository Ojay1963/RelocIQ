export function GlobeLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" stroke="#3B82F6" strokeWidth="2"/>
      <ellipse cx="14" cy="14" rx="5" ry="12" stroke="#3B82F6" strokeWidth="1.5"/>
      <line x1="2" y1="14" x2="26" y2="14" stroke="#3B82F6" strokeWidth="1.5"/>
      <line x1="4" y1="8" x2="24" y2="8" stroke="#3B82F6" strokeWidth="1.2"/>
      <line x1="4" y1="20" x2="24" y2="20" stroke="#3B82F6" strokeWidth="1.2"/>
    </svg>
  );
}

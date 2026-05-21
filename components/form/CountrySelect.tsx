'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface Props {
  countries: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function CountrySelect({ countries, value, onChange, placeholder = 'Select country...' }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const filtered = countries.filter(c => c.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      setSearch('');
    }
  }

  return (
    <div ref={ref} className="relative" onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => { setOpen(!open); setSearch(''); }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-left text-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className={value ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} aria-hidden="true" className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={placeholder}
          className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl"
        >
          <div className="p-2 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
            <Search size={14} aria-hidden="true" className="text-slate-400 shrink-0" />
            <input
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              aria-label="Search countries"
              className="flex-1 text-sm bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
            />
          </div>
          <div className="max-h-52 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-sm text-slate-400 p-3 text-center">No countries found</p>
            ) : (
              filtered.map(country => (
                <button
                  key={country}
                  type="button"
                  role="option"
                  aria-selected={value === country}
                  onClick={() => { onChange(country); setOpen(false); setSearch(''); }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors ${
                    value === country
                      ? 'bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {country}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

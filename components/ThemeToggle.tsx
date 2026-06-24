'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200">...</button>;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white"
    >
      {currentTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

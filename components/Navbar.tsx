'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/characters', label: 'الشخصيات' },
  { href: '/compare', label: 'مقارنة' },
  { href: '/quiz', label: 'اختبار' },
  { href: '/stats', label: 'إحصائيات' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/30">E</div>
          EGO FLOW
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/characters" className="hidden rounded-3xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 md:inline-flex">
            افتح القاعدة
          </Link>
        </div>
      </div>
    </header>
  );
}

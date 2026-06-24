'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

const navItems = [
  { href: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
  { href: '/characters', labelAr: 'الشخصيات', labelEn: 'Characters' },
  { href: '/compare', labelAr: 'مقارنة', labelEn: 'Compare' },
  { href: '/quiz', labelAr: 'اختبار', labelEn: 'Quiz' },
  { href: '/stats', labelAr: 'إحصائيات', labelEn: 'Stats' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/30">E</div>
          EGO FLOW
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.labelAr}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link href="/characters" className="hidden rounded-3xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 md:inline-flex">
            افتح القاعدة
          </Link>
        </div>
      </div>
    </header>
  );
}

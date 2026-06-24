'use client';

import { useLocale } from '@/components/LocaleProvider';

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="inline-flex overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-sm text-slate-200 shadow-sm">
      <button
        type="button"
        onClick={() => setLocale('ar')}
        className={`px-4 py-2 transition ${locale === 'ar' ? 'bg-sky-500 text-slate-950' : 'hover:bg-slate-800/80'}`}
      >
        {t.global.arabic}
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-4 py-2 transition ${locale === 'en' ? 'bg-sky-500 text-slate-950' : 'hover:bg-slate-800/80'}`}
      >
        {t.global.english}
      </button>
    </div>
  );
}

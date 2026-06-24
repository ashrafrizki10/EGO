'use client';

import { useLocale } from '@/components/LocaleProvider';

export default function LoadingPage() {
  const { t } = useLocale();

  return (
    <section className="min-h-[70vh] flex items-center justify-center rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow shadow-sky-500/10">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-slate-700 border-t-sky-400" />
        <p className="text-lg font-semibold text-white">{t.global.loading}</p>
        <p className="text-sm text-slate-400">{t.global.loading}</p>
      </div>
    </section>
  );
}

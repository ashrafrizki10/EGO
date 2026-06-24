'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { useLocale } from '@/components/LocaleProvider';

export default function ErrorPage() {
  const { t } = useLocale();

  return (
    <section className="min-h-[70vh] rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 text-center shadow-glow shadow-sky-500/10">
      <SectionHeading title={t.global.errorTitle} description={t.global.errorDescription} />
      <p className="mt-6 text-slate-400">{t.global.errorDescription}</p>
      <div className="mt-8 inline-flex rounded-3xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white">
        {t.global.backHome}
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { useLocale } from '@/components/LocaleProvider';

export default function NotFoundPage() {
  const { locale, t } = useLocale();

  return (
    <section className="min-h-[70vh] rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 text-center shadow-glow shadow-sky-500/10">
      <SectionHeading title={t.global.notFoundTitle} description={t.global.notFoundDescription} />
      <p className="mt-6 text-slate-400">{locale === 'ar' ? 'يرجى العودة إلى الصفحة الرئيسية أو تجربة صفحة أخرى من القائمة.' : 'Please return home or try another page from the menu.'}</p>
      <Link href="/" className="mt-8 inline-flex rounded-3xl bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
        {t.global.backHome}
      </Link>
    </section>
  );
}

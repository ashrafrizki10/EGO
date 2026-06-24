'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';
import { useLocale } from '@/components/LocaleProvider';

export default function DiscoverPage() {
  const { locale, t } = useLocale();

  const teamNames = useMemo(
    () => Array.from(new Set(characters.map((character) => character.team))).sort(),
    [],
  );

  const positions = useMemo(
    () => Array.from(new Set(characters.map((character) => character.position))).sort(),
    [],
  );

  const weapons = useMemo(
    () => Array.from(new Set(characters.map((character) => character.weapon))).sort(),
    [],
  );

  return (
    <section className="space-y-10">
      <SectionHeading
        title={t.nav.discover}
        description={locale === 'ar' ? 'اكتشف شخصيات وفرق Blue Lock عبر أقسام متقدمة، وفرز سريع، وقائمة ترشيحية متجددة.' : 'Discover Blue Lock characters and teams through advanced categories, quick sorting, and curated highlights.'}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'الإحصاءات' : 'Insights'}</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">{locale === 'ar' ? 'عدد الشخصيات' : 'Characters'}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{characters.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">{locale === 'ar' ? 'عدد الفرق' : 'Teams'}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{teamNames.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">{locale === 'ar' ? 'أساليب اللعب' : 'Play styles'}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{weapons.length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'التنقل السريع' : 'Quick navigation'}</p>
          <div className="mt-6 grid gap-4">
            <Link href="/characters" className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-6 py-5 text-white transition hover:border-sky-400 hover:bg-slate-950/90">
              {locale === 'ar' ? 'استعرض كافة الشخصيات' : 'Browse all characters'}
            </Link>
            <Link href="/compare" className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-6 py-5 text-white transition hover:border-sky-400 hover:bg-slate-950/90">
              {locale === 'ar' ? 'مقارنة اللاعبين' : 'Compare players'}
            </Link>
            <Link href="/quiz" className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-6 py-5 text-white transition hover:border-sky-400 hover:bg-slate-950/90">
              {locale === 'ar' ? 'اختبر شخصيتك' : 'Test your ego'}
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'الفرق' : 'Teams'}</p>
          <div className="mt-6 space-y-3">
            {teamNames.slice(0, 6).map((team) => (
              <div key={team} className="rounded-3xl bg-slate-900/90 p-4 text-slate-100">{team}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'الترتيب' : 'Positions'}</p>
          <div className="mt-6 space-y-3">
            {positions.map((position) => (
              <div key={position} className="rounded-3xl bg-slate-900/90 p-4 text-slate-100">{position}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'الأسلحة' : 'Weapons'}</p>
          <div className="mt-6 space-y-3">
            {weapons.map((weapon) => (
              <div key={weapon} className="rounded-3xl bg-slate-900/90 p-4 text-slate-100">{weapon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useMemo } from 'react';
import { characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';
import { useLocale } from '@/components/LocaleProvider';

const ratingBuckets = [95, 90, 85, 80, 75];

export default function RankingsPage() {
  const { locale, t } = useLocale();

  const grouped = useMemo(
    () => ratingBuckets.map((minRating) => ({
      label: `${minRating}+`,
      items: characters.filter((character) => character.rating >= minRating),
    })),
    [],
  );

  return (
    <section className="space-y-10">
      <SectionHeading
        title={t.nav.rankings}
        description={locale === 'ar' ? 'اكتشف الترتيبات الرسمية لأقوى لاعبي Blue Lock بناء على التقييمات والأسلحة.' : 'Discover the official rankings of the strongest Blue Lock players by rating and weapon class.'}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {grouped.map((group) => (
          <div key={group.label} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'القوة' : 'Power'}</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{group.label}</h2>
            <p className="mt-3 text-slate-400">{group.items.length} {locale === 'ar' ? 'لاعبين' : 'players'}</p>
            <div className="mt-6 space-y-4">
              {group.items.slice(0, 5).map((character) => (
                <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-400">{character.team}</p>
                      <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                    </div>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-sky-300">{character.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 text-slate-300">
        <p>{locale === 'ar' ? 'الترتيب يعتمد على تقييمات الأداء والطاقة والتكتيك لكل مهاجم.' : 'Rankings are based on performance, power, and tactical influence across each striker.'}</p>
      </div>
    </section>
  );
}

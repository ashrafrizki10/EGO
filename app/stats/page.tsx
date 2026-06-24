'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { characters } from '@/data/characters';
import { ProgressBar } from '@/components/ProgressBar';
import { useLocale } from '@/components/LocaleProvider';

const topStrikers = [...characters]
  .filter((character) => character.position === 'Striker')
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);
const topPlaymakers = [...characters]
  .filter((character) => ['Midfielder', 'Striker', 'Forward'].includes(character.position))
  .sort((a, b) => b.stats.passing - a.stats.passing)
  .slice(0, 3);
const topShooters = [...characters].sort((a, b) => b.stats.shooting - a.stats.shooting).slice(0, 3);

export default function StatsPage() {
  const { t } = useLocale();

  return (
    <section className="space-y-10">
      <SectionHeading title={t.statsPage.title} description={t.statsPage.description} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{t.statsPage.topStrikers}</p>
          <div className="mt-6 space-y-4">
            {topStrikers.map((character, index) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">#{index + 1}</p>
                    <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.stats.shooting}</span>
                </div>
                <p className="mt-3 text-slate-400">{character.team}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{t.statsPage.topPlaymakers}</p>
          <div className="mt-6 space-y-4">
            {topPlaymakers.map((character, index) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">#{index + 1}</p>
                    <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.stats.passing}</span>
                </div>
                <p className="mt-3 text-slate-400">{character.team}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{t.statsPage.overall}</p>
          <div className="mt-6 space-y-4">
            {[...characters]
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5)
              .map((character, index) => (
                <div key={character.id} className="space-y-2 rounded-3xl bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">#{index + 1}</p>
                      <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                    </div>
                    <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.rating}</span>
                  </div>
                  <ProgressBar label="Rating" value={character.rating} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Top Shooters</p>
          <div className="mt-6 space-y-4">
            {topShooters.map((character) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                    <p className="text-sm text-slate-400">{character.team}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.stats.shooting}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Top Playmakers</p>
          <div className="mt-6 space-y-4">
            {topPlaymakers.map((character) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                    <p className="text-sm text-slate-400">{character.team}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.stats.passing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Best Ratings</p>
          <div className="mt-6 space-y-4">
            {[...characters]
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4)
              .map((character) => (
                <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                    <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.rating}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

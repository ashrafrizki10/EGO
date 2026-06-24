'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { characters } from '@/data/characters';

const topStrikers = characters.filter((character) => character.position === 'Striker').sort((a, b) => b.rating - a.rating).slice(0, 3);
const topPlaymakers = characters.filter((character) => character.playStyle.includes('Striker') || character.playStyle.includes('Midfielder')).sort((a, b) => b.rating - a.rating).slice(0, 3);

export default function StatsPage() {
  return (
    <section className="space-y-10">
      <SectionHeading title="لوحة الإحصائيات" description="عرض رسوم بيانية مفهومة لأقوى اللاعبين، أفضل صناع اللعب، وترتيب القوة داخل العالم الخاص بـ Blue Lock." />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">أفضل المهاجمين</p>
          <div className="mt-6 space-y-4">
            {topStrikers.map((character, index) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">#{index + 1}</p>
                    <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">أفضل صناع اللعب</p>
          <div className="mt-6 space-y-4">
            {topPlaymakers.map((character, index) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">#{index + 1}</p>
                    <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-300">{character.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-400">ترتيب القوة العام</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {characters
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6)
            .map((character) => (
              <div key={character.id} className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm text-slate-400">{character.position}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{character.name}</h3>
                <p className="mt-3 text-sky-300">{character.rating}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

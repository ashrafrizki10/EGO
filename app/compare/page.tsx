'use client';

import { useMemo, useState } from 'react';
import { characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';

export default function ComparePage() {
  const [firstCharacterId, setFirstCharacterId] = useState(characters[0].id);
  const [secondCharacterId, setSecondCharacterId] = useState(characters[1].id);

  const firstCharacter = useMemo(() => characters.find((character) => character.id === firstCharacterId), [firstCharacterId]);
  const secondCharacter = useMemo(() => characters.find((character) => character.id === secondCharacterId), [secondCharacterId]);

  return (
    <section className="space-y-10">
      <SectionHeading title="مقارنة الشخصيات" description="اختر أي شخصيتين لمقارنة التقييم، القوة، الضعف، والسلاح في واجهة واحدة." />
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow shadow-sky-500/10">
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm text-slate-400">الشخصية الأولى</span>
            <select value={firstCharacterId} onChange={(event) => setFirstCharacterId(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20">
              {characters.map((character) => (
                <option key={character.id} value={character.id}>{character.name}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-slate-400">الشخصية الثانية</span>
            <select value={secondCharacterId} onChange={(event) => setSecondCharacterId(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20">
              {characters.map((character) => (
                <option key={character.id} value={character.id}>{character.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[firstCharacter, secondCharacter].map((character, index) => (
            <div key={character?.id ?? index} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{index === 0 ? 'الأولى' : 'الثانية'}</p>
              {character ? (
                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{character.name}</h3>
                  <p className="text-slate-400">{character.weapon} — {character.playStyle}</p>
                  <div className="grid gap-3 rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                    <div className="flex items-center justify-between text-sm">
                      <span>الفريق</span>
                      <span>{character.team}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>المركز</span>
                      <span>{character.position}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>التقييم</span>
                      <span>{character.rating}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400">اختر شخصية للمقارنة.</p>
              )}
            </div>
          ))}
        </div>

        {firstCharacter && secondCharacter && (
          <div className="mt-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">الاختلافات الرئيسية</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                <p className="text-sm text-slate-400">التقييم</p>
                <p className="mt-2 text-2xl font-semibold text-white">{firstCharacter.rating} vs {secondCharacter.rating}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                <p className="text-sm text-slate-400">السلاح</p>
                <p className="mt-2 text-base font-semibold text-white">{firstCharacter.weapon} vs {secondCharacter.weapon}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                <p className="text-sm text-slate-400">أسلوب اللعب</p>
                <p className="mt-2 text-base font-semibold text-white">{firstCharacter.playStyle} vs {secondCharacter.playStyle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

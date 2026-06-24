'use client';

import { useMemo, useState } from 'react';
import { characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';
import { RadarChart } from '@/components/RadarChart';
import { useToast } from '@/components/ToastProvider';
import { useLocale } from '@/components/LocaleProvider';

const maxSelection = 4;

function totalCharacterScore(character: typeof characters[number]) {
  return (
    character.rating +
    character.stats.speed +
    character.stats.shooting +
    character.stats.passing +
    character.stats.dribbling +
    character.stats.defense +
    character.stats.vision +
    character.stats.intelligence
  );
}

export default function ComparePage() {
  const { locale, t } = useLocale();
  const { notify } = useToast();
  const [selectedIds, setSelectedIds] = useState<string[]>(characters.slice(0, 3).map((character) => character.id));

  const selectedCharacters = useMemo(
    () => characters.filter((character) => selectedIds.includes(character.id)),
    [selectedIds],
  );

  const winner = useMemo(() => {
    if (selectedCharacters.length === 0) return null;
    return selectedCharacters.reduce((best, character) => {
      if (!best) return character;
      return totalCharacterScore(character) > totalCharacterScore(best) ? character : best;
    }, selectedCharacters[0]);
  }, [selectedCharacters]);

  const toggleCharacter = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((currentId) => currentId !== id);
      }
      if (current.length >= maxSelection) {
        notify(locale === 'ar' ? 'يمكنك اختيار حتى 4 شخصيات فقط.' : 'You can select up to 4 characters only.', 'info');
        return current;
      }
      return [...current, id];
    });
  };

  return (
    <section className="space-y-10">
      <SectionHeading title={t.compare.title} description={t.compare.description} />
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow shadow-sky-500/10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{locale === 'ar' ? 'اختر الشخصيات' : 'Select characters'}</p>
            <div className="mt-6 grid gap-3">
              {characters.map((character) => (
                <label key={character.id} className="flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 transition hover:border-sky-400">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(character.id)}
                    onChange={() => toggleCharacter(character.id)}
                    className="h-5 w-5 accent-sky-500"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">{character.name}</p>
                    <p className="text-sm text-slate-400">{character.team}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.16em] text-sky-300">{character.rating}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{t.compare.stats}</p>
            <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span>{t.filters.selectedCount}</span>
                <span>{selectedCharacters.length} / {maxSelection}</span>
              </div>
              <p className="mt-4 text-slate-400">{locale === 'ar' ? 'يتم حساب الفائز بناءً على التقييم والقوة الشاملة.' : 'Winner is calculated based on overall rating and stats.'}</p>
            </div>
            {winner ? (
              <div className="rounded-3xl bg-slate-950/80 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">{locale === 'ar' ? 'الفائز' : 'Winner'}</p>
                <p className="mt-3 text-2xl font-semibold">{winner.name}</p>
                <p className="mt-2 text-slate-400">{winner.team} · {winner.position}</p>
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-400">{t.compare.noSelection}</div>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {selectedCharacters.length === 0 ? (
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 text-center text-slate-400">{t.compare.noSelection}</div>
          ) : (
            selectedCharacters.map((character) => (
              <div key={character.id} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{character.name}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{character.position}</h3>
                <p className="mt-2 text-slate-400">{character.weapon} — {character.playStyle}</p>
                <div className="mt-6 grid gap-3 rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                  <div className="flex items-center justify-between text-sm">
                    <span>{t.cards.team}</span>
                    <span>{character.team}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t.cards.position}</span>
                    <span>{character.position}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t.cards.rating}</span>
                    <span>{character.rating}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <RadarChart
                    stats={[
                      { label: 'SPD', value: character.stats.speed },
                      { label: 'SHO', value: character.stats.shooting },
                      { label: 'PAS', value: character.stats.passing },
                      { label: 'DRI', value: character.stats.dribbling },
                      { label: 'DEF', value: character.stats.defense },
                      { label: 'VIS', value: character.stats.vision },
                      { label: 'IQ', value: character.stats.intelligence },
                    ]}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

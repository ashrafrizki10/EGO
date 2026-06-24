'use client';

import { useMemo, useState } from 'react';
import { characters } from '@/data/characters';
import { CharacterCard } from '@/components/CharacterCard';
import { SectionHeading } from '@/components/SectionHeading';
import { useLocale } from '@/components/LocaleProvider';

const teams = ['All', 'Team Z', 'Team Blitz', 'Team Wild', 'Team Mojo', 'Team Shield', 'Blue Lock', 'Team K', 'U-20 Japan', 'Bastard München', 'FC Barcha', 'Ubers', 'Paris X Gen'] as const;
const positions = ['All', 'Striker', 'Winger', 'Midfielder', 'Defender', 'Goalkeeper', 'Forward'] as const;

export default function CharactersPage() {
  const { locale, t } = useLocale();
  const [search, setSearch] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<typeof teams[number]>('All');
  const [selectedPosition, setSelectedPosition] = useState<typeof positions[number]>('All');
  const [selectedWeapon, setSelectedWeapon] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [sortKey, setSortKey] = useState<'rating' | 'name'>('rating');

  const weapons = useMemo(() => ['All', ...Array.from(new Set(characters.map((character) => character.weapon))).sort()], []);

  const filteredCharacters = useMemo(() => {
    return characters
      .filter((character) => {
        const searchText = `${character.name} ${character.weapon} ${character.playStyle} ${character.team} ${character.position}`.toLowerCase();
        const matchesSearch = searchText.includes(search.toLowerCase());
        const matchesTeam = selectedTeam === 'All' || character.team === selectedTeam;
        const matchesPosition = selectedPosition === 'All' || character.position === selectedPosition;
        const matchesWeapon = selectedWeapon === 'All' || character.weapon === selectedWeapon;
        const matchesRating = character.rating >= minRating;
        return matchesSearch && matchesTeam && matchesPosition && matchesWeapon && matchesRating;
      })
      .sort((a, b) => {
        if (sortKey === 'rating') return b.rating - a.rating;
        return a.name.localeCompare(b.name);
      });
  }, [search, selectedTeam, selectedPosition, selectedWeapon, minRating, sortKey]);

  return (
    <section className="space-y-10">
      <SectionHeading title={locale === 'ar' ? 'قاعدة بيانات الشخصيات' : 'Character Database'} description={locale === 'ar' ? 'استخدم البحث والمرشحات لعرض جميع شخصيات Blue Lock بسهولة وسرعة.' : 'Use search and filters to browse Blue Lock characters with clarity and speed.'} />

      <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow shadow-sky-500/10">
        <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <label className="block">
            <span className="text-sm text-slate-300">{t.filters.search}</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.filters.search}
              className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">{t.filters.team}</span>
              <select
                value={selectedTeam}
                onChange={(event) => setSelectedTeam(event.target.value as typeof teams[number])}
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              >
                {teams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm text-slate-300">{t.filters.position}</span>
              <select
                value={selectedPosition}
                onChange={(event) => setSelectedPosition(event.target.value as typeof positions[number])}
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              >
                {positions.map((position) => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <label className="block">
            <span className="text-sm text-slate-300">{t.filters.weapon}</span>
            <select
              value={selectedWeapon}
              onChange={(event) => setSelectedWeapon(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            >
              {weapons.map((weapon) => (
                <option key={weapon} value={weapon}>{weapon}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">{t.filters.rating}</span>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={minRating}
              onChange={(event) => setMinRating(Number(event.target.value))}
              className="mt-2 w-full accent-sky-500"
            />
            <p className="mt-2 text-sm text-slate-400">{minRating}+</p>
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">{t.filters.sortBy}</span>
            <select
              value={sortKey}
              onChange={(event) => setSortKey(event.target.value as 'rating' | 'name')}
              className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="rating">{locale === 'ar' ? 'التقييم الأعلى' : 'Highest Rating'}</option>
              <option value="name">{locale === 'ar' ? 'الاسم' : 'Name'}</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_0.7fr]">
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">{t.filters.selectedCount}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{filteredCharacters.length}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">{t.filters.sortBy}</p>
            <p className="mt-3 text-white">{t.filters.ratingHigh}</p>
          </div>
        </div>
      </div>

      {filteredCharacters.length === 0 ? (
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 text-center text-slate-300">{locale === 'ar' ? 'لم يتم العثور على شخصيات مطابقة.' : 'No matching characters found.'}</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </section>
  );
}

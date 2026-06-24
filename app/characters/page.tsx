'use client';

import { useMemo, useState } from 'react';
import { characters } from '@/data/characters';
import { CharacterCard } from '@/components/CharacterCard';
import { SectionHeading } from '@/components/SectionHeading';

const positions = ['All', 'Striker', 'Winger', 'Midfielder', 'Defender', 'Goalkeeper'] as const;
const teams = ['All', 'Team Z', 'Team Blitz', 'Team Wild', 'Team Mojo', 'Team Shield', 'Blue Lock'] as const;

export default function CharactersPage() {
  const [search, setSearch] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<typeof teams[number]>('All');
  const [selectedPosition, setSelectedPosition] = useState<typeof positions[number]>('All');
  const [sortKey, setSortKey] = useState<'rating' | 'name'>('rating');

  const filteredCharacters = useMemo(() => {
    return characters
      .filter((character) => {
        const searchText = `${character.name} ${character.weapon} ${character.playStyle} ${character.team} ${character.position}`.toLowerCase();
        const matchesSearch = searchText.includes(search.toLowerCase());
        const matchesTeam = selectedTeam === 'All' || character.team === selectedTeam;
        const matchesPosition = selectedPosition === 'All' || character.position === selectedPosition;
        return matchesSearch && matchesTeam && matchesPosition;
      })
      .sort((a, b) => {
        if (sortKey === 'rating') return b.rating - a.rating;
        return a.name.localeCompare(b.name);
      });
  }, [search, selectedTeam, selectedPosition, sortKey]);

  return (
    <section className="space-y-10">
      <SectionHeading title="قاعدة بيانات الشخصيات" description="استخدم البحث والمرشحات لعرض جميع شخصيات Blue Lock بسهولة وسرعة." />

      <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow shadow-sky-500/10">
        <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <label className="block">
            <span className="text-sm text-slate-300">بحث سريع</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ابحث باسم الشخصية أو الفريق أو السلاح"
              className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">فلترة حسب الفريق</span>
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
              <span className="text-sm text-slate-300">فلترة حسب المركز</span>
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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_0.7fr]">
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">نتائج</p>
            <p className="mt-3 text-3xl font-semibold text-white">{filteredCharacters.length} شخصية</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <label className="text-sm text-slate-400">ترتيب حسب</label>
            <select
              value={sortKey}
              onChange={(event) => setSortKey(event.target.value as 'rating' | 'name')}
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="rating">التقييم الأعلى</option>
              <option value="name">الاسم</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}

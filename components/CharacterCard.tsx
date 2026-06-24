import Link from 'next/link';
import type { Character } from '@/types/character';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-950/90">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-sky-400">{character.position}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{character.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{character.team}</p>
        </div>
        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200">{character.rating}</span>
      </div>
      <p className="mt-5 text-slate-400">{character.description}</p>
      <Link href={`/characters/${character.id}`} className="mt-6 inline-flex items-center justify-between rounded-3xl border border-slate-800 px-4 py-3 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white">
        افتح الملف
      </Link>
    </article>
  );
}

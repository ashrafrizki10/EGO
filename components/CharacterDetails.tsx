import type { Character } from '@/types/character';

interface CharacterDetailsProps {
  character: Character;
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <div className="grid gap-10 rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10 lg:grid-cols-[0.9fr_0.6fr]">
      <div className="space-y-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8">
          <div className="flex flex-wrap items-center gap-6">
            <div className="h-28 w-28 rounded-[1.75rem] bg-slate-800" />
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{character.team}</p>
              <h2 className="text-4xl font-semibold text-white">{character.name}</h2>
              <p className="text-sm text-slate-400">{character.weapon} — {character.playStyle}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/80 p-5">
              <p className="text-sm text-slate-400">المركز</p>
              <p className="mt-3 text-xl font-semibold text-white">{character.position}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-5">
              <p className="text-sm text-slate-400">التقييم</p>
              <p className="mt-3 text-xl font-semibold text-white">{character.rating}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">نقاط القوة</p>
            <div className="space-y-3">
              {character.strengths.map((item) => (
                <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">نقاط الضعف</p>
            <div className="space-y-3">
              {character.weaknesses.map((item) => (
                <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className="space-y-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
          <h3 className="text-xl font-semibold text-white">بطاقات المعلومات</h3>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">السلاح</p>
              <p className="mt-2 font-semibold text-white">{character.weapon}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">أسلوب اللعب</p>
              <p className="mt-2 font-semibold text-white">{character.playStyle}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">الوصف</p>
              <p className="mt-2 text-slate-300">{character.description}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
          <h3 className="text-xl font-semibold text-white">المهارات</h3>
          <div className="mt-6 space-y-3">
            {character.skills.map((skill) => (
              <div key={skill} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{skill}</div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

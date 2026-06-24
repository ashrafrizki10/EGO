import type { Character } from '@/types/character';
import { CharacterAvatar } from '@/components/CharacterAvatar';
import { ProgressBar } from '@/components/ProgressBar';
import { RadarChart } from '@/components/RadarChart';

interface CharacterDetailsProps {
  character: Character;
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10 lg:grid lg:grid-cols-[0.95fr_0.65fr] lg:items-start lg:gap-10">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-inner shadow-slate-950/20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_0.35fr] xl:grid-cols-[0.8fr_0.4fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex rounded-3xl bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300">{character.team}</span>
                  <span className="inline-flex rounded-3xl bg-slate-800/80 px-4 py-2 text-sm text-slate-300">{character.position}</span>
                </div>
                <h2 className="text-4xl font-semibold text-white">{character.name}</h2>
                <p className="text-sm text-slate-400">{character.japaneseName} · {character.weapon} · {character.playStyle}</p>
                <p className="text-slate-300">{character.description}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-5">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">التقييم العام</p>
                    <p className="mt-3 text-4xl font-semibold text-white">{character.rating}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">العمر</p>
                    <p className="mt-2 text-white">{character.age} سنة</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">الطول</p>
                    <p className="mt-2 text-white">{character.height}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">القدم المفضلة</p>
                    <p className="mt-2 text-white">{character.foot}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-400">نقاط القوة</p>
                <div className="grid gap-3">
                  {character.strengths.map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-400">نقاط الضعف</p>
                <div className="grid gap-3">
                  {character.weaknesses.map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">نظرة عامة</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">أسلوب اللعب</p>
                <p className="mt-2 text-white">{character.playStyle}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">السلاح</p>
                <p className="mt-2 text-white">{character.weapon}</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <CharacterAvatar character={character} className="h-[320px]" />
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">الإحصائيات</h3>
            <div className="mt-6 space-y-4">
              <ProgressBar label="السرعة" value={character.stats.speed} />
              <ProgressBar label="التسديد" value={character.stats.shooting} />
              <ProgressBar label="التمرير" value={character.stats.passing} />
              <ProgressBar label="المراوغة" value={character.stats.dribbling} />
              <ProgressBar label="الدفاع" value={character.stats.defense} />
              <ProgressBar label="الرؤية" value={character.stats.vision} />
              <ProgressBar label="الذكاء التكتيكي" value={character.stats.intelligence} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">الرسم البياني</h3>
            <div className="mt-6">
              <RadarChart
                stats={[
                  { label: 'Speed', value: character.stats.speed },
                  { label: 'Shoot', value: character.stats.shooting },
                  { label: 'Pass', value: character.stats.passing },
                  { label: 'Dribble', value: character.stats.dribbling },
                  { label: 'Defense', value: character.stats.defense },
                  { label: 'Vision', value: character.stats.vision },
                  { label: 'IQ', value: character.stats.intelligence },
                ]}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">تطوّر الشخصية</h3>
            <p className="mt-4 text-slate-300">{character.evolution}</p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">أفضل الشراكات</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {character.bestPartners.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">أفضل المنافسين</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {character.bestRivals.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">شخصيات مشابهة</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {character.similarCharacters.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

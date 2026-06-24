'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/components/LocaleProvider';
import { heroStats, featuredCharacters, popularCharacters, characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';
import { CharacterCard } from '@/components/CharacterCard';

export default function HomePage() {
  const { locale, t } = useLocale();
  const hero = t.hero;
  const sections = t.sections;

  return (
    <section className="space-y-16">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/20 before:absolute before:inset-0 before:opacity-30 before:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_25%),linear-gradient(180deg,_rgba(14,165,233,0.05),_transparent_80%)]">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-sky-500/10 ring-1 ring-slate-700/60">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-400">EGO FLOW</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">{hero.title}</h1>
            <p className="mt-6 max-w-3xl text-slate-300 leading-8">{hero.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link href="/characters" className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">{hero.mainCta}</Link>
              <Link href="/quiz" className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400">{hero.secondaryCta}</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow shadow-sky-500/15">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Quick Stats</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Top Characters</p>
              <div className="mt-4 space-y-4">
                {featuredCharacters.map((character) => (
                  <div key={character.id} className="flex items-center justify-between rounded-3xl bg-slate-900/90 p-4">
                    <div>
                      <p className="font-semibold text-white">{character.name}</p>
                      <p className="text-sm text-slate-400">{character.position} - {character.team}</p>
                    </div>
                    <span className="rounded-full bg-slate-700 px-4 py-2 text-sm text-sky-300">{character.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-10">
        <SectionHeading title={sections.latest} description={locale === 'ar' ? 'استعرض أحدث السجلات المضافة مع معلومات أساسية وسريعة لتبدأ الاستكشاف.' : 'Browse the latest additions with fast facts to begin exploring.'} />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {characters.slice(0, 6).map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <SectionHeading title={sections.popular} description={locale === 'ar' ? 'شاهد أول اللاعبين الذين يهيمنون على التقييمات ويشكلون معايير Blue Lock.' : 'See the top players who dominate the rankings and define Blue Lock standards.'} />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {popularCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <SectionHeading title={sections.quickCompare} description={locale === 'ar' ? 'اعثر على أفضل اللقاءات المذهلة بين الشخصيات وقارن المهاجمين والمهارات بسهولة.' : 'Find the most thrilling matchups between characters and compare attackers and skills with ease.'} />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCharacters.slice(0, 3).map((character) => (
            <div key={character.id} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow shadow-sky-500/10">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{character.position}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{character.name}</h3>
              <p className="mt-3 text-slate-400">{character.description}</p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-400">سلاح</p>
                  <p className="mt-2 text-white">{character.weapon}</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-400">الفريق</p>
                  <p className="mt-2 text-white">{character.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

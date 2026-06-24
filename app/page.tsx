'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroStats, featuredCharacters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';
import { CharacterCard } from '@/components/CharacterCard';

export default function HomePage() {
  return (
    <section className="space-y-14">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] bg-slate-900/90 p-8 shadow-glow shadow-sky-500/20 ring-1 ring-slate-700/60">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-400">EGO FLOW</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">Blue Lock database for champions, comparisons, and style analysis.</h1>
          <p className="mt-6 max-w-3xl text-slate-300 leading-8">اكتشف شخصيات Blue Lock بواجهة احترافية، مع بحث فوري، فرز ذكي، ومقارنات شخصية لمساعدتك على فهم الأنماط والأساليب.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href="/characters" className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">قاعدة الشخصيات</Link>
            <Link href="/compare" className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400">مقارنة الشخصيات</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-glow shadow-sky-500/15">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">إحصائيات سريعة</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">أفضل اللاعبين</p>
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

      <div className="space-y-6">
        <SectionHeading title="القِسم الرئيسي" description="استعرض الشخصيات المميزة مع تفاصيل القوة، المركز، ونمط اللعب في واجهة أنيمي احترافية." />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}

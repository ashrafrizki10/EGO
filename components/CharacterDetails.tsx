'use client';

import type { Character } from '@/types/character';
import { CharacterAvatar } from '@/components/CharacterAvatar';
import { ProgressBar } from '@/components/ProgressBar';
import { RadarChart } from '@/components/RadarChart';
import { useLocale } from '@/components/LocaleProvider';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Wind, Brain, Flame, Award, Shield, User, Star, Puzzle } from 'lucide-react';

interface CharacterDetailsProps {
  character: Character;
}

const kaiserTranslations = {
  ar: {
    alias: 'الإمبراطور',
    overviewTitle: 'نظرة عامة على الشخصية',
    overviewDesc: 'المهاجم النخبة لنادي بايرن ميونخ (Bastard München) وعضو تشكيلة الجيل الجديد (New Generation World XI)، وأحد أقوى المهاجمين الشباب في العالم.',
    weaponsTitle: 'أسلحة الإمبراطور',
    strengthsTitle: 'نقاط القوة',
    weaknessesTitle: 'نقاط الضعف',
    achievementsTitle: 'الإنجازات والبطولات',
    kaiserImpactDesc: 'ركلة خارقة تفوق سرعتها حركة Noel Noa بقدمه اليمنى.',
    metaVisionDesc: 'رؤية شاملة للملعب تمكنه من قراءة تحركات جميع اللاعبين بدقة متناهية.',
    predatorEyeDesc: 'التركيز على حارس المرمى وتحديد الثغرة المثالية للتسديد.',
    offBallDesc: 'تحركات استباقية خلف المدافعين للتواجد دائما في المكان المناسب.',
    achievements: [
      'نجم وهداف نادي بايرن ميونخ (Bastard München Ace)',
      'عضو تشكيلة أفضل 11 لاعباً واعداً في العالم (New Generation World XI)',
      'مهاجم نخبة بمستوى عالمي استثنائي (Elite World-Class Striker)'
    ],
    evolutionTitle: 'تطوّر الإمبراطور',
    evolutionDesc: 'تطور من مهاجم يلعب فقط عندما يكون ملكاً مطلقاً، إلى خوض المخاطرات وتنفيذ ركلة ماغنوس (Magnus Shot) لمواجهة التحديات الكبرى.',
    partnersTitle: 'الشراكة المفضلة',
    rivalsTitle: 'المنافسون اللدودون',
    similarTitle: 'شخصيات مشابهة',
    ratingLabel: 'التقييم الفني الشامل',
    ageLabel: 'العمر',
    heightLabel: 'الطول',
    footLabel: 'القدم المفضلة',
    years: 'سنة',
    statsTitle: 'الإحصائيات الفريدة',
  },
  en: {
    alias: 'The Emperor',
    overviewTitle: 'Character Overview',
    overviewDesc: 'Elite striker of Bastard München, member of the New Generation World XI, and one of the strongest young forwards in the world.',
    weaponsTitle: 'The Emperor\'s Weapons',
    strengthsTitle: 'Strengths',
    weaknessesTitle: 'Weaknesses',
    achievementsTitle: 'Achievements & Honors',
    kaiserImpactDesc: 'A world-class kick whose swing speed exceeds even that of Noel Noa.',
    metaVisionDesc: 'Complete spatial awareness allowing him to read and predict every player\'s movements.',
    predatorEyeDesc: 'Hyper-focused vision lock on the goalkeeper to shoot through the smallest openings.',
    offBallDesc: 'Elite movement to slip behind defenders and claim the optimal scoring position.',
    achievements: [
      'Bastard München Ace and Primary Scorer',
      'New Generation World XI Member',
      'Elite World-Class Forward'
    ],
    evolutionTitle: 'Kaiser\'s Evolution',
    evolutionDesc: 'Transitioned from a striker who only plays where he is the absolute king, to taking extreme risks and mastering the Kaiser Impact Magnus.',
    partnersTitle: 'Best Partners',
    rivalsTitle: 'Main Rivals',
    similarTitle: 'Similar Strikers',
    ratingLabel: 'Overall Rating',
    ageLabel: 'Age',
    heightLabel: 'Height',
    footLabel: 'Preferred Foot',
    years: 'years',
    statsTitle: 'Specialized Statistics',
  }
};

function FloatingPuzzlePiece({ delay, className, x, y }: { delay: number; className?: string; x: string; y: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: [-15, 15, -15],
        x: [-5, 5, -5],
        rotate: [0, 15, -15, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={`absolute select-none pointer-events-none text-sky-500/10 ${className}`}
      style={{ left: x, top: y }}
    >
      <Puzzle className="w-16 h-16 blur-[0.5px]" />
    </motion.div>
  );
}

function EnergyParticle({ delay, x, y, size = 4 }: { delay: number; x: string; y: string; size?: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0 }}
      animate={{
        y: -150,
        opacity: [0, 0.8, 0.8, 0],
        scale: [0, 1.2, 0.8, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeOut"
      }}
      className="absolute bg-gradient-to-tr from-sky-400 to-purple-500 rounded-full blur-[1px] pointer-events-none"
      style={{ left: x, bottom: y, width: size, height: size }}
    />
  );
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
  const { locale, t } = useLocale();
  const cTrans = t.character;

  const isKaiser = character.id === 'michael-kaiser';
  const kaiserT = locale === 'ar' ? kaiserTranslations.ar : kaiserTranslations.en;

  if (isKaiser) {
    return (
      <div className="space-y-10 relative overflow-hidden rounded-[2.5rem] border border-sky-500/20 bg-slate-950/80 p-8 shadow-glow shadow-purple-500/5">
        {/* Animated Background Aura */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_45%)]" />
        
        {/* Animated Energy Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <EnergyParticle delay={0} x="10%" y="20%" size={6} />
          <EnergyParticle delay={1.5} x="30%" y="10%" size={4} />
          <EnergyParticle delay={3} x="70%" y="15%" size={5} />
          <EnergyParticle delay={0.8} x="85%" y="25%" size={3} />
          <EnergyParticle delay={2.2} x="50%" y="5%" size={7} />
        </div>

        {/* Floating Puzzle Pieces representing the Blue Lock mental landscape */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <FloatingPuzzlePiece delay={0} x="5%" y="15%" />
          <FloatingPuzzlePiece delay={2} x="85%" y="45%" />
          <FloatingPuzzlePiece delay={4} x="20%" y="75%" />
          <FloatingPuzzlePiece delay={1.5} x="75%" y="10%" />
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.90fr] lg:items-start">
          <div className="space-y-8">
            {/* Kaiser Premium Hero Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-purple-950/20 p-8 shadow-inner shadow-slate-950/30"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex rounded-3xl bg-purple-500/10 border border-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300">
                  {character.team}
                </span>
                <span className="inline-flex rounded-3xl bg-sky-500/10 border border-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300">
                  {character.position}
                </span>
                <span className="inline-flex rounded-3xl bg-slate-800/80 px-4 py-2 text-sm text-slate-300 font-semibold">
                  #10
                </span>
              </div>
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
                  {kaiserT.alias}
                </p>
                <h2 className="mt-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-purple-200 drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
                  {character.name}
                </h2>
                <p className="mt-3 text-sm text-slate-400">
                  {character.japaneseName} · {character.height} · {locale === 'ar' ? 'القدم اليمنى' : 'Right Foot'}
                </p>
                <p className="mt-6 text-slate-300 leading-8">
                  {character.description}
                </p>
              </div>

              {/* Kaiser Quick Stats Row */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 backdrop-blur-sm text-center">
                  <p className="text-xs text-slate-400">{kaiserT.ratingLabel}</p>
                  <p className="mt-2 text-3xl font-extrabold text-sky-400">{character.rating}</p>
                </div>
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 backdrop-blur-sm text-center">
                  <p className="text-xs text-slate-400">{kaiserT.ageLabel}</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">{character.age}</p>
                </div>
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 backdrop-blur-sm text-center">
                  <p className="text-xs text-slate-400">{locale === 'ar' ? 'الجنسية' : 'Nationality'}</p>
                  <p className="mt-2 text-xl font-bold text-white leading-8">{locale === 'ar' ? 'ألمانيا' : 'Germany'}</p>
                </div>
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 backdrop-blur-sm text-center">
                  <p className="text-xs text-slate-400">{locale === 'ar' ? 'التصنيف' : 'Class'}</p>
                  <p className="mt-2 text-base font-bold text-purple-400 leading-9">World XI</p>
                </div>
              </div>
            </motion.div>

            {/* Kaiser Weapons Interactive Section */}
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Zap className="text-sky-400 w-6 h-6 animate-pulse" />
                {kaiserT.weaponsTitle}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5 hover:border-purple-500/30 transition duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-white">Kaiser Impact</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-6">{kaiserT.kaiserImpactDesc}</p>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5 hover:border-sky-500/30 transition duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Eye className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-white">Meta Vision</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-6">{kaiserT.metaVisionDesc}</p>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5 hover:border-red-500/30 transition duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-white">Predator Eye</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-6">{kaiserT.predatorEyeDesc}</p>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5 hover:border-emerald-500/30 transition duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Wind className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-white">Off-The-Ball Movement</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-6">{kaiserT.offBallDesc}</p>
                </div>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-400 font-semibold">{kaiserT.strengthsTitle}</p>
                  <div className="grid gap-3">
                    {character.strengths.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 border border-slate-800/50 px-4 py-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-sky-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-purple-400 font-semibold">{kaiserT.weaknessesTitle}</p>
                  <div className="grid gap-3">
                    {character.weaknesses.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 border border-slate-800/50 px-4 py-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Honors */}
            <div className="rounded-[2rem] border border-purple-500/20 bg-slate-900/95 p-6 shadow-xl shadow-purple-500/5">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Award className="text-purple-400 w-6 h-6 animate-pulse" />
                {kaiserT.achievementsTitle}
              </h3>
              <div className="space-y-4">
                {kaiserT.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl bg-slate-950/80 border border-purple-500/10 p-4">
                    <div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Star className="w-5 h-5 fill-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item}</p>
                      <p className="text-xs text-slate-500 mt-1">{locale === 'ar' ? 'لقب معتمد رسمياً في الأنمي والمانجا' : 'Official canon status in anime & manga'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-purple-500/20 bg-slate-900/95 p-6 shadow-lg shadow-purple-500/5">
              <CharacterAvatar character={character} className="h-[460px] w-full shadow-inner" />
            </div>

            {/* Kaiser Stats */}
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <Brain className="text-sky-400 w-6 h-6" />
                {kaiserT.statsTitle}
              </h3>
              <div className="mt-6 space-y-4">
                <div className="relative">
                  <ProgressBar label={locale === 'ar' ? 'التسديد (Shooting)' : 'Shooting'} value={character.stats.shooting} />
                  <span className="absolute top-0 right-0 text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">ACE (100)</span>
                </div>
                <div className="relative">
                  <ProgressBar label={locale === 'ar' ? 'الذكاء الكروي (Football IQ)' : 'Football IQ'} value={character.stats.footballIQ} />
                  <span className="absolute top-0 right-0 text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">MAX (100)</span>
                </div>
                <ProgressBar label={locale === 'ar' ? 'الرؤية (Vision)' : 'Vision'} value={character.stats.vision} />
                <ProgressBar label={locale === 'ar' ? 'السرعة (Speed)' : 'Speed'} value={character.stats.speed} />
                <ProgressBar label={locale === 'ar' ? 'المراوغة (Dribbling)' : 'Dribbling'} value={character.stats.dribbling} />
                <ProgressBar label={locale === 'ar' ? 'البدنية (Physical)' : 'Physical'} value={character.stats.physical} />
                <ProgressBar label={locale === 'ar' ? 'التمرير (Passing)' : 'Passing'} value={character.stats.passing} />
                <ProgressBar label={locale === 'ar' ? 'التحرك بدون كرة (Off-Ball)' : 'Off-Ball'} value={character.stats.offBallMovement} />
                <ProgressBar label={locale === 'ar' ? 'الأنا (Ego)' : 'Ego'} value={character.stats.ego} />
                <ProgressBar label={locale === 'ar' ? 'الدفاع (Defense)' : 'Defense'} value={character.stats.defense} />
              </div>
            </div>

            {/* Radar Chart */}
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">{locale === 'ar' ? 'الرسم البياني' : 'Radar Chart'}</h3>
              <div className="mt-6">
                <RadarChart
                  stats={[
                    { label: 'Shoot', value: character.stats.shooting },
                    { label: 'Speed', value: character.stats.speed },
                    { label: 'Dribble', value: character.stats.dribbling },
                    { label: 'Pass', value: character.stats.passing },
                    { label: 'Vision', value: character.stats.vision },
                    { label: 'Physical', value: character.stats.physical },
                    { label: 'Defense', value: character.stats.defense },
                    { label: 'Off-Ball', value: character.stats.offBallMovement },
                    { label: 'IQ', value: character.stats.footballIQ },
                    { label: 'Ego', value: character.stats.ego },
                  ]}
                />
              </div>
            </div>

            {/* Evolution Section */}
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">{kaiserT.evolutionTitle}</h3>
              <p className="mt-4 text-slate-300 leading-7">{kaiserT.evolutionDesc}</p>
            </div>

            {/* Partners, Rivals, Similar */}
            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
                <h3 className="text-xl font-semibold text-white">{kaiserT.partnersTitle}</h3>
                <div className="mt-4 space-y-3 text-slate-300">
                  {character.bestPartners.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-800/50">
                      <User className="w-4 h-4 text-purple-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
                <h3 className="text-xl font-semibold text-white">{kaiserT.rivalsTitle}</h3>
                <div className="mt-4 space-y-3 text-slate-300">
                  {character.bestRivals.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-800/50">
                      <Flame className="w-4 h-4 text-red-400 animate-pulse" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
                <h3 className="text-xl font-semibold text-white">{kaiserT.similarTitle}</h3>
                <div className="mt-4 space-y-3 text-slate-300">
                  {character.similarCharacters.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-800/50">
                      <Shield className="w-4 h-4 text-sky-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // Standard Character Details View (Localized)
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
                    <p className="text-sm text-slate-400">{cTrans.rating}</p>
                    <p className="mt-3 text-4xl font-semibold text-white">{character.rating}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">{cTrans.age}</p>
                    <p className="mt-2 text-white">{character.age} {locale === 'ar' ? 'سنة' : 'years'}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">{cTrans.height}</p>
                    <p className="mt-2 text-white">{character.height}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4">
                    <p className="text-sm text-slate-400">{cTrans.foot}</p>
                    <p className="mt-2 text-white">{character.foot === 'Right' ? (locale === 'ar' ? 'اليمنى' : 'Right') : character.foot === 'Left' ? (locale === 'ar' ? 'اليسرى' : 'Left') : (locale === 'ar' ? 'كلتا القدمين' : 'Both')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-400 font-semibold">{cTrans.strengths}</p>
                <div className="grid gap-3">
                  {character.strengths.map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-400 font-semibold">{cTrans.weaknesses}</p>
                <div className="grid gap-3">
                  {character.weaknesses.map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400 font-semibold">{cTrans.overview}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">{cTrans.playStyle}</p>
                <p className="mt-2 text-white">{character.playStyle}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">{cTrans.weapon}</p>
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
            <h3 className="text-xl font-semibold text-white">{cTrans.stats}</h3>
            <div className="mt-6 space-y-4">
              <ProgressBar label={locale === 'ar' ? 'السرعة (Speed)' : 'Speed'} value={character.stats.speed} />
              <ProgressBar label={locale === 'ar' ? 'التسديد (Shooting)' : 'Shooting'} value={character.stats.shooting} />
              <ProgressBar label={locale === 'ar' ? 'المراوغة (Dribbling)' : 'Dribbling'} value={character.stats.dribbling} />
              <ProgressBar label={locale === 'ar' ? 'التمرير (Passing)' : 'Passing'} value={character.stats.passing} />
              <ProgressBar label={locale === 'ar' ? 'الرؤية (Vision)' : 'Vision'} value={character.stats.vision} />
              <ProgressBar label={locale === 'ar' ? 'البدنية (Physical)' : 'Physical'} value={character.stats.physical} />
              <ProgressBar label={locale === 'ar' ? 'الدفاع (Defense)' : 'Defense'} value={character.stats.defense} />
              <ProgressBar label={locale === 'ar' ? 'التحرك بدون كرة (Off-Ball)' : 'Off-Ball'} value={character.stats.offBallMovement} />
              <ProgressBar label={locale === 'ar' ? 'الذكاء الكروي (Football IQ)' : 'Football IQ'} value={character.stats.footballIQ} />
              <ProgressBar label={locale === 'ar' ? 'الأنا (Ego)' : 'Ego'} value={character.stats.ego} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">{cTrans.radar}</h3>
            <div className="mt-6">
              <RadarChart
                stats={[
                  { label: 'Speed', value: character.stats.speed },
                  { label: 'Shoot', value: character.stats.shooting },
                  { label: 'Dribble', value: character.stats.dribbling },
                  { label: 'Pass', value: character.stats.passing },
                  { label: 'Vision', value: character.stats.vision },
                  { label: 'Physical', value: character.stats.physical },
                  { label: 'Defense', value: character.stats.defense },
                  { label: 'Off-Ball', value: character.stats.offBallMovement },
                  { label: 'IQ', value: character.stats.footballIQ },
                  { label: 'Ego', value: character.stats.ego },
                ]}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-xl font-semibold text-white">{cTrans.evolution}</h3>
            <p className="mt-4 text-slate-300">{character.evolution}</p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">{cTrans.similar}</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {character.bestPartners.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">{cTrans.rivals}</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {character.bestRivals.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <h3 className="text-xl font-semibold text-white">{locale === 'ar' ? 'شخصيات مشابهة' : 'Similar Characters'}</h3>
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

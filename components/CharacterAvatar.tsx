'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Character } from '@/types/character';

interface CharacterAvatarProps {
  character: Character;
  className?: string;
}

export function CharacterAvatar({ character, className }: CharacterAvatarProps) {
  const isKaiser = character.id === 'michael-kaiser';

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-slate-900 group ${className ?? ''}`}>
      {/* Stadium/Neon Ambient Background Layer for Kaiser */}
      {isKaiser && (
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-purple-950/40 to-sky-950/20" />
      )}

      <Image
        src={character.image || '/images/fallback-avatar.svg'}
        alt={character.name}
        width={520}
        height={520}
        className={`h-full w-full object-cover relative z-10 transition duration-500 ${
          isKaiser
            ? 'group-hover:scale-105 filter group-hover:brightness-110 group-hover:contrast-105'
            : 'group-hover:scale-105'
        }`}
        priority={isKaiser}
      />

      {/* Kaiser Rose/Neon Aura Overlay */}
      {isKaiser && (
        <>
          {/* Blue/Purple border glow */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem] border border-sky-500/20 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]" />
          
          {/* Animated Rose aura glow */}
          <div className="absolute inset-0 z-20 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 mix-blend-color-dodge opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

          {/* Eye glow flare (neon streak) overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none mix-blend-screen opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {/* Blue Rose/Eye aura radiating from his glowing blue eyes */}
            <div className="absolute top-[28%] left-[34%] w-4 h-4 rounded-full bg-sky-400 blur-sm animate-pulse shadow-[0_0_12px_#38bdf8,0_0_24px_#38bdf8]" />
            <div className="absolute top-[29%] left-[45%] w-3 h-3 rounded-full bg-sky-400 blur-[2px] animate-pulse shadow-[0_0_10px_#38bdf8]" />
          </div>
        </>
      )}
    </div>
  );
}

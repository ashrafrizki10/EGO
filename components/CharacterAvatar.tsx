import Image from 'next/image';
import type { Character } from '@/types/character';

interface CharacterAvatarProps {
  character: Character;
  className?: string;
}

export function CharacterAvatar({ character, className }: CharacterAvatarProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-slate-900 ${className ?? ''}`}>
      <Image
        src={character.image || '/images/fallback-avatar.svg'}
        alt={character.name}
        width={520}
        height={520}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        priority={false}
      />
    </div>
  );
}

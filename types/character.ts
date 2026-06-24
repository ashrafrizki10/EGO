export type Position = 'Striker' | 'Winger' | 'Midfielder' | 'Defender' | 'Goalkeeper' | 'Forward';

export interface CharacterStats {
  speed: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defense: number;
  vision: number;
  intelligence: number;
}

export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  image: string;
  weapon: string;
  playStyle: string;
  team: string;
  position: Position;
  age: number;
  height: string;
  foot: 'Left' | 'Right' | 'Both';
  rating: number;
  strengths: string[];
  weaknesses: string[];
  description: string;
  skills: string[];
  evolution: string;
  bestPartners: string[];
  bestRivals: string[];
  similarCharacters: string[];
  stats: CharacterStats;
}

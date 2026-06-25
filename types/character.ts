export type Position = 'Striker' | 'Winger' | 'Midfielder' | 'Defender' | 'Goalkeeper' | 'Forward';

export interface CharacterStats {
  shooting: number;
  speed: number;
  dribbling: number;
  passing: number;
  vision: number;
  physical: number;
  defense: number;
  offBallMovement: number;
  footballIQ: number;
  ego: number;
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

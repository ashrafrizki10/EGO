export type Position = 'Striker' | 'Winger' | 'Midfielder' | 'Defender' | 'Goalkeeper';

export interface Character {
  id: string;
  name: string;
  weapon: string;
  playStyle: string;
  team: string;
  position: Position;
  rating: number;
  strengths: string[];
  weaknesses: string[];
  description: string;
  skills: string[];
}

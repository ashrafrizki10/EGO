export type AchievementKey =
  | 'quizMaster'
  | 'comparisonKing'
  | 'collector'
  | 'pathFinder'
  | 'leagueScout'
  | 'u20Scout';

export interface AchievementState {
  key: AchievementKey;
  title: string;
  description: string;
  unlocked: boolean;
}

export interface AppState {
  favorites: string[];
  achievements: Record<AchievementKey, boolean>;
}

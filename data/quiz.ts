export type QuizOption = {
  id: string;
  label: string;
  score: Record<string, number>;
};

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'approach',
    question: 'ما هو أسلوب هجوميّك المفضّل؟',
    options: [
      { id: 'strategic', label: 'التخطيط الذكي', score: { 'yoichi-isagi': 3, 'ego-jinpachi': 3 } },
      { id: 'wild', label: 'الهجوم الفوضوي', score: { 'meguru-bachira': 3, 'baro-shinjo': 2 } },
      { id: 'speed', label: 'الهجوم السريع', score: { 'hyoma-chigiri': 3, 'rensei-kunigami': 1 } },
    ],
  },
  {
    id: 'skill',
    question: 'ما هي أقوى مهارة لديك؟',
    options: [
      { id: 'precision', label: 'الدقة العالية', score: { 'seishiro-nagi': 3, 'reo-mikage': 3 } },
      { id: 'power', label: 'القوة البدنية', score: { 'jyubei-aryu': 3, 'rensei-kunigami': 2 } },
      { id: 'analysis', label: 'التحليل الذهني', score: { 'ego-jinpachi': 3, 'yoichi-isagi': 2 } },
    ],
  },
  {
    id: 'approach2',
    question: 'كيف تتعامل مع الضغوط؟',
    options: [
      { id: 'calm', label: 'بهدوء وتحليل', score: { 'seishiro-nagi': 3, 'ego-jinpachi': 2 } },
      { id: 'rush', label: 'بسرعة وشغف', score: { 'meguru-bachira': 3, 'hyoma-chigiri': 2 } },
      { id: 'fight', label: 'بقوة وتحدي', score: { 'jyubei-aryu': 3, 'baro-shinjo': 2 } },
    ],
  },
];

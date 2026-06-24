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
    id: 'attack_style',
    question: 'ما هو أسلوب الهجوم الذي تفضّله؟',
    options: [
      { id: 'strategic', label: 'هجوم ثاقب ومنظم', score: { 'yoichi-isagi': 3, 'ego-jinpachi': 2, 'seishiro-nagi': 1 } },
      { id: 'wild', label: 'انفجاري وفوضوي', score: { 'meguru-bachira': 3, 'baro-shinjo': 2, 'oskar-uber': 1 } },
      { id: 'speed', label: 'الهجوم السريع والخاطف', score: { 'hyoma-chigiri': 3, 'rensei-kunigami': 1, 'leo-barcha': 1 } },
    ],
  },
  {
    id: 'decision',
    question: 'كيف تتخذ قراراتك في الملعب؟',
    options: [
      { id: 'calm', label: 'بحذر وتحليل', score: { 'ego-jinpachi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'impulse', label: 'بحدس وتنفيذ فوري', score: { 'meguru-bachira': 3, 'oskar-uber': 2, 'leo-barcha': 1 } },
      { id: 'force', label: 'بالقوة والتحكم', score: { 'jyubei-aryu': 3, 'baro-shinjo': 2, 'hans-kruger': 1 } },
    ],
  },
  {
    id: 'strength_area',
    question: 'أين تكمن قوتك الأساسية؟',
    options: [
      { id: 'precision', label: 'التسديد الدقيق', score: { 'seishiro-nagi': 3, 'reo-mikage': 2, 'leo-barcha': 1 } },
      { id: 'speed', label: 'السرعة المتفجرة', score: { 'hyoma-chigiri': 3, 'oskar-uber': 2, 'aoi-sakamaki': 1 } },
      { id: 'vision', label: 'الرؤية والتحكم', score: { 'ego-jinpachi': 3, 'pierre-deville': 2, 'aoi-sakamaki': 1 } },
    ],
  },
  {
    id: 'playmaker_role',
    question: 'هل تفضّل أن تكون صانع اللعب أم المنفذ؟',
    options: [
      { id: 'creator', label: 'صانع اللعب', score: { 'pierre-deville': 3, 'aoi-sakamaki': 2, 'ego-jinpachi': 1 } },
      { id: 'finisher', label: 'المنفذ النهائي', score: { 'rin-itoshi': 3, 'reio-mikage': 2, 'baro-shinjo': 1 } },
      { id: 'runner', label: 'الراوح والمرّن', score: { 'meguru-bachira': 3, 'hyoma-chigiri': 2, 'oskar-uber': 1 } },
    ],
  },
  {
    id: 'pressure',
    question: 'كيف تتعامل مع الضغط في اللحظات الحاسمة؟',
    options: [
      { id: 'focus', label: 'تركيز كامل', score: { 'rin-itoshi': 3, 'seishiro-nagi': 2, 'reo-mikage': 1 } },
      { id: 'risk', label: 'أخاطر للنتيجة', score: { 'baro-shinjo': 3, 'yoichi-isagi': 1, 'meguru-bachira': 2 } },
      { id: 'control', label: 'أحافظ على النظام', score: { 'ego-jinpachi': 3, 'tsukasa-tsukamoto': 2, 'aoi-sakamaki': 1 } },
    ],
  },
  {
    id: 'teamwork',
    question: 'ما مدى أهمية العمل الجماعي لديك؟',
    options: [
      { id: 'leader', label: 'أنا من يقود الفريق', score: { 'ego-jinpachi': 3, 'rensei-kunigami': 2, 'hans-kruger': 1 } },
      { id: 'partner', label: 'أفضل التعاون الذكي', score: { 'yoichi-isagi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'independent', label: 'أفضل الاعتماد على نفسي', score: { 'rin-itoshi': 3, 'baro-shinjo': 2, 'leo-barcha': 1 } },
    ],
  },
  {
    id: 'attack_preference',
    question: 'أي نوع من الهجمات تفضّل؟',
    options: [
      { id: 'long', label: 'هجوم بالكرات الطويلة', score: { 'leo-barcha': 3, 'hans-kruger': 2, 'jyubei-aryu': 1 } },
      { id: 'counter', label: 'الهجمات المرتدة السريعة', score: { 'hyoma-chigiri': 3, 'oskar-uber': 2, 'meguru-bachira': 1 } },
      { id: 'possession', label: 'التحكم والاستحواذ', score: { 'pierre-deville': 3, 'aoi-sakamaki': 2, 'ego-jinpachi': 1 } },
    ],
  },
  {
    id: 'defense_style',
    question: 'كيف تصف أسلوبك الدفاعي؟',
    options: [
      { id: 'aggressive', label: 'هجوم مع الدفاع', score: { 'hans-kruger': 3, 'tsukasa-tsukamoto': 2, 'baro-shinjo': 1 } },
      { id: 'smart', label: 'التدخل الذكي', score: { 'ego-jinpachi': 2, 'aoi-sakamaki': 1, 'yoichi-isagi': 3 } },
      { id: 'support', label: 'الدعم والتمركز', score: { 'tsukasa-tsukamoto': 3, 'pierre-deville': 1, 'rensei-kunigami': 2 } },
    ],
  },
  {
    id: 'risk_taking',
    question: 'كم تُخاطر عندما تكون فرص الفوز قليلة؟',
    options: [
      { id: 'all_in', label: 'أضع كل شيء على المحك', score: { 'rin-itoshi': 3, 'baro-shinjo': 2, 'meguru-bachira': 1 } },
      { id: 'calculated', label: 'أخطط بعناية', score: { 'ego-jinpachi': 3, 'yoichi-isagi': 2, 'aoi-sakamaki': 1 } },
      { id: 'reserved', label: 'أحافظ على ما لدي', score: { 'tsukasa-tsukamoto': 3, 'seishiro-nagi': 1, 'leo-barcha': 2 } },
    ],
  },
  {
    id: 'character_role',
    question: 'هل تفضل أن تكون شخصية مركزية أم داعمة؟',
    options: [
      { id: 'central', label: 'شخصية مركزية', score: { 'rin-itoshi': 3, 'ego-jinpachi': 2, 'seishiro-nagi': 1 } },
      { id: 'supportive', label: 'داعم قوي', score: { 'aoi-sakamaki': 3, 'pierre-deville': 2, 'tsukasa-tsukamoto': 1 } },
      { id: 'dynamic', label: 'دور متغير', score: { 'meguru-bachira': 3, 'oskar-uber': 2, 'baro-shinjo': 1 } },
    ],
  },
  {
    id: 'motivation',
    question: 'ما هو دافعك الأكبر؟',
    options: [
      { id: 'glory', label: 'المجد والتحدي', score: { 'rin-itoshi': 3, 'baro-shinjo': 2, 'leo-barcha': 1 } },
      { id: 'strategy', label: 'التكتيك والتحليل', score: { 'ego-jinpachi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'passion', label: 'الإحساس والقوة', score: { 'meguru-bachira': 3, 'hyoma-chigiri': 2, 'jyubei-aryu': 1 } },
    ],
  },
  {
    id: 'preferred_space',
    question: 'أي منطقة في الملعب تشعر فيها بالقوة؟',
    options: [
      { id: 'inside', label: 'داخل منطقة الجزاء', score: { 'seishiro-nagi': 3, 'leo-barcha': 2, 'rensei-kunigami': 1 } },
      { id: 'wing', label: 'الأجنحة وسرعة المساحة', score: { 'hyoma-chigiri': 3, 'meguru-bachira': 2, 'oskar-uber': 1 } },
      { id: 'midfield', label: 'الوسط والسيطرة', score: { 'aoi-sakamaki': 3, 'pierre-deville': 2, 'ego-jinpachi': 1 } },
    ],
  },
  {
    id: 'style_identity',
    question: 'كيف تصف أسلوبك العام؟',
    options: [
      { id: 'cold', label: 'بارد ودقيق', score: { 'seishiro-nagi': 3, 'reo-mikage': 2, 'rin-itoshi': 1 } },
      { id: 'wild', label: 'مشاغب ومتحرر', score: { 'meguru-bachira': 3, 'oskar-uber': 2, 'baro-shinjo': 1 } },
      { id: 'calculated', label: 'محسوب ومدروس', score: { 'ego-jinpachi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
    ],
  },
  {
    id: 'favorite_match',
    question: 'أي مباراة تتخيل نفسك فيها؟',
    options: [
      { id: 'final', label: 'نهائي كونته الأفضل', score: { 'rin-itoshi': 3, 'baro-shinjo': 2, 'leo-barcha': 1 } },
      { id: 'comeback', label: 'عودة مذهلة', score: { 'yoichi-isagi': 3, 'hyoma-chigiri': 2, 'meguru-bachira': 1 } },
      { id: 'masterplan', label: 'تحكّم كامل في اللعب', score: { 'ego-jinpachi': 3, 'pierre-deville': 2, 'aoi-sakamaki': 1 } },
    ],
  },
  {
    id: 'mental_toughness',
    question: 'كيف تقوّم قدرتك الذهنية؟',
    options: [
      { id: 'unshakable', label: 'غير قابلة للهزيمة', score: { 'rin-itoshi': 3, 'ego-jinpachi': 2, 'seishiro-nagi': 1 } },
      { id: 'adaptive', label: 'قابلة للتكيف', score: { 'meguru-bachira': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'steady', label: 'ثابتة وموثوقة', score: { 'tsukasa-tsukamoto': 3, 'leo-barcha': 1, 'rensei-kunigami': 2 } },
    ],
  },
  {
    id: 'confidence',
    question: 'أين تشعر بأكبر ثقة؟',
    options: [
      { id: 'goal', label: 'عند المرمى', score: { 'seishiro-nagi': 3, 'rin-itoshi': 2, 'leo-barcha': 1 } },
      { id: 'playmaker', label: 'عند صناعة اللعب', score: { 'pierre-deville': 3, 'aoi-sakamaki': 2, 'ego-jinpachi': 1 } },
      { id: 'defense', label: 'عند إيقاف الخصم', score: { 'tsukasa-tsukamoto': 3, 'hans-kruger': 1, 'baro-shinjo': 2 } },
    ],
  },
  {
    id: 'mastery',
    question: 'أي مهارة تعتبرها قوتك الأساسية؟',
    options: [
      { id: 'footwork', label: 'المهارات الفردية والمراوغة', score: { 'meguru-bachira': 3, 'hyoma-chigiri': 2, 'oskar-uber': 1 } },
      { id: 'decision', label: 'القرار الحاسم', score: { 'ego-jinpachi': 3, 'yoichi-isagi': 2, 'rin-itoshi': 1 } },
      { id: 'body', label: 'القوة البدنية', score: { 'jyubei-aryu': 3, 'hans-kruger': 2, 'rensei-kunigami': 1 } },
    ],
  },
  {
    id: 'tempo',
    question: 'كيف تتحكم في إيقاع المباراة؟',
    options: [
      { id: 'fast', label: 'إيقاع سريع وهجومي', score: { 'hyoma-chigiri': 3, 'meguru-bachira': 2, 'oskar-uber': 1 } },
      { id: 'steady', label: 'إيقاع ثابت ومسيطر', score: { 'aoi-sakamaki': 3, 'pierre-deville': 2, 'ego-jinpachi': 1 } },
      { id: 'explosive', label: 'انفجارات متقطعة', score: { 'baro-shinjo': 3, 'leo-barcha': 1, 'rin-itoshi': 2 } },
    ],
  },
  {
    id: 'winning_mindset',
    question: 'ماذا تفعل عندما تكون متأخراً في النتيجة؟',
    options: [
      { id: 'charge', label: 'أهاجم بقوة أكبر', score: { 'rin-itoshi': 3, 'baro-shinjo': 2, 'meguru-bachira': 1 } },
      { id: 'plan', label: 'أخطط للهجمة التالية بعقلانية', score: { 'ego-jinpachi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'maintain', label: 'أحافظ على هدوئي وأنتظر الفرصة', score: { 'seishiro-nagi': 3, 'yoichi-isagi': 2, 'leo-barcha': 1 } },
    ],
  },
  {
    id: 'identity',
    question: 'كيف تريد أن يتذكرك الآخرون؟',
    options: [
      { id: 'genius', label: 'العبقري التكتيكي', score: { 'ego-jinpachi': 3, 'aoi-sakamaki': 2, 'pierre-deville': 1 } },
      { id: 'finisher', label: 'القاتل في المرمى', score: { 'seishiro-nagi': 3, 'rin-itoshi': 2, 'leo-barcha': 1 } },
      { id: 'wildcard', label: 'العنصر المفاجئ', score: { 'meguru-bachira': 3, 'baro-shinjo': 2, 'oskar-uber': 1 } },
    ],
  },
];

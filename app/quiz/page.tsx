'use client';

import { useMemo, useState } from 'react';
import { quizQuestions } from '@/data/quiz';
import { characters } from '@/data/characters';
import { SectionHeading } from '@/components/SectionHeading';

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const scores: Record<string, number> = {};
    quizQuestions.forEach((question) => {
      const answerId = answers[question.id];
      const option = question.options.find((option) => option.id === answerId);
      if (option) {
        Object.entries(option.score).forEach(([key, value]) => {
          scores[key] = (scores[key] ?? 0) + value;
        });
      }
    });
    const topId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
    return characters.find((character) => character.id === topId) ?? null;
  }, [answers, submitted]);

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  };

  return (
    <section className="space-y-10">
      <SectionHeading title="اختبار الشخصية" description="أجب عن الأسئلة لاكتشاف أقرب شخصية Blue Lock إليك." />
      <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-8 shadow-glow shadow-sky-500/10">
        <form className="space-y-8">
          {quizQuestions.map((question) => (
            <div key={question.id} className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6">
              <p className="text-lg font-semibold text-white">{question.question}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleAnswer(question.id, option.id)}
                    className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${answers[question.id] === option.id ? 'border-sky-400 bg-sky-500/10 text-white' : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-600 hover:bg-slate-900'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button type="button" onClick={() => setSubmitted(true)} className="rounded-3xl bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            اعرض النتيجة
          </button>
        </form>

        {submitted && result && (
          <div className="mt-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">النتيجة</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{result.name}</h2>
            <p className="mt-4 text-slate-300">{result.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">الفريق</p>
                <p className="mt-2 text-white">{result.team}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">التقييم</p>
                <p className="mt-2 text-white">{result.rating}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

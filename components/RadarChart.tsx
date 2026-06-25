'use client';

import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface RadarChartProps {
  stats: { label: string; value: number }[];
}

export function RadarChart({ stats }: RadarChartProps) {
  // Format data for recharts
  const data = stats.map(s => ({
    subject: s.label,
    A: s.value,
    fullMark: 100,
  }));

  return (
    <div className="mx-auto w-full max-w-[320px] aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Stats"
            dataKey="A"
            stroke="#38bdf8"
            strokeWidth={2}
            fill="#38bdf8"
            fillOpacity={0.4}
            isAnimationActive={true}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
}

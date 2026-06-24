interface RadarChartProps {
  stats: { label: string; value: number }[];
}

const radius = 90;
const center = 100;

function getPoint(angle: number, value: number) {
  const pointRadius = (value / 100) * radius;
  const x = center + pointRadius * Math.cos(angle);
  const y = center + pointRadius * Math.sin(angle);
  return `${x},${y}`;
}

export function RadarChart({ stats }: RadarChartProps) {
  const points = stats.map((point, index) => getPoint((Math.PI * 2 * index) / stats.length - Math.PI / 2, point.value)).join(' ');
  const axes = stats.map((point, index) => {
    const target = getPoint((Math.PI * 2 * index) / stats.length - Math.PI / 2, radius);
    return <line key={point.label} x1={center} y1={center} x2={target.split(',')[0]} y2={target.split(',')[1]} stroke="#475569" strokeWidth="1" />;
  });

  return (
    <div className="mx-auto max-w-[220px]">
      <svg viewBox="0 0 200 200" className="h-[220px] w-full">
        <g>
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
            <polygon
              key={scale}
              points={stats
                .map((_, index) => {
                  const point = getPoint((Math.PI * 2 * index) / stats.length - Math.PI / 2, radius * scale);
                  return point;
                })
                .join(' ')}
              fill="rgba(56, 189, 248, 0.06)"
              stroke="#334155"
              strokeWidth="1"
            />
          ))}
          {axes}
          <polygon points={points} fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" strokeWidth="2" />
          <circle cx={center} cy={center} r="3" fill="#38bdf8" />
        </g>
        <g>
          {stats.map((point, index) => {
            const position = getPoint((Math.PI * 2 * index) / stats.length - Math.PI / 2, radius + 15);
            const [x, y] = position.split(',').map(Number);
            return (
              <text key={point.label} x={x} y={y} fill="#cbd5e1" fontSize="9" textAnchor={x > center ? 'start' : 'end'} dominantBaseline="middle">
                {point.label}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

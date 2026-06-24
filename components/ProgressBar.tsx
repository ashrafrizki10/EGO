interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
}

export function ProgressBar({ label, value, max = 100 }: ProgressBarProps) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

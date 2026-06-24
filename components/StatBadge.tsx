interface StatBadgeProps {
  label: string;
  value: string | number;
}

export function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
      <p className="font-semibold text-white">{value}</p>
      <p className="mt-1 text-slate-400">{label}</p>
    </div>
  );
}

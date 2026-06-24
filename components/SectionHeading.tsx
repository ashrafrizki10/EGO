interface SectionHeadingProps {
  title: string;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.24em] text-sky-400">EGO FLOW</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="max-w-3xl text-slate-400">{description}</p>
    </div>
  );
}

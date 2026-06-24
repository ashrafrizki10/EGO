export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-6 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} EGO FLOW</p>
        <p>Blue Lock Database — واجهة أنيمي احترافية.</p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">MochiLinux</span>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center sm:text-right">
          Smooth, Small and Sweet — a custom rolling Linux distribution.
        </p>
      </div>
    </footer>
  );
}

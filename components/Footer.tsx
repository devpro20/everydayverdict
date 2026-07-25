import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-lg shadow-brand-500/20 group-hover:scale-105 group-hover:shadow-brand-500/40 transition-all duration-300">
              <Image src="/logo.png" alt="everydayverdict logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              everydayverdict
            </span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Contact:{" "}
            <a
              href="mailto:at0884854223@gmail.com"
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              at0884854223@gmail.com
            </a>
          </span>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} everydayverdict. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

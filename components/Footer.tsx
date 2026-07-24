import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-white font-bold text-xs opacity-80">
            e
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">everydayverdict</span>
        </div>
        
        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} everydayverdict. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Twitter</Link>
          <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">GitHub</Link>
          <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}

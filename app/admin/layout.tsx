import Link from 'next/link'
import { LayoutDashboard, FileText, Tags, Home } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#0B0F19] selection:bg-brand-500/30">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-800/50 hidden md:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)] z-20">
        <div className="p-6 md:p-8">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="p-2 bg-brand-500 rounded-lg text-white shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Admin
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4 mt-4">Manage</div>
          
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-xl transition-all duration-200 font-medium group">
            <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Dashboard
          </Link>
          <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-xl transition-all duration-200 font-medium group">
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Posts
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-xl transition-all duration-200 font-medium group">
            <Tags className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Categories
          </Link>
        </nav>
        
        <div className="p-4 m-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
          <Link href="/" className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            <Home className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Subtle background glow for main content area */}
        <div className="absolute top-0 left-0 w-full h-96 bg-brand-500/5 dark:bg-brand-500/10 blur-[100px] pointer-events-none z-0"></div>

        {/* Mobile Header */}
        <header className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 p-4 flex justify-between items-center z-20">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-500 rounded text-white">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">Admin</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/admin/posts" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Posts</Link>
            <Link href="/admin/categories" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Categories</Link>
          </nav>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 z-10">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

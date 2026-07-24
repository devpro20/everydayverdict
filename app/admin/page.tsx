import { prisma } from '@/lib/prisma'
import { FileText, Tags, TrendingUp, Users } from 'lucide-react'

export const revalidate = 0

export default async function AdminDashboard() {
  const [postCount, categoryCount] = await Promise.all([
    prisma.post.count(),
    prisma.category.count(),
  ])

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Welcome back. Here's what's happening with your blog today.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Total Posts Card */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 group hover:border-brand-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-purple-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Posts</p>
              <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{postCount}</p>
            </div>
            <div className="p-4 bg-brand-50 dark:bg-brand-500/10 rounded-2xl text-brand-600 dark:text-brand-400 shadow-inner">
              <FileText className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Total Categories Card */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 group hover:border-pink-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-orange-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Categories</p>
              <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{categoryCount}</p>
            </div>
            <div className="p-4 bg-pink-50 dark:bg-pink-500/10 rounded-2xl text-pink-600 dark:text-pink-400 shadow-inner">
              <Tags className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Placeholder Stat 1 */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 group hover:border-emerald-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Views</p>
              <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">12K</p>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-inner">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Placeholder Stat 2 */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 group hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Subscribers</p>
              <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">845</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 shadow-inner">
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

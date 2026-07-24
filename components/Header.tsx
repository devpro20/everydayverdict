import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function Header() {
  const categories = await prisma.category.findMany({
    take: 4,
    orderBy: { name: 'asc' }
  })

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 group-hover:shadow-brand-500/40 transition-all duration-300">
            e
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">everydayverdict</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Home</Link>
          {categories.map((c: any) => (
            <Link key={c.id} href={`/category/${c.slug}`} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors capitalize">
              {c.name}
            </Link>
          ))}

        </nav>

        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          <button className="p-2 text-slate-600 dark:text-slate-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}

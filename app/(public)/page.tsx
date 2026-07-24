import { prisma } from '@/lib/prisma'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import PostCardOverlay from '@/components/PostCardOverlay'
import PostCardList from '@/components/PostCardList'

export const revalidate = 60

export default async function Home() {
  const featuredPosts = await prisma.post.findMany({
    where: { isFeatured: true },
    include: { category: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })

  const latestPosts = await prisma.post.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })

  // To ensure we have enough data for layout demonstration, we'll repeat some if needed
  const fPosts = featuredPosts.length >= 3 ? featuredPosts : [...featuredPosts, ...latestPosts].slice(0, 3)
  const lPosts = latestPosts.length >= 10 ? latestPosts : [...latestPosts, ...latestPosts, ...latestPosts].slice(0, 10)

  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Section 1: Trending Now */}
        {fPosts.length >= 3 && (
          <section className="mb-24">
            <div className="flex items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider whitespace-nowrap mr-6 text-slate-900 dark:text-white">
                Trending Now
              </h2>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-700"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 lg:h-[500px]">
                <PostCardOverlay post={fPosts[0]} />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <PostCard post={fPosts[1]} />
                  <PostCard post={fPosts[2]} />
                </div>
                <div className="flex-1 min-h-[120px] bg-slate-100 dark:bg-slate-800 rounded-sm flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
                  <span className="relative z-10 text-lg font-bold text-slate-900 dark:text-white mb-2">Your Ad Here</span>
                  <button className="relative z-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase rounded-sm transition-colors">Purchase</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Gaming Reviews */}
        {lPosts.length >= 6 && (
          <section className="mb-24">
            <div className="flex items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider whitespace-nowrap mr-6 text-slate-900 dark:text-white">
                Gaming Reviews – Gear, Consoles & Accessories Tested
              </h2>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-700"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 h-[500px]">
                <PostCardOverlay post={lPosts[0]} />
              </div>
              <div className="lg:col-span-3">
                <PostCard post={lPosts[1]} />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                {lPosts.slice(2, 6).map((post: any) => (
                  <PostCardList key={post.id + '_gaming'} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Tech Gadget Reviews */}
        {lPosts.length >= 10 && (
          <section className="mb-24">
            <div className="flex items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider whitespace-nowrap mr-6 text-slate-900 dark:text-white">
                Tech Gadget Reviews – Honest Insights on Trending Tech
              </h2>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm md:text-base max-w-4xl">
              From earbuds to smart home devices, Everyday Verdict breaks down what's hype and what's worth buying. Expert tech reviews written for real people.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {lPosts.slice(0, 4).map((post: any, i) => (
                <div key={post.id + '_gadget_' + i} className="h-[400px]">
                  <PostCardOverlay post={post} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              {lPosts.slice(4, 10).map((post: any, i) => (
                <PostCardList key={post.id + '_gadget_list_' + i} post={post} />
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  )
}

import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { category: true }
  })

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-10 text-brand-600 hover:text-brand-500 font-semibold transition-colors">
        <span className="mr-2 text-xl">&larr;</span> Back to Home
      </Link>
      
      <article className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image 
            src={post.thumbnail} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
            <div className="flex items-center space-x-4 mb-4">
              <Link 
                href={`/category/${post.category.slug}`}
                className="text-xs font-bold tracking-wider uppercase text-white bg-brand-600/80 hover:bg-brand-500 backdrop-blur-md px-3 py-1.5 rounded-full transition-colors"
              >
                {post.category.name}
              </Link>
              <span className="text-slate-300 text-sm font-medium">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight shadow-sm">
              {post.title}
            </h1>
          </div>
        </div>
        
        <div className="p-8 md:p-12 lg:px-16 lg:py-14 bg-white dark:bg-slate-900">
          <div className="prose prose-lg dark:prose-invert prose-brand max-w-none text-slate-700 dark:text-slate-300 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-600 dark:prose-a:text-brand-400 hover:prose-a:text-brand-500 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  )
}

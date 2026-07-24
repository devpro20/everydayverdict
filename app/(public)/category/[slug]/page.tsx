import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import type { Metadata, ResolvingMetadata } from 'next'

export const revalidate = 60

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const category = await prisma.category.findUnique({
    where: { slug },
  })

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  const title = `${category.name} Reviews & News`
  const description = `Browsing all posts in the ${category.name} category. Discover ideas, tutorials, and insights.`

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: title,
      description: description,
    },
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      posts: {
        orderBy: { createdAt: 'desc' }
      }
    }
  })

  if (!category) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white capitalize tracking-tight">
          {category.name}
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-light">
          Browsing all posts in the {category.name} category. Discover ideas, tutorials, and insights.
        </p>
      </div>

      {category.posts.length === 0 ? (
        <div className="text-center py-24 glass rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">No posts found in this category yet.</p>
          <Link href="/" className="mt-6 inline-block text-brand-600 hover:text-brand-500 font-semibold px-6 py-3 rounded-full bg-brand-50 dark:bg-brand-900/20 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.posts.map((post: any) => (
            <PostCard key={post.id} post={{...post, category}} />
          ))}
        </div>
      )}
    </main>
  )
}

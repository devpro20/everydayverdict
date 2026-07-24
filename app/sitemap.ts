import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://everydayverdict.com'

  // Get all posts
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
      createdAt: true,
    }
  })

  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.createdAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Get all categories
  const categories = await prisma.category.findMany({
    select: {
      slug: true,
    }
  })

  const categoryUrls = categories.map((category: any) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
    ...categoryUrls,
  ]
}

'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const thumbnail = formData.get('thumbnail') as string
  const categoryId = formData.get('categoryId') as string
  const isFeatured = formData.get('isFeatured') === 'on'

  if (!title || !slug || !content || !categoryId) {
    throw new Error('Missing required fields')
  }

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      thumbnail: thumbnail || 'https://via.placeholder.com/800x400?text=No+Thumbnail',
      isFeatured,
      categoryId,
    },
  })

  revalidatePath('/admin/posts')
  revalidatePath('/')
  revalidatePath('/category/[slug]', 'page')
}

'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createCategory(formData: FormData) {
  const name = formData.get('name') as string
  const slug = formData.get('slug') as string

  if (!name || !slug) {
    throw new Error('Name and slug are required')
  }

  await prisma.category.create({
    data: {
      name,
      slug,
    },
  })

  revalidatePath('/admin/categories')
  revalidatePath('/')
}

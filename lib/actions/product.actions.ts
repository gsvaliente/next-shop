'use server'

import { prisma } from '@/db/prisma'
import { convertToRegularObject } from '../utils'
import { LATEST_PRODUCT_LIMIT } from '../constants'

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return convertToRegularObject(data)
}

// Get single product by slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  })
  return convertToRegularObject(data)
}

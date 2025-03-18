'use server'

import { PrismaClient } from '@prisma/client'
import { convertToRegularObject } from '../utils'
import { LATEST_PRODUCT_LIMIT } from '../constants'

// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient()
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return convertToRegularObject(data)
}

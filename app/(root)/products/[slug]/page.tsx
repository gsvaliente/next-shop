import { notFound } from 'next/navigation'

import { getProductBySlug } from '@/lib/actions/product.actions'
import type { Product } from '@/types/product'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product: Product | null = await getProductBySlug(slug)

  if (!product) notFound()

  console.log(product)
  return <h1>{product.name}</h1>
}

import { notFound } from 'next/navigation'

import type { Product } from '@/types/product'

import { getProductBySlug } from '@/lib/actions/product.actions'
import { ActionsColumn } from '@/components/single-product/ActionsColumn'
import { DetailsColumn } from '@/components/single-product/DetailsColumn'
import { ImagesColumn } from '@/components/single-product/ImagesColumn'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product: Product | null = await getProductBySlug(slug)

  if (!product) notFound()

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          <ImagesColumn images={product.images} />
          <DetailsColumn product={product} />
          <ActionsColumn product={product} />
        </div>
      </section>
    </>
  )
}

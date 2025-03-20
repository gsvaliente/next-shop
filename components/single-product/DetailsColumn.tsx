import { ProductPrice } from '@/components/shared/product/ProductPrice'

import type { Product } from '@/types/product'

interface DetailsColumnProps {
  product: Product
}

export function DetailsColumn({ product }: DetailsColumnProps) {
  return (
    <div className='col-span-2 p-5'>
      <div className='flex flex-col gap-6'>
        <p>
          {product.brand} {product.category}
        </p>
        <h1 className='h3-bold'>{product.name}</h1>
        <p>
          {product.rating} of {product.numReviews} Reviews
        </p>
        <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
          <ProductPrice
            price={Number(product.price)}
            className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
          />
        </div>
      </div>
      <div className='mt-10'>
        <p className='font-semibold'>Description</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

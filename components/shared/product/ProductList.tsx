import { ProductCard } from '@/components/shared/product/ProductCard'
import { Product } from '@/types/product'
type ProductListProps = {
  data: Product[]
  title?: string
  limit?: number
}

export function ProductList({ data, title, limit }: ProductListProps) {
  const limitedData = limit ? data.slice(0, limit) : data
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title}</h2>
      {limitedData.length > 0 ? (
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {limitedData.map((product: Product) => (
            <ProductCard
              key={product.slug}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className='flex h-full items-center justify-center'>
          <p className='text-muted-foreground'>No products found</p>
        </div>
      )}
    </div>
  )
}

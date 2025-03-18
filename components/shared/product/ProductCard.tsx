import { ProductPrice } from '@/components/shared/product/ProductPrice'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h2 className='text-md font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between'>
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice price={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

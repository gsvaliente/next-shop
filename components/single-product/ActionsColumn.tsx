import { ProductPrice } from '@/components/shared/product/ProductPrice'

import type { Product } from '@/types/product'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ActionsColumnProps {
  product: Product
}

export function ActionsColumn({ product }: ActionsColumnProps) {
  return (
    <div>
      <Card>
        <CardContent className='p-4'>
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <ProductPrice price={Number(product.price)} />
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            {product.stock > 0 ? (
              <Badge variant='outline'>In Stock</Badge>
            ) : (
              <Badge variant='destructive'>No Stock</Badge>
            )}
          </div>
          {product.stock > 0 ? (
            <Button className='w-full'>Add to Cart</Button>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}

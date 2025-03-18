import { ProductList } from '@/components/shared/product/ProductList'
import { getLatestProducts } from '@/lib/actions/product.actions'

export default async function Homepage() {
  const latestProducts = await getLatestProducts()
  console.log(latestProducts)
  return (
    <ProductList
      data={latestProducts}
      title='Newest Arrivals'
      limit={4}
    />
  )
}

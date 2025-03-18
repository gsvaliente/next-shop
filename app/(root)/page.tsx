import sampleData from '@/db/sample-data'
import { ProductList } from '@/components/shared/product/ProductList'

export default function Homepage() {
  console.log(sampleData)
  return (
    <ProductList
      data={sampleData.products}
      title='Newest Arrivals'
      limit={6}
    />
  )
}

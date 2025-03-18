import { cn } from '@/lib/utils'

interface ProductPriceProps {
  price: number
  className?: string
}

export function ProductPrice({ price, className }: ProductPriceProps) {
  const formattedPrice = price.toFixed(2)
  //* split the price into integer and decimal parts
  // const stringValue = formattedPrice.split('.')
  // const integerPart = stringValue[0]
  // const decimalPart = stringValue[1]
  const [integerPart, decimalPart] = formattedPrice.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      <span className='font-bold'>{integerPart}</span>
      <span className='text-xs align-super'>.{decimalPart}</span>
    </p>
  )
}

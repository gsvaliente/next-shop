import { formatPrice } from '@/lib/utils'
import { z } from 'zod'

// FORMAT PRICE/CURRENCY VALIDATOR
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatPrice(Number(value))),
    'Price must have 2 decimal places'
  )

// SCHEMA FOR INSERTING PRODUCTS
export const insertProductSchema = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  slug: z.string().min(4, 'Slug must be at least 4 characters long'),
  category: z.string().min(4, 'Category must be at least 4 characters long'),
  brand: z.string().min(4, 'Brand must be at least 4 characters long'),
  description: z
    .string()
    .min(4, 'Description must be at least 4 characters long'),
  stock: z.coerce.number().min(1, 'There must be at least 1 item in stock'),
  price: currency,
  images: z.array(z.string()).min(1, 'At least one image is required'),
  isFeatured: z.boolean(),
  banner: z.string().optional(),
  numReviews: z.coerce.number()
})

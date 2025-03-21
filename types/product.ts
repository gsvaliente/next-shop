import { z } from 'zod'

import { insertProductSchema } from '@/lib/validators'

export interface Product extends z.infer<typeof insertProductSchema> {
  id: string,
  rating: string,
  createdAt: Date,
}

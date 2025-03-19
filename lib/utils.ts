import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert Prisma Object to regular JS Object
export function convertToRegularObject<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj))
}

// Format Price with decimal places
export function formatPrice(price: number): string {
  const [integer, decimal] = price.toString().split('.')
  return decimal ? `${integer}.${decimal.padEnd(2,'0')}` : `${integer}.00`
}

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert Prisma Object to regular JS Object
export function convertToRegularObject<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj))
}

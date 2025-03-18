import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ModeToggle } from '@/components/shared/header/Mode-toggle'
import { SideSheet } from '@/components/shared/header/SideSheet'
import { ShoppingCart, UserIcon } from 'lucide-react'

export function Menu() {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <ModeToggle />
        <Button
          asChild
          variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button
          asChild
          variant='default'>
          <Link href='/sign-in'>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <SideSheet />
    </div>
  )
}

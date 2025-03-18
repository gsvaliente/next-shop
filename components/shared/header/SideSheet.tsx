import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { ModeToggle } from '@/components/shared/header/Mode-toggle'

export function SideSheet() {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className='flex flex-col items-start py-3 pl-3'>
          <SheetTitle>Menu</SheetTitle>
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
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

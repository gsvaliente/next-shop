'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted/30'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center justify-center w-full max-w-md px-4'>
        <div className='relative mb-8'>
          <Image
            src={'/images/logo.svg'}
            width={64}
            height={64}
            alt={`${APP_NAME} logo`}
            priority={true}
            className='relative z-10'
          />
          <div className='absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-70'></div>
        </div>

        <div className='p-8 w-full rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg text-center'>
          <h1 className='text-5xl font-bold mb-2'>404</h1>
          <h2 className='text-2xl font-medium mb-4 text-muted-foreground'>
            Page Not Found
          </h2>

          <div className='my-8 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-border to-transparent'></div>

          <p className='mb-6 text-muted-foreground'>
            The page you are looking for does not exist or has been moved.
          </p>

          <Button
            asChild
            variant='default'
            size='lg'
            className='font-medium px-8 hover:shadow-md transition-all duration-200'>
            <Link href='/'>Go to Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

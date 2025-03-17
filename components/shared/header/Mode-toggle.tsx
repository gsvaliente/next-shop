'use client'

import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const [mounted, setMounted] = useState(false) //* This is to prevent hydration error
  const { theme, setTheme } = useTheme()

  //* This is to prevent hydration error
  useEffect(() => {
    setMounted(true)
  }, [])

  //* This is to prevent hydration error
  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant='ghost'
      onClick={toggleTheme}
      className='focus-visible:ring-0 focus-visible:ring-offset-0'
      aria-label='Toggle theme'>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

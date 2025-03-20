'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagesColumnProps {
  images: string[]
}

export function ImagesColumn({ images }: ImagesColumnProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className='col-span-2'>
      <div className='space-y-4'>
        <Image
          src={images[currentImage]}
          alt='Product Image'
          width={1000}
          height={1000}
          className='min-h-[300px] object-cover object-center rounded-lg'
        />
        <div className='flex gap-2'>
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => setCurrentImage(index)}
              className={cn(
                'border mr-2 cursor-pointer hover:border-orange-300 transition-all duration-200',
                currentImage === index && 'border-orange-600'
              )}>
              <Image
                src={image}
                alt='image'
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

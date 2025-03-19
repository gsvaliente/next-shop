import Image from 'next/image'

import loader from '@/assets/loader.gif'

export default function Loading() {
  return (
    <div className='fixed inset-0 w-full h-full flex items-center justify-center bg-white/80'>
      <Image
        src={loader}
        width={55}
        height={55}
        alt='loading spinner'
        unoptimized
      />
    </div>
  )
}

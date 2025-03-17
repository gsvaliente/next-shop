import Image from 'next/image'

import loader from '@/assets/loader.gif'

export default function Loading() {
  return (
    <div>
      <Image
        src={loader}
        width={100}
        height={100}
        alt='loading spinner'
      />
    </div>
  )
}

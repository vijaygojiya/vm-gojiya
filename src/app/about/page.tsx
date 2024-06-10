import { getRandomUserImage } from '@/utils/utils'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      {Array.from({ length: 14 }).map((i, index) => {
        return (
          <Image
            src={getRandomUserImage(1)}
            height={213}
            width={412}
            key={index}
            alt="iiii"
          />
        )
      })}
    </div>
  )
}

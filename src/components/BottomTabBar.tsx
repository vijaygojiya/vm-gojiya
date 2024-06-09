'use client'

import { routes } from '@/utils/routes'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const BottomTabBar = () => {
  const pathname = usePathname()

  const activeIndex = useMemo(() => {
    return routes.findIndex((link) => pathname === link.href)
  }, [pathname])

  return (
    <div className="border-grayE8 dark:border-dark26 fixed bottom-4 left-0 right-0 z-20 mx-auto flex max-w-2xl items-center justify-evenly rounded-2xl border bg-white/40 py-3 shadow-sm backdrop-blur-md md:w-full dark:bg-black/40">
      <div
        className={cn(
          'absolute bottom-0 left-0 top-0 z-[-1] h-full w-[20%] px-3 py-2 transition-transform duration-300 ease-out',
          {
            'translate-x-0 transform': activeIndex === 0,
            'translate-x-full transform': activeIndex === 1,
            'translate-x-[200%] transform': activeIndex === 2,
            'translate-x-[300%] transform': activeIndex === 3,
            'translate-x-[400%] transform': activeIndex === 4
          }
        )}>
        <div className="bg h-full rounded-xl bg-white/20" />
      </div>
      {routes.map((link, index) => (
        <Link key={index} href={link.href} className="flex w-full justify-center">
          <p>{link.text}</p>
        </Link>
      ))}
    </div>
  )
}

export default BottomTabBar

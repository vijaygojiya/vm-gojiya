'use client'

import { CodeIcon, MenuIcon } from '@/assets/icons'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { Button } from './ui/button'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span>Vijay Gojiya</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

const NavLink: FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-gray-900 dark:hover:text-gray-50"
    prefetch={false}>
    {children}
  </Link>
)

export default NavBar

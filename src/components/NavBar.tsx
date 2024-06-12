'use client'

import Link from 'next/link'
import { Button } from './ui/button'

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
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}>
            Skills
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}>
            Projects
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

export default NavBar

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

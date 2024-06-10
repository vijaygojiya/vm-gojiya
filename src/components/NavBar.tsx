'use client'

import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="fixed z-10 w-full bg-opacity-90 p-4 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Vijay Gojiya</Link>
        </div>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 transition-colors duration-200 hover:text-white hover:underline">
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-300 transition-colors duration-200 hover:text-white hover:underline">
            Blogs
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 transition-colors duration-200 hover:text-white hover:underline">
            Projects
          </Link>
          <Link
            href="/about"
            className="text-gray-300 transition-colors duration-200 hover:text-white hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

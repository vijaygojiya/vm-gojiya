import Link from 'next/link'

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[80vh] w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80" />
      <div className="container flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I'm Vijay Gojiya
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl">
          A React Native developer with 3 years of experience in both Android and iOS
          development.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
            prefetch={false}>
            View Projects
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            prefetch={false}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

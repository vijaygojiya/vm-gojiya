import Link from 'next/link'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-background dark:from-slate-900/50 dark:to-background" />
      
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl space-y-6">
          <div>
            <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              React Native Developer
            </p>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Crafting Mobile Experiences with React Native
          </h1>
          
          <p className="text-xl text-muted-foreground sm:text-2xl">
            Expert in building production-ready cross-platform mobile apps. From iOS and Android development to complex state management and payment integrations. Let's build something great together.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background">
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background">
              Let's Connect
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

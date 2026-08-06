import Link from 'next/link'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-light-dark pointer-events-none" />
      
      {/* Glow overlay */}
      <div className="absolute inset-0 glow-overlay pointer-events-none" />
      
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Expert Developer</p>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl leading-tight">
              Mobile Apps Built For
            </h1>
            <h2 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl leading-tight">
              <span className="text-foreground">Production</span>{' '}
              <span className="border-b-4 border-primary">Quality</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            4+ years crafting production-grade React Native applications. 6 apps live on stores. 10K+ downloads. Expertise in GPS, payments, real-time features, and complex state management.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-foreground">6+</p>
              <p className="text-sm text-muted-foreground">Live Apps</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">10K+</p>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">4+</p>
              <p className="text-sm text-muted-foreground">Years XP</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center pt-8">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition-all hover:bg-primary/10">
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

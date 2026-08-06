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
          <p className="text-sm font-medium text-primary">React Native Expert</p>
          
          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Crafting Mobile Experiences with React Native
          </h1>
          
          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            4+ years of professional experience building production-grade mobile applications. Expertise in GPS integration, payment systems, state management, and real-time features for iOS and Android.
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center pt-6">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-8 py-3 text-base font-medium text-background transition-opacity hover:opacity-80">
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

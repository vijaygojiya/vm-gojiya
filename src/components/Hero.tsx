import Link from 'next/link'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-green-50/30 dark:from-blue-950/40 dark:via-background dark:to-green-950/30" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark pointer-events-none opacity-40" />
      
      {/* Glow Orbs - Animated background elements */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/50 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full blur-md opacity-50" />
              <p className="relative inline-block rounded-full bg-background px-6 py-2 text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 border border-blue-200/50 dark:border-blue-800/50 dark:bg-background">
                6+ Production Apps • 10K+ Downloads
              </p>
            </div>
          </div>
          
          {/* Main Heading with Gradient */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-r from-blue-600 via-blue-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                Crafting Mobile Experiences
              </span>
              <span className="block text-foreground mt-2">with React Native</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            Expert developer with 4+ years building production-grade mobile apps. From complex GPS integrations to payment systems, state management, and real-time notifications—I bring ideas to life on iOS and Android.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center pt-8">
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 px-10 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-background overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-border px-10 py-4 text-base font-semibold text-foreground transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-background dark:text-foreground"
              style={{
                background: 'linear-gradient(rgb(255,255,255), rgb(255,255,255)) padding-box, linear-gradient(135deg, rgb(59,130,246), rgb(34,197,94)) border-box',
              }}>
              <span className="flex items-center gap-2">
                Let's Connect
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
            <div className="space-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">6+</p>
              <p className="text-sm text-muted-foreground">Live Apps</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">10K+</p>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">4+</p>
              <p className="text-sm text-muted-foreground">Years XP</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-blue-600"
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

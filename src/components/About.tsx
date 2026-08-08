export default function About() {
  const highlights = [
    { label: 'Experience', value: '4.5+ years' },
    { label: 'Platforms', value: 'iOS + Android' },
    { label: 'Codebase', value: '100% TypeScript' },
    { label: 'Focus', value: 'Freelance work' },
  ]

  const strengths = [
    'React Native app upgrades, migrations, and New Architecture adoption',
    'Performance profiling, render optimization, and build-size reduction',
    'Clean architecture across state management, navigation, APIs, and lists',
    'Native modules and libraries built with Kotlin, Swift, and Turbo Modules',
    'Production releases, CI/CD pipelines, and App Store and Play Store management',
  ]

  return (
    <section id="about" className="bg-background py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">About me</p>
            <h2 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              A React Native developer for serious freelance projects.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I help startups and businesses build, improve, and ship reliable mobile products for Android and iOS. My work combines clean TypeScript architecture, thoughtful UX, and practical native development.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Whether you need to modernize an existing app, solve a difficult integration, improve performance, or take a product from idea to release, I bring hands-on experience across the full React Native lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-muted/20 p-5">
                <p className="text-xl font-bold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What you get</p>
            <h3 className="text-2xl font-bold text-foreground">Clear thinking, clean code, dependable delivery.</h3>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <li key={strength} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <a
            download="Vijay-Gojiya-Resume"
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

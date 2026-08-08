export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Upgrade & Modernize',
      description: 'Move legacy React Native apps to current versions, resolve dependency conflicts, and adopt the New Architecture with a stable migration plan.',
      features: ['Version upgrades', 'Dependency migrations', 'New Architecture'],
    },
    {
      number: '02',
      title: 'Performance & Quality',
      description: 'Find bottlenecks, improve responsiveness, reduce unnecessary renders, optimize list performance, and reduce app build size.',
      features: ['Profiling & debugging', 'Render optimization', 'Build-size reduction'],
    },
    {
      number: '03',
      title: 'Architecture & Integrations',
      description: 'Build maintainable TypeScript foundations with reliable state, navigation, API, Firebase, payments, and third-party integrations.',
      features: ['React Query & GraphQL', 'Firebase suite', 'Stripe, Razorpay & Juspay'],
    },
    {
      number: '04',
      title: 'Native Modules',
      description: 'Extend React Native with production-ready native functionality using Kotlin on Android, Swift on iOS, and Turbo Module patterns.',
      features: ['Kotlin & Swift', 'Turbo Modules', 'Custom libraries'],
    },
    {
      number: '05',
      title: 'Product Features',
      description: 'Deliver polished mobile experiences with maps, location, push notifications, media, chat, document uploads, forms, and offline support.',
      features: ['Maps & deep linking', 'Media & chat', 'MMKV & offline playback'],
    },
    {
      number: '06',
      title: 'Release & CI/CD',
      description: 'Take your app through a dependable release process with store deployments, Fastlane, GitHub Actions, and Expo EAS pipelines.',
      features: ['App Store & Play Store', 'Fastlane', 'GitHub Actions & EAS'],
    },
  ]

  return (
    <section id="services" className="bg-muted/20 py-20">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Practical expertise for your next mobile release.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Focused freelance support for teams that need a React Native app shipped, stabilized, or brought up to modern standards.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="flex flex-col rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary/50">
              <p className="mb-8 text-sm font-medium text-primary">{service.number}</p>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

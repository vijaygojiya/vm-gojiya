export default function Services() {
  const services = [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description:
        'Full-stack React Native development for iOS and Android. From concept to App Store and Play Store deployment.',
      features: ['React Native', 'TypeScript', 'Expo & Bare Workflow']
    },
    {
      icon: '⚙️',
      title: 'Native Module Development',
      description: 'Custom Turbo Modules to extend React Native capabilities with native code when needed.',
      features: ['Turbo Module', 'Swift/Kotlin', 'Platform Integration']
    },
    {
      icon: '🔄',
      title: 'App Upgrades & Maintenance',
      description:
        'Upgrade your React Native apps to the latest versions. Manage dependencies and keep your app current and secure.',
      features: ['Version Upgrades', 'Dependency Management', 'Performance Optimization']
    },
    {
      icon: '💳',
      title: 'Payment & Integration',
      description:
        'Seamless payment integration with Stripe, Razorpay, and other payment gateways. API and GraphQL integration.',
      features: ['Stripe & Razorpay', 'REST APIs', 'GraphQL']
    },
    {
      icon: '🗺️',
      title: 'Maps & Location Services',
      description:
        'Implement Google Maps, location tracking, and geolocation features in your mobile app.',
      features: ['Google Maps', 'GPS Tracking', 'Location Services']
    },
    {
      icon: '✨',
      title: 'Animation & UI Polish',
      description:
        'Create smooth, performant animations using Reanimated and Gesture Handler for delightful user experiences.',
      features: ['Reanimated', 'Gesture Handler', 'Custom UI']
    }
  ]

  return (
    <section id="services" className="bg-muted/30 py-20 dark:bg-muted/10">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300 mb-4">
            Services
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive mobile development services tailored to bring your app vision to life with the latest technologies and best practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-background p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 dark:bg-background">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mb-6 text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: ['React Native', 'TypeScript', 'JavaScript', 'Expo', 'Bare Workflow']
    },
    {
      title: 'State Management',
      skills: ['Redux', 'Zustand', 'React Query', 'Context API', 'MobX']
    },
    {
      title: 'Mobile Platforms',
      skills: ['iOS Development', 'Android Development', 'App Store', 'Play Store', 'Testflight']
    },
    {
      title: 'Backend & APIs',
      skills: ['REST APIs', 'GraphQL', 'Firebase', 'Authentication', 'Real-time Data']
    },
    {
      title: 'Payments & Integration',
      skills: ['Stripe', 'Razorpay', 'Payment Gateways', 'In-app Purchases', 'Webhooks']
    },
    {
      title: 'Advanced Features',
      skills: ['Reanimated', 'Gesture Handler', 'Deep Linking', 'Push Notifications', 'Native Modules']
    },
    {
      title: 'Maps & Location',
      skills: ['Google Maps', 'GPS Tracking', 'Geolocation', 'Route Planning', 'Location Services']
    },
    {
      title: 'Development Tools',
      skills: ['Git/GitHub', 'CI/CD', 'Fastlane', 'EAS Build', 'Debugging', 'Performance Optimization']
    }
  ]

  return (
    <section id="skills" className="bg-muted/30 py-20 dark:bg-muted/10">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            Technical Expertise
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Technologies & Tools
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive set of skills covering the entire mobile development stack, from frontend to backend integrations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg dark:bg-background">
              <h3 className="mb-4 font-bold text-foreground text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-gradient-to-br from-blue-50 to-blue-50/50 p-8 text-center dark:from-blue-900/20 dark:to-blue-900/10">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                <CodeIcon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="mb-2 font-bold text-foreground">Production Ready</h4>
            <p className="text-sm text-muted-foreground">
              All apps follow best practices and are optimized for performance and user experience.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-gradient-to-br from-green-50 to-green-50/50 p-8 text-center dark:from-green-900/20 dark:to-green-900/10">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
                <RocketIcon className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h4 className="mb-2 font-bold text-foreground">Deployment Expert</h4>
            <p className="text-sm text-muted-foreground">
              Experience deploying to App Store and Play Store. Familiar with all submission processes.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-gradient-to-br from-purple-50 to-purple-50/50 p-8 text-center dark:from-purple-900/20 dark:to-purple-900/10">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-purple-100 p-4 dark:bg-purple-900/30">
                <SparklesIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h4 className="mb-2 font-bold text-foreground">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground">
              Always up-to-date with latest React Native features and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5-1.26-2.5-3.44-2.5-5.5a6 6 0 0 1 6-6c1.05 0 2.04.16 3 .48 2.84-1.94 5.5-4.3 6.5-6.5.5 1.62.29 3.68-.44 5.7.44.5.8 1.04 1.08 1.63.8 2.08.8 4.58 0 6.66-.41 1.08-1.04 2.09-1.8 3.02-2.05 2.42-5.7 4.8-9.35 4.8-2.06 0-4-1-5-2.5z" />
      <path d="M12 15v5M9 20.875a1 1 0 1 0 2 0M15 20.875a1 1 0 1 0 2 0" />
    </svg>
  )
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v6m0 4v6M4.22 4.22l4.24 4.24m2.54 2.54l4.24 4.24M2 12h6m4 0h6M4.22 19.78l4.24-4.24m2.54-2.54l4.24-4.24M19.78 19.78l-4.24-4.24m-2.54-2.54l-4.24-4.24M19.78 4.22l-4.24 4.24m-2.54 2.54l-4.24 4.24M22 12h-6m-4 0H4" />
    </svg>
  )
}



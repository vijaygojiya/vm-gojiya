import Link from 'next/link'

export default function About() {
  const highlights = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Apps Deployed', value: '10+' },
    { label: 'App Store & Play Store', value: 'Expert' },
    { label: 'Native Modules', value: 'Turbo Module' }
  ]

  return (
    <section id="about" className="bg-background py-20 dark:bg-background">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            About Me
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Building Production-Ready Mobile Apps
          </h2>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            With over 4 years of professional React Native experience, I've built and deployed multiple production apps across both iOS and Android platforms. My journey started in January 2022, and since then I've developed expertise in creating scalable, performant mobile applications using the latest technologies and best practices.
          </p>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            I'm passionate about solving complex technical challenges and delivering exceptional user experiences. From architecting complex state management solutions to integrating third-party services, I bring deep technical expertise and attention to detail to every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-muted/50 p-6 text-center dark:bg-muted/20">
              <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground">Key Expertise</h3>
            <ul className="space-y-4">
              {[
                'React Native & Expo - Full development lifecycle',
                'Native Module Development - Turbo Module architecture',
                'State Management - Redux, Zustand, React Query',
                'Payment Integration - Stripe, Razorpay',
                'Deep Links & Push Notifications',
                'App Store & Play Store Deployment',
                'Advanced Animations - Reanimated & Gesture Handler',
                'Third-party Library Integration & Updates'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/vm.jpg"
              alt="Vijay Gojiya"
              width={400}
              height={400}
              className="h-auto w-full max-w-[300px] rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-12">
          <a
            download="Vijay-Gojiya-Resume"
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

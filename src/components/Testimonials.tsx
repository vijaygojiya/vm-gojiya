import { Card, CardContent } from './ui/card'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Self Ride',
      role: 'Ride-Sharing Platform',
      description:
        'Full-featured ride-sharing application with real-time GPS location tracking using Google Maps, Stripe payment integration, push notifications, deep linking, and Sentry error monitoring. Production-grade app with 10K+ downloads.',
      metrics: ['GPS Tracking', 'Stripe Payments', 'Notifications', 'Sentry Monitoring']
    },
    {
      name: 'LexVid',
      role: 'Video Streaming App',
      description:
        'Video platform with download functionality, offline playback support, and optimized performance. Implements React Query for efficient server state management and seamless user experience.',
      metrics: ['Video Download', 'Offline Support', 'React Query', 'Streaming']
    },
    {
      name: 'The R & I Guys',
      role: '100% TypeScript Production App',
      description:
        'End-to-end production application built with 100% TypeScript for maximum type safety. Pixel-perfect UI following best practices with clean API integration and professional architecture.',
      metrics: ['100% TypeScript', 'Pixel Perfect', 'Best Practices', 'Both Stores']
    },
    {
      name: 'Multitax',
      role: 'Dynamic Form Management',
      description:
        'Complex financial app featuring dynamic form rendering with intelligent field management and advanced file upload capabilities for document handling. Multi-step workflows and real-time validation.',
      metrics: ['Dynamic Forms', 'File Upload', 'Validation', 'Multi-step']
    },
    {
      name: 'Angel Protection',
      role: 'Emergency Alert System',
      description:
        'Critical alert and notification system with real-time emergency capabilities. Recently upgraded to latest dependencies and deployed to both App Store and Play Store with enhanced stability.',
      metrics: ['Critical Alerts', 'Real-time', 'Latest Stack', 'Emergency Ready']
    },
    {
      name: 'Revolt Apps',
      role: 'Streaming & Event Platform',
      description:
        'Large-scale streaming and event management platform featuring live streaming, user engagement tools, real-time synchronization, and scalable architecture for high-volume traffic.',
      metrics: ['Live Streaming', 'Events', 'Real-time Sync', 'Scalable']
    }
  ]

  return (
    <section id="testimonials" className="relative bg-background py-20 dark:bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark pointer-events-none opacity-30" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blur" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blur" />
      
      <div className="container relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            Case Studies
          </span>
          <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Complete Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            6 production applications with millions of users. Each project demonstrates deep expertise in building scalable, feature-rich, production-grade mobile experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((project, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/30 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-primary/70 dark:bg-gradient-to-br dark:from-background dark:to-muted/20 glow-card-hover">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-semibold mt-2">{project.role}</p>
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gradient-to-r from-blue-50 to-green-50 px-3 py-1 text-xs font-medium text-blue-700 dark:from-blue-900/30 dark:to-green-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 relative rounded-2xl border border-border/50 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 p-8 md:p-12 text-center overflow-hidden dark:from-purple-900/20 dark:via-background dark:to-pink-900/20 glow-card">
          <div className="absolute inset-0 bg-grid dark:bg-grid-dark pointer-events-none opacity-20" />
          <div className="relative z-10">
            <h3 className="mb-2 text-3xl font-bold text-foreground">Transform Your Idea Into Reality</h3>
            <p className="mb-8 text-muted-foreground text-lg">
              With proven expertise across multiple app categories and millions of users, I'm ready to build your next success story.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:focus:ring-offset-background">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

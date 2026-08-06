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
    <section id="testimonials" className="bg-background py-20">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium text-primary mb-4">Case Studies</span>
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-foreground">Complete Portfolio</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            6 production applications with thousands of downloads across iOS and Android platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((project, idx) => (
            <Card key={idx} className="border border-border bg-background">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">{project.name}</h3>
                <p className="mb-4 text-xs font-medium text-primary">{project.role}</p>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.slice(0, 3).map((metric, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-foreground">Ready to Start Your Project?</h3>
          <p className="mb-8 text-muted-foreground">Let me help you build your next amazing mobile app.</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-8 py-3 text-sm font-medium text-background hover:opacity-80 transition-opacity">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

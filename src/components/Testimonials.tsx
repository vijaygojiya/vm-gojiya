import { Card, CardContent } from './ui/card'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ride Sharing App',
      role: 'Production App',
      description:
        'Built a full-featured ride-sharing app with real-time location tracking, payment integration, push notifications, and deep links. Successfully deployed to both iOS App Store and Google Play Store.',
      metrics: ['10K+ Downloads', 'Real-time GPS', 'Payment Ready', 'Full-featured']
    },
    {
      name: 'Social Media App',
      role: 'Production App with Chat',
      description:
        'Developed a complete social media platform with messaging functionality, user authentication, media uploads, and complex state management using Redux. Includes real-time chat capabilities.',
      metrics: ['Chat Functionality', 'Media Support', 'Redux State', 'User Auth']
    },
    {
      name: 'E-Learning Platform',
      role: 'Coursify - Educational App',
      description:
        'Created an online learning application with course browsing, video playback, progress tracking, and payment integration. Modern UI with smooth animations and great UX.',
      metrics: ['Video Support', 'Progress Tracking', 'Payments', 'Modern UI']
    },
    {
      name: 'Music Player App',
      role: 'Musify - Media Application',
      description:
        'Built a music player application with playlist management, audio controls, and intuitive navigation. Demonstrates expertise in audio handling and smooth user interactions.',
      metrics: ['Audio Control', 'Playlists', 'Navigation', 'Smooth UX']
    }
  ]

  return (
    <section id="testimonials" className="bg-background py-20 dark:bg-background">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            Case Studies
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Apps I've Built
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A portfolio of production applications showcasing my expertise in building scalable, feature-rich mobile experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border border-border bg-muted/50 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 dark:bg-muted/20">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1">{project.role}</p>
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-gradient-to-r from-blue-50 to-blue-50/50 p-8 text-center dark:from-blue-900/20 dark:to-blue-900/10">
          <h3 className="mb-2 text-2xl font-bold text-foreground">Ready to Start Your Project?</h3>
          <p className="mb-6 text-muted-foreground">
            Let's discuss your mobile app idea and bring it to life with expertise and attention to detail.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

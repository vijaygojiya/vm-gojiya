import Link from 'next/link'
import { Card, CardContent } from './ui/card'

const projects = [
  {
    id: 1,
    title: 'Self Ride',
    description: 'Full-featured ride-sharing app with real-time GPS location tracking, Stripe payment integration, push notifications, and deep linking. Production-ready with Sentry monitoring.',
    tech: ['React Native', 'TypeScript', 'Google Maps', 'Stripe', 'Firebase', 'Sentry'],
    status: 'Live on Play Store',
    features: ['Real-time GPS', 'Payment Ready', 'Notifications', 'Deep Linking'],
    playstore: 'https://play.google.com/store/apps/details?id=com.self.ride',
    ios: ''
  },
  {
    id: 2,
    title: 'LexVid',
    description: 'Video streaming and management app with download functionality, offline support, and optimized video playback using React Query for efficient server state management.',
    tech: ['React Native', 'TypeScript', 'React Query', 'Video APIs', 'Offline Support'],
    status: 'Live on Play Store',
    features: ['Video Download', 'Offline Mode', 'React Query', 'Streaming'],
    playstore: 'https://play.google.com/store/apps/details?id=com.lexvidnative',
    ios: ''
  },
  {
    id: 3,
    title: 'The R & I Guys',
    description: 'End-to-end production app built with 100% TypeScript for type safety. Pixel-perfect UI following best practices with clean API integration. Deployed to both App Store and Play Store.',
    tech: ['React Native', 'TypeScript 100%', 'Best Practices', 'API Integration', 'Pixel Perfect'],
    status: 'Live on Both Stores',
    features: ['Type Safe', 'Clean Code', 'Pixel Perfect', 'Best Practices'],
    playstore: 'https://play.google.com/store/apps/details?id=com.therandiguys.randiguys',
    ios: 'https://apps.apple.com/us/app/the-r-i-guys/id6474215530'
  },
  {
    id: 4,
    title: 'Multitax',
    description: 'Dynamic form rendering app with complex file upload capabilities. Features intelligent form generation and multi-step workflows. Live on App Store and Play Store.',
    tech: ['React Native', 'Dynamic Forms', 'File Upload', 'TypeScript', 'Complex Logic'],
    status: 'Live on Both Stores',
    features: ['Dynamic Forms', 'File Upload', 'Multi-step', 'Validation'],
    playstore: 'https://play.google.com/store/apps/details?id=com.multitax.app',
    ios: 'https://apps.apple.com/us/app/multitax/id6475014709'
  },
  {
    id: 5,
    title: 'Angel Protection',
    description: 'Critical notification and alert system app with real-time emergency capabilities. Upgraded to latest versions and successfully deployed to both App Store and Play Store.',
    tech: ['React Native', 'Real-time Alerts', 'Notifications', 'Latest Updates', 'TypeScript'],
    status: 'Live on Both Stores',
    features: ['Critical Alerts', 'Real-time', 'Emergency Ready', 'Updated'],
    playstore: 'https://play.google.com/store/apps/details?id=com.angelprotection.alert',
    ios: 'https://apps.apple.com/us/app/angel-protection-alert/id6593660904'
  },
  {
    id: 6,
    title: 'Revolt Summit & Streaming',
    description: 'Large-scale streaming and event management platform. Complex architecture with real-time streaming, user engagement features, and production-grade stability.',
    tech: ['React Native', 'Streaming', 'Real-time', 'Event Management', 'Scalable'],
    status: 'Production',
    features: ['Live Streaming', 'Events', 'Real-time Sync', 'Scalable'],
    playstore: '',
    ios: ''
  }
]

const Projects = () => (
  <section id="projects" className="bg-background py-20">
    <div className="container">
      <div className="mb-16 max-w-3xl">
        <span className="text-sm font-medium text-primary mb-4">Featured Projects</span>
        <h2 className="mb-6 text-5xl font-bold tracking-tight text-foreground">Apps I've Built</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          6+ production applications deployed to App Store and Play Store with 10,000+ combined downloads.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-16 text-center">
        <h3 className="mb-4 text-2xl font-bold text-foreground">Ready to Build Something Great?</h3>
        <p className="mb-8 text-muted-foreground">
          Let's discuss your mobile app vision and bring it to life.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-8 py-3 text-sm font-medium text-background hover:opacity-80 transition-opacity">
          Get in Touch
        </Link>
      </div>
    </div>
  </section>
)

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <Card className="border border-border bg-background transition-all hover:border-foreground/20">
    <CardContent>
      <div className="p-6 flex flex-col h-full">
        <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
        <span className="mb-4 text-xs font-medium text-muted-foreground">{project.status}</span>
        <p className="mb-4 flex-grow text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.playstore && (
            <Link
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-medium py-2 rounded border border-border hover:bg-muted transition-colors"
              prefetch={false}>
              Play Store
            </Link>
          )}
          {project.ios && (
            <Link
              href={project.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-medium py-2 rounded border border-border hover:bg-muted transition-colors"
              prefetch={false}>
              App Store
            </Link>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Projects

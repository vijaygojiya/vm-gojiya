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
  <section id="projects" className="relative bg-background py-20 dark:bg-background overflow-hidden">
    {/* Background grid effect */}
    <div className="absolute inset-0 bg-grid dark:bg-grid-dark pointer-events-none opacity-40" />
    
    {/* Glow orbs */}
    <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blur" />
    <div className="absolute bottom-20 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blur" />
    
    <div className="container relative z-10">
      <div className="mb-16 max-w-3xl">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
          Production Portfolio
        </span>
        <h2 className="mb-6 text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent md:text-6xl">
          Apps I've Built
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          6+ production applications deployed to App Store and Play Store. Each project showcases expertise in building scalable, feature-rich mobile experiences with best practices and attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-20 relative rounded-2xl border border-border/50 bg-gradient-to-br from-blue-500/10 via-background to-green-500/10 p-8 md:p-12 text-center overflow-hidden dark:from-blue-900/20 dark:via-background dark:to-green-900/20 glow-card">
        <div className="relative z-10">
          <h3 className="mb-2 text-3xl font-bold text-foreground">Ready to Build Something Great?</h3>
          <p className="mb-8 text-muted-foreground text-lg">
            Let's discuss your mobile app vision and bring it to life with production-grade quality.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background">
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  </section>
)

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <Card className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/30 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-primary/70 dark:bg-gradient-to-br dark:from-background dark:to-muted/20 glow-card-hover">
    <CardContent>
      <div className="p-6 flex flex-col h-full">
        {/* Icon placeholder with gradient background */}
        <div className="h-40 w-full rounded-lg mb-6 bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center relative overflow-hidden group-hover:from-blue-500/20 group-hover:to-green-500/20 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20 glow-blur" />
          <div className="relative text-4xl">
            {project.id === 1 && '🚗'}
            {project.id === 2 && '🎥'}
            {project.id === 3 && '👔'}
            {project.id === 4 && '💰'}
            {project.id === 5 && '🛡️'}
            {project.id === 6 && '🎙️'}
          </div>
        </div>

        <div className="mb-4">
          <span className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-green-100 px-3 py-1 text-xs font-semibold bg-clip-text text-transparent dark:from-blue-900/50 dark:to-green-900/50 dark:text-blue-300">
            {project.status}
          </span>
        </div>

        <h3 className="mb-2 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="mb-6 flex-grow text-muted-foreground text-sm leading-relaxed">{project.description}</p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-gradient-to-r from-blue-50 to-green-50 px-3 py-1 text-xs font-medium text-blue-700 dark:from-blue-900/30 dark:to-green-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6 pb-6 border-t border-border">
          <div className="flex flex-wrap gap-2 pt-4">
            {project.features.map((feature, i) => (
              <span key={i} className="text-xs text-primary font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-green-500" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.playstore && (
            <Link
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              prefetch={false}>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13.5h8V3H5.5a2.5 2.5 0 0 0-2.5 2.5v8zm0-11h5.5A2.5 2.5 0 0 0 11 3v10.5H3V2.5zm18 9h-8v8.5h5.5a2.5 2.5 0 0 0 2.5-2.5v-6zm0 6a2.5 2.5 0 0 0-2.5-2.5H13v8.5h8v-6z" />
              </svg>
              Play Store
            </Link>
          )}
          {project.ios && (
            <Link
              href={project.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gray-800 to-black px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              prefetch={false}>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 13.5c-.91 0-1.82.55-1.82 1.47 0 .99.91 1.54 1.82 1.54.96 0 1.82-.55 1.82-1.54 0-.92-.86-1.47-1.82-1.47zm-4.7-5.5c-1.19 0-2.18 1.01-2.18 2.18s.99 2.18 2.18 2.18 2.18-.99 2.18-2.18-1.01-2.18-2.18-2.18zm0 3.5c-.73 0-1.32-.59-1.32-1.32 0-.73.59-1.32 1.32-1.32.73 0 1.32.59 1.32 1.32 0 .73-.59 1.32-1.32 1.32zM5.5 10.18c0-1.19-1.01-2.18-2.18-2.18-1.19 0-2.18.99-2.18 2.18s.99 2.18 2.18 2.18c1.17 0 2.18-1.01 2.18-2.18zm-3.5 0c0-.73.59-1.32 1.32-1.32.73 0 1.32.59 1.32 1.32 0 .73-.59 1.32-1.32 1.32-.73 0-1.32-.59-1.32-1.32zm16.46-1.03c-.41 0-.96.23-1.02.62h-.08c-.08-.39-.56-.62-.94-.62-.61 0-1.12.41-1.12 1.11v3.47h.87v-3.27c0-.31.2-.48.56-.48.34 0 .54.17.54.48v3.27h.87v-3.27c0-.27.2-.48.57-.48.34 0 .54.21.54.48v3.27h.87v-3.47c0-.69-.51-1.11-1.26-1.11z" />
              </svg>
              App Store
            </Link>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Projects

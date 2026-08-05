import Link from 'next/link'
import { Card, CardContent } from './ui/card'

const projects = [
  {
    id: 1,
    title: 'Coursify',
    description: 'Online learning platform with course browsing, video playback, and progress tracking.',
    imgSrc: '/coursify.svg',
    apk: 'https://drive.google.com/file/d/1VEjcrfh7IQYz8reHBjrhtxnd_EQCZGc6/view?usp=drive_link',
    github: 'https://github.com/vijaygojiya/Coursify',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    status: 'Live on Play Store'
  },
  {
    id: 2,
    title: 'Musify',
    description: 'Music player app with playlist management, smooth audio controls, and intuitive navigation.',
    imgSrc: '/placeholder.svg',
    apk: 'https://drive.google.com/file/d/1Ynsgk-JUm_CU_h-vnkZ-HU9Z3vjb454R/view?usp=drive_link',
    github: 'https://github.com/vijaygojiya/Musify',
    tech: ['React Native', 'Audio APIs', 'State Management', 'UI/UX'],
    status: 'Live on Play Store'
  }
]

const Projects = () => (
  <section id="projects" className="bg-background py-20 dark:bg-background">
    <div className="container">
      <div className="mb-16 max-w-3xl">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
          Featured Work
        </span>
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Recent Projects
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A selection of mobile applications I've built and deployed to production. Each project demonstrates different aspects of my expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-border bg-gradient-to-r from-blue-50 to-blue-50/50 p-8 md:p-12 text-center dark:from-blue-900/20 dark:to-blue-900/10">
        <h3 className="mb-2 text-2xl font-bold text-foreground">Interested in Seeing More?</h3>
        <p className="mb-6 text-muted-foreground">
          Visit my GitHub profile to explore additional projects and contributions.
        </p>
        <Link
          href="https://github.com/vijaygojiya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
          prefetch={false}>
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Visit GitHub
        </Link>
      </div>
    </div>
  </section>
)

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <Card className="overflow-hidden border border-border bg-background shadow-sm transition-all hover:shadow-lg hover:border-primary/50 dark:bg-background">
    <CardContent>
      <div className="p-6 flex flex-col h-full">
        <img
          src={project.imgSrc}
          alt={project.title}
          width={400}
          height={400}
          className="h-48 w-full object-cover rounded-lg mb-6"
        />
        <div className="mb-4">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {project.status}
          </span>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground">{project.title}</h3>
        <p className="mb-6 flex-grow text-muted-foreground">{project.description}</p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
            prefetch={false}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Link>
          <Link
            href={project.apk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
            prefetch={false}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </Link>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Projects

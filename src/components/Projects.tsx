import Link from 'next/link'
import { Card, CardContent } from './ui/card'

const projects = [
  {
    id: 1,
    title: 'Coursify',
    description: 'Online learning app with modern features and cool UI',
    imgSrc: '/placeholder.svg',
    apk: 'https://drive.google.com/file/d/1eV8amYYKQV8_Nit6sMdKH3xkRxJAJouQ/view?usp=drive_link',
    github: 'https://github.com/vijaygojiya/Coursify'
  },
  {
    id: 2,
    title: 'Musify',
    description: 'Music player app build using React Native',
    imgSrc: '/placeholder.svg',
    apk: 'https://drive.google.com/file/d/1Ynsgk-JUm_CU_h-vnkZ-HU9Z3vjb454R/view?usp=drive_link',
    github: 'https://github.com/vijaygojiya/Musify'
  }
]

const Projects = () => (
  <section id="projects" className="bg-white py-20 dark:bg-gray-900">
    <div className="container">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">My Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
)

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <Card className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
    <CardContent>
      <div className="p-6">
        <img
          src={project.imgSrc}
          alt={project.title}
          width={600}
          height={400}
          className="h-48 w-full object-cover"
        />
        <h3 className="mb-2 pt-4 text-xl font-bold">{project.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
            prefetch={false}>
            View Project
          </Link>
          <Link
            href={project.apk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
            prefetch={false}>
            Download APK
          </Link>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Projects

import { StarIcon } from '@/assets/icons'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'

const projects = [
  {
    id: 1,
    title: 'Coursify',
    description: 'Online learning app with modern features and cool UI',
    imgSrc: '/placeholder.svg',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Musify',
    description: 'Music player app build using React Native',
    imgSrc: '/placeholder.svg',
    rating: 4.6
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
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
            prefetch={false}>
            View Project
          </Link>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <StarIcon className="h-5 w-5" />
            <span>{project.rating}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Projects

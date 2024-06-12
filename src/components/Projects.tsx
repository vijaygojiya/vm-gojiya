import Link from 'next/link'
import { Card, CardContent } from './ui/card'

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-900">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="Project 1"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Fitness Tracker</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A mobile app that helps users track their fitness goals and progress.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
                    prefetch={false}>
                    View Project
                  </Link>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <StarIcon className="h-5 w-5" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="Project 2"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">E-commerce App</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A mobile app that allows users to browse and purchase products.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
                    prefetch={false}>
                    View Project
                  </Link>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <StarIcon className="h-5 w-5" />
                    <span>4.6</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="Project 3"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Social Media App</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A mobile app that allows users to connect with friends and share
                  content.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
                    prefetch={false}>
                    View Project
                  </Link>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <StarIcon className="h-5 w-5" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

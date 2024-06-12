import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            I'm a React Native developer with 3 years of experience in both Android and
            iOS development. I'm passionate about creating beautiful and functional mobile
            apps that provide an exceptional user experience.
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            I have a strong background in JavaScript, React, and React Native, and I'm
            always eager to learn new technologies and techniques to improve my skills.
            I'm a team player and enjoy collaborating with designers, product managers,
            and other developers to bring ideas to life.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
            prefetch={false}>
            Download CV
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src="/vm.jpg"
            alt="Vijay Gojiya"
            width={400}
            height={400}
            className="h-auto w-full max-w-[300px] rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

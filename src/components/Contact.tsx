import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 dark:bg-gray-950">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Get in Touch</h2>
        <div className="mx-auto max-w-xl">
          <form className="grid gap-6">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="font-medium text-gray-600 dark:text-gray-400">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="border-gray-300 bg-white focus:border-orange-500 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="font-medium text-gray-600 dark:text-gray-400">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border-gray-300 bg-white focus:border-orange-500 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="font-medium text-gray-600 dark:text-gray-400">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                className="border-gray-300 bg-white focus:border-orange-500 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <Button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

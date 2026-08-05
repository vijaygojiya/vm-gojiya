'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactMethods = [
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      link: 'https://www.linkedin.com/in/vijay-gojiya/',
      action: 'Visit Profile'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick message or project inquiry',
      link: 'https://wa.me/919624031330',
      action: 'Send Message'
    },
    {
      icon: '📅',
      title: 'Calendly',
      description: 'Schedule a consultation call',
      link: 'https://calendly.com/vijaygojiya',
      action: 'Book a Call'
    },
    {
      icon: '💻',
      title: 'GitHub',
      description: 'View my projects and contributions',
      link: 'https://github.com/vijaygojiya',
      action: 'View GitHub'
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="bg-muted/30 py-20 dark:bg-muted/10">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            Get in Touch
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Interested in discussing your next mobile app project? Reach out through your preferred channel below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactMethods.map((method, idx) => (
            <Link
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 dark:bg-background group">
              <div className="mb-4 text-4xl">{method.icon}</div>
              <h3 className="mb-2 font-bold text-foreground">{method.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{method.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                {method.action}
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-background p-8 shadow-lg dark:bg-background">
          <h3 className="mb-6 text-2xl font-bold text-foreground">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="border-border bg-background focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="border-border bg-background focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="project" className="font-medium text-foreground">
                Project Type
              </label>
              <Input
                id="project"
                name="project"
                type="text"
                placeholder="e.g., Ride-sharing app, Social media app"
                className="border-border bg-background focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="border-border bg-background focus:border-primary focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-background">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

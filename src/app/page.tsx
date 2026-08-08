import NavBar from '@/components/NavBar'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background dark:bg-background">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

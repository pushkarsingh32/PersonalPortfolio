import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { OpenSource } from '@/components/open-source'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <OpenSource />
      <Contact />
    </main>
  )
} 
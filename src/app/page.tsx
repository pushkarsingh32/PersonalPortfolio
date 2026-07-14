import { Navbar } from '@/components/navbar'
import { Ticker } from '@/components/ui/ticker'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { OpenSource } from '@/components/open-source'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Ticker />
      <Hero />
      <Skills />
      <Projects />
      <OpenSource />
      <Contact />
    </main>
  )
} 
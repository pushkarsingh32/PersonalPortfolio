"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Server,
  Cloud,
  Database,
  Wrench,
  Blocks
} from "lucide-react"
import { StatusDot } from '@/components/ui/status-dot'

const skills = [
  {
    category: "Frontend",
    icon: Blocks,
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Python", "Django", "FastAPI", "Node.js", "Express.js", "tRPC", "REST APIs", "WebSockets"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS (Lambda, EC2, S3, SES)", "Cloudflare (Workers, R2, Pages)", "Docker", "Vercel", "Railway", "CI/CD", "GitHub Actions"]
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "Drizzle ORM", "Supabase", "Redis", "MongoDB", "BullMQ"]
  },
  {
    category: "Auth & Payments",
    icon: Wrench,
    technologies: ["Better Auth", "OAuth 2.0", "Passkeys/WebAuthn", "Stripe", "Dodo Payments", "Subscription Management"]
  },
  {
    category: "Tools & Practices",
    icon: Code2,
    technologies: ["Git", "Playwright", "Jest", "React Query", "Zod", "Agile/Scrum", "Code Reviews"]
  }
]

export function Skills() {
  return (
    <section id="stack" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          <StatusDot status="live" showLabel={false} />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">stack</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Technologies I Work With
        </h2>
        <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground">
          A comprehensive toolkit for building modern, scalable web applications
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-2">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-card px-2.5 py-1.5 font-mono text-xs text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

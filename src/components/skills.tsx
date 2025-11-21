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

const skills = [
  {
    category: "Frontend",
    icon: Blocks,
    color: "from-violet-500 to-purple-500",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    technologies: ["Node.js", "Express.js", "tRPC", "Python", "FastAPI", "REST APIs", "WebSockets"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    technologies: ["AWS (Lambda, EC2, S3, SES)", "Cloudflare (Workers, R2, Pages)", "Docker", "Vercel", "Railway", "GitHub Actions"]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    technologies: ["PostgreSQL", "Drizzle ORM", "Supabase", "Redis", "MongoDB", "BullMQ"]
  },
  {
    category: "Auth & Payments",
    icon: Wrench,
    color: "from-rose-500 to-pink-500",
    technologies: ["Better Auth", "OAuth 2.0", "Passkeys/WebAuthn", "Stripe", "Dodo Payments", "Subscription Management"]
  },
  {
    category: "Tools & Practices",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    technologies: ["Git", "React Query", "Zod", "SEO Optimization", "Web Scraping", "Chrome Extensions"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">Technical Skills</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
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
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

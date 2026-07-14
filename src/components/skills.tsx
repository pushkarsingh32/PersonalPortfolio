"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Server,
  Cloud,
  Database,
  Wrench,
  Blocks,
  type LucideIcon,
} from "lucide-react"
import { StatusDot } from '@/components/ui/status-dot'
import { skills } from '@/data/site-content'

const categoryIcons: Record<string, LucideIcon> = {
  "Frontend": Blocks,
  "Backend": Server,
  "Cloud & DevOps": Cloud,
  "Database": Database,
  "Auth & Payments": Wrench,
  "Tools & Practices": Code2,
}

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
          const Icon = categoryIcons[skill.category]
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

"use client"

import { motion } from "framer-motion"
import { Chrome, ArrowUpRight } from "lucide-react"
import Script from 'next/script'
import { StatusDot } from '@/components/ui/status-dot'
import { Waveform } from '@/components/ui/waveform'
import { featuredProjects, otherProjects, chromeExtensions } from '@/data/site-content'

export function Projects() {
  const projectSchemas = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      ...featuredProjects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": project.schema
      })),
      ...otherProjects.map((project, index) => ({
        "@type": "ListItem",
        "position": featuredProjects.length + index + 1,
        "item": project.schema
      })),
      ...chromeExtensions.map((extension, index) => ({
        "@type": "ListItem",
        "position": featuredProjects.length + otherProjects.length + index + 1,
        "item": extension.schema
      }))
    ]
  }

  const services = [...featuredProjects, ...otherProjects]

  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchemas) }}
      />
      <section id="projects" className="container py-24 sm:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <StatusDot status="live" showLabel={false} />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">services</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground">
            Production systems I've owned end-to-end — architected, scaled, and shipped to real users
          </p>
        </motion.div>

        {/* Services table */}
        <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border mb-16">
          {services.map((project, index) => {
            const status = project.demo ? "live" : "archived"
            const href = project.demo ?? project.github

            return (
              <motion.a
                key={project.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 gap-3 p-4 sm:grid-cols-[15rem_1fr_auto] sm:items-center sm:gap-6 sm:p-5 bg-background hover:bg-card transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <StatusDot status={status} />
                  <span className="font-display font-semibold text-sm sm:text-base">
                    {project.title}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <span className="font-mono text-xs text-muted-foreground truncate">
                    {"stats" in project ? project.stats : project.description}
                  </span>
                  <Waveform className="max-w-[240px] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="hidden flex-wrap justify-end gap-1.5 sm:flex sm:max-w-xs">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Chrome Extensions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground"
        >
          <Chrome className="h-3.5 w-3.5" />
          <span>browser extensions</span>
        </motion.div>

        <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border">
          {chromeExtensions.map((extension, index) => (
            <motion.a
              key={extension.title}
              href={extension.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group flex items-center gap-3 p-4 bg-background hover:bg-card transition-colors"
            >
              <StatusDot status="live" showLabel={false} />
              <span className="flex-1 text-sm font-medium truncate">{extension.title}</span>
              <span className="hidden max-w-xs truncate font-mono text-xs text-muted-foreground sm:block">
                {extension.description}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>
      </section>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, type LucideIcon } from "lucide-react"
import { Button } from '@/components/ui/button'
import { StatusDot } from '@/components/ui/status-dot'
import { socialLinks } from '@/data/site-content'

const socialIcons: Record<string, LucideIcon> = {
  "GitHub": Github,
  "LinkedIn": Linkedin,
  "Twitter": Twitter,
  "Email": Mail,
}

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Availability status bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <StatusDot status="live" showLabel={false} />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              available for work
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="max-w-[500px] text-base sm:text-lg text-muted-foreground">
            Have a project in mind? I&apos;m always open to discussing new opportunities and collaborations.
          </p>
          <Button
            href="mailto:contact@pushkarkathayat.com"
            variant="primary"
            size="lg"
            icon="arrowUpRight"
            withShadow
          >
            Send an Email
          </Button>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {socialLinks.map((link, index) => {
            const Icon = socialIcons[link.name]
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-card"
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-grow">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{link.name}</p>
                  <p className="truncate text-sm font-medium">{link.username}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Designed and built by Pushkar Kathayat
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
            <a
              href="/blog"
              className="hover:text-primary transition-colors underline"
            >
              Blog
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://pushkarkathayat.com/pushkar_singh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Full Stack Resume
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/Pushkar_Kathayat_Resume_Backend_Engineer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Backend Engineer Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

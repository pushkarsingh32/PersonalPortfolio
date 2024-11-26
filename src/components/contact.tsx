"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/pushkarsingh32",
    icon: Github
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pushkarsingh32",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://x.com/pskt45",
    icon: Twitter
  },
  {
    name: "Email",
    href: "mailto:pushkar@semanticpen.com",
    icon: Mail
  }
]

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Let's Connect
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-16"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-muted hover:bg-muted/80 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          )
        })}
      </motion.div>
    </section>
  )
} 
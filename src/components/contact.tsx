"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, MessageCircle, ArrowUpRight } from "lucide-react"
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/pushkarsingh32",
    icon: Github,
    username: "@pushkarsingh32",
    color: "hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pushkarsingh32",
    icon: Linkedin,
    username: "pushkarsingh32",
    color: "hover:bg-[#0077B5] hover:text-white"
  },
  {
    name: "Twitter",
    href: "https://x.com/pskt45",
    icon: Twitter,
    username: "@pskt45",
    color: "hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900"
  },
  {
    name: "Email",
    href: "mailto:contact@pushkarkathayat.com",
    icon: Mail,
    username: "contact@pushkarkathayat.com",
    color: "hover:bg-red-500 hover:text-white"
  }
]

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's Work Together
          </h2>
          <p className="max-w-[500px] text-base sm:text-lg text-muted-foreground">
            Have a project in mind? I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: CTA */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Ready to start a project?</h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether you need a full SaaS application, an API service, or technical consultation,
                I'd love to hear about your project and see how I can help.
              </p>
              <Button
                href="mailto:contact@pushkarkathayat.com"
                variant="primary"
                size="md"
                icon="arrowUpRight"
                withShadow
                className="w-full sm:w-auto"
              >
                Send an Email
              </Button>
            </div>

            {/* Right: Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Connect with me
              </p>
              <div className="grid gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 ${link.color}`}
                    >
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-transparent transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-inherit transition-colors">
                          {link.username}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Designed and built by Pushkar Kathayat
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

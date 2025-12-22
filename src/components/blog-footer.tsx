"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function BlogFooter() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Designed and built by Pushkar Kathayat
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 text-sm text-zinc-400 dark:text-zinc-500">
            <Link
              href="/blog"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors underline"
            >
              Blog
            </Link>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://pushkarkathayat.com/pushkar_singh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors underline"
            >
              Full Stack Resume
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/Pushkar_Kathayat_Resume_Backend_Engineer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors underline"
            >
              Backend Engineer Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

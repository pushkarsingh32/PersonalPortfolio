"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 pb-8 pt-32 md:pb-12 md:pt-40 lg:py-0">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#fafafa] dark:bg-[#111] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#d5c5ff20,transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 text-center relative mt-16 md:mt-20"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 125,
              delay: 0.1
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black rounded-full text-sm border shadow-md"
          >
            <span>Pushkar Kathayat</span>
            <span className="inline-block">👋</span>
          </motion.div>
          <div className="flex gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 125,
                delay: 0.2
              }}
              className="px-4 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm text-zinc-900 dark:text-zinc-100"
            >
              Full Stack Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 125,
                delay: 0.3
              }}
              className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 rounded-full text-sm"
            >
              AI Engineer
            </motion.div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.2] max-w-3xl"
        >
          Building intelligent
          <br />
          applications with AI
          <br />
          and modern tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-500 dark:text-zinc-400 max-w-[600px] text-lg"
        >
          Specialized in developing AI-powered applications like Semantic Pen,
          combining advanced language models with robust full-stack architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors hover:bg-zinc-900/90 dark:hover:bg-zinc-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 opacity-70"
      >
        {[
          "/logos/nextjs-icon-dark-background.png",
          "/logos/react.svg",
          "/logos/node.svg",
          "/logos/Amazon_Web_Services_Logo.svg",
          "/logos/supabase.svg"
        ].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center grayscale transition-all hover:grayscale-0 hover:opacity-100"
          >
            <Image
              src={logo}
              alt="Technology logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
} 
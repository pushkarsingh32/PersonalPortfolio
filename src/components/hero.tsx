"use client"

import { motion } from "framer-motion"
import { Sparkles, Code2, Layers, Zap } from "lucide-react"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 pb-8 pt-24 md:pb-12 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-violet-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[300px] w-[300px] bg-gradient-to-l from-emerald-500/10 to-transparent blur-3xl" />
      </div>

      {/* Main Bento Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">

          {/* Main Hero Card - Spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 sm:p-8 lg:p-12 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Profile Picture */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-lg">
                  <Image
                    src="/pushkar_kathayat_face_pic.png"
                    alt="Pushkar Kathayat"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-zinc-900 dark:text-zinc-100">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">Pushkar</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                  Full Stack Developer
                </p>
              </div>

              <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
                I build production-ready SaaS applications that solve real problems.
                From email validation APIs to job platforms — crafting scalable
                solutions with modern architecture.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon="arrowRight"
                  withShadow
                >
                  View Projects
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  icon="arrowRight"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Side Cards - Stack on right */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 p-6 lg:p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 mb-4 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-2">6+</div>
                <p className="text-violet-100 font-medium">Live SaaS Projects</p>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 rounded-3xl bg-zinc-100 dark:bg-zinc-900 p-6 lg:p-8 border border-zinc-200 dark:border-zinc-800"
            >
              <Code2 className="w-8 h-8 mb-4 text-zinc-600 dark:text-zinc-400" />
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "PostgreSQL", "tRPC"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {[
            {
              icon: Layers,
              title: "Full Stack",
              description: "End-to-end development from database to deployment",
              gradient: "from-emerald-500/10 to-teal-500/10"
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimized for speed with modern caching strategies",
              gradient: "from-amber-500/10 to-orange-500/10"
            },
            {
              icon: Code2,
              title: "Clean Code",
              description: "Type-safe, maintainable, and well-documented",
              gradient: "from-blue-500/10 to-cyan-500/10"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${feature.gradient} dark:from-zinc-900 dark:to-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors`}
            >
              <feature.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{feature.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

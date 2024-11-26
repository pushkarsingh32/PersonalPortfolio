"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Server, Wand2, Sparkles, Github, Linkedin, Twitter } from "lucide-react"

const FloatingIcons = () => {
  const icons = [Code2, Server, Wand2]
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0 
          }}
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            left: `${30 + index * 30}%`,
            top: `${20 + index * 20}%`
          }}
        >
          <Icon className="w-12 h-12 text-muted-foreground/20" />
        </motion.div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-0">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#8080800a,transparent)]" />
      </div>
      
      <FloatingIcons />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 125,
            delay: 0.1
          }}
          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground border border-border/50"
        >
          <Sparkles className="h-4 w-4" />
          <span>Available for Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2"
        >
          Building Digital
          <br />
          Experiences with AI
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl relative">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/pushkarsingh32"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pushkarsingh32"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/pskt45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="#contact"
          className="group relative inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
        >
          <motion.div
            initial={false}
            animate={{ x: "100%" }}
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#projects"
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          View Projects
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 max-w-3xl relative"
      >
        {[
          {
            icon: Code2,
            title: "Modern Web Apps",
            description: "Building responsive and interactive experiences with Next.js and React"
          },
          {
            icon: Server,
            title: "Cloud Solutions",
            description: "Leveraging AWS and Cloudflare for scalable applications"
          },
          {
            icon: Wand2,
            title: "AI Integration",
            description: "Implementing cutting-edge AI solutions for enhanced capabilities"
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all group"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary ring-1 ring-primary/25 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 
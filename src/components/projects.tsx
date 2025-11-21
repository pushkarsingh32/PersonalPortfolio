"use client"

import { motion } from "framer-motion"
import { Chrome, Rocket, ExternalLink } from "lucide-react"
import Script from 'next/script'
import Image from 'next/image'
import { LinkButton } from '@/components/ui/button'

const featuredProjects = [
  {
    title: "VerifyForge",
    description: "Production-ready Email Validation API SaaS platform with hybrid validation achieving 99%+ accuracy. Features real-time SMTP verification, disposable detection, and comprehensive dashboard with subscription management.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Redis", "Drizzle ORM", "BullMQ"],
    demo: "https://verifyforge.com",
    featured: true,
    logo: {
      light: "/logos/verifyforge/VerifyForgeLight.png",
      dark: "/logos/verifyforge/VerifyForgeDark.png"
    },
    gradient: "from-violet-500 to-purple-600",
    stats: "Real-time validation < 2s",
    schema: {
      "@type": "SoftwareApplication",
      "name": "VerifyForge",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Enterprise-grade email validation API with hybrid verification system",
      "url": "https://verifyforge.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Real Jobs From Anywhere",
    description: "Remote job platform connecting global job seekers with curated opportunities from leading companies. Features advanced filtering, company profiles, and real-time job aggregation from multiple sources.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Better Auth", "AWS SES", "BullMQ"],
    demo: "https://realjobsfromanywhere.com",
    featured: true,
    logo: {
      light: "/logos/realjobsfromanywhere/light.png",
      dark: "/logos/realjobsfromanywhere/dark.png"
    },
    gradient: "from-emerald-500 to-teal-600",
    stats: "5,000+ Active Jobs",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Real Jobs From Anywhere",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Remote job board connecting global job seekers with curated remote opportunities",
      "url": "https://realjobsfromanywhere.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "FinderLaunch",
    description: "Product discovery and launch platform for makers and founders. Curates 988+ open-source projects with community voting, product showcases, and comprehensive launch tools for indie hackers.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Redis", "Dodo Payments", "Docker"],
    demo: "https://finderlaunch.com",
    featured: true,
    logo: {
      light: "/logos/finderLaunch/light.png",
      dark: "/logos/finderLaunch/dark.png"
    },
    gradient: "from-amber-500 to-orange-600",
    stats: "988+ Curated Projects",
    schema: {
      "@type": "SoftwareApplication",
      "name": "FinderLaunch",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Product discovery platform for makers to showcase and discover products",
      "url": "https://finderlaunch.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  }
]

const otherProjects = [
  {
    title: "Semantic Pen",
    description: "AI content platform with advanced LLM integration and intelligent page parsing for high-quality content generation.",
    technologies: ["Next.js", "Node.js", "LLM Integration", "AWS"],
    demo: "https://semanticpen.com",
    logo: "/logos/semantic-pen/logo-semanticpen.png",
    isLive: true,
    schema: {
      "@type": "SoftwareApplication",
      "name": "Semantic Pen",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "AI-powered content writing platform with advanced language models",
      "url": "https://semanticpen.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "YouTube Transcript Generator",
    description: "Tool for generating transcripts from YouTube videos with multi-language translation and various export formats.",
    technologies: ["Next.js", "Supabase", "Redis", "Express.js"],
    demo: "https://www.getyoutubetranscript.com",
    logo: "/logos/youtubetranscriptdownloader /logo.png",
    isLive: true,
    schema: {
      "@type": "SoftwareApplication",
      "name": "YouTube Transcript Generator",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Tool for generating transcripts from YouTube videos",
      "url": "https://www.getyoutubetranscript.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "URL to Screenshot",
    description: "FastAPI service capturing high-quality screenshots of any URL using Python and Selenium.",
    technologies: ["FastAPI", "Python", "Selenium"],
    github: "https://github.com/pushkarsingh32/url_to_screenshot",
    schema: {
      "@type": "SoftwareApplication",
      "name": "URL to Screenshot",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Service for capturing high-quality screenshots of URLs",
      "url": "https://github.com/pushkarsingh32/url_to_screenshot",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  }
]

const chromeExtensions = [
  {
    title: "Keyword Autocomplete Magic",
    description: "Intelligent keyword discovery with A-Z search suggestions for SEO research.",
    url: "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Keyword Autocomplete Magic",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for intelligent keyword discovery",
      "url": "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Open Multiple URLs",
    description: "Efficiently manage and open multiple URLs with customizable delays and grouping.",
    url: "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Open Multiple URLs",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for opening multiple URLs efficiently",
      "url": "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Domain Age Checker",
    description: "Instantly reveal website history and credibility with a single click.",
    url: "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Checker",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for checking domain age",
      "url": "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Domain Age Finder SERP",
    description: "View domain age directly in Google search results for quick analysis.",
    url: "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Finder Google SERP",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for viewing domain age in search results",
      "url": "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  }
]

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Live Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground">
            Production-ready SaaS applications serving real users
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid gap-6 lg:gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                {/* Left: Logo and Stats */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 sm:gap-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-2 flex items-center justify-center flex-shrink-0">
                    {/* Light mode logo */}
                    <Image
                      src={project.logo.light}
                      alt={`${project.title} logo`}
                      width={64}
                      height={64}
                      className="object-contain dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                      src={project.logo.dark}
                      alt={`${project.title} logo`}
                      width={64}
                      height={64}
                      className="object-contain hidden dark:block"
                    />
                  </div>
                  <div className="lg:mt-4">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Live</span>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{project.stats}</p>
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-3 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                      Live
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action */}
                <div className="lg:col-span-1 flex lg:flex-col lg:justify-center lg:items-end gap-3 pt-2 lg:pt-0">
                  <LinkButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon="arrowUpRight"
                    className="px-5 py-2.5"
                  >
                    Visit Site
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-3">
                {project.logo && (
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-1.5 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                )}
                <h4 className="text-lg font-semibold">{project.title}</h4>
                {project.isLive && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                    Live
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-2">
                {project.github && (
                  <LinkButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    icon="github"
                    iconPosition="left"
                  >
                    View Code
                  </LinkButton>
                )}
                {project.demo && (
                  <LinkButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon="arrowUpRight"
                  >
                    Visit Site
                  </LinkButton>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chrome Extensions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <Chrome className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            <h3 className="text-xl font-semibold">Chrome Extensions</h3>
          </div>
          <p className="text-muted-foreground mt-2">Productivity tools available on Chrome Web Store</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {chromeExtensions.map((extension, index) => (
            <motion.a
              key={extension.title}
              href={extension.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Chrome className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{extension.title}</h4>
                <p className="text-sm text-muted-foreground">{extension.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
            </motion.a>
          ))}
        </div>
      </section>
    </>
  )
}

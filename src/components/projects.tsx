"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Chrome } from "lucide-react"
import Script from 'next/script'

const projects = [
  {
    title: "Semantic Pen",
    description: "A sophisticated AI content platform featuring advanced LLM integration, web scraping, and intelligent page parsing. Utilizes proxies for data collection and implements AI-powered text generation for high-quality content creation.",
    technologies: ["Next.js", "Node.js", "LLM Integration", "Web Scraping", "AWS", "Cloudflare"],
    // github: "https://github.com/pushkarsingh32",
    demo: "https://semanticpen.com",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Semantic Pen",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "AI-powered content writing platform with advanced language models and intelligent content generation",
      "url": "https://semanticpen.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "YouTube Transcript Generator",
    description: "A powerful tool that generates transcripts from YouTube videos with advanced speech recognition. Features include multi-language translation and various export formats.",
    technologies: ["Next.js", "Node.js", "Supabase", "Redis", "Express.js"],
    // github: "https://github.com/pushkarsingh32",
    demo: "https://www.getyoutubetranscript.com",
    schema: {
      "@type": "SoftwareApplication",
      "name": "YouTube Transcript Generator",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Tool for generating transcripts from YouTube videos with multi-language support",
      "url": "https://www.getyoutubetranscript.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "URL to Screenshot",
    description: "A FastAPI-based service that captures high-quality screenshots of any URL using Python, Selenium, and Request. Automatically saves screenshots in PNG format.",
    technologies: ["FastAPI", "Python", "Selenium", "REST APIs"],
    github: "https://github.com/pushkarsingh32/url_to_screenshot",
    demo: "https://github.com/pushkarsingh32/url_to_screenshot",
    schema: {
      "@type": "SoftwareApplication",
      "name": "URL to Screenshot",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Service for capturing high-quality screenshots of URLs using Python and Selenium",
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
    description: "An intelligent keyword discovery tool that provides comprehensive A-Z search suggestions for Google searches, enhancing SEO research.",
    url: "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Keyword Autocomplete Magic",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for intelligent keyword discovery and SEO research",
      "url": "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Open Multiple URLs",
    description: "Efficiently manage and open multiple URLs in tabs, windows, or groups. Features include file import, URL list saving, and customizable delays.",
    url: "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Open Multiple URLs",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for managing and opening multiple URLs efficiently",
      "url": "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Domain Age Checker",
    description: "Instantly reveal website history and credibility by checking domain age with a single click.",
    url: "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Checker",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for instantly revealing website history and credibility by checking domain age",
      "url": "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Domain Age Finder Google SERP",
    description: "View domain age directly in Google search results, helping identify established vs new domains quickly.",
    url: "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Finder Google SERP",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for viewing domain age directly in Google search results",
      "url": "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  }
]

export function Projects() {
  const projectSchemas = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      ...projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": project.schema
      })),
      ...chromeExtensions.map((extension, index) => ({
        "@type": "ListItem",
        "position": projects.length + index + 1,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Here are some of my notable projects that showcase my skills and experience
          </p>
        </motion.div>
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-6 bg-card text-card-foreground rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                <a
                  href={project.demo}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center mt-32"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Chrome Extensions
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A collection of productivity and SEO tools available on the Chrome Web Store
          </p>
        </motion.div>
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {chromeExtensions.map((extension, index) => (
            <motion.div
              key={extension.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-6 bg-card text-card-foreground rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Chrome className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{extension.title}</h3>
              </div>
              <p className="text-muted-foreground">{extension.description}</p>
              <div className="flex gap-4 mt-auto pt-4">
                <a
                  href={extension.url}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Chrome className="w-4 h-4" />
                  Chrome Web Store
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
} 
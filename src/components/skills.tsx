"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "FastAPI", "Python", "Supabase"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS Lambda", "AWS EC2", "AWS ECS", "AWS S3", "AWS SES", "Cloudflare Workers", "Cloudflare R2", "Cloudflare Pages"]
  },
  {
    category: "Database & Storage",
    technologies: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "S3", "R2"]
  },
  {
    category: "AI & Automation",
    technologies: ["LLM Integration", "Web Scraping", "Proxies", "Scrapy", "Selenium", "AI Text Generation"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Technical Skills
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Experienced in modern web technologies, cloud services, and AI integration
        </p>
      </motion.div>
      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 p-6 bg-card text-card-foreground rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 text-sm bg-muted rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 
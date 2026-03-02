"use client"

import { motion } from "framer-motion"
import { GitPullRequest, GitMerge, ExternalLink } from "lucide-react"
import { LinkButton } from '@/components/ui/button'

const contributions = [
  {
    repo: "OpenClaw",
    repoUrl: "https://github.com/openclaw/openclaw",
    repoDescription: "Open-source AI agent framework",
    prs: [
      {
        number: 30358,
        title: "fix(discord): support applied_tags for forum thread creation",
        description: "Added appliedTags parameter for forum/media thread creation across types, API layer, agent tools, and action handlers. Forum channels requiring tags would fail silently — this enables tag IDs to be passed during thread creation.",
        url: "https://github.com/openclaw/openclaw/pull/30358",
        labels: ["agents", "channel: discord", "size: S"],
        additions: 56,
        deletions: 6,
        files: 6,
        status: "merged" as const,
      },
      {
        number: 30266,
        title: "fix(slack): wrap session key in backticks to prevent emoji shortcode parsing",
        description: "Fixed session key rendering in Slack usage footer — colon-delimited segments were being parsed as emoji shortcodes. Wrapped in inline code to prevent misinterpretation.",
        url: "https://github.com/openclaw/openclaw/pull/30266",
        labels: ["channel: slack", "size: XS"],
        additions: 15,
        deletions: 6,
        files: 4,
        status: "merged" as const,
      },
    ],
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="container py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <GitPullRequest className="w-4 h-4" />
          <span className="text-sm font-medium">Open Source</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Open Source Contributions
        </h2>
        <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground">
          Contributing to projects used by thousands of developers worldwide
        </p>
      </motion.div>

      {/* Contributions */}
      <div className="grid gap-8">
        {contributions.map((contrib) => (
          <motion.div
            key={contrib.repo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            {/* Repo Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{contrib.repo}</h3>
                  <p className="text-sm text-muted-foreground">{contrib.repoDescription}</p>
                </div>
              </div>
              <LinkButton
                href={contrib.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon="github"
                iconPosition="left"
              >
                View Repo
              </LinkButton>
            </div>

            {/* PRs */}
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {contrib.prs.map((pr, index) => (
                <motion.div
                  key={pr.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 sm:px-8 py-5 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    {/* PR Title Row */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex-shrink-0">
                        <GitMerge className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <a
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                          >
                            {pr.title}
                          </a>
                          <span className="text-sm text-muted-foreground flex-shrink-0">#{pr.number}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {pr.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta Row */}
                    <div className="flex items-center gap-3 flex-wrap ml-10">
                      {/* Merged Badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                        <GitMerge className="w-3 h-3" />
                        Merged
                      </span>

                      {/* Labels */}
                      {pr.labels.map((label) => (
                        <span
                          key={label}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                        >
                          {label}
                        </span>
                      ))}

                      {/* Stats */}
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5 ml-auto">
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">+{pr.additions}</span>
                        <span className="text-red-500 dark:text-red-400 font-medium">-{pr.deletions}</span>
                        <span className="text-zinc-400 dark:text-zinc-500 mx-1">·</span>
                        {pr.files} files
                      </span>

                      {/* Link */}
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

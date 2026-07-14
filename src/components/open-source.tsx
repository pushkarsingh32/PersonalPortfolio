"use client"

import { motion } from "framer-motion"
import { GitPullRequest, ExternalLink } from "lucide-react"
import { LinkButton } from '@/components/ui/button'
import { StatusDot } from '@/components/ui/status-dot'

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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          <GitPullRequest className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">activity log</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
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
            className="rounded-2xl border border-border overflow-hidden"
          >
            {/* Repo Header */}
            <div className="flex flex-col gap-3 border-b border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <h3 className="font-display text-lg font-bold">{contrib.repo}</h3>
                <p className="text-sm text-muted-foreground">{contrib.repoDescription}</p>
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
            <div className="divide-y divide-border">
              {contrib.prs.map((pr, index) => (
                <motion.div
                  key={pr.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-5 transition-colors hover:bg-card sm:px-8"
                >
                  <div className="flex flex-col gap-3">
                    {/* PR Title Row */}
                    <div className="flex items-start gap-3">
                      <StatusDot status="merged" showLabel={false} className="mt-1.5" />
                      <div className="min-w-0 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {pr.title}
                          </a>
                          <span className="font-mono text-xs text-muted-foreground flex-shrink-0">#{pr.number}</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {pr.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta Row */}
                    <div className="ml-7 flex flex-wrap items-center gap-3">
                      <StatusDot status="merged" />

                      {/* Labels */}
                      {pr.labels.map((label) => (
                        <span
                          key={label}
                          className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {label}
                        </span>
                      ))}

                      {/* Stats */}
                      <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <span className="font-medium text-signal">+{pr.additions}</span>
                        <span className="font-medium text-destructive">-{pr.deletions}</span>
                        <span className="mx-1">·</span>
                        {pr.files} files
                      </span>

                      {/* Link */}
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 transition-colors hover:bg-background"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
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

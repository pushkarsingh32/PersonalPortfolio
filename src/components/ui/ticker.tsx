"use client"

import { motion } from "framer-motion"
import { StatusDot } from '@/components/ui/status-dot'

const events = [
  { status: "live" as const, text: "VerifyForge — <2s validation" },
  { status: "live" as const, text: "Real Jobs Anywhere — 5,000+ active jobs" },
  { status: "live" as const, text: "FinderLaunch — 988+ curated projects" },
  { status: "merged" as const, text: "PR #30358 merged to OpenClaw" },
  { status: "merged" as const, text: "PR #30266 merged to OpenClaw" },
  { status: "live" as const, text: "Available for work" },
]

function TickerRow() {
  return (
    <div className="flex items-center gap-8 pr-8">
      {events.map((event, i) => (
        <span key={i} className="flex items-center gap-2 whitespace-nowrap font-mono text-xs text-muted-foreground">
          <StatusDot status={event.status} showLabel={false} />
          {event.text}
        </span>
      ))}
    </div>
  )
}

export function Ticker() {
  return (
    <div className="fixed inset-x-0 top-16 z-40 w-full overflow-hidden border-b border-border bg-card/80 py-2 backdrop-blur-lg">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <TickerRow />
        <TickerRow />
      </motion.div>
    </div>
  )
}

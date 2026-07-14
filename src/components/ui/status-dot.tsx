"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const statusConfig = {
  live: { dotColor: "bg-signal", textColor: "text-signal", label: "live", pulse: true },
  archived: { dotColor: "bg-primary", textColor: "text-primary", label: "archived", pulse: false },
  merged: { dotColor: "bg-signal", textColor: "text-signal", label: "merged", pulse: false, icon: Check },
} as const

interface StatusDotProps {
  status: keyof typeof statusConfig
  showLabel?: boolean
  className?: string
}

export function StatusDot({ status, showLabel = true, className = "" }: StatusDotProps) {
  const config = statusConfig[status]
  const Icon = "icon" in config ? config.icon : null

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${className}`}>
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        {config.pulse && (
          <motion.span
            className={`absolute inline-flex h-2 w-2 rounded-full ${config.dotColor} opacity-60`}
            animate={{ scale: [1, 2, 2], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        {Icon ? (
          <Icon className={`h-2.5 w-2.5 ${config.textColor}`} strokeWidth={3} />
        ) : (
          <span className={`relative inline-flex h-2 w-2 rounded-full ${config.dotColor}`} />
        )}
      </span>
      {showLabel && <span className={config.textColor}>{config.label}</span>}
    </span>
  )
}

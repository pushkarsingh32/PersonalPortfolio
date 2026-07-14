"use client"

import { motion } from "framer-motion"

const colorMap = {
  signal: "stroke-signal",
  waveform: "stroke-waveform",
  primary: "stroke-primary",
} as const

interface WaveformProps {
  className?: string
  color?: keyof typeof colorMap
}

// Low-amplitude trace; the moving dash gives the "live signal" read without drawing attention.
const PATH =
  "M0,10 C8,10 8,4 16,4 C24,4 24,16 32,16 C40,16 40,7 48,7 C56,7 56,13 64,13 C72,13 72,10 80,10 C88,10 88,5 96,5 C104,5 104,15 112,15 C120,15 120,10 128,10 C136,10 136,6 144,6 C152,6 152,14 160,14 C168,14 168,10 176,10 C184,10 184,8 192,8 C196,8 196,10 200,10"

export function Waveform({ className = "", color = "waveform" }: WaveformProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      className={`h-4 w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d={PATH}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`${colorMap[color]} opacity-30`}
      />
      <motion.path
        d={PATH}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 9"
        className={`${colorMap[color]} opacity-70`}
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  )
}

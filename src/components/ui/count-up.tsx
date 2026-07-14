"use client"

import { useEffect, useState } from "react"
import { animate, useReducedMotion } from "framer-motion"

interface CountUpProps {
  value: string
  className?: string
}

// Parses a leading integer off strings like "5,000+ active jobs" and animates
// it from 0; renders the raw string untouched if it doesn't start with a number.
export function CountUp({ value, className = "" }: CountUpProps) {
  const match = value.match(/^([\d,]+)(.*)$/)
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : null
  const suffix = match ? match[2] : ""
  const [display, setDisplay] = useState("0")
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (target === null) return
    if (shouldReduceMotion) {
      setDisplay(target.toLocaleString())
      return
    }

    let jitterControls: ReturnType<typeof animate> | undefined

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
      onComplete: () => {
        // Subtle ongoing fluctuation so settled numbers read as a live, monitored metric.
        const wobble = Math.max(1, Math.round(target * 0.0015))
        jitterControls = animate(
          [target, target - wobble, target, target + wobble, target],
          {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            onUpdate: (v: number) => setDisplay(Math.round(v).toLocaleString()),
          }
        )
      },
    })

    return () => {
      controls.stop()
      jitterControls?.stop()
    }
  }, [target, shouldReduceMotion])

  if (target === null) return <span className={className}>{value}</span>

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  )
}

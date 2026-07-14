"use client"

import { useRef } from "react"
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion"
import { Button } from '@/components/ui/button'
import { StatusDot } from '@/components/ui/status-dot'
import { Waveform } from '@/components/ui/waveform'
import { CountUp } from '@/components/ui/count-up'
import Image from 'next/image'
import { services, heroBio } from '@/data/site-content'

function MagneticCta({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useSpring(mouseX, { stiffness: 150, damping: 25 })
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 25 })
  const glow = useMotionTemplate`radial-gradient(550px circle at ${glowX}px ${glowY}px, hsl(var(--primary) / 0.22), transparent 70%)`

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center gap-12 overflow-hidden pb-8 pt-32 md:pb-12 md:pt-40"
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: glow }} />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        {/* Left: Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border shadow-lg md:h-24 md:w-24">
            <Image
              src="/pushkar_kathayat_face_pic.png"
              alt="Pushkar Kathayat"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeInOut" }}
              className="whitespace-nowrap font-mono text-xs text-muted-foreground"
            >
              $ whoami --years=8 --status=shipping
            </motion.p>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Pushkar Kathayat
            </h1>
            <p className="font-mono text-base text-primary sm:text-lg">
              full-stack engineer · 8+ years
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroBio} Currently running {services.length}+ live services.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <MagneticCta>
              <Button href="#projects" variant="primary" size="lg" icon="arrowRight" withShadow>
                View Projects
              </Button>
            </MagneticCta>
            <Button href="#contact" variant="secondary" size="lg" icon="arrowRight">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Right: Services strip */}
        <div className="rounded-2xl border border-border bg-card p-2">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span>services</span>
          </div>
          <div className="divide-y divide-border">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                className="space-y-2 px-3 py-3.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <StatusDot status="live" showLabel={false} />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    <CountUp value={service.stat} />
                  </span>
                </div>
                <Waveform />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

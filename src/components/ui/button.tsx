"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { ArrowRight, ArrowUpRight, Github, Globe, ExternalLink } from "lucide-react"
import { forwardRef } from "react"

// Base button styles
const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all select-none"

// Variant styles
const variants = {
  primary: "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:opacity-90",
  secondary: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700",
  ghost: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
}

// Size styles
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

// Icon options
const icons = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  github: Github,
  globe: Globe,
  externalLink: ExternalLink,
}

interface ButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: keyof typeof icons
  iconPosition?: "left" | "right"
  withShadow?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      withShadow = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const Icon = icon ? icons[icon] : null

    return (
      <motion.a
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${withShadow ? "shadow-lg hover:shadow-xl" : ""}
          ${className}
        `}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
      </motion.a>
    )
  }
)

Button.displayName = "Button"

// Simple link button without motion (for static buttons)
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: keyof typeof icons
  iconPosition?: "left" | "right"
  children: React.ReactNode
}

export function LinkButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const Icon = icon ? icons[icon] : null

  return (
    <a
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </a>
  )
}

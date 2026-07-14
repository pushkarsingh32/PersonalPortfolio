"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { buildPageMarkdown } from '@/lib/page-markdown'

function copyWithFallback(text: string) {
  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}

export function CopyPageButton() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    const markdown = buildPageMarkdown()
    try {
      await navigator.clipboard.writeText(markdown)
    } catch {
      copyWithFallback(markdown)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
      aria-label="Copy page as Markdown"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />}
      <span className="hidden sm:inline">{copied ? "Copied" : "Copy page"}</span>
    </button>
  )
}

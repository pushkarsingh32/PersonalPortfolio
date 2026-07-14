import {
  heroBio,
  skills,
  featuredProjects,
  otherProjects,
  chromeExtensions,
  contributions,
  socialLinks,
} from '@/data/site-content'

export function buildPageMarkdown(): string {
  const lines: string[] = []

  lines.push('# Pushkar Kathayat — Full-Stack Engineer')
  lines.push('')
  lines.push(`${heroBio} 8+ years of experience.`)
  lines.push('')

  lines.push('## Stack')
  for (const group of skills) {
    lines.push(`- **${group.category}**: ${group.technologies.join(', ')}`)
  }
  lines.push('')

  lines.push('## Projects')
  for (const project of [...featuredProjects, ...otherProjects]) {
    const link = project.demo ?? project.github
    lines.push(`### ${project.title}${link ? ` (${link})` : ''}`)
    lines.push(project.description)
    lines.push(`Stack: ${project.technologies.join(', ')}`)
    lines.push('')
  }

  lines.push('## Browser Extensions')
  for (const ext of chromeExtensions) {
    lines.push(`- [${ext.title}](${ext.url}) — ${ext.description}`)
  }
  lines.push('')

  lines.push('## Open Source Contributions')
  for (const contrib of contributions) {
    lines.push(`### ${contrib.repo} (${contrib.repoUrl})`)
    lines.push(contrib.repoDescription)
    for (const pr of contrib.prs) {
      lines.push(`- PR #${pr.number} (${pr.status}): ${pr.title} — ${pr.description} [+${pr.additions}/-${pr.deletions}, ${pr.files} files]`)
    }
    lines.push('')
  }

  lines.push('## Contact')
  for (const link of socialLinks) {
    lines.push(`- ${link.name}: ${link.href}`)
  }

  return lines.join('\n').trim()
}

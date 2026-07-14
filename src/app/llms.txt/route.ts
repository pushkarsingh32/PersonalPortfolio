import { buildPageMarkdown } from '@/lib/page-markdown'

export async function GET() {
  return new Response(buildPageMarkdown(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

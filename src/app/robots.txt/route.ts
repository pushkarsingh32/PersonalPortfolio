export async function GET() {
  const body = `User-agent: *
Allow: /

# LLM-readable structured summary of this site (see https://llmstxt.org)
LLM-Info: https://pushkarkathayat.com/llms.txt
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

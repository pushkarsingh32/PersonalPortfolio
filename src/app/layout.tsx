import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pushkarkathayat.com'),
  title: 'Pushkar Kathayat - Full Stack Developer & AI Engineer',
  description: 'Full Stack Developer and AI Engineer specializing in building intelligent applications. Creator of Semantic Pen, an AI-powered content writing platform.',
  keywords: 'Pushkar Kathayat, Full Stack Developer, AI Engineer, Next.js, React, Node.js, Semantic Pen, AI Applications',
  authors: [{ name: 'Pushkar Kathayat' }],
  creator: 'Pushkar Kathayat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Pushkar Kathayat - Full Stack Developer & AI Engineer',
    description: 'Full Stack Developer and AI Engineer specializing in building intelligent applications. Creator of Semantic Pen, an AI-powered content writing platform.',
    siteName: 'Pushkar Kathayat Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pushkar Kathayat - Full Stack Developer & AI Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Kathayat - Full Stack Developer & AI Engineer',
    description: 'Full Stack Developer and AI Engineer specializing in building intelligent applications. Creator of Semantic Pen, an AI-powered content writing platform.',
    creator: '@pskt45',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pushkar Kathayat',
  jobTitle: 'Full Stack Developer & AI Engineer',
  url: 'https://pushkarkathayat.com',
  sameAs: [
    'https://github.com/pushkarsingh32',
    'https://www.linkedin.com/in/pushkarsingh32',
    'https://x.com/pskt45'
  ],
  knowsAbout: [
    'Full Stack Development',
    'Artificial Intelligence',
    'Next.js',
    'React',
    'Node.js',
    'AWS',
    'Supabase',
    'LLM Integration',
    'Web Development',
    'SEO'
  ],
  alumniOf: 'Computer Science',
  worksFor: {
    '@type': 'Organization',
    name: 'Semantic Pen',
    url: 'https://semanticpen.com'
  },
  mainEntityOfPage: {
    '@type': 'WebSite',
    name: 'Pushkar Kathayat Portfolio',
    url: 'https://pushkarkathayat.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pushkarkathayat.com'),
  title: 'Pushkar Kathayat - Full Stack Developer',
  description: 'Full Stack Developer building production-ready SaaS applications. Creator of VerifyForge, Real Jobs From Anywhere, FinderLaunch, and Semantic Pen. Specializing in Next.js, TypeScript, and scalable web architecture.',
  keywords: 'Pushkar Kathayat, Full Stack Developer, Next.js, React, TypeScript, Node.js, VerifyForge, FinderLaunch, Real Jobs From Anywhere, Semantic Pen, Web Development',
  authors: [{ name: 'Pushkar Kathayat' }],
  creator: 'Pushkar Kathayat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Pushkar Kathayat - Full Stack Developer',
    description: 'Full Stack Developer building production-ready SaaS applications. Creator of VerifyForge, Real Jobs From Anywhere, FinderLaunch, and Semantic Pen.',
    siteName: 'Pushkar Kathayat Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pushkar Kathayat - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Kathayat - Full Stack Developer',
    description: 'Full Stack Developer building production-ready SaaS applications. Creator of VerifyForge, Real Jobs From Anywhere, FinderLaunch, and Semantic Pen.',
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

// Enhanced JSON-LD Schema for better SEO
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://pushkarkathayat.com/#person',
  name: 'Pushkar Kathayat',
  givenName: 'Pushkar',
  familyName: 'Kathayat',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer building production-ready SaaS applications. Creator of VerifyForge, Real Jobs From Anywhere, FinderLaunch, and Semantic Pen. Specializing in Next.js, TypeScript, and scalable web architecture.',
  url: 'https://pushkarkathayat.com',
  image: 'https://pushkarkathayat.com/opengraph-image',
  sameAs: [
    'https://github.com/pushkarsingh32',
    'https://www.linkedin.com/in/pushkarsingh32',
    'https://x.com/pskt45'
  ],
  knowsAbout: [
    'Full Stack Development',
    'SaaS Development',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Supabase',
    'Web Development',
    'API Development',
    'Software Architecture',
    'Database Design',
    'RESTful APIs',
    'Authentication Systems'
  ],
  knowsLanguage: ['English', 'Hindi'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Developer',
    occupationLocation: {
      '@type': 'Country',
      name: 'Remote'
    },
    skills: 'Next.js, React, TypeScript, Node.js, PostgreSQL, AWS, Supabase'
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Computer Science'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'VerifyForge',
    url: 'https://verifyforge.com'
  },
  owns: [
    {
      '@type': 'WebApplication',
      name: 'VerifyForge',
      url: 'https://verifyforge.com',
      description: 'Email verification and validation SaaS platform',
      applicationCategory: 'DeveloperApplication'
    },
    {
      '@type': 'WebApplication',
      name: 'FinderLaunch',
      url: 'https://finderlaunch.com',
      description: 'Product launch and discovery platform',
      applicationCategory: 'BusinessApplication'
    },
    {
      '@type': 'WebApplication',
      name: 'Real Jobs From Anywhere',
      url: 'https://realjobsfromanywhere.com',
      description: 'Remote job board for verified opportunities',
      applicationCategory: 'BusinessApplication'
    },
    {
      '@type': 'WebApplication',
      name: 'Semantic Pen',
      description: 'AI-powered writing and content creation tool',
      applicationCategory: 'DeveloperApplication'
    }
  ],
  mainEntityOfPage: {
    '@type': 'WebSite',
    '@id': 'https://pushkarkathayat.com/#website',
    name: 'Pushkar Kathayat Portfolio',
    url: 'https://pushkarkathayat.com',
    description: 'Portfolio showcasing full stack development projects and skills'
  }
}

// ProfilePage schema for additional SEO benefits
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://pushkarkathayat.com/#profilepage',
  mainEntity: {
    '@id': 'https://pushkarkathayat.com/#person'
  },
  name: 'Pushkar Kathayat - Full Stack Developer',
  description: 'Professional portfolio of Pushkar Kathayat, Full Stack Developer specializing in SaaS applications',
  url: 'https://pushkarkathayat.com'
}

// WebSite schema with search action
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://pushkarkathayat.com/#website',
  name: 'Pushkar Kathayat Portfolio',
  url: 'https://pushkarkathayat.com',
  description: 'Portfolio showcasing full stack development projects and skills',
  author: {
    '@id': 'https://pushkarkathayat.com/#person'
  },
  inLanguage: 'en-US'
}

// Combine all schemas using @graph
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, profilePageSchema, websiteSchema]
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

export const heroBio =
  "I've owned production SaaS systems end-to-end — architected email " +
  "validation infrastructure, scaled a job platform to 5,000+ active " +
  "listings, and shipped AI content pipelines from concept to real users."

export const services = [
  { name: "VerifyForge", stat: "<2s validation" },
  { name: "Real Jobs Anywhere", stat: "5,000+ active jobs" },
  { name: "FinderLaunch", stat: "988+ curated projects" },
]

export const skills = [
  {
    category: "Frontend",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion"]
  },
  {
    category: "Backend",
    technologies: ["Python", "Django", "FastAPI", "Node.js", "Express.js", "tRPC", "REST APIs", "WebSockets"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS (Lambda, EC2, S3, SES)", "Cloudflare (Workers, R2, Pages)", "Docker", "Vercel", "Railway", "CI/CD", "GitHub Actions"]
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "Drizzle ORM", "Supabase", "Redis", "MongoDB", "BullMQ"]
  },
  {
    category: "Auth & Payments",
    technologies: ["Better Auth", "OAuth 2.0", "Passkeys/WebAuthn", "Stripe", "Dodo Payments", "Subscription Management"]
  },
  {
    category: "Tools & Practices",
    technologies: ["Git", "Playwright", "Jest", "React Query", "Zod", "Agile/Scrum", "Code Reviews"]
  }
]

export const featuredProjects = [
  {
    title: "VerifyForge",
    description: "Production-ready Email Validation API SaaS platform with hybrid validation achieving 99%+ accuracy. Features real-time SMTP verification, disposable detection, and comprehensive dashboard with subscription management.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Redis", "Drizzle ORM", "BullMQ"],
    demo: "https://verifyforge.com",
    featured: true,
    logo: {
      light: "/logos/verifyforge/VerifyForgeLight.png",
      dark: "/logos/verifyforge/VerifyForgeDark.png"
    },
    gradient: "from-violet-500 to-purple-600",
    stats: "Real-time validation < 2s",
    schema: {
      "@type": "SoftwareApplication",
      "name": "VerifyForge",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Enterprise-grade email validation API with hybrid verification system",
      "url": "https://verifyforge.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Real Jobs From Anywhere",
    description: "Remote job platform connecting global job seekers with curated opportunities from leading companies. Features advanced filtering, company profiles, and real-time job aggregation from multiple sources.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Better Auth", "AWS SES", "BullMQ"],
    demo: "https://realjobsfromanywhere.com",
    featured: true,
    logo: {
      light: "/logos/realjobsfromanywhere/light.png",
      dark: "/logos/realjobsfromanywhere/dark.png"
    },
    gradient: "from-emerald-500 to-teal-600",
    stats: "5,000+ Active Jobs",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Real Jobs From Anywhere",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Remote job board connecting global job seekers with curated remote opportunities",
      "url": "https://realjobsfromanywhere.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "FinderLaunch",
    description: "Product discovery and launch platform for makers and founders. Curates 988+ open-source projects with community voting, product showcases, and comprehensive launch tools for indie hackers.",
    technologies: ["Next.js 15", "tRPC", "PostgreSQL", "Redis", "Dodo Payments", "Docker"],
    demo: "https://finderlaunch.com",
    featured: true,
    logo: {
      light: "/logos/finderLaunch/light.png",
      dark: "/logos/finderLaunch/dark.png"
    },
    gradient: "from-amber-500 to-orange-600",
    stats: "988+ Curated Projects",
    schema: {
      "@type": "SoftwareApplication",
      "name": "FinderLaunch",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Product discovery platform for makers to showcase and discover products",
      "url": "https://finderlaunch.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  }
]

export const otherProjects = [
  {
    title: "Medical Imaging Platform",
    description: "Full-stack HIPAA-compliant medical imaging platform with Django REST API, Next.js frontend, AI-powered document processing, and comprehensive testing suite. Features async Celery workers, PostgreSQL optimization (85% performance gain), and Docker deployment.",
    technologies: ["Django", "Next.js", "PostgreSQL", "OpenAI", "Celery", "Docker"],
    github: "https://github.com/pushkarsingh32/django-medical-imaging-platform",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Medical Imaging Platform",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Full-stack medical imaging platform with Django REST API and AI-powered features",
      "url": "https://github.com/pushkarsingh32/django-medical-imaging-platform",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Semantic Pen",
    description: "AI content platform with advanced LLM integration and intelligent page parsing for high-quality content generation.",
    technologies: ["Next.js", "Node.js", "LLM Integration", "AWS"],
    demo: "https://semanticpen.com",
    logo: "/logos/semantic-pen/logo-semanticpen.png",
    isLive: true,
    schema: {
      "@type": "SoftwareApplication",
      "name": "Semantic Pen",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "AI-powered content writing platform with advanced language models",
      "url": "https://semanticpen.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "YouTube Transcript Generator",
    description: "Tool for generating transcripts from YouTube videos with multi-language translation and various export formats.",
    technologies: ["Next.js", "Supabase", "Redis", "Express.js"],
    demo: "https://www.getyoutubetranscript.com",
    logo: "/logos/youtubetranscriptdownloader /logo.png",
    isLive: true,
    schema: {
      "@type": "SoftwareApplication",
      "name": "YouTube Transcript Generator",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "description": "Tool for generating transcripts from YouTube videos",
      "url": "https://www.getyoutubetranscript.com",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "URL to Screenshot",
    description: "FastAPI service capturing high-quality screenshots of any URL using Python and Selenium.",
    technologies: ["FastAPI", "Python", "Selenium"],
    github: "https://github.com/pushkarsingh32/url_to_screenshot",
    schema: {
      "@type": "SoftwareApplication",
      "name": "URL to Screenshot",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Service for capturing high-quality screenshots of URLs",
      "url": "https://github.com/pushkarsingh32/url_to_screenshot",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "Semantic Interlinker",
    description: "Professional tool for discovering internal linking opportunities using semantic analysis and BERT embeddings. Analyzes web pages to identify semantically related content and suggest strategic linking opportunities.",
    technologies: ["Python", "BERT", "NLP", "Sentence Transformers", "Scrapy"],
    github: "https://github.com/pushkarsingh32/Semantic-Interlinker",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Semantic Interlinker",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Tool for discovering internal linking opportunities using semantic analysis and BERT embeddings",
      "url": "https://github.com/pushkarsingh32/Semantic-Interlinker",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "PAA Scraper",
    description: "Professional Python tool for extracting 'People Also Ask' questions from Google search results. Features CLI interface, REST API, batch processing, and Docker support for easy integration.",
    technologies: ["Python", "Flask", "Beautiful Soup", "Docker"],
    github: "https://github.com/pushkarsingh32/paa-scraper",
    schema: {
      "@type": "SoftwareApplication",
      "name": "PAA Scraper",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Tool for extracting 'People Also Ask' questions from Google search results",
      "url": "https://github.com/pushkarsingh32/paa-scraper",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  },
  {
    title: "WordPress Article Uploader",
    description: "Automated WordPress article uploader with NLP-based tag generation. Upload DOCX files to WordPress sites with intelligent title processing, multi-site support, and comprehensive logging.",
    technologies: ["Python", "Selenium", "spaCy", "NLTK"],
    github: "https://github.com/pushkarsingh32/wordpress-article-uploader",
    schema: {
      "@type": "SoftwareApplication",
      "name": "WordPress Article Uploader",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Automated tool for uploading DOCX articles to WordPress sites with NLP-based tag generation",
      "url": "https://github.com/pushkarsingh32/wordpress-article-uploader",
      "author": {
        "@type": "Person",
        "name": "Pushkar Kathayat"
      }
    }
  }
]

export const chromeExtensions = [
  {
    title: "Keyword Autocomplete Magic",
    description: "Intelligent keyword discovery with A-Z search suggestions for SEO research.",
    url: "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Keyword Autocomplete Magic",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for intelligent keyword discovery",
      "url": "https://chromewebstore.google.com/detail/keyword-auto-complete-mag/ocjppcomicmadlagldlinpcjipodcpii",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Open Multiple URLs",
    description: "Efficiently manage and open multiple URLs with customizable delays and grouping.",
    url: "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Open Multiple URLs",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for opening multiple URLs efficiently",
      "url": "https://chromewebstore.google.com/detail/open-multiple-urls/dfanaedlfeapcalipllnkkcdboffjnap",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Domain Age Checker",
    description: "Instantly reveal website history and credibility with a single click.",
    url: "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Checker",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for checking domain age",
      "url": "https://chromewebstore.google.com/detail/domain-age-checker-by-sem/gmfpkimhlpfknllbhfbcjbghmkhhgdbc",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  },
  {
    title: "Domain Age Finder SERP",
    description: "View domain age directly in Google search results for quick analysis.",
    url: "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
    schema: {
      "@type": "SoftwareApplication",
      "name": "Domain Age Finder Google SERP",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "Chrome",
      "description": "Chrome extension for viewing domain age in search results",
      "url": "https://chromewebstore.google.com/detail/domain-age-finder-google/ckgeaghalgglnfmdfjbajmlckkkicdfm",
      "author": { "@type": "Person", "name": "Pushkar Kathayat" }
    }
  }
]

export const contributions = [
  {
    repo: "OpenClaw",
    repoUrl: "https://github.com/openclaw/openclaw",
    repoDescription: "Open-source AI agent framework",
    prs: [
      {
        number: 30358,
        title: "fix(discord): support applied_tags for forum thread creation",
        description: "Added appliedTags parameter for forum/media thread creation across types, API layer, agent tools, and action handlers. Forum channels requiring tags would fail silently — this enables tag IDs to be passed during thread creation.",
        url: "https://github.com/openclaw/openclaw/pull/30358",
        labels: ["agents", "channel: discord", "size: S"],
        additions: 56,
        deletions: 6,
        files: 6,
        status: "merged" as const,
      },
      {
        number: 30266,
        title: "fix(slack): wrap session key in backticks to prevent emoji shortcode parsing",
        description: "Fixed session key rendering in Slack usage footer — colon-delimited segments were being parsed as emoji shortcodes. Wrapped in inline code to prevent misinterpretation.",
        url: "https://github.com/openclaw/openclaw/pull/30266",
        labels: ["channel: slack", "size: XS"],
        additions: 15,
        deletions: 6,
        files: 4,
        status: "merged" as const,
      },
    ],
  },
]

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/pushkarsingh32",
    username: "@pushkarsingh32",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pushkarsingh32",
    username: "pushkarsingh32",
  },
  {
    name: "Twitter",
    href: "https://x.com/pskt45",
    username: "@pskt45",
  },
  {
    name: "Email",
    href: "mailto:contact@pushkarkathayat.com",
    username: "contact@pushkarkathayat.com",
  }
]

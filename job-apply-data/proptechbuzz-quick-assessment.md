# PropTechBuzz - Quick Assessment Answers

**Date:** 2025-11-26
**Position:** Full Stack Engineer
**Time Limit:** 10 minutes per question (crisp and direct)

---

## Q1: State management tools in Next.js projects?

I use **React Query (TanStack Query)** + **tRPC** for server state, and **React Context + useState** for client state. Chose this because:
- tRPC gives end-to-end type safety from DB to frontend (no manual API typing)
- React Query handles caching, refetching, and optimistic updates automatically
- Avoids Redux boilerplate for simple use cases
- Server Components in Next.js 14 eliminate much state management need

**Impact:** 60% less boilerplate code, automatic cache invalidation, <200ms data fetching. For complex forms, I use React Hook Form + Zod for validation.

---

## Q2: Top 3 favorite npm packages and why?

1. **tRPC** - End-to-end type safety without code generation. Autocomplete for API calls, catches breaking changes at compile time, eliminates manual API documentation.

2. **Drizzle ORM** - Lightweight, type-safe SQL ORM. Better performance than Prisma, SQL-like syntax, excellent TypeScript inference, built-in migrations.

3. **shadcn/ui** - Not an npm package but composable components. Copy-paste into codebase (full control), built on Radix UI (accessible), works perfectly with Tailwind CSS, no black-box dependencies.

---

## Q3: Most complex npm package you've worked with?

**BullMQ** (Redis-based job queue). Challenges:
- Setting up Redis connection in serverless environment (Vercel doesn't support long-running processes)
- Handling job retries, rate limiting, and concurrency
- Debugging failed jobs in production
- Managing separate worker processes

**Solution:** Deployed workers on Railway (not Vercel), implemented custom logging with Telegram alerts, used Redis Cloud for persistence, created admin dashboard to monitor job status. Now processes 1000+ async jobs/day reliably.

---

## Q4: No existing package for common use case - custom solution?

**Use case:** Needed real-time AI article generation with streaming LLM responses, context aggregation from multiple sources (RAG, YouTube transcripts, SERP data), and progress tracking.

**No package existed** for orchestrating multiple AI sources with streaming.

**Custom solution:** Built `contextHandler.js` that:
- Aggregates context from knowledge base (vector search), YouTube API, web scraping
- Streams OpenAI/Google Gemini responses with Server-Sent Events (SSE)
- Handles token limits, context window optimization, retry logic
- Implemented custom chunking algorithm for RAG (1000-char overlapping windows)

Resulted in 100k+ generated articles with <3s first-token latency.

---

## Q5: Publicly hosted projects?

**FinderLaunch:** https://finderlaunch.com (Product launch platform - currently live)
**SemanticPen:** https://semanticpen.com (AI content generation - 10k+ users)
**Portfolio:** https://pushkarsingh.dev (Personal portfolio)

GitHub: https://github.com/pushkarsingh (public repos available)

---

## Q6: Why looking for job? Why leaving previous org? Why apply here? Why hire you? Interest in startup?

**Why looking:** Currently solo founder/bootstrapped. Want to join a team, collaborate with other engineers, and scale impact beyond individual projects.

**Why PropTechBuzz:** Excited about building specialized B2B communities. Your tech stack (Next.js, PostgreSQL) matches my expertise. The fast-track promotion to Head of App Development shows you value high performers - that's my working style.

**Why hire me:** I ship fast, own entire stack, and have proven experience scaling apps (10k+ users). I've built everything you need: admin dashboards, real-time features, payment integration, performance optimization. Can contribute Day 1.

**Startup interest:** Absolutely. I thrive in high-ownership environments. Built 5 products from 0→1. Comfortable with ambiguity, fast iteration, and wearing multiple hats.

---

## Q7: How can you contribute to great B2B Social Media experience?

**Technical contributions:**
- **Performance:** Optimize feed rendering, infinite scroll, image lazy loading (experience with Next/Image, CDN)
- **Real-time features:** Build live notifications, activity feeds using WebSockets/Server-Sent Events
- **Search & Discovery:** Implement fast PostgreSQL full-text search, user/company recommendations
- **Engagement:** Build commenting, upvoting, sharing features (built similar for FinderLaunch)
- **Analytics:** Track user behavior, A/B testing, growth metrics (PostHog experience)

**Product thinking:** Understand community dynamics from building SemanticPen community. Focus on reducing friction, increasing quality interactions, and data-driven iteration.

---

## Q8: Video Introduction (2-5 minutes)

### Video Script Template

**Introduction (30 seconds):**
"Hi, I'm Pushkar Singh, a Full Stack Engineer with 3+ years building production Next.js apps. I've launched 5 SaaS products including SemanticPen with 10k+ users and FinderLaunch, a product launch platform."

**Top 3 Career Highlights (2 minutes):**

**Highlight 1: Built AI-powered RAG system**
"Created a Retrieval-Augmented Generation system using PostgreSQL vector embeddings, sentence transformers, and semantic search. Integrated with OpenAI, Google Gemini, and OpenRouter for multi-LLM support. This powers SemanticPen's content generation - 100k+ articles generated with factually grounded AI."

**Highlight 2: Scaled to 10k+ users**
"Grew SemanticPen from 0 to 10k+ users as a solo founder. Handled entire stack - Next.js frontend, tRPC APIs, PostgreSQL database, payment integration, job queues, deployment. Optimized to <200ms API response times and <3s AI generation latency."

**Highlight 3: Built production-grade admin systems**
"Created comprehensive admin dashboards with real-time analytics (Recharts), feature flags, user management, role-based access control, audit logging, and push notifications. All type-safe with tRPC and fully tested."

**Why PropTechBuzz (1.5 minutes):**
"I'm excited about PropTechBuzz for three reasons:

First, your mission to build specialized B2B communities aligns with my experience. I understand community dynamics from building SemanticPen's user base.

Second, the tech stack is exactly my expertise - Next.js 14, React Server Components, PostgreSQL, TypeScript. I can contribute immediately without ramp-up time.

Third, the fast-track promotion to Head of App Development. I thrive in high-ownership environments. As a solo founder, I've made every architectural decision, shipped features independently, and grown products from scratch. I want to apply that ownership mindset to help PropTechBuzz scale while growing into leadership.

I'm ready to join a team, collaborate with talented engineers, and build world-class B2B social experiences. Let's talk!"

---

## Video Recording Tips

### Equipment:
- Use Mac webcam (good quality)
- Record in well-lit room (face camera, natural light from front)
- Quiet environment
- Professional casual attire

### Recording Options:
1. **Loom** (recommended): https://loom.com - Free, records webcam + screen, shareable link
2. **QuickTime** (Mac built-in): File → New Movie Recording → Upload to Google Drive/YouTube
3. **Zoom**: Record yourself in a Zoom meeting, upload afterward

### Video Structure (2-5 min):
- 0:00-0:30 - Introduction
- 0:30-2:30 - Top 3 highlights (40 sec each)
- 2:30-4:00 - Why PropTechBuzz
- 4:00-4:30 - Closing (enthusiasm, call to action)

### Presentation Tips:
- ✅ Smile, be enthusiastic (they want culture fit)
- ✅ Look at camera, not screen
- ✅ Speak clearly, moderate pace
- ✅ Show personality (they're assessing commitment)
- ✅ Practice once before recording final version
- ✅ Keep it under 5 minutes (respect their time)

---

## Key Talking Points for Video

### Energy & Enthusiasm:
- Show genuine excitement about PropTechBuzz's mission
- Be confident but humble
- Smile and maintain good energy throughout

### Technical Credibility:
- Mention specific numbers (10k+ users, 100k+ articles, <200ms response times)
- Reference real projects (SemanticPen, FinderLaunch)
- Show breadth (full stack) and depth (RAG, AI, performance optimization)

### Culture Fit:
- Emphasize ownership, initiative, and independence
- Show startup mentality (built 5 products 0→1)
- Express eagerness to collaborate with team
- Highlight growth mindset (excited about Head of App Development path)

### Call to Action:
- End with "Let's talk!" or "Looking forward to discussing this further"
- Show you're ready to start immediately
- Express confidence in ability to contribute Day 1

---

## Promo Video Notes

**PropTechBuzz Promo:** https://youtu.be/vgKr-3jOAEw

**Key takeaways to reference:**
- B2B social network for PropTech professionals
- Focus on community, networking, and knowledge sharing
- Need for real-time engagement, quality content discovery
- Importance of user experience and performance

**How to tie into your answer (Q7):**
"After watching your promo video, I understand PropTechBuzz is building a professional community for PropTech. I can contribute by building fast, engaging features like real-time activity feeds, smart content recommendations using PostgreSQL full-text search, and optimized image loading for property listings. My experience with community features in FinderLaunch (commenting, upvoting, sharing) directly applies here."

---

## Follow-up Timeline

**If shortlisted:**
- Quick screening call or email from HR
- Role will be closed within a week
- Be ready for technical questions about Next.js, performance optimization, and architecture decisions

**Preparation:**
- Review Next.js 14 Server Components, caching strategies, image optimization
- Be ready to explain tRPC, Drizzle ORM, BullMQ architecture decisions
- Prepare examples of performance optimization work
- Have GitHub repos ready to share (if asked)

---

## Notes

- Keep answers crisp and direct (10 min max per question)
- Video is mandatory - applications without video are auto-rejected
- They value commitment and passion
- Fast-track promotion shows they reward high performers
- PropTech domain knowledge is a bonus but not required
- Focus on technical skills, ownership mindset, and startup fit

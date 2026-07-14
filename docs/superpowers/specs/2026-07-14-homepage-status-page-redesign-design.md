# Homepage Redesign: "Status Page" Design

## Context

The current homepage (Hero, Skills, Projects, OpenSource, Contact) uses a generic
bento-grid layout with violet/indigo gradients and soft `framer-motion` fade-ins —
a look common to AI-generated portfolios. This spec redesigns the whole homepage
around a single, distinctive concept grounded in who the site is about: someone
who builds *and operates* live SaaS products, not just someone who has built
things in the past.

## Concept

Treat the homepage like an internal systems-status dashboard. Projects are
"services" with live/archived status, real stats, and a recurring status-dot +
waveform motif. The real content already supports this without invention:
live demo URLs, real stats (`5,000+ Active Jobs`, `988+ Curated Projects`,
`<2s validation`), and real merged-PR metadata (additions/deletions/files).

## Design Tokens

### Color

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0D1012` | base background |
| `surface` | `#161B1F` | card/row elevation |
| `amber` | `#F2A65A` | primary accent — headings, CTAs, highlights |
| `cyan` | `#5FB3C7` | secondary accent — links, waveform trace |
| `signal` | `#3ECF8E` | reserved only for "live/operational" status dots |
| `text` | `#C7CDD1` (primary) / `#6B7278` (muted) | body / caption text |

Two accents with distinct jobs (amber = brand/decoration, cyan = secondary/
waveform, green = status-only semantics) — deliberately avoids the "one bright
accent on near-black" cliché.

### Light mode

The existing site has a working light/dark toggle (`next-themes`); it stays.
Dark is the primary/native mode for this concept, but light mode gets its own
tuned values rather than being an afterthought — same roles, same signature
(status dot + waveform), deepened accents for AA text contrast on a light
background:

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F5F6F4` | base background (cool-neutral, not warm cream) |
| `surface-light` | `#EAECE9` | card/row elevation |
| `amber-light` | `#B5661E` | deepened amber — headings/CTA text-safe on paper |
| `cyan-light` | `#1F7285` | deepened cyan — link/waveform text-safe on paper |
| `signal-light` | `#1E8F5E` | deepened signal green — status text-safe on paper |
| `text-light` | `#1B1F22` (primary) / `#5B6167` (muted) | body / caption text |

Small decorative graphics (status dot fill, waveform stroke) may keep the more
saturated dark-mode hues even in light mode as long as they pass a
non-text contrast check against their immediate background — only text and
icon-as-information uses require the deepened values above.

Implementation-wise, extend the existing shadcn-style CSS custom properties in
`src/styles/globals.css` (`--background`, `--foreground`, `--primary`, etc.)
with new tokens (`--signal`, `--amber`, `--cyan`, `--waveform`) defined once in
`:root` and once in `.dark`, rather than introducing a parallel token system.

### Type

- Display — **Space Grotesk**, bold, tight tracking. Headlines only, used sparingly.
- Body — **Inter**. Descriptions, paragraphs.
- Utility/mono — **IBM Plex Mono**. Status labels, timestamps, stack tags, stat
  numbers. Carries most of the personality of the page.

### Signature element

The pulsing status dot + animated waveform trace, recurring across Hero,
Projects, Open Source, and Contact — reinforcing "this person runs things in
production," backed by real data rather than decoration.

## Section-by-Section

### Hero

Two-zone layout: left is name/title/intro in display type; right is a
"services" strip listing the featured live products, each as a monitored
service row:

```
┌──────────────────────────────────────────────────────────────┐
│  PUSHKAR KATHAYAT                     services ───────────┐  │
│  Full-Stack Engineer                  │ ● verifyforge     │  │
│                                        │   <2s validation  │  │
│  I build and operate production        │  ~∿∿∿∿∿∿∿∿∿∿∿∿   │  │
│  SaaS systems — email infra, job       │ ● realjobs        │  │
│  platforms, AI content pipelines.      │   5,000+ jobs     │  │
│                                        │  ~∿∿∿∿∿∿∿∿∿∿∿∿   │  │
│  [ View Projects ]  [ Get in Touch ]   │ ● finderlaunch    │  │
│                                        │   988+ projects   │  │
│                                        │  ~∿∿∿∿∿∿∿∿∿∿∿∿   │  │
└──────────────────────────────────────────────────────────────┘
```

Each row's dot + stat + waveform trace pulls from the existing `stats` field on
each featured project (`VerifyForge`, `Real Jobs From Anywhere`,
`FinderLaunch`) — no new copy needed.

### Stack (renamed from "Skills")

The existing 6 categories (Frontend / Backend / Cloud & DevOps / Database /
Auth & Payments / Tools & Practices) are already a true structural split of the
stack, so the grouping stays as-is. Re-skin only: mono chips grouped under
layer labels, quieter surfaces, no gradient icon badges.

### Projects → Services table

Replace the card grid with a literal services table. Status field is honest,
not decorative:

- `● live` (signal green) — projects with a working `demo` URL: VerifyForge,
  Real Jobs From Anywhere, FinderLaunch, Semantic Pen.
- `◐ archived` (amber) — code/case-study projects with no live demo: Medical
  Imaging Platform.

```
● live      VerifyForge           <2s validation     [Next.js·tRPC·Postgres·Redis]  →
● live      Real Jobs Anywhere    5,000+ jobs         [Next.js·tRPC·Better Auth]     →
● live      FinderLaunch          988+ projects       [Next.js·Dodo Payments]        →
● live      Semantic Pen          AI content platform [Next.js·LLM·AWS]              →
◐ archived  Medical Imaging       case study          [Django·Celery·OpenAI]         →
```

Row hover: lift 2px, surface lightens slightly, waveform trace briefly
brightens.

### Open Source → Activity log

Existing PR data (number, title, description, labels, additions/deletions/
files, merged status) renders directly as log entries:

```
✓ merged   #30358   fix(discord): support applied_tags for forum threads   +56 −6   6 files
✓ merged   #30266   fix(slack): wrap session key in backticks              +15 −6   4 files
```

### Contact → Availability line

Replace the large gradient contact card with a single status bar:
`● available for work`, followed by the existing four social links
(GitHub, LinkedIn, Twitter, Email) as a quiet row underneath.

## Motion Plan

Uses the existing `motion` (framer-motion) dependency already in the project.

- **Boot sequence** (Hero only): service rows fade/scale in one at a time
  (~100ms stagger) on page load — the one orchestrated moment for the page.
- **Waveform**: continuous, slow, low-amplitude SVG trace under each service/
  project row. Ambient, not attention-grabbing.
- **Scroll reveals**: one fade+rise per section on entering viewport (same
  restraint as the current implementation, re-skinned).
- **Hover**: project/PR rows lift 2px, surface lightens, waveform briefly
  brightens.
- **Reduced motion**: waveform animation and stagger delays disabled via
  `useReducedMotion`; instant fades only.

## Accessibility & Responsiveness

- Maintain visible keyboard focus states on all interactive rows/links.
- Respect `prefers-reduced-motion` (see Motion Plan).
- Responsive down to 375px: services strip and services table stack to a
  single column; below the `sm` breakpoint, waveform traces render as a static
  (non-animated) line to preserve row density on small screens.
- Color contrast: verify `text`/`muted` against `ink`/`surface` meet WCAG AA
  before finalizing.

## Out of Scope

- Navbar redesign (not mentioned in brief; keep as-is unless it clashes
  visually with the new palette, in which case restyle colors only, not
  structure).
- Blog page/post templates.
- Content changes beyond what's needed to fit the services-table/activity-log
  format (no new projects or PRs invented).

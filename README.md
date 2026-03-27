# Portfolio — Balaji Jegadeesh Vijayaraghavan

Personal portfolio. Dark Systems Console aesthetic — near-black background, electric blue accent, Space Mono headings, IBM Plex Sans body.

**Stack**: Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

---

## Quick Start

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # production build
```

---

## Project Structure

```
/data/                    ← ALL CONTENT LIVES HERE
  links.ts                ← external links (github, linkedin, email, resume)
  projects.ts             ← project cards content
  skills.ts               ← tech skill groups
  metrics.ts              ← impact numbers
  research.ts             ← publication info
  about.ts                ← bio + trait cards
  capabilities.ts         ← "What I Build" section
  navigation.ts           ← nav links + command palette items
  status.ts               ← status strip cycling messages

/components/
  StatusStrip.tsx         ← cycling system status bar (top of page)
  CommandPalette.tsx      ← ⌘K command palette for section navigation
  Navbar.tsx              ← sticky nav with VBJ logo + active states
  Footer.tsx
  /sections/
    Hero.tsx              ← left-aligned layout + terminal panel
    WhatIBuild.tsx        ← 5 capability tiles
    FeaturedWork.tsx      ← engineering-tool style project cards
    Impact.tsx            ← animated counter metrics
    TechStack.tsx         ← grouped skill table
    Research.tsx          ← publication card
    About.tsx             ← bio + trait cards
    Contact.tsx           ← clean links, no form

/app/
  layout.tsx              ← fonts (Space Mono + IBM Plex Sans), metadata
  page.tsx                ← assembles all sections
  globals.css             ← design tokens, grain texture, dot grid

/public/
  resume.pdf              ← ADD YOUR RESUME HERE
```

---


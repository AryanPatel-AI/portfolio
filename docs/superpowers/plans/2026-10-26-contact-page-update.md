# Contact Page Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update only `src/app/contact/page.tsx` to reproduce the reference layout (contact intro with right-aligned email card, 5 responsive social profile cards, and compact diamond/gold footer with subtle landscape backdrop) while preserving the portfolio's luxury editorial design system (#f8eddb cream, #211e19 ink, #b49368 antique gold, Playfair/Cinzel/DM Sans fonts).

**Architecture:** Single-page update to `src/app/contact/page.tsx` as a React client component. Semantic HTML hierarchy (`<header>`, `<main>`, `<section>`, `<footer>`), inline SVG icons (mail, github, linkedin, camera/instagram, user/instagram, gamepad/gaming), responsive CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-5`), and responsive flexbox for header and intro section.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, Lucide/Inline SVG icons matching existing design tokens.

**Spec:** User request specifying 3 structures:
1. Contact introduction (Eyebrow: "LET'S CONNECT", Heading: "Get In Touch", Description: "Feel free to reach out...", Right-aligned email contact card with envelope icon, email, and "Send Email →" mailto link).
2. My Social Profiles (5 evenly spaced cards: GitHub, LinkedIn, Photography IG, Personal IG, Gaming IG with platform icon, name, handle, description, "View Profile →" link with target="_blank" and rel="noopener noreferrer").
3. Compact Footer (Centered diamond brand mark, "Let's build something amazing together.", row of gold social icons linking to 5 profiles, subtle landscape background treatment).

## Global Constraints
- Target file: `src/app/contact/page.tsx` ONLY.
- Color palette: Original cream (`#f8eddb`), ink (`#211e19`), antique gold (`#b49368`), brown accents (`#77573a`, `#806648`), light parchment backgrounds (`#eee0cb`, `#f2e5d3`, `#dfc7a6`).
- Typography: Playfair Display for editorial headings, DM Sans for body/handles, Cinzel/DM Sans uppercase tracked kickers.
- Do not touch `src/app/page.tsx`, `globals.css`, or other routes.
- Fully responsive: 5 cards on desktop, 2-3 on tablet, 1 on mobile.
- Accessible: semantic headings (`<h1>`, `<h2>`), proper `aria-label`s, focus outlines, `mailto:aryanpatel66871@gmail.com`.

## Review Focus
- Five-card grid responsiveness across mobile (375px), tablet (768px), desktop (1024px, 1280px+).
- Correct mailto link formatting (`mailto:aryanpatel66871@gmail.com`).
- External link security attributes (`target="_blank"` and `rel="noopener noreferrer"`).
- Exact copy matching the user prompt for labels, handles, URLs, and titles.
- Landscape background treatment subtle and non-intrusive in footer using existing asset `/images/photography/landscapes/mountain-valley-vista.jpg`.

---

### Task 1: Design and Code the Contact Page (`src/app/contact/page.tsx`)
**Files:**
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Page component: `export default function ContactPage()`
- Data structures: `socialProfiles` array containing icon, name, handle, url, description, kicker/category.

- [ ] **Step 1: Draft the social profile models and icons**
- [ ] **Step 2: Construct Header with mobile navigation toggle support**
- [ ] **Step 3: Implement Section 1 (Contact Introduction + Right-aligned Email Card)**
- [ ] **Step 4: Implement Section 2 (My Social Profiles 5-column responsive grid)**
- [ ] **Step 5: Implement Section 3 (Compact Footer with diamond mark, copy, gold icons, subtle landscape backdrop)**
- [ ] **Step 6: Verify TypeScript types and build via `npm run build`**
- [ ] **Step 7: Visually verify using browser subagent or inspect rendered page**

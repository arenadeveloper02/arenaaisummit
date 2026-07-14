# Repository Summary: arenaaisummit

> Auto-maintained by Sim Development. Last updated: 2026-07-14T07:43:52.610Z.

## Overview

ARENA AI Summit 2026 — light-themed, full-screen conference landing page with imagery, agenda, speakers, pricing, registration, contact, and newsletter backed by Neon Postgres.

**Repository:** `arenaaisummit`  
**File count:** 37

## Features

- Light theme across the entire site
- Full-screen hero banner with conference imagery
- Photography in About and Experience sections
- Countdown timer and animated stats
- Agenda tabs, speakers grid, pricing, FAQ
- Registration, contact, and newsletter forms persisted via Prisma

## Tech Stack

- Next.js ^15.3.3 (App Router)
- React ^19.0.0
- Tailwind CSS v3
- TypeScript
- Prisma + PostgreSQL (Neon on Vercel)

## Infrastructure

- **DATABASE_URL:** set on Vercel when Neon is connected — do not commit real credentials

## Routes & Pages

- `/` — `app/page.tsx`

## Database Models

- `Registration`
- `ContactMessage`
- `NewsletterSubscriber`

## File Inventory

### App pages

- `app/globals.css`
- `app/layout.tsx`
- `app/not-found.tsx`
- `app/page.tsx`

### API routes

- `app/api/contact/route.ts`
- `app/api/newsletter/route.ts`
- `app/api/register/route.ts`

### Components

- `components/About.tsx`
- `components/Agenda.tsx`
- `components/Contact.tsx`
- `components/Experience.tsx`
- `components/FAQ.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Newsletter.tsx`
- `components/Pricing.tsx`
- `components/RegistrationForm.tsx`
- `components/SectionHeading.tsx`
- `components/Speakers.tsx`
- `components/Sponsors.tsx`
- `components/Testimonials.tsx`

### Libraries

- `lib/actions.ts`
- `lib/data.ts`
- `lib/prisma.ts`
- `lib/types.ts`
- `prisma/schema.prisma`

### Config

- `.env.example`
- `next-env.d.ts`
- `next.config.ts`
- `package-lock.json`
- `package.json`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `tsconfig.json`

### Other

- `README.md`
- `REPO_SUMMARY.md`

## Complete File Index

- `.env.example`
- `README.md`
- `REPO_SUMMARY.md`
- `app/api/contact/route.ts`
- `app/api/newsletter/route.ts`
- `app/api/register/route.ts`
- `app/globals.css`
- `app/layout.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `components/About.tsx`
- `components/Agenda.tsx`
- `components/Contact.tsx`
- `components/Experience.tsx`
- `components/FAQ.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Newsletter.tsx`
- `components/Pricing.tsx`
- `components/RegistrationForm.tsx`
- `components/SectionHeading.tsx`
- `components/Speakers.tsx`
- `components/Sponsors.tsx`
- `components/Testimonials.tsx`
- `lib/actions.ts`
- `lib/data.ts`
- `lib/prisma.ts`
- `lib/types.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package-lock.json`
- `package.json`
- `postcss.config.mjs`
- `prisma/schema.prisma`
- `tailwind.config.ts`
- `tsconfig.json`

## Latest Change

- **Updated at:** 2026-07-14T07:43:52.610Z
- **Request:** change the theme to light theme, add some images as well  for the banner, and wherever required add images .. make it full screen

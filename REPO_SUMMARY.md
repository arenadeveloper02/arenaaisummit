# Repository Summary: arenaaisummit

> Auto-maintained by Sim Development. Last updated: 2026-07-14T09:03:30.101Z.

## Overview

ARENA AI Summit 2026 — conference landing page with speakers, agenda, tickets, registration, contact, and newsletter.

**Repository:** `arenaaisummit`  
**File count:** 38

## Features

- Real speaker profile photos pulled from their public social profiles with graceful initials fallback
- High-contrast hero banner with dark overlay so the conference imagery is clearly visible
- Header adapts between light-on-dark (over hero) and dark-on-white (scrolled) styles
- Countdown, animated stats, agenda tabs, pricing, registration, contact, and newsletter forms backed by Prisma

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
- `lib/speakers.ts`
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
- `lib/speakers.ts`
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

- **Updated at:** 2026-07-14T09:03:30.101Z
- **Request:** the profile pictures are not coming in Featured Speakers
pick from their linkdein profile ... 
Alos the banner image is not so evident wiht white background ... make it more evident

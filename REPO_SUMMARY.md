# Repository Summary: arenaaisummit

> Auto-maintained by Sim Development. Last updated: 2026-07-14T08:54:23.074Z.

## Overview

ARENA AI Summit 2026 — conference landing page with real speaker lineup, profile pictures, agenda, tickets, registration, contact, and newsletter backed by Neon Postgres.

**Repository:** `arenaaisummit`  
**File count:** 38

## Features

- Updated speaker lineup with Andrew Ng, Fei-Fei Li, Cassie Kozyrkov, Allie K. Miller, Harrison Chase, Clem Delangue, Aravind Srinivas, Ali Ghodsi, and Rajiv Parikh
- Profile pictures rendered for every speaker card with real LinkedIn profile links
- Agenda updated to reference the new speaker lineup
- Ticket pricing, registration form, contact form, and newsletter signup persisted via Prisma
- Responsive Tailwind UI with countdown hero and FAQ

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

- **Updated at:** 2026-07-14T08:54:23.074Z
- **Request:** try to add profile pictures for 
People Building the Future
Here are their linkedin Profiles 
https://www.linkedin.com/in/rajivparikh/

Alos change the pannel list to tjhe below 

Speaker	Current Role	Organization	LinkedIn
Andrew Ng	Founder	DeepLearning.AI & AI Fund	Andrew Ng LinkedIn
Fei-Fei Li	Founder	World Labs, Professor at Stanford	Fei-Fei Li LinkedIn
Cassie Kozyrkov	AI & Decision Intelligence Speaker	Independent	Cassie Kozyrkov LinkedIn
Allie K. Miller	AI Advisor	Fortune 500 Companies	Allie K. Miller LinkedIn
Harrison Chase	CEO	LangChain	Harrison Chase LinkedIn
Clem Delangue	CEO	Hugging Face	Clément Delangue LinkedIn
Aravind Srinivas	CEO	Perplexity AI	Aravind Srinivas LinkedIn
Ali Ghodsi	CEO	Databricks	Ali Ghodsi LinkedIn





Andrew Ng — https://www.linkedin.com/in/andrewyng
Fei-Fei Li — https://www.linkedin.com/in/fei-fei-li-4541247
Cassie Kozyrkov — https://www.linkedin.com/in/cassiekozyrkov
Allie K. Miller — https://www.linkedin.com/in/alliekmiller
Harrison Chase — https://www.linkedin.com/in/harrison-chase-3b6a6313
Clément Delangue — https://www.linkedin.com/in/clementdelangue
Aravind Srinivas — https://www.linkedin.com/in/aravind-srinivas-16051987
Ali Ghodsi — https://www.linkedin.com/in/alighodsi

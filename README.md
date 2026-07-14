# ARENA AI Summit 2026

A production-ready landing page for **ARENA AI Summit 2026** — Where Intelligence Meets Innovation. Two days of keynotes, workshops, and networking with global AI leaders, September 17–18, 2026 at the Bengaluru International Convention Centre.

## Features

- Sticky glassmorphism header with active-section highlighting and an accessible mobile menu (Escape dismissal, background scroll lock)
- Hero with hydration-safe live countdown to the event, animated statistics, and a CSS-only AI-inspired visual
- Featured speaker grid with a working View All expansion (fictional, clearly labeled profiles)
- Two-day agenda timeline with tabbed day switching and session-type badges
- Ticket pricing cards that preselect the chosen ticket and scroll to the registration form
- Registration form with React Hook Form + Zod client validation, server-side Zod validation, and Postgres persistence via Prisma
- Contact form with honeypot spam trap and basic in-memory rate limiting
- Newsletter subscription backed by a server API route
- Accessible FAQ accordion, footer policy modals, back-to-top control, skip link, and reduced-motion support
- Full SEO metadata, Open Graph/Twitter cards, and JSON-LD Event structured data

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 3
- Prisma + Neon Postgres
- React Hook Form + Zod
- lucide-react icons

## Local Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL` to a Postgres connection string (Neon recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

The production build runs `prisma generate && prisma db push && next build`, so the database schema is created automatically on deploy.

## Deploy Notes

- On Vercel with a connected Neon database, `DATABASE_URL` is injected automatically.
- Form submissions (registrations, contact messages, newsletter subscribers) are stored in Postgres — no external email provider is required.
- Contact addresses use the `.example` domain to indicate demonstration contact details.

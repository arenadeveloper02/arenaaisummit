# Repository Summary: ARENA AI Summit 2026

> Auto-maintained by Sim Development. Last updated: 2026-07-14T07:18:57.127Z.

## Overview

A production-ready, dark-premium landing page for the ARENA AI Summit 2026 technology conference in Bengaluru — featuring a live countdown, speaker grid, two-day agenda timeline, ticket pricing, validated registration/contact/newsletter forms backed by Postgres, an accessible FAQ accordion, and full SEO/structured-data support.

**Repository:** `arenaaisummit`  
**File count:** 37

## Features

- Sticky glassmorphism header with active-section highlighting, accessible mobile menu (Escape dismissal, scroll lock)
- Hero with hydration-safe live countdown to Sep 17 2026, animated count-up statistics, and CSS gradient AI visual
- Featured speaker grid with expandable View All action, fictional profiles, and accessible social links
- Two-day agenda timeline with tabbed day switching, session-type badges, and icons
- Ticket pricing cards with real ticket preselection that scrolls to the registration form
- Registration form with React Hook Form + Zod validation, server-side Zod validation, and Prisma persistence
- Contact form with honeypot spam trap and in-memory rate limiting; newsletter subscription API
- Accessible FAQ accordion with aria-expanded and animated transitions
- Footer with working Privacy/Terms/Code of Conduct modals and back-to-top control
- Complete SEO metadata, Open Graph/Twitter cards, and JSON-LD Event structured data
- WCAG-minded: skip link, focus rings, reduced-motion support, aria-live form status regions

## Tech Stack

- Next.js ^15.3.3 (App Router)
- React ^19.0.0
- Tailwind CSS v3
- TypeScript
- Prisma + PostgreSQL (Neon on Vercel)

## Infrastructure

- **Neon project ID:** `patient-rain-34054213` — managed by Sim Development; do not delete or replace
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
- `.gitignore`
- `next-env.d.ts`
- `next.config.ts`
- `package.json`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `tsconfig.json`

### Other

- `README.md`
- `REPO_SUMMARY.md`

## Complete File Index

- `.env.example`
- `.gitignore`
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
- `package.json`
- `postcss.config.mjs`
- `prisma/schema.prisma`
- `tailwind.config.ts`
- `tsconfig.json`

## Latest Change

- **Updated at:** 2026-07-14T07:18:57.127Z
- **Request:** Build and Deploy a Production-Ready “ARENA AI Summit 2026” Landing Page
Build a complete, modern, production-ready event landing page for a technology conference called ARENA AI Summit 2026.
The application must be fully functional, visually polished, responsive, accessible, SEO-friendly, and ready for deployment. Do not create placeholder sections, non-functional buttons, empty forms, broken links, dummy interactions, or incomplete components.

1. Event Information
Use the following event identity throughout the website.
Event Name
ARENA AI Summit 2026
Tagline
Where Intelligence Meets Innovation
Event Date
September 17–18, 2026
Location
Bengaluru International Convention Centre, Bengaluru, India
Event Description
ARENA AI Summit 2026 brings together global AI leaders, researchers, founders, developers, investors, and enterprise decision-makers for two days of keynotes, technical sessions, live demonstrations, workshops, and networking.
The summit should feel premium, innovative, forward-looking, and credible.

3. Design Direction
Create a visually impressive technology-event design.
Visual Style
Use:
	•	A dark premium background
	•	Deep navy, charcoal, or near-black surfaces
	•	Electric blue, purple, cyan, and subtle magenta accents
	•	Soft gradient backgrounds
	•	Glassmorphism used selectively
	•	Subtle grid, glow, particle, or abstract AI-inspired background effects
	•	Large modern typography
	•	Strong visual hierarchy
	•	Spacious layout
	•	Rounded cards
	•	Soft shadows and borders
	•	Smooth hover transitions
The visual direction should feel similar to a premium global technology conference rather than a generic corporate template.
Typography
Use a modern Google font such as:
	•	Inter
	•	Geist
	•	Manrope
	•	Plus Jakarta Sans
Use a bold display style for headings and a highly readable style for body text.
Global Design Requirements
	•	Use a consistent max-width container.
	•	Maintain consistent vertical spacing.
	•	Use a reusable section heading component.
	•	Ensure sufficient text contrast.
	•	Avoid overly saturated backgrounds behind long text.
	•	Use responsive font sizes with Tailwind breakpoints or clamp().
	•	Use visible keyboard focus states.
	•	Use subtle section separators.
	•	Do not overcrowd sections.

4. Header and Navigation
Create a sticky, semi-transparent header with backdrop blur.
The header must contain:
	•	ARENA AI Summit 2026 logo or styled text logo
	•	Navigation links:
	◦	Home
	◦	Speakers
	◦	Agenda
	◦	Tickets
	◦	FAQ
	◦	Contact
	•	“Get Tickets” primary call-to-action button
Header Behavior
	•	Header remains visible while scrolling.
	•	Clicking navigation links smoothly scrolls to the correct section.
	•	Highlight the active navigation section where practical.
	•	On mobile, replace desktop navigation with a menu button.
	•	The mobile menu must open and close correctly.
	•	Close the mobile menu when a navigation link is selected.
	•	Support Escape key dismissal.
	•	Prevent background scrolling while the mobile menu is open.
	•	Ensure the mobile menu is accessible to keyboard and screen-reader users.

5. Hero Section
Create a full-width hero section above the fold.
The hero must include:
	•	Small conference badge:
	◦	“September 17–18, 2026 · Bengaluru”
	•	Main headline:
	◦	“Shape the Future of Artificial Intelligence”
	•	Supporting copy explaining the value of the summit
	•	Primary CTA:
	◦	“Reserve Your Seat”
	•	Secondary CTA:
	◦	“Explore the Agenda”
	•	Event date and location
	•	A countdown timer
	•	Trust or attendance indicators
	•	A premium AI-themed visual treatment
Suggested Hero Copy
“Join the world’s leading AI researchers, founders, builders, and business leaders for two transformative days of ideas, innovation, and meaningful connections.”
Countdown Timer
Create a functional countdown timer targeting September 17, 2026.
Display:
	•	Days
	•	Hours
	•	Minutes
	•	Seconds
Requirements:
	•	Update every second.
	•	Do not cause hydration mismatch errors.
	•	Ensure timers are cleaned up properly.
	•	When the event date is reached, replace the timer with:
	◦	“ARENA AI Summit 2026 is now live.”
Hero Statistics
Include four statistics:
	•	3,000+ Attendees
	•	80+ Global Speakers
	•	40+ Sessions
	•	25+ Countries
Animate statistics subtly when they enter the viewport.
Hero Visual
Create an abstract AI-inspired visual using CSS, gradients, SVG, canvas, or carefully selected optimized imagery.
Possible visual concepts:
	•	A glowing AI network
	•	Abstract neural nodes
	•	Futuristic globe
	•	Layered gradient orb
	•	Digital intelligence grid
The visual must remain performant and responsive.

6. Partner and Sponsor Strip
Add a “Trusted by Industry Leaders” section immediately after the hero.
Show six sponsor or partner names using tasteful text-based logos or simple logo placeholders:
	•	OpenAI
	•	NVIDIA
	•	Microsoft
	•	Google Cloud
	•	AWS
	•	Anthropic
Use monochrome styling by default and reveal color or increased opacity on hover.
Do not use unlicensed logo files. Text-based representations are acceptable.

7. About the Summit Section
Create a section explaining why someone should attend.
Include:
	•	Section label
	•	Strong heading
	•	Two-paragraph description
	•	Four feature cards
Feature cards:
	1	Visionary Keynotes Hear from leaders shaping the future of artificial intelligence.
	2	Practical AI Sessions Learn how organizations are deploying generative AI, agents, automation, and machine learning.
	3	Meaningful Networking Connect with founders, engineers, executives, researchers, and investors.
	4	Live Innovation Experience product launches, demonstrations, startup showcases, and interactive labs.
Each card must include:
	•	Icon
	•	Title
	•	Description
	•	Hover state

8. Featured Speakers Section
Create a responsive speaker grid.
Include at least eight speakers.
Use realistic fictional speaker profiles so that the website does not falsely claim real people are participating.
Suggested speakers:
0 Rajiv Parikh
Growth Marketing CEO | GTM Community Builder

	1	Dr. Maya Rao Chief AI Scientist, QuantumScale
	2	Daniel Kim Founder and CEO, NeuralForge
	3	Aisha Patel VP of Generative AI, Nova Systems
	4	Lucas Martin Director of AI Research, FutureMind Labs
	5	Priya Nair Co-founder, Responsible Intelligence Institute
	6	Ethan Williams Head of AI Infrastructure, CloudSphere
	7	Sofia Chen Robotics and Embodied AI Researcher
	8	Arjun Mehta Managing Partner, Horizon AI Ventures
Speaker Card Content
Each speaker card must show:
	•	Professional portrait
	•	Full name
	•	Role
	•	Organization
	•	Session topic
	•	LinkedIn icon
	•	X or website icon
Speaker Card Behavior
	•	Use optimized images.
	•	Add subtle image zoom on hover.
	•	Display speaker details cleanly.
	•	Social icons must have accessible labels.
	•	Social links can use safe placeholder profile URLs, but they must open correctly in a new tab.
	•	Include proper rel="noopener noreferrer" attributes.
Add a “View All Speakers” button that expands or reveals additional speakers, or scrolls to an extended speaker list. The button must perform a real action.

9. Agenda Timeline
Create a polished agenda section with tabs for:
	•	Day 1 — September 17
	•	Day 2 — September 18
The active day must be visually clear.
Day 1 Agenda
8:00 AM
Registration and Networking Breakfast
9:00 AM
Opening Keynote: The Intelligence Revolution
Speaker: Dr. Maya Rao
10:00 AM
Building Reliable Enterprise AI Systems
Speaker: Aisha Patel
11:00 AM
Networking Break
11:30 AM
Panel: From AI Experiments to Business Impact
Speakers: Daniel Kim, Priya Nair, Arjun Mehta
1:00 PM
Lunch and Startup Showcase
2:00 PM
The Rise of Autonomous AI Agents
Speaker: Lucas Martin
3:00 PM
Technical Workshop: Building Production-Ready RAG Systems
Speaker: Ethan Williams
4:30 PM
Responsible AI and Global Governance
Speaker: Priya Nair
6:00 PM
ARENA AI Summit Networking Reception
Day 2 Agenda
8:30 AM
Breakfast and Community Networking
9:30 AM
Keynote: AI Beyond the Screen
Speaker: Sofia Chen
10:30 AM
Multimodal AI in the Real World
Speaker: Lucas Martin
11:30 AM
Networking Break
12:00 PM
AI Infrastructure at Global Scale
Speaker: Ethan Williams
1:00 PM
Lunch
2:00 PM
Investor Panel: Funding the Next AI Breakthrough
Speaker: Arjun Mehta
3:00 PM
Workshop: Designing Safe and Observable AI Agents
Speaker: Aisha Patel
4:30 PM
Closing Keynote: Building the Human-AI Future
Speaker: Daniel Kim
5:30 PM
Closing Remarks and Community Meetup
Agenda UI Requirements
Each agenda item must include:
	•	Time
	•	Session title
	•	Speaker or session type
	•	Track badge where relevant
	•	Session type icon
	•	Vertical timeline styling
Use badges such as:
	•	Keynote
	•	Panel
	•	Workshop
	•	Networking
	•	Break
	•	Showcase
On mobile, the timeline must remain readable and must not overflow horizontally.

10. Event Experience Section
Add a section highlighting the summit experience with image cards or visual panels.
Include:
	•	Main Stage
	•	Technical Workshops
	•	Startup Showcase
	•	Executive Networking
	•	AI Product Demonstrations
	•	Investor Meetings
Each item should contain:
	•	Visual
	•	Title
	•	Brief description
Use a responsive mosaic or bento-grid layout.

11. Testimonials
Create a testimonial section with at least three attendee testimonials.
Clearly label them as testimonials from previous technology events organized by the fictional summit team, rather than claiming they attended ARENA AI Summit 2026.
Suggested testimonials:
“An exceptional mix of technical depth and strategic insight. I left with ideas we could immediately apply.”
“The quality of conversations was outstanding. I met founders, researchers, and enterprise leaders in one place.”
“One of the few conferences where the technical sessions and executive discussions were equally valuable.”
For each testimonial, include:
	•	Name
	•	Role
	•	Company
	•	Avatar
	•	Testimonial text
	•	Five-star visual indicator
Use either a responsive grid or accessible carousel. If using a carousel:
	•	Include previous and next controls.
	•	Support keyboard navigation.
	•	Do not automatically rotate too quickly.
	•	Pause automatic rotation when hovered or focused.

12. Pricing Section
Create three ticket pricing cards.
Explorer Pass
Price: ₹9,999
Include:
	•	Access to both conference days
	•	Keynotes and panel sessions
	•	Exhibition and startup showcase
	•	Networking application
	•	Digital session recordings
CTA: “Choose Explorer”
Professional Pass
Price: ₹19,999
Mark this as “Most Popular.”
Include:
	•	Everything in Explorer
	•	Technical workshops
	•	Reserved session seating
	•	Speaker meet-and-greet access
	•	Networking reception
	•	Certificate of participation
CTA: “Choose Professional”
Executive Pass
Price: ₹39,999
Include:
	•	Everything in Professional
	•	Executive lounge access
	•	Private roundtable sessions
	•	Priority event check-in
	•	Investor and founder networking
	•	Premium dinner invitation
CTA: “Choose Executive”
Pricing Behavior
	•	Pricing buttons must work.
	•	When a user selects a ticket, scroll to or open a registration form.
	•	Automatically preselect the chosen ticket type.
	•	Display prices clearly in Indian rupees.
	•	Mention that applicable taxes may be added.
	•	Add hover states and accessible focus states.
	•	Make the Professional card visually prominent without making other options difficult to read.
Add an optional early-bird notice:
“Early-bird pricing ends July 31, 2026.”
Do not create artificial urgency through fake live purchase counters.

13. Registration Form
Add a registration form or ticket-interest form.
Fields:
	•	Full name
	•	Work email
	•	Phone number
	•	Company
	•	Job title
	•	Country
	•	Ticket type
	•	Number of tickets
	•	Dietary requirements, optional
	•	Consent checkbox
	•	Submit button
Form Validation
Use React Hook Form and Zod.
Validation requirements:
	•	Full name is required.
	•	Work email must be valid.
	•	Phone number must be valid.
	•	Company is required.
	•	Job title is required.
	•	Country is required.
	•	Ticket type is required.
	•	Ticket quantity must be between 1 and 10.
	•	Consent must be selected.
	•	Show inline validation errors.
	•	Place focus on the first invalid field after a failed submission.
	•	Disable the submit button during submission.
	•	Prevent duplicate submissions.
Submission Behavior
Create a functional API endpoint using a Next.js route handler.
The route must:
	1	Accept POST requests.
	2	Validate the payload server-side with Zod.
	3	Reject malformed requests.
	4	Apply basic sanitization.
	5	Return structured JSON responses.
	6	Handle errors safely without exposing internal details.
If no external database or email provider is configured:
	•	Save registration submissions using a clearly documented local development fallback.
	•	In production, use a safe server-side integration or provide configuration support for Supabase, PostgreSQL, Resend, or another supported service.
	•	Never pretend that submissions were saved when they were not.
	•	Display a clear configuration warning in development if persistence is unavailable.
After successful submission, show:
	•	Success message
	•	Registration summary
	•	Selected ticket type
	•	Next-step message
Suggested success copy:
“Thank you for registering your interest in ARENA AI Summit 2026. Our event team will contact you with ticket confirmation and payment details.”

14. FAQ Section
Create an accessible FAQ accordion with at least eight questions.
Questions:
	1	Who should attend ARENA AI Summit 2026?
	2	Where is the summit taking place?
	3	Are workshop sessions included with every ticket?
	4	Will session recordings be available?
	5	Can I transfer my ticket to another person?
	6	Are group discounts available?
	7	Will meals be provided?
	8	How can my company become a sponsor?
	9	Is the venue accessible?
	10	What is the cancellation policy?
FAQ Requirements
	•	Only expand an answer when clicked.
	•	Use semantic buttons.
	•	Include aria-expanded.
	•	Support keyboard navigation.
	•	Animate opening and closing subtly.
	•	Do not hide critical information only behind hover interactions.
Include meaningful answers rather than placeholder text.

15. Contact Section
Create a contact form for general inquiries.
Fields:
	•	Name
	•	Email
	•	Company, optional
	•	Inquiry type
	•	Message
	•	Submit button
Inquiry types:
	•	General Question
	•	Tickets
	•	Sponsorship
	•	Speaking Opportunity
	•	Media Partnership
	•	Accessibility
	•	Other
Contact Details
Display:
	•	Email: hello@aisummit2026.example
	•	Sponsorship: partners@aisummit2026.example
	•	Location: Bengaluru, India
	•	Response time: Within two business days
Use the .example domain to make it clear that the addresses are demonstration addresses unless real contact details are supplied.
Contact Form Requirements
	•	Client-side and server-side validation
	•	Clear error messages
	•	Submission loading state
	•	Success state
	•	Spam-protection architecture such as a honeypot field
	•	Basic rate-limiting strategy
	•	No secrets exposed in frontend code

16. Newsletter CTA
Add a newsletter subscription callout before the footer.
Include:
	•	Heading:
	◦	“Get ARENA AI Summit Updates”
	•	Supporting text
	•	Email input
	•	Subscribe button
Validate the email and show clear success or error feedback.
Use a server-side API route rather than only simulating success in the browser.

17. Footer
Create a complete footer containing:
	•	ARENA AI Summit 2026 logo
	•	Short event description
	•	Navigation links
	•	Ticket link
	•	Contact links
	•	Social media icons
	•	Privacy Policy
	•	Terms and Conditions
	•	Code of Conduct
	•	Accessibility
	•	Copyright statement
Use:
“© 2026 AREA AI Summit. All rights reserved.”
Add a “Back to top” control.
Create simple internal modal dialogs or pages for:
	•	Privacy Policy
	•	Terms and Conditions
	•	Code of Conduct
Do not leave footer links pointing to # without functionality.

18. Responsive Design
The website must work correctly at:
	•	320px mobile width
	•	375px mobile width
	•	768px tablet width
	•	1024px laptop width
	•	1440px desktop width
	•	Large desktop screens
Requirements:
	•	No horizontal scrolling.
	•	Navigation must convert to a mobile menu.
	•	Cards must stack appropriately.
	•	Buttons must remain easy to tap.
	•	Forms must use full available width on mobile.
	•	Timeline items must remain readable.
	•	Speaker cards must not crop important content.
	•	Hero text and visual must scale correctly.
	•	Pricing cards must stack cleanly.
	•	Footer columns must collapse appropriately.

19. Accessibility Requirements
Target WCAG 2.1 AA practices.
Include:
	•	Semantic HTML
	•	Proper heading hierarchy
	•	Keyboard-accessible navigation
	•	Visible focus rings
	•	Sufficient color contrast
	•	Accessible form labels
	•	Helpful error messages
	•	aria-live regions for form status
	•	Meaningful image alternative text
	•	Decorative images with empty alt text
	•	Reduced-motion support
	•	Accessible dialogs
	•	Accessible mobile navigation
	•	Screen-reader-only labels where necessary
	•	Skip-to-content link
Animations must respect:
@media (prefers-reduced-motion: reduce)
Do not rely solely on color to communicate status or selection.

20. SEO and Social Metadata
Configure complete metadata using the Next.js metadata API.
Include:
	•	Page title
	•	Meta description
	•	Keywords
	•	Canonical URL configuration
	•	Open Graph title
	•	Open Graph description
	•	Open Graph image
	•	Twitter card metadata
	•	Event favicon
	•	Apple touch icon
	•	Robots metadata
Suggested title:
“ARENA AI Summit 2026 | Where Intelligence Meets Innovation”
Suggested description:
“Join global AI leaders, researchers, founders, and enterprise innovators at ARENA AI Summit 2026 in Bengaluru on September 17–18, 2026.”
Add structured data using JSON-LD for an Event.
Include:
	•	Event name
	•	Description
	•	Start date
	•	End date
	•	Event status
	•	Event attendance mode
	•	Venue name
	•	Venue address
	•	Organizer
	•	Ticket offers
Ensure structured data is valid and does not contain misleading information.

21. Performance Requirements
Optimize for production performance.
Requirements:
	•	Use Next.js Image.
	•	Use responsive image sizes.
	•	Avoid loading full-resolution images unnecessarily.
	•	Lazy-load below-the-fold images.
	•	Minimize client components.
	•	Keep static content as server components where possible.
	•	Avoid unnecessary JavaScript dependencies.
	•	Avoid large background videos.
	•	Prevent layout shift.
	•	Preload only critical resources.
	•	Use font optimization.
	•	Clean up event listeners and timers.
	•	Avoid unnecessary rerenders.
	•	Dynamically load heavy optional components.
	•	Use optimized SVG or CSS for decorative graphics.
Target Lighthouse scores:
	•	Performance: 90+
	•	Accessibility: 95+
	•	Best Practices: 95+
	•	SEO: 95+




24. Data Architecture
Store speakers, agenda items, pricing plans, testimonials, navigation links, sponsors, and FAQs in typed configuration objects.
Do not repeat large hardcoded arrays inside UI components.
Define appropriate TypeScript interfaces or types, including:
	•	Speaker
	•	AgendaSession
	•	AgendaDay
	•	PricingPlan
	•	FAQItem
	•	Testimonial
	•	Sponsor
	•	NavigationItem
Use stable IDs for rendering lists.
Do not use array indexes as React keys when stable IDs are available.

25. Interaction Requirements
All interactions must work:
	•	Smooth navigation scrolling
	•	Mobile navigation
	•	Countdown timer
	•	Speaker expansion
	•	Agenda day switching
	•	FAQ accordion
	•	Ticket selection
	•	Registration form
	•	Contact form
	•	Newsletter form
	•	Back-to-top button
	•	Footer policy links
	•	External social links
	•	Form success and error messages
Buttons must never appear clickable without performing an action.
Use meaningful button labels instead of vague labels such as “Click Here.”

26. Animation Requirements
Use Framer Motion or CSS animations for:
	•	Hero entrance
	•	Section reveal
	•	Speaker card hover
	•	Timeline reveal
	•	Pricing card hover
	•	Statistics count-up
	•	Button hover
	•	Accordion transition
Animation rules:
	•	Keep animations subtle.
	•	Avoid animating every element simultaneously.
	•	Do not block interaction.
	•	Avoid long entrance delays.
	•	Respect reduced-motion preferences.
	•	Avoid animation-induced layout shifts.

27. Content Quality
The website content must:
	•	Sound professional and credible
	•	Avoid generic lorem ipsum
	•	Avoid unsupported claims
	•	Clearly distinguish fictional speaker profiles
	•	Use consistent terminology
	•	Use correct spelling and grammar
	•	Avoid excessive marketing buzzwords
	•	Clearly explain what attendees receive
	•	Clearly explain ticket differences
	•	Clearly communicate event date and location

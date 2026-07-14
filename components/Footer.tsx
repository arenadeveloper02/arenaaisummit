"use client"

import { useEffect, useState } from 'react'
import { ArrowUp, Instagram, Linkedin, Twitter, X, Youtube } from 'lucide-react'
import { navigationItems } from '@/lib/data'

type PolicyKey = 'privacy' | 'terms' | 'conduct' | 'accessibility'

const policies: Record<PolicyKey, { title: string; paragraphs: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    paragraphs: [
      'ARENA AI Summit 2026 collects only the information you provide through registration, contact, and newsletter forms: your name, contact details, company information, and any preferences you share.',
      'We use this information solely to process your registration, respond to inquiries, and send event updates you have opted into. We do not sell your data to third parties.',
      'You may request access to, correction of, or deletion of your personal data at any time by emailing hello@aisummit2026.example. Data is stored securely and retained only as long as necessary to operate the event.',
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    paragraphs: [
      'Tickets to ARENA AI Summit 2026 grant admission to the sessions and experiences included in the purchased pass tier for September 17–18, 2026 at the Bengaluru International Convention Centre.',
      'Full refunds are available up to 60 days before the event and 50% refunds up to 30 days before. Within 30 days of the event, tickets are non-refundable but may be transferred to another attendee free of charge up to 14 days before the event.',
      'The organizers reserve the right to adjust the program, speakers, or schedule where necessary. Prices are listed in Indian rupees; applicable taxes may be added at checkout.',
    ],
  },
  conduct: {
    title: 'Code of Conduct',
    paragraphs: [
      'ARENA AI Summit 2026 is committed to a harassment-free, inclusive experience for everyone regardless of gender, identity, background, ability, or beliefs.',
      'Harassment, discrimination, or disruptive behavior of any kind is not tolerated in any summit venue, session, or online space. Attendees asked to stop any inappropriate behavior are expected to comply immediately.',
      'To report a concern, contact any staff member on-site or email hello@aisummit2026.example. Violations may result in removal from the event without refund.',
    ],
  },
  accessibility: {
    title: 'Accessibility',
    paragraphs: [
      'The Bengaluru International Convention Centre offers step-free access, accessible restrooms, elevators, and reserved seating areas in all session rooms.',
      'Live captioning is provided for keynote sessions, and quiet rooms are available on both event days.',
      'If you have specific accessibility requirements, select the Accessibility inquiry type on our contact form or email hello@aisummit2026.example and our team will make arrangements in advance.',
    ],
  },
}

const policyLinks: { key: PolicyKey; label: string }[] = [
  { key: 'privacy', label: 'Privacy Policy' },
  { key: 'terms', label: 'Terms and Conditions' },
  { key: 'conduct', label: 'Code of Conduct' },
  { key: 'accessibility', label: 'Accessibility' },
]

const socialLinks = [
  { id: 'linkedin', label: 'ARENA AI Summit on LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { id: 'twitter', label: 'ARENA AI Summit on X', href: 'https://x.com/', icon: Twitter },
  { id: 'youtube', label: 'ARENA AI Summit on YouTube', href: 'https://www.youtube.com/', icon: Youtube },
  { id: 'instagram', label: 'ARENA AI Summit on Instagram', href: 'https://www.instagram.com/', icon: Instagram },
]

export default function Footer() {
  const [policy, setPolicy] = useState<PolicyKey | null>(null)

  useEffect(() => {
    if (!policy) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPolicy(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [policy])

  const active = policy ? policies[policy] : null

  return (
    <footer className="border-t border-white/10 bg-[#04060C]">
      <div className="container-max py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">
              ARENA <span className="gradient-text">AI Summit</span> <span className="text-cyan-300">2026</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Where Intelligence Meets Innovation. Two days of keynotes, workshops, and networking with global AI leaders in Bengaluru — September 17–18, 2026.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navigationItems.map((item) => (
                <li key={`footer-${item.id}`}>
                  <a href={item.href} className="text-sm text-slate-400 transition hover:text-cyan-300">{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#register" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">Register Now</a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Legal</p>
            <ul className="mt-4 space-y-2">
              {policyLinks.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => setPolicy(link.key)}
                    className="text-left text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:hello@aisummit2026.example" className="text-sm text-slate-400 transition hover:text-cyan-300">hello@aisummit2026.example</a>
              </li>
              <li>
                <a href="mailto:partners@aisummit2026.example" className="text-sm text-slate-400 transition hover:text-cyan-300">partners@aisummit2026.example</a>
              </li>
              <li className="text-sm text-slate-400">Bengaluru, India</li>
            </ul>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="glass mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>
        <p className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
          © 2026 ARENA AI Summit. All rights reserved.
        </p>
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
          onClick={() => setPolicy(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="policy-title" className="text-xl font-bold text-white">{active.title}</h2>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setPolicy(null)}
                className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {active.paragraphs.map((paragraph, index) => (
              <p key={`policy-paragraph-${index}`} className="mt-4 text-sm leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </footer>
  )
}

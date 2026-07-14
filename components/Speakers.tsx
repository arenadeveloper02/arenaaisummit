"use client"

import { useState } from 'react'
import { Globe, Linkedin } from 'lucide-react'
import { speakers } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

export default function Speakers() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? speakers : speakers.filter((s) => s.featured)

  return (
    <section id="speakers" className="section">
      <div className="container-max">
        <SectionHeading
          label="Featured Speakers"
          title="Learn From the People Building the Future"
          description="Researchers, founders, operators, and investors sharing what actually works in modern AI. Speaker profiles shown here are illustrative examples for this demonstration site."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((speaker) => (
            <article key={speaker.id} className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${speaker.gradient}`}>
                <span aria-hidden="true" className="select-none text-5xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-110">
                  {speaker.initials}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{speaker.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{speaker.role}</p>
                <p className="text-sm text-slate-400">{speaker.organization}</p>
                <p className="mt-3 text-sm font-medium text-cyan-300">{speaker.topic}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${speaker.name} on LinkedIn (opens in a new tab)`}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${speaker.name} website (opens in a new tab)`}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="glass rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {expanded ? 'Show Featured Speakers' : 'View All Speakers'}
          </button>
        </div>
      </div>
    </section>
  )
}

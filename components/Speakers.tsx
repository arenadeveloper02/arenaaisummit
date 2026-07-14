"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Globe, Linkedin } from 'lucide-react'
import { speakers } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

function fallbackAvatar(name: string, background: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=256&background=${background}&color=ffffff&bold=true&format=png`
}

function profileImage(handle: string, name: string, background: string): string {
  return `https://unavatar.io/x/${handle}?fallback=${encodeURIComponent(fallbackAvatar(name, background))}`
}

const speakerImages: Record<string, string> = {
  'andrew-ng': profileImage('AndrewYNg', 'Andrew Ng', '2563eb'),
  'fei-fei-li': profileImage('drfeifei', 'Fei-Fei Li', '7c3aed'),
  'cassie-kozyrkov': profileImage('quaesita', 'Cassie Kozyrkov', 'c026d3'),
  'allie-k-miller': profileImage('alliekmiller', 'Allie Miller', '0891b2'),
  'harrison-chase': profileImage('hwchase17', 'Harrison Chase', '4f46e5'),
  'clem-delangue': profileImage('ClementDelangue', 'Clem Delangue', 'd97706'),
  'aravind-srinivas': profileImage('AravSrinivas', 'Aravind Srinivas', '0284c7'),
  'ali-ghodsi': profileImage('alighodsi', 'Ali Ghodsi', 'e11d48'),
  'rajiv-parikh': profileImage('rajivparikh', 'Rajiv Parikh', '059669'),
}

export default function Speakers() {
  const [expanded, setExpanded] = useState(false)
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const hasHidden = speakers.some((s) => !s.featured)
  const visible = expanded || !hasHidden ? speakers : speakers.filter((s) => s.featured)

  return (
    <section id="speakers" className="section">
      <div className="container-max">
        <SectionHeading
          label="Featured Speakers"
          title="Learn From the People Building the Future"
          description="Researchers, founders, operators, and investors sharing what actually works in modern AI."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((speaker) => {
            const imageSrc = failed[speaker.id] ? undefined : speakerImages[speaker.id] ?? speaker.image
            return (
              <article key={speaker.id} className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300">
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${speaker.gradient}`}>
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`Portrait of ${speaker.name}`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      onError={() => setFailed((prev) => ({ ...prev, [speaker.id]: true }))}
                    />
                  ) : (
                    <span aria-hidden="true" className="select-none text-5xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-110">
                      {speaker.initials}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{speaker.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{speaker.role}</p>
                  <p className="text-sm text-slate-500">{speaker.organization}</p>
                  <p className="mt-3 text-sm font-medium text-cyan-600">{speaker.topic}</p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${speaker.name} on LinkedIn (opens in a new tab)`}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href={speaker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${speaker.name} website (opens in a new tab)`}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Globe className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        {hasHidden ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="glass rounded-full px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {expanded ? 'Show Featured Speakers' : 'View All Speakers'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

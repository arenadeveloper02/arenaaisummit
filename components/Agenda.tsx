"use client"

import { useState } from 'react'
import { Coffee, Mic, Presentation, Sparkles, Users, UtensilsCrossed, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { SessionType } from '@/lib/types'
import { agendaDays } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

const typeIcons: Record<SessionType, LucideIcon> = {
  Keynote: Mic,
  Panel: Users,
  Workshop: Wrench,
  Networking: Coffee,
  Break: UtensilsCrossed,
  Showcase: Presentation,
  Session: Sparkles,
}

const typeStyles: Record<SessionType, string> = {
  Keynote: 'border-blue-400/30 bg-blue-500/15 text-blue-300',
  Panel: 'border-purple-400/30 bg-purple-500/15 text-purple-300',
  Workshop: 'border-cyan-400/30 bg-cyan-500/15 text-cyan-300',
  Networking: 'border-emerald-400/30 bg-emerald-500/15 text-emerald-300',
  Break: 'border-slate-400/30 bg-slate-500/15 text-slate-300',
  Showcase: 'border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300',
  Session: 'border-indigo-400/30 bg-indigo-500/15 text-indigo-300',
}

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(agendaDays[0].id)
  const day = agendaDays.find((d) => d.id === activeDay) ?? agendaDays[0]

  return (
    <section id="agenda" className="section">
      <div className="container-max">
        <SectionHeading
          label="Agenda"
          title="Two Days of Signal, Zero Filler"
          description="Keynotes, panels, workshops, and curated networking across September 17–18, 2026."
        />
        <div role="tablist" aria-label="Agenda days" className="mx-auto mt-10 flex max-w-lg gap-2">
          {agendaDays.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={activeDay === d.id}
              onClick={() => setActiveDay(d.id)}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${activeDay === d.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-900/30' : 'glass text-slate-300 hover:text-white'}`}
            >
              {d.label} <span className="hidden font-normal sm:inline">— {d.date}</span>
            </button>
          ))}
        </div>
        <div role="tabpanel" aria-label={`${day.label} agenda`} className="mx-auto mt-10 max-w-3xl">
          <ol className="relative border-l border-white/10 pl-6">
            {day.sessions.map((session) => {
              const Icon = typeIcons[session.type]
              return (
                <li key={session.id} className="relative pb-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
                  <div className="glass rounded-xl p-4 transition duration-300 hover:border-cyan-400/30 sm:p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold tabular-nums text-cyan-300">{session.time}</span>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[session.type]}`}>
                        <Icon className="h-3 w-3" aria-hidden="true" />
                        {session.type}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{session.title}</h3>
                    {session.speakers ? <p className="mt-1 text-sm text-slate-400">{session.speakers}</p> : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

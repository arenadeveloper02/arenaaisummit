"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react'

const TARGET_TIME = new Date('2026-09-17T09:00:00+05:30').getTime()

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80'

interface HeroStat {
  id: string
  value: number
  suffix: string
  label: string
}

const heroStats: HeroStat[] = [
  { id: 'attendees', value: 3000, suffix: '+', label: 'Attendees' },
  { id: 'speakers', value: 80, suffix: '+', label: 'Global Speakers' },
  { id: 'sessions', value: 40, suffix: '+', label: 'Sessions' },
  { id: 'countries', value: 25, suffix: '+', label: 'Countries' },
]

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass flex flex-col items-center rounded-xl px-2 py-3 sm:px-4">
      <span className="text-2xl font-extrabold tabular-nums text-slate-900 sm:text-3xl">{value}</span>
      <span className="mt-1 text-xs uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  )
}

function StatItem({ stat }: { stat: HeroStat }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          if (reduced) {
            setDisplay(stat.value)
            return
          }
          const start = performance.now()
          const duration = 1400
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1)
            setDisplay(Math.round(stat.value * (1 - Math.pow(1 - p, 3))))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [stat.value])

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center">
      <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
        {display.toLocaleString('en-IN')}
        <span className="text-cyan-600">{stat.suffix}</span>
      </p>
      <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
    </div>
  )
}

export default function Hero() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  const diff = now === null ? null : TARGET_TIME - now
  const live = diff !== null && diff <= 0
  const pad = (n: number) => String(n).padStart(2, '0')

  let days = '--'
  let hours = '--'
  let minutes = '--'
  let seconds = '--'
  if (diff !== null && diff > 0) {
    days = pad(Math.floor(diff / 86400000))
    hours = pad(Math.floor((diff % 86400000) / 3600000))
    minutes = pad(Math.floor((diff % 3600000) / 60000))
    seconds = pad(Math.floor((diff % 60000) / 1000))
  }

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50" />
      </div>
      <div className="container-max relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan-500" />
            September 17–18, 2026 · Bengaluru
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Shape the Future of <span className="gradient-text">Artificial Intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Join the world&rsquo;s leading AI researchers, founders, builders, and business leaders for two transformative days of ideas, innovation, and meaningful connections.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#tickets" className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:opacity-90 sm:w-auto">
              Reserve Your Seat
            </a>
            <a href="#agenda" className="glass w-full rounded-full px-8 py-3.5 text-center text-base font-semibold text-slate-800 transition hover:bg-slate-100 sm:w-auto">
              Explore the Agenda
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-600 sm:flex-row sm:gap-8">
            <p className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              September 17–18, 2026
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              Bengaluru International Convention Centre, Bengaluru, India
            </p>
          </div>
          <div className="mt-10" aria-live="polite">
            {live ? (
              <p className="glass inline-flex rounded-2xl px-6 py-4 text-lg font-semibold text-cyan-700">
                ARENA AI Summit 2026 is now live.
              </p>
            ) : (
              <div className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-3">
                <CountdownUnit value={days} label="Days" />
                <CountdownUnit value={hours} label="Hours" />
                <CountdownUnit value={minutes} label="Minutes" />
                <CountdownUnit value={seconds} label="Seconds" />
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

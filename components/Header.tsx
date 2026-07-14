"use client"

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '@/lib/data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const ids = navigationItems.map((n) => n.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-white/10 bg-[#05070F]/85 backdrop-blur-lg' : 'border-transparent bg-transparent'}`}>
      <div className="container-max flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
          ARENA <span className="gradient-text">AI Summit</span> <span className="text-cyan-300">2026</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeId === item.href.replace('#', '') ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
              aria-current={activeId === item.href.replace('#', '') ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a href="#tickets" className="ml-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:opacity-90">
            Get Tickets
          </a>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#05070F]/95 backdrop-blur-lg md:hidden">
          <nav aria-label="Mobile" className="container-max flex flex-col gap-1 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Tickets
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

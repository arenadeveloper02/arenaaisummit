"use client"

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = (await res.json()) as { success: boolean; error?: string }
      if (data.success) {
        setStatus('success')
        setMessage('You are subscribed. Watch your inbox for summit updates.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Subscription failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section aria-label="Newsletter signup" className="section pt-0">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-xl shadow-indigo-200 sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Get ARENA AI Summit Updates</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Speaker announcements, agenda updates, and early-bird reminders — straight to your inbox. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-1 rounded-full border border-transparent bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-cyan-300 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            <div aria-live="polite" className="mt-4 min-h-[1.25rem]">
              {status === 'success' ? <p role="status" className="text-sm text-emerald-200">{message}</p> : null}
              {status === 'error' ? <p role="alert" className="text-sm text-rose-200">{message}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

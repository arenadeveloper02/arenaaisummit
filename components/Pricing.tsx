"use client"

import { Check } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

export default function Pricing() {
  const selectTicket = (planId: string) => {
    window.dispatchEvent(new CustomEvent<string>('arena:select-ticket', { detail: planId }))
    const el = document.getElementById('register')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="tickets" className="section">
      <div className="container-max">
        <SectionHeading
          label="Tickets"
          title="Choose Your Pass"
          description="Early-bird pricing ends July 31, 2026. All prices are in Indian rupees; applicable taxes may be added at checkout."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-1 ${plan.popular ? 'border-2 border-purple-300 bg-gradient-to-b from-purple-50 to-white shadow-xl shadow-purple-200/60' : 'glass hover:border-cyan-300'}`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">{plan.price}</p>
              <p className="mt-1 text-xs text-slate-500">per attendee, excluding applicable taxes</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={`${plan.id}-${feature}`} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => selectTicket(plan.id)}
                className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-300/50 hover:opacity-90' : 'glass text-slate-700 hover:bg-slate-100'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

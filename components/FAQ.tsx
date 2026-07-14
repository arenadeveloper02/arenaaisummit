"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="section">
      <div className="container-max max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about tickets, the venue, and the program."
        />
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => {
            const open = openId === item.id
            return (
              <div key={item.id} className="glass rounded-xl">
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${item.id}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:text-cyan-200"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

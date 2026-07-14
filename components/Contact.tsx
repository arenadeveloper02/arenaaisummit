"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Clock, Mail, MapPin } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const inquiryTypes = [
  'General Question',
  'Tickets',
  'Sponsorship',
  'Speaking Opportunity',
  'Media Partnership',
  'Accessibility',
  'Other',
]

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Please provide a few details (at least 10 characters)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const inputClass =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-cyan-500 focus:outline-none'
const labelClass = 'block text-sm font-medium text-slate-700'
const errorClass = 'mt-1 text-sm text-rose-600'

export default function Contact() {
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', inquiryType: 'General Question', message: '' },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle')
    setFeedback('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website: honeypot }),
      })
      const data = (await res.json()) as { success: boolean; error?: string }
      if (data.success) {
        setStatus('success')
        setFeedback('Thanks for reaching out. Our team will respond within two business days.')
        reset()
        setHoneypot('')
      } else {
        setStatus('error')
        setFeedback(data.error ?? 'Unable to send your message. Please try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Questions about tickets, sponsorship, speaking, or accessibility? We are happy to help."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="glass flex items-start gap-4 rounded-xl p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <a href="mailto:hello@aisummit2026.example" className="mt-1 block text-sm text-slate-600 transition hover:text-cyan-700">hello@aisummit2026.example</a>
                <a href="mailto:partners@aisummit2026.example" className="mt-1 block text-sm text-slate-600 transition hover:text-cyan-700">partners@aisummit2026.example <span className="text-slate-400">(sponsorship)</span></a>
              </div>
            </div>
            <div className="glass flex items-start gap-4 rounded-xl p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-1 text-sm text-slate-600">Bengaluru, India</p>
              </div>
            </div>
            <div className="glass flex items-start gap-4 rounded-xl p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Response time</p>
                <p className="mt-1 text-sm text-slate-600">Within two business days</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Addresses use the .example domain to indicate demonstration contact details.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass relative rounded-2xl p-6 sm:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>Name</label>
                <input id="contact-name" type="text" autoComplete="name" placeholder="Your name" className={inputClass} aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'contact-name-error' : undefined} {...register('name')} />
                {errors.name ? <p id="contact-name-error" role="alert" className={errorClass}>{errors.name.message}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>Email</label>
                <input id="contact-email" type="email" autoComplete="email" placeholder="you@company.com" className={inputClass} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'contact-email-error' : undefined} {...register('email')} />
                {errors.email ? <p id="contact-email-error" role="alert" className={errorClass}>{errors.email.message}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-company" className={labelClass}>Company <span className="text-slate-400">(optional)</span></label>
                <input id="contact-company" type="text" autoComplete="organization" placeholder="Company name" className={inputClass} {...register('company')} />
              </div>
              <div>
                <label htmlFor="contact-inquiryType" className={labelClass}>Inquiry type</label>
                <select id="contact-inquiryType" className={inputClass} aria-invalid={errors.inquiryType ? 'true' : 'false'} aria-describedby={errors.inquiryType ? 'contact-inquiryType-error' : undefined} {...register('inquiryType')}>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.inquiryType ? <p id="contact-inquiryType-error" role="alert" className={errorClass}>{errors.inquiryType.message}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea id="contact-message" rows={5} placeholder="How can we help?" className={inputClass} aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'contact-message-error' : undefined} {...register('message')} />
                {errors.message ? <p id="contact-message-error" role="alert" className={errorClass}>{errors.message.message}</p> : null}
              </div>
            </div>
            <div className="absolute left-[-9999px] top-auto" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>
            <div aria-live="polite">
              {status === 'success' ? <p role="status" className="mt-5 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{feedback}</p> : null}
              {status === 'error' ? <p role="alert" className="mt-5 rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-700">{feedback}</p> : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? 'Sending message…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

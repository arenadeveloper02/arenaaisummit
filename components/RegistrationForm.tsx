"use client"

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { pricingPlans } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email'),
  phone: z.string().min(7, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  company: z.string().min(1, 'Company is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  country: z.string().min(1, 'Country is required'),
  ticketType: z.string().min(1, 'Please select a ticket type'),
  quantity: z
    .number({ invalid_type_error: 'Select the number of tickets' })
    .int()
    .min(1, 'Minimum 1 ticket')
    .max(10, 'Maximum 10 tickets'),
  dietary: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, { message: 'Please provide consent to continue' }),
})

type RegistrationFormValues = z.infer<typeof registrationSchema>

const inputClass =
  'mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-400 focus:outline-none'
const labelClass = 'block text-sm font-medium text-slate-200'
const errorClass = 'mt-1 text-sm text-rose-400'

export default function RegistrationForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<RegistrationFormValues | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      country: '',
      ticketType: 'professional',
      quantity: 1,
      dietary: '',
      consent: false,
    },
  })

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string>
      if (typeof custom.detail === 'string' && custom.detail.length > 0) {
        setValue('ticketType', custom.detail, { shouldValidate: false })
      }
    }
    window.addEventListener('arena:select-ticket', handler)
    return () => window.removeEventListener('arena:select-ticket', handler)
  }, [setValue])

  const onSubmit = async (values: RegistrationFormValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = (await res.json()) as { success: boolean; error?: string }
      if (data.success) {
        setSubmitted(values)
        reset()
      } else {
        setServerError(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  if (submitted) {
    const plan = pricingPlans.find((p) => p.id === submitted.ticketType)
    return (
      <section id="register" className="section">
        <div className="container-max max-w-2xl">
          <div className="glass rounded-2xl p-8 text-center" role="status" aria-live="polite">
            <h2 className="text-2xl font-extrabold text-white">Registration Received</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Thank you for registering your interest in ARENA AI Summit 2026. Our event team will contact you with ticket confirmation and payment details.
            </p>
            <dl className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Name</dt>
                <dd className="font-medium text-white">{submitted.fullName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Email</dt>
                <dd className="font-medium text-white">{submitted.email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Ticket</dt>
                <dd className="font-medium text-cyan-300">{plan ? plan.name : submitted.ticketType}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Quantity</dt>
                <dd className="font-medium text-white">{submitted.quantity}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => setSubmitted(null)}
              className="mt-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Register Another Attendee
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="section">
      <div className="container-max max-w-3xl">
        <SectionHeading
          label="Registration"
          title="Register Your Interest"
          description="Complete the form and our team will follow up with ticket confirmation and payment details."
        />
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass mt-10 rounded-2xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="reg-fullName" className={labelClass}>Full name</label>
              <input id="reg-fullName" type="text" autoComplete="name" placeholder="Priya Sharma" className={inputClass} aria-invalid={errors.fullName ? 'true' : 'false'} aria-describedby={errors.fullName ? 'reg-fullName-error' : undefined} {...register('fullName')} />
              {errors.fullName ? <p id="reg-fullName-error" role="alert" className={errorClass}>{errors.fullName.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-email" className={labelClass}>Work email</label>
              <input id="reg-email" type="email" autoComplete="email" placeholder="you@company.com" className={inputClass} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'reg-email-error' : undefined} {...register('email')} />
              {errors.email ? <p id="reg-email-error" role="alert" className={errorClass}>{errors.email.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-phone" className={labelClass}>Phone number</label>
              <input id="reg-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={inputClass} aria-invalid={errors.phone ? 'true' : 'false'} aria-describedby={errors.phone ? 'reg-phone-error' : undefined} {...register('phone')} />
              {errors.phone ? <p id="reg-phone-error" role="alert" className={errorClass}>{errors.phone.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-company" className={labelClass}>Company</label>
              <input id="reg-company" type="text" autoComplete="organization" placeholder="Acme Technologies" className={inputClass} aria-invalid={errors.company ? 'true' : 'false'} aria-describedby={errors.company ? 'reg-company-error' : undefined} {...register('company')} />
              {errors.company ? <p id="reg-company-error" role="alert" className={errorClass}>{errors.company.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-jobTitle" className={labelClass}>Job title</label>
              <input id="reg-jobTitle" type="text" autoComplete="organization-title" placeholder="Head of Engineering" className={inputClass} aria-invalid={errors.jobTitle ? 'true' : 'false'} aria-describedby={errors.jobTitle ? 'reg-jobTitle-error' : undefined} {...register('jobTitle')} />
              {errors.jobTitle ? <p id="reg-jobTitle-error" role="alert" className={errorClass}>{errors.jobTitle.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-country" className={labelClass}>Country</label>
              <input id="reg-country" type="text" autoComplete="country-name" placeholder="India" className={inputClass} aria-invalid={errors.country ? 'true' : 'false'} aria-describedby={errors.country ? 'reg-country-error' : undefined} {...register('country')} />
              {errors.country ? <p id="reg-country-error" role="alert" className={errorClass}>{errors.country.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-ticketType" className={labelClass}>Ticket type</label>
              <select id="reg-ticketType" className={inputClass} aria-invalid={errors.ticketType ? 'true' : 'false'} aria-describedby={errors.ticketType ? 'reg-ticketType-error' : undefined} {...register('ticketType')}>
                {pricingPlans.map((plan) => (
                  <option key={plan.id} value={plan.id} className="bg-[#0B1020]">
                    {plan.name} — {plan.price}
                  </option>
                ))}
              </select>
              {errors.ticketType ? <p id="reg-ticketType-error" role="alert" className={errorClass}>{errors.ticketType.message}</p> : null}
            </div>
            <div>
              <label htmlFor="reg-quantity" className={labelClass}>Number of tickets</label>
              <select id="reg-quantity" className={inputClass} aria-invalid={errors.quantity ? 'true' : 'false'} aria-describedby={errors.quantity ? 'reg-quantity-error' : undefined} {...register('quantity', { valueAsNumber: true })}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={`qty-${n}`} value={n} className="bg-[#0B1020]">
                    {n}
                  </option>
                ))}
              </select>
              {errors.quantity ? <p id="reg-quantity-error" role="alert" className={errorClass}>{errors.quantity.message}</p> : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="reg-dietary" className={labelClass}>Dietary requirements <span className="text-slate-500">(optional)</span></label>
              <input id="reg-dietary" type="text" placeholder="e.g. vegetarian, vegan, allergies" className={inputClass} {...register('dietary')} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="reg-consent" className="flex items-start gap-3 text-sm text-slate-300">
                <input id="reg-consent" type="checkbox" className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-purple-500" aria-invalid={errors.consent ? 'true' : 'false'} aria-describedby={errors.consent ? 'reg-consent-error' : undefined} {...register('consent')} />
                <span>I consent to the ARENA AI Summit team contacting me about my registration and event updates.</span>
              </label>
              {errors.consent ? <p id="reg-consent-error" role="alert" className={errorClass}>{errors.consent.message}</p> : null}
            </div>
          </div>
          <div aria-live="polite">
            {serverError ? <p role="alert" className="mt-5 rounded-lg border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{serverError}</p> : null}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Submitting registration…' : 'Complete Registration'}
          </button>
        </form>
      </div>
    </section>
  )
}

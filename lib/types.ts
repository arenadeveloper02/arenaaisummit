export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface Sponsor {
  id: string
  name: string
}

export interface Speaker {
  id: string
  name: string
  role: string
  organization: string
  topic: string
  initials: string
  gradient: string
  linkedin: string
  website: string
  featured: boolean
}

export type SessionType =
  | 'Keynote'
  | 'Panel'
  | 'Workshop'
  | 'Networking'
  | 'Break'
  | 'Showcase'
  | 'Session'

export interface AgendaSession {
  id: string
  time: string
  title: string
  speakers: string
  type: SessionType
}

export interface AgendaDay {
  id: string
  label: string
  date: string
  sessions: AgendaSession[]
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  popular: boolean
  features: string[]
  cta: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

export interface ExperienceItem {
  id: string
  title: string
  description: string
  span: string
  gradient: string
}

export interface RegistrationInput {
  fullName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  country: string
  ticketType: string
  quantity: number
  dietary?: string
  consent: boolean
}

export interface ContactInput {
  name: string
  email: string
  company?: string
  inquiryType: string
  message: string
}

export type ActionResult = { success: boolean; error?: string }

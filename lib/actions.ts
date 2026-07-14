'use server'

import { prisma } from '@/lib/prisma'
import type { ActionResult, ContactInput, RegistrationInput } from '@/lib/types'

export async function createRegistration(input: RegistrationInput): Promise<ActionResult> {
  try {
    await prisma.registration.create({
      data: {
        fullName: input.fullName.trim().slice(0, 200),
        email: input.email.trim().toLowerCase().slice(0, 200),
        phone: input.phone.trim().slice(0, 40),
        company: input.company.trim().slice(0, 200),
        jobTitle: input.jobTitle.trim().slice(0, 200),
        country: input.country.trim().slice(0, 100),
        ticketType: input.ticketType.trim().slice(0, 50),
        quantity: input.quantity,
        dietary: input.dietary && input.dietary.trim().length > 0 ? input.dietary.trim().slice(0, 500) : null,
      },
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Unable to save your registration right now. Please try again later.' }
  }
}

export async function createContactMessage(input: ContactInput): Promise<ActionResult> {
  try {
    await prisma.contactMessage.create({
      data: {
        name: input.name.trim().slice(0, 200),
        email: input.email.trim().toLowerCase().slice(0, 200),
        company: input.company && input.company.trim().length > 0 ? input.company.trim().slice(0, 200) : null,
        inquiryType: input.inquiryType.trim().slice(0, 100),
        message: input.message.trim().slice(0, 5000),
      },
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Unable to send your message right now. Please try again later.' }
  }
}

export async function subscribeNewsletter(email: string): Promise<ActionResult> {
  try {
    const normalized = email.trim().toLowerCase().slice(0, 200)
    await prisma.newsletterSubscriber.upsert({
      where: { email: normalized },
      update: {},
      create: { email: normalized },
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Unable to subscribe right now. Please try again later.' }
  }
}

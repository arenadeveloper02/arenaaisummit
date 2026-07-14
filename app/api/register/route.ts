import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createRegistration } from '@/lib/actions'

const registerSchema = z.object({
  fullName: z.string().min(2).max(200),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(40),
  company: z.string().min(1).max(200),
  jobTitle: z.string().min(1).max(200),
  country: z.string().min(1).max(100),
  ticketType: z.enum(['explorer', 'professional', 'executive']),
  quantity: z.number().int().min(1).max(10),
  dietary: z.string().max(500).optional(),
  consent: z.literal(true),
})

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: unknown = await req.json()
    const parsed = registerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Please check the form fields and try again.' },
        { status: 400 }
      )
    }
    const result = await createRegistration(parsed.data)
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error ?? 'Unable to save your registration.' },
        { status: 500 }
      )
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request. Please try again.' },
      { status: 400 }
    )
  }
}

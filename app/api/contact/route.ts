import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createContactMessage } from '@/lib/actions'

const contactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  inquiryType: z.string().min(1).max(100),
  message: z.string().min(10).max(5000),
  website: z.string().max(500).optional(),
})

const recentSubmissions = new Map<string, number>()
const RATE_LIMIT_WINDOW_MS = 30000

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const last = recentSubmissions.get(key)
  if (last !== undefined && now - last < RATE_LIMIT_WINDOW_MS) return true
  if (recentSubmissions.size > 1000) recentSubmissions.clear()
  recentSubmissions.set(key, now)
  return false
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: unknown = await req.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Please check the form fields and try again.' },
        { status: 400 }
      )
    }

    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim()
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many messages. Please wait a moment and try again.' },
        { status: 429 }
      )
    }

    const result = await createContactMessage({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      inquiryType: parsed.data.inquiryType,
      message: parsed.data.message,
    })
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error ?? 'Unable to send your message.' },
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

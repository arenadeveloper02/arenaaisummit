import { NextResponse } from 'next/server'
import { z } from 'zod'
import { subscribeNewsletter } from '@/lib/actions'

const newsletterSchema = z.object({
  email: z.string().email().max(200),
})

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: unknown = await req.json()
    const parsed = newsletterSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }
    const result = await subscribeNewsletter(parsed.data.email)
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error ?? 'Unable to subscribe.' },
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

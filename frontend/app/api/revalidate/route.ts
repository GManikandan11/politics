import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

/**
 * POST /api/revalidate
 * Clear Vercel caches based on tags from Sanity webhook.
 */
export async function POST(req: NextRequest) {
  let body: { tags?: string[] } = {}

  if (process.env.NODE_ENV === 'development') {
    // Local dev: skip signature check
    body = await req.json().catch(() => ({}))
  } else {
    // Prod: verify webhook signature
    const secret = process.env.SANITY_WEBHOOK_SECRET!
    const parsed = await parseBody<{ tags?: string[] } | null>(req, secret)

    if (!parsed || !parsed.body) {
      return NextResponse.json({ ok: false, error: 'Invalid webhook payload' }, { status: 400 })
    }

    if (!parsed.isValidSignature) {
      return NextResponse.json({ ok: false }, { status: 401 })
    }

    body = parsed.body
  }

  const tags =
    Array.isArray(body.tags) && body.tags.length
      ? body.tags
      : ['homepage', 'posts', 'navigation', 'homepage-route']

  // Purge data cache tags
  tags.forEach(revalidateTag)
  // Purge HTML route cache
  revalidatePath('/')            // homepage
  revalidatePath('/blog')        // blog index (if used)

  return NextResponse.json({ ok: true, tags })
}

/** Health-check endpoint */
export async function GET() {
  return NextResponse.json({ ok: true, message: 'revalidate endpoint alive' })
}

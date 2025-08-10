// components/WaitlistSection.tsx
'use client'

import { useState, FormEvent } from 'react'

export interface WaitlistProps {
  label?: string
  headline: string
  subhead?: string
  placeholder?: string
  cta?: string
  errorMessage?: string
  successMessage?: string
  finePrint?: string
  onSubmit?: (email: string) => Promise<void> | void
}

export function WaitlistSection({
  label = 'Launching soon',
  headline,
  subhead,
  placeholder = 'Enter your email',
  cta = 'Subscribe',
  errorMessage = 'Please enter a valid email',
  successMessage = "Thanks — you're on the list!",
  finePrint = 'By subscribing, you agree to receive emails from us. You can unsubscribe at any time.',
  onSubmit,
}: WaitlistProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const isValid = /\S+@\S+\.\S+/.test(email)
    if (!isValid) {
      setError(errorMessage)
      return
    }

    setError('')
    await onSubmit?.(email)
    setSent(true)
  }

  return (
    <section className="">
      {/* ── Heading block ─────────────────────── */}
      <div className="text-sm font-semibold  tracking-wider text-zinc-500 leading-[0] mb-4">
        {label}
      </div>

      <h1 className="text-3xl md:text-5xl mb-4  font-bold md:text-4xl text-zinc-500">
        {headline}
      </h1>

      {subhead && <p className="text-zinc-600">{subhead}</p>}

      {/* ── Form / messages ───────────────────── */}
      {sent ? (
        <p className="text-green-600 font-medium">{successMessage}</p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 pt-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={` rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-zinc-900 ${
                error && 'border-red-500'
              }`}
            />

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 rounded-md font-semibold text-sm shadow-sm transition-colors
          bg-gray-900 text-white hover:bg-gray-800"
            >
              {cta}
            </button>
          </form>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </>
      )}

      <p className="mt-4 text-xs text-zinc-600">{finePrint}</p>
    </section>
  )
}

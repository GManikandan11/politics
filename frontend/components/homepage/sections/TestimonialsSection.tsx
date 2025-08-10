'use client'

import {useState} from 'react'
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import type {TestimonialsSectionData} from '@/lib/types'

export default function TestimonialsSection({
  sectionLabel,
  headline,
  subhead,
  slides,
}: TestimonialsSectionData) {
  /* local state for dots */
  const [current, setCurrent] = useState(0)
  const [ready, setReady] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {origin: 'center', perView: 1.25, spacing: 32},
    breakpoints: {
      '(min-width: 768px)':  {slides: {perView: 2.25, spacing: 32}},
      '(min-width: 1024px)': {slides: {perView: 3,    spacing: 32}},
    },
    created() {
      setReady(true)
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel)
    },
  })

  const canNavigate = ready && slides.length > 1

  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 text-center bg-background pt-16 xl:pt-20 pb-16 xl:pb-20 container  px-4 max-w-7xl">
      {/* heading */}
      <header className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {sectionLabel}
        </span>
        <h2 className="text-4xl font-extrabold md:text-5xl">{headline}</h2>
        {subhead && (
          <p className="mx-auto max-w-xl text-zinc-600 md:text-lg">{subhead}</p>
        )}
      </header>

      {/* slider */}
      <div className="relative">
        {/* arrows */}
        {canNavigate && (
          <>
            <button
              aria-label="Previous slide"
              onClick={() => instanceRef.current?.prev()}
              className="
              absolute -left-6 lg:-left-20 top-1/2 -translate-y-1/2
            z-10 flex h-10 w-10 items-center justify-center
            rounded-full border bg-white/70 backdrop-blur
            text-zinc-600 hover:bg-gray-100 transition
              "
            >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M15 6l-6 6 6 6" />
  </svg>

            </button>
        <button
          aria-label="Next slide"
          onClick={() => instanceRef.current?.next()}
          className="
            absolute -right-6 lg:-right-20 top-1/2 -translate-y-1/2
            z-10 flex h-10 w-10 items-center justify-center
            rounded-full border bg-white/70 backdrop-blur
            text-zinc-600 hover:bg-gray-100 transition
          "
        >
          {/* 16 × 16 chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
          </>
        )}

        <div ref={sliderRef} className="keen-slider">
          {slides.map((t) => (
            <article
              key={t._key}
              className="keen-slider__slide flex flex-col rounded-2xl border px-6 py-6 text-left"
            >
              {/* avatar + name */}
              <div className="mb-4 flex items-center gap-3">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-zinc-200" />
                )}
                <div>
                  <div className="font-semibold">{t.name}</div>
                  {t.role && <div className="text-sm text-zinc-500">{t.role}</div>}
                </div>
              </div>

              {/* stars */}
              <div className="mb-3 flex gap-1 text-yellow-400">
                {Array.from({length: 5}).map((_, i) => (
                  <span key={i}>{i < t.rating ? '★' : '☆'}</span>
                ))}
              </div>

              <p className="text-zinc-600">{t.quote}</p>
            </article>
          ))}
        </div>

        {/* dots */}
        {canNavigate && (
          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`h-2 w-2 rounded-full ${
                  i === current ? 'bg-zinc-900' : 'bg-zinc-400/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { moods, lengths, preferences, rooms } from '@/lib/hotel-data'

export function StayPlanner() {
  const [step, setStep] = useState(1)
  const [mood, setMood] = useState('')
  const [length, setLength] = useState('')
  const [preference, setPreference] = useState('')

  const getRecommendation = () => {
    const recommendations: { [key: string]: number } = {}
    rooms.forEach((_, i) => {
      recommendations[i] = Math.random()
    })
    const topRooms = Object.entries(recommendations)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .map(([idx]) => rooms[parseInt(idx)])
    return topRooms
  }

  const recommended = getRecommendation()

  return (
    <section className="bg-secondary px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-secondary-foreground/60">Plan your stay</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl leading-tight text-secondary-foreground">
          Choose your mood.
        </h2>

        <div className="mt-12">
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-base text-secondary-foreground/80">What brings you here?</p>
              <div className="space-y-2">
                {moods.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setMood(m)
                      setStep(2)
                    }}
                    className="block w-full text-left border-b border-secondary-foreground/20 py-3 text-base text-secondary-foreground hover:text-secondary-foreground/60 transition-colors"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-base text-secondary-foreground/80">How long do you have?</p>
              <div className="space-y-2">
                {lengths.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLength(l)
                      setStep(3)
                    }}
                    className="block w-full text-left border-b border-secondary-foreground/20 py-3 text-base text-secondary-foreground hover:text-secondary-foreground/60 transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-base text-secondary-foreground/80">Room preference?</p>
              <div className="space-y-2">
                {preferences.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPreference(p)
                      setStep(4)
                    }}
                    className="block w-full text-left border-b border-secondary-foreground/20 py-3 text-base text-secondary-foreground hover:text-secondary-foreground/60 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8">
              <div className="border-t border-secondary-foreground/20 pt-8">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-secondary-foreground/60">Your Morrow stay</p>
                <p className="mt-4 text-base text-secondary-foreground/90">
                  {mood} — {length.toLowerCase()} — {preference.toLowerCase()}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-secondary-foreground/60">Suggested rooms</p>
                {recommended.map((room) => (
                  <Link
                    key={room.slug}
                    href={`/rooms/${room.slug}`}
                    className="block border-b border-secondary-foreground/20 py-4 hover:text-secondary-foreground/60 transition-colors"
                  >
                    <h3 className="font-serif text-lg text-secondary-foreground">{room.name}</h3>
                    <p className="mt-1 text-sm text-secondary-foreground/70">{room.description}</p>
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="block w-full border border-secondary-foreground px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-secondary-foreground transition-colors hover:bg-secondary-foreground hover:text-secondary"
              >
                Start over
              </button>

              <Link
                href="/book"
                className="block w-full bg-secondary-foreground px-6 py-3 text-center text-xs font-bold uppercase tracking-[.16em] text-secondary transition-colors hover:bg-secondary-foreground/90"
              >
                Check dates
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { guide } from '@/lib/hotel-data'

export function LocalGuide() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="guide" className="bg-background px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Beyond the door</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl leading-tight text-foreground">
            Local guide.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* List */}
          <div className="space-y-1">
            {guide.map(([number, title, description], i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="block w-full text-left border-b border-border py-6 transition-colors hover:text-primary focus:outline-none focus:text-primary"
              >
                <p className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">{number}</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">{title}</h3>
                {activeIndex === i && (
                  <p className="mt-3 text-sm text-muted-foreground">{description}</p>
                )}
              </button>
            ))}
          </div>

         {/* Image */}
<div className="relative aspect-[4/5] hidden lg:block overflow-hidden lg:mt-5">
  <Image
    src="/local-guide.png"
    alt="A Cornish harbour with fishing boats and a waterside pub"
    fill
    sizes="500px"
    className="object-cover"
  />
</div>
          </div>
        </div>
    </section>
  )
}

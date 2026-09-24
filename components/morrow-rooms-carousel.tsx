'use client'

import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/lib/hotel-data'
import { useRef, useEffect, useState } from 'react'

export function RoomsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
      }
    }

    const container = scrollRef.current
    container?.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const distance = 400
      scrollRef.current.scrollBy({
        left: direction === 'right' ? distance : -distance,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="rooms" className="relative bg-background px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Five rooms</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl leading-tight text-foreground">
              Made for slow mornings.
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group flex-shrink-0 w-96 focus:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <Image
                    src={room.image}
                    alt={`${room.name} at Morrow House`}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="font-serif text-2xl text-foreground">{room.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{room.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs uppercase tracking-[.15em] text-muted-foreground">
                      From £{room.price}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[.16em] text-primary group-hover:translate-x-1 transition-transform">
                      View room →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll buttons */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 flex h-12 w-12 items-center justify-center border border-border bg-background hover:bg-card transition-colors"
              aria-label="Scroll rooms right"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

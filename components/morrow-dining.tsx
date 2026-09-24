import Image from 'next/image'
import Link from 'next/link'

export function DiningSection() {
  return (
    <section id="eat" className="bg-background px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The table</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight text-foreground">
              Cooking from the coast.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-md">
              Seasonal, unshowy, shaped by what arrives at the door and what grows in the garden nearby.
            </p>
            <div className="mt-8 space-y-3">
              {['Breakfast', 'Lunch', 'Dinner', 'Sunday supper'].map((meal) => (
                <p key={meal} className="text-sm uppercase tracking-[.15em] text-foreground">
                  {meal}
                </p>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex border border-primary px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-primary transition-colors hover:bg-primary hover:text-background w-fit"
            >
              See what's cooking
            </a>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 auto-rows-max">
            <div className="relative aspect-[3/4] col-span-1">
              <Image
                src="/seasonal-dish.webp"
                alt="Seasonal plates prepared at The Table"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] col-span-1">
              <Image
                src="/garden-produce.webp"
                alt="Fresh herbs and produce from the coastal garden"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-[16/9]">
              <Image
                src="/dining.webp"
                alt="Candlelit dining at Morrow House"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

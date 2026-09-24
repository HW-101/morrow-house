import Image from 'next/image'
import Link from 'next/link'

export function MorrowOpening() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Left: Typography */}
      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-12 md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:px-12 lg:px-16">
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-muted-foreground">Morrow House · North Cornwall</p>
          <h1 className="mt-8 font-serif text-6xl leading-tight md:text-7xl lg:text-8xl text-foreground">
            Stay close to the sea.
          </h1>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground max-w-sm">
            A small coastal hotel shaped by salt air, good food and quiet design.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="#rooms" className="border border-foreground px-6 py-3 text-xs font-bold tracking-[.18em] uppercase transition-colors hover:bg-foreground hover:text-background text-center">
              Explore the house
            </a>
            <Link href="/book" className="bg-foreground px-6 py-3 text-xs font-bold tracking-[.18em] uppercase text-background transition-colors hover:bg-[#1a1815] text-center">
              Book a stay
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
        <Image
          src="/morrow-house-exterior.webp"
          alt="Windswept North Cornwall coastline at dawn"
          fill
          priority
          sizes="50vw"
          className="object-cover object-[15%_center]"
        />
      </div>

      {/* Mobile image below text */}
      <div className="relative aspect-[4/3] w-full md:hidden">
      <Image
  src="/morrow-house-exterior.webp"
  alt="Windswept North Cornwall coastline at dawn"
  fill
  priority
fetchPriority="high"
  sizes="100vw"
  className="object-cover"
/>
      </div>
    </section>
  )
}

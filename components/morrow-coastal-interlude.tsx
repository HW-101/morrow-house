import Image from 'next/image'

export function CoastalInterlude() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-foreground">
      <Image
        src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2000&q=90"
        alt="Atlantic waves rolling onto the North Cornwall shore"
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <p className="text-lg md:text-2xl font-serif leading-relaxed text-background/90 text-pretty">
          Wake slowly. Walk to the water. Stay for another night.
        </p>
      </div>
    </section>
  )
}

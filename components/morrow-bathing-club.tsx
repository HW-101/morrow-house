import Image from 'next/image'

export function BathingClub() {
  const offerings = [
    { name: 'Sea-view sauna', image: '/sauna.jpg' },
    { name: 'Hot outdoor baths', image: '/hot-baths.jpg' },
    { name: 'Cold plunge', image: '/cold-plunge.jpg' },
    { name: 'Massage room', image: '/massage-room.jpg' },
  ]

  return (
    <section id="bathing-club" className="bg-background px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The bathing club</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl leading-tight text-foreground">
            A time for yourself.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <div key={offering.name} className="group overflow-hidden pb-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src={offering.image}
                  alt={`${offering.name} at Morrow House`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="mt-4 font-serif text-2xl text-foreground">{offering.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">Morning movement classes · Seasonal rituals · Open daily</p>
        </div>
      </div>
    </section>
  )
}

export function HouseDetails() {
  const facts = [
    { label: '5', detail: 'rooms' },
    { label: '1', detail: 'restaurant' },
    { label: '1', detail: 'bar' },
    { label: '1', detail: 'bathing club' },
    { label: '2', detail: 'minutes to the sea' },
  ]

  return (
    <section className="border-y border-border bg-background px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label + fact.detail}>
              <p className="font-serif text-6xl md:text-7xl leading-tight text-primary">
                {fact.label}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

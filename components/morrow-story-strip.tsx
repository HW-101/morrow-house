export function StoryStrip() {
  const stories = [
    { title: 'Sleep well', text: 'Linen, salt air, and rooms made for waking slowly.' },
    { title: 'Eat seasonally', text: 'Cooking from the coast, the garden and the fire.' },
    { title: 'Live slowly', text: 'Time moves differently here. We think that is the point.' },
  ]

  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row">
          {stories.map((story, i) => (
            <div
              key={story.title}
              className={`flex-1 px-6 py-12 md:px-10 md:py-16 ${
                i !== stories.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">
                {story.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-xs">
                {story.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

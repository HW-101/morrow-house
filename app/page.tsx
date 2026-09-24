import { MorrowOpening } from '@/components/morrow-opening'
import { StoryStrip } from '@/components/morrow-story-strip'
import { RoomsCarousel } from '@/components/morrow-rooms-carousel'
import { CoastalInterlude } from '@/components/morrow-coastal-interlude'
import { DiningSection } from '@/components/morrow-dining'
import { StayPlanner } from '@/components/morrow-stay-planner'
import { BathingClub } from '@/components/morrow-bathing-club'
import { LocalGuide } from '@/components/morrow-local-guide'
import { HouseDetails } from '@/components/morrow-house-details'
import { MorrowFooter } from '@/components/morrow-footer'
import { SiteNavigation } from '@/components/site-navigation'

export default function Page() {
  return (
    <main>
      <SiteNavigation />
      <MorrowOpening />
      <StoryStrip />
      <RoomsCarousel />
      <CoastalInterlude />
      <DiningSection />
      <StayPlanner />
      <BathingClub />
      <LocalGuide />
      <HouseDetails />
      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-3xl leading-relaxed text-foreground md:text-5xl">
            “A place that asks nothing of you, except that you stay a little longer.”
          </p>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">THE MORROW HOUSE PHILOSOPHY</p>
        </div>
      </section>
      <section id="contact" className="border-y border-border bg-card px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Ready when you are</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">Come closer to the sea.</h2>
          </div>
          <a href="/book" className="w-fit border border-foreground px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-foreground transition-colors hover:bg-foreground hover:text-background">Check dates</a>
        </div>
      </section>
      <MorrowFooter />
    </main>
  )
}

export const metadata = {
  title: 'Morrow House | Stay close to the sea',
  description: 'A small coastal hotel in North Cornwall shaped by salt air, good food and quiet design.',
}

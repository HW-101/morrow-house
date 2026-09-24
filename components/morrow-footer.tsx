import Link from 'next/link'

export function MorrowFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[.1em] text-foreground">MORROW HOUSE</p>
            <p className="mt-2 text-xs text-muted-foreground">North Cornwall · England</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Explore</p>
            <nav className="mt-4 space-y-2">
              {['Stay', 'Eat', 'Bathing Club', 'Guide', 'Journal'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Connect</p>
            <div className="mt-4 space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Newsletter
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            Concept website created as a portfolio project. Morrow House is a fictional hotel and brand.
          </p>
        </div>
      </div>
    </footer>
  )
}

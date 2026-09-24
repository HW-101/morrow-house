'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navItems } from '@/lib/hotel-data'

export function SiteNavigation() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-[.12em] text-foreground">MORROW HOUSE</Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="text-xs uppercase tracking-[.14em] text-foreground transition-colors hover:text-primary">{item}</a>
          ))}
          <Link href="/book" className="border border-foreground px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-foreground transition-colors hover:bg-foreground hover:text-background">Book</Link>
        </nav>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="border border-foreground px-3 py-1 text-xl leading-none text-foreground md:hidden">{open ? '×' : '≡'}</button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="block border-b border-border py-3 text-xs uppercase tracking-[.16em] text-foreground">{item}</a>
          ))}
          <Link onClick={() => setOpen(false)} href="/book" className="mt-4 block bg-foreground px-4 py-3 text-center text-xs font-bold uppercase tracking-[.15em] text-background">Book a stay</Link>
        </nav>
      )}
    </header>
  )
}

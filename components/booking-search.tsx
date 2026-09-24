'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { nightsBetween } from '@/lib/hotel-data'

export function BookingSearch() {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')
  const [rooms, setRooms] = useState('1')
  const [error, setError] = useState('')
  function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!checkIn || !checkOut || nightsBetween(checkIn, checkOut) < 1) return setError('Please choose a check-out date after check-in.')
    if (Number(adults) < 1) return setError('Please include at least one adult guest.')
    setError('')
    router.push(`/book?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`)
  }
  return <form onSubmit={submit} className="relative z-10 mx-auto -mt-10 max-w-6xl border border-border bg-background p-4 shadow-sm md:p-5">
    <div className="grid gap-3 md:grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_auto] md:items-end">
      {['Check-in', 'Check-out'].map((label, index) => <label key={label} className="flex flex-col gap-1 text-xs uppercase tracking-[.16em] text-muted-foreground">{label}<input required type="date" value={index === 0 ? checkIn : checkOut} onChange={(e) => index === 0 ? setCheckIn(e.target.value) : setCheckOut(e.target.value)} className="h-11 border border-input bg-card px-3 text-sm tracking-normal text-foreground outline-none focus:border-primary" /></label>)}
      <Select label="Adults" value={adults} onChange={setAdults} options={['1','2','3','4']} />
      <Select label="Children" value={children} onChange={setChildren} options={['0','1','2','3']} />
      <Select label="Rooms" value={rooms} onChange={setRooms} options={['1','2','3']} />
      <button className="h-11 bg-primary px-5 text-xs font-bold tracking-[.15em] text-primary-foreground transition-colors hover:bg-[#4d2326]">CHECK AVAILABILITY</button>
    </div>
    {error && <p role="alert" className="pt-3 text-sm text-primary">{error}</p>}
  </form>
}
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) { return <label className="flex flex-col gap-1 text-xs uppercase tracking-[.16em] text-muted-foreground">{label}<select value={value} onChange={(e) => onChange(e.target.value)} className="h-11 border border-input bg-card px-3 text-sm tracking-normal text-foreground outline-none focus:border-primary">{options.map((option) => <option key={option}>{option}</option>)}</select></label> }

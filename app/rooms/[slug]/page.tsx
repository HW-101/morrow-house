import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoom, rooms } from "@/lib/hotel-data";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}
export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();
  const related = rooms.filter((item) => item.slug !== room.slug).slice(0, 2);
  return (
    <main>
      <header className="border-b border-border bg-background px-5 py-5 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-[.08em]">
            ALDER HOUSE
          </Link>
          <Link
            href="/book"
            className="bg-primary px-5 py-3 text-xs font-bold tracking-[.16em] text-primary-foreground"
          >
            BOOK YOUR STAY
          </Link>
        </div>
      </header>
      <section className="relative mx-auto max-w-[1400px] px-5 pt-5 lg:px-10">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-7 left-6 text-white md:bottom-12 md:left-12">
            <p className="text-xs font-bold uppercase tracking-[.22em]">
              From £{room.price} per night
            </p>
            <h1 className="mt-3 font-serif text-5xl md:text-8xl">
              {room.name}
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.25fr_.75fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl leading-tight md:text-5xl">
            {room.description}
          </p>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            A thoughtful room for unhurried days. Settle into Egyptian cotton
            linen, make a coffee, open the windows and let the house do the
            rest. Every detail is chosen to feel quietly useful and effortlessly
            comfortable.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 border-y border-border py-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[.16em] text-muted-foreground">
                Size
              </p>
              <p className="mt-1">{room.size}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[.16em] text-muted-foreground">
                Sleeps
              </p>
              <p className="mt-1">{room.sleeps}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[.16em] text-muted-foreground">
                Bed
              </p>
              <p className="mt-1">{room.bed}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[.16em] text-muted-foreground">
                View
              </p>
              <p className="mt-1">{room.view}</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">
            What&apos;s included
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {room.amenities.map((amenity) => (
              <li key={amenity} className="border-b border-foreground/15 pb-3">
                {amenity}
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="mt-8 block bg-primary px-5 py-4 text-center text-xs font-bold tracking-[.16em] text-primary-foreground hover:bg-[#4d2326]"
          >
            CHECK AVAILABILITY
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-10">
        <h2 className="font-serif text-4xl">A closer look</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {room.gallery.map((image, i) => (
            <div
              key={image}
              className={`relative aspect-[4/3] overflow-hidden ${
  i === 2
    ? room.slug === "morrow-suite"
      ? "md:col-span-2 md:aspect-[16/7]"
      : "md:col-span-2 md:aspect-[16/7]"
    : ""
}`}
            >
              <Image
                src={image}
                alt={`${room.name} detail ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={
  room.slug === "morrow-suite" && i === 0
    ? "object-cover object-[0.25%_center]"
    : room.slug === "morrow-suite" && i === 2
      ? "object-cover object-[center_90%]"
      : "object-cover"
}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#292621] px-5 py-20 text-[#f3f0e9] lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl">You may also like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                href={`/rooms/${item.slug}`}
                key={item.slug}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-serif text-2xl">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

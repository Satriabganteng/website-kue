import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-14 md:pb-24 md:pt-16">
      <div className="flex flex-col gap-6">
        <p className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Kue by request sejak 2020
        </p>
        <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-6xl">
          Kue rumahan yang bikin <em className="text-accent">rindu pulang</em>.
        </h1>
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Bolu, kue ulang tahun, cookies, dan lainnya, semua dibuat sesuai
          pesananmu dengan bahan premium dan tanpa pengawet.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Lihat Menu
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#cara-pesan"
            className="inline-flex items-center rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            Pesan Kue Custom
          </a>
        </div>
        <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
          <div className="flex text-accent" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <span>
            <strong className="font-semibold text-foreground">4,9/5</strong> dari 500+ pelanggan
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
          <Image
            src="/images/hero.png"
            alt="Kue strawberry shortcake dua lapis dengan stroberi segar di atas cake stand"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-5 py-4 shadow-lg shadow-primary/10 md:-left-6">
          <p className="font-serif text-2xl font-semibold text-primary">100%</p>
          <p className="text-xs text-muted-foreground">Butter asli, tanpa pengawet</p>
        </div>
      </div>
    </section>
  )
}

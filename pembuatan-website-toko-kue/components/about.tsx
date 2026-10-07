import Image from 'next/image'

const stats = [
  { value: '2020', label: 'Tahun berdiri' },
  { value: '30+', label: 'Varian kue' },
  { value: '500+', label: 'Pelanggan setia' },
]

export function About() {
  return (
    <section id="tentang" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary md:order-last">
          <Image
            src="/images/baker.png"
            alt="Pembuat kue sedang menguleni adonan di dapur Avera Bakery"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Cerita Kami</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-medium tracking-tight text-primary md:text-5xl">
            Berawal dari dapur kecil di tahun 2020
          </h2>
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Avera Bakery lahir pada tahun 2020 dari kecintaan kami pada kue rumahan.
              Kami melayani pesanan by request, mulai dari bolu, kue ulang tahun, cookies,
              hingga kue untuk acara spesialmu.
            </p>
            <p>
              Setiap pesanan dibuat khusus untukmu: takaran yang teliti, bahan terbaik,
              dan desain sesuai keinginan. Tidak ada jalan pintas, tidak ada pengawet.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-muted-foreground md:text-sm">{stat.label}</dt>
                <dd className="font-serif text-3xl font-medium text-primary md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

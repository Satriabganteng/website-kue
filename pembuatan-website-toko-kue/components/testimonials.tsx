const testimonials = [
  {
    quote:
      'Bolunya lembut dan wangi, teksturnya lembab. Cookies-nya juga renyah. Sudah langganan pesan tiap ada acara keluarga.',
    name: 'Rina Wulandari',
    role: 'Pelanggan sejak 2021',
  },
  {
    quote:
      'Pesan kue ulang tahun custom untuk anak, desainnya sesuai banget dengan referensi. Rasanya juga tidak terlalu manis, semua tamu suka.',
    name: 'Dimas Prasetyo',
    role: 'Jakarta Selatan',
  },
  {
    quote:
      'Brownies-nya juara! Pengiriman rapi dan tepat waktu. Admin WhatsApp-nya ramah dan cepat respons.',
    name: 'Ayu Kartika',
    role: 'Tangerang',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Kata Mereka</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-medium tracking-tight text-primary md:text-5xl">
            Manisnya cerita pelanggan
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-secondary p-8">
                <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption>
                  <p className="font-medium text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

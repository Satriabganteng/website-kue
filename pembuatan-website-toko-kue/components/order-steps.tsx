import { CakeSlice, MessageCircle, Truck } from 'lucide-react'

const steps = [
  {
    icon: CakeSlice,
    title: 'Pilih kue',
    body: 'Tambahkan kue dari menu, atau ceritakan desain kue custom impianmu.',
  },
  {
    icon: MessageCircle,
    title: 'Konfirmasi via WhatsApp',
    body: 'Kami balas dalam 15 menit pada jam buka untuk konfirmasi detail dan pembayaran.',
  },
  {
    icon: Truck,
    title: 'Ambil atau kirim',
    body: 'Ambil di toko atau kami antar dengan kurir khusus kue ke seluruh Jabodetabek.',
  },
]

export function OrderSteps() {
  return (
    <section id="cara-pesan" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Cara Pesan</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Tiga langkah menuju kue impianmu
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-4 border-t border-primary-foreground/20 pt-6">
              <div className="flex items-center justify-between">
                <step.icon className="size-7 text-accent" aria-hidden="true" />
                <span className="font-serif text-sm opacity-60">0{index + 1}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium">{step.title}</h3>
              <p className="leading-relaxed opacity-75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

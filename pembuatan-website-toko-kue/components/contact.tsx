import { Clock, MapPin, Phone } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/products'

export function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-balance font-serif text-4xl font-medium tracking-tight text-primary md:text-5xl">
              Mampir ke toko kami
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Cicipi kue yang baru keluar dari oven, atau konsultasikan desain kue
              pernikahan dan ulang tahunmu langsung bersama tim kami.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Chat WhatsApp
            </a>
          </div>

          <address className="flex flex-col gap-6 not-italic">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary">Alamat</p>
                <p className="text-muted-foreground">
                  Cinere Green Valley, Pondok Cabe
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary">Jam Buka</p>
                <p className="text-muted-foreground">Senin – Sabtu: 08.00 – 20.00</p>
                <p className="text-muted-foreground">Minggu: 09.00 – 17.00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary">Telepon & WhatsApp</p>
                <a href="tel:+6287884545321" className="text-muted-foreground hover:text-foreground">
                  0878-8454-5321
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/products'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#cara-pesan', label: 'Cara Pesan' },
  { href: '#kontak', label: 'Kontak' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl font-semibold tracking-tight text-primary">
            Avera
          </span>
          <span className="font-serif text-xl italic text-accent">Bakery</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Pesan Sekarang
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigasi seluler" className="border-t border-border/60 md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

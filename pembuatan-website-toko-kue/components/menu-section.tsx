'use client'

import { useMemo, useState } from 'react'
import { categories, products, type Category } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { OrderBar } from '@/components/order-bar'
import { cn } from '@/lib/utils'

export type Cart = Record<string, number>

export function MenuSection() {
  const [active, setActive] = useState<'Semua' | Category>('Semua')
  const [cart, setCart] = useState<Cart>({})

  const visible = useMemo(
    () => (active === 'Semua' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  function updateQuantity(id: string, delta: number) {
    setCart((prev) => {
      const next = Math.max(0, Math.min(20, (prev[id] ?? 0) + delta))
      const { [id]: _removed, ...rest } = prev
      return next === 0 ? rest : { ...rest, [id]: next }
    })
  }

  return (
    <section id="menu" className="scroll-mt-20 bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Menu Kami</p>
            <h2 className="mt-3 text-balance font-serif text-4xl font-medium tracking-tight text-primary md:text-5xl">
              Pilih kue favoritmu
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tambahkan ke pesanan, lalu kirim langsung ke WhatsApp kami. Pemesanan
              kue tart minimal H-2.
            </p>
          </div>

          <div role="tablist" aria-label="Kategori kue" className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm transition-colors',
                  active === category
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-muted-foreground hover:text-foreground',
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                quantity={cart[product.id] ?? 0}
                onChange={(delta) => updateQuantity(product.id, delta)}
              />
            </li>
          ))}
        </ul>
      </div>

      <OrderBar cart={cart} onClear={() => setCart({})} />
    </section>
  )
}

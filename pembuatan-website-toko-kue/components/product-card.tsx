import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import { formatRupiah, type Product } from '@/lib/products'

type Props = {
  product: Product
  quantity: number
  onChange: (delta: number) => void
}

export function ProductCard({ product, quantity, onChange }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-medium text-primary">{product.name}</h3>
          <p className="shrink-0 font-semibold text-foreground">{formatRupiah(product.price)}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <p className="text-xs uppercase tracking-wider text-muted-foreground/80">{product.unit}</p>

        <div className="mt-auto pt-3">
          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => onChange(1)}
              className="w-full rounded-full border border-primary/20 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Tambah ke Pesanan
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-full bg-primary p-1 text-primary-foreground">
              <button
                type="button"
                onClick={() => onChange(-1)}
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/15"
              >
                <Minus className="size-4" aria-hidden="true" />
                <span className="sr-only">Kurangi {product.name}</span>
              </button>
              <span className="text-sm font-medium" aria-live="polite">
                {quantity} di pesanan
              </span>
              <button
                type="button"
                onClick={() => onChange(1)}
                disabled={quantity >= 20}
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/15 disabled:opacity-40"
              >
                <Plus className="size-4" aria-hidden="true" />
                <span className="sr-only">Tambah {product.name}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

import { ShoppingBag, X } from 'lucide-react'
import { formatRupiah, products, WHATSAPP_NUMBER } from '@/lib/products'
import type { Cart } from '@/components/menu-section'

type Props = {
  cart: Cart
  onClear: () => void
}

export function OrderBar({ cart, onClear }: Props) {
  const items = products
    .filter((p) => cart[p.id])
    .map((p) => ({ ...p, quantity: cart[p.id] }))

  if (items.length === 0) return null

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const message = [
    'Halo Avera Bakery, saya ingin memesan:',
    '',
    ...items.map(
      (item) => `- ${item.quantity}x ${item.name} (${formatRupiah(item.price * item.quantity)})`,
    ),
    '',
    `Total: ${formatRupiah(total)}`,
    '',
    'Nama:',
    'Tanggal ambil/kirim:',
    'Alamat (jika dikirim):',
  ].join('\n')

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4" role="region" aria-label="Ringkasan pesanan">
      <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-primary-foreground shadow-xl shadow-primary/25">
        <ShoppingBag className="size-5 shrink-0" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{totalItems} kue dipilih</p>
          <p className="text-xs opacity-80">{formatRupiah(total)}</p>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/15"
        >
          <X className="size-4" aria-hidden="true" />
          <span className="sr-only">Kosongkan pesanan</span>
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}

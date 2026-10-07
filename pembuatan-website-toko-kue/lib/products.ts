export const WHATSAPP_NUMBER = '6287884545321'

export type Category = 'Kue Ulang Tahun' | 'Bolu' | 'Cookies'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  unit: string
  category: Category
  image: string
  badge?: string
}

export const categories: Array<'Semua' | Category> = [
  'Semua',
  'Kue Ulang Tahun',
  'Bolu',
  'Cookies',
]

export const products: Product[] = [
  {
    id: 'strawberry-shortcake',
    name: 'Strawberry Shortcake',
    description: 'Sponge lembut, krim segar, dan stroberi pilihan dari Lembang.',
    price: 285000,
    unit: 'diameter 20 cm',
    category: 'Kue Ulang Tahun',
    image: '/images/hero.png',
    badge: 'Terlaris',
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Cokelat pekat, ceri asam manis, dan whipped cream yang ringan.',
    price: 265000,
    unit: 'diameter 20 cm',
    category: 'Kue Ulang Tahun',
    image: '/images/black-forest.png',
  },
  {
    id: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    description: 'Cheesecake panggang yang creamy dengan selai blueberry buatan sendiri.',
    price: 310000,
    unit: 'diameter 18 cm',
    category: 'Kue Ulang Tahun',
    image: '/images/cheesecake.png',
  },
  {
    id: 'lapis-legit',
    name: 'Bolu Lapis Legit',
    description: 'Lapisan demi lapisan dipanggang satu per satu dengan butter asli dan rempah.',
    price: 395000,
    unit: 'loyang 20 x 10 cm',
    category: 'Bolu',
    image: '/images/lapis-legit.png',
    badge: 'Favorit',
  },
  {
    id: 'pandan-klepon',
    name: 'Bolu Pandan Klepon',
    description: 'Bolu pandan asli, saus gula aren, dan taburan kelapa parut.',
    price: 185000,
    unit: 'diameter 18 cm',
    category: 'Bolu',
    image: '/images/klepon-cake.png',
    badge: 'Baru',
  },
  {
    id: 'fudgy-brownies',
    name: 'Fudgy Brownies',
    description: 'Brownies lumer dengan permukaan crinkle dan cokelat Belgia.',
    price: 125000,
    unit: 'isi 16 potong',
    category: 'Bolu',
    image: '/images/brownies.png',
  },
  {
    id: 'nastar',
    name: 'Cookies Nastar',
    description: 'Kulit lumer di mulut dengan selai nanas madu yang dimasak 6 jam.',
    price: 155000,
    unit: 'toples 500 gr',
    category: 'Cookies',
    image: '/images/nastar.png',
  },
]

export function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export type CatalogKind = 'iphone' | 'accessory'

export interface CatalogItem {
  id: number
  kind: CatalogKind
  name: string
  subtitle: string
  description: string
  price: number
  oldPrice?: number
  accent: string
  image: string
  image2?: string
  imageAlt: string
  badge?: string
  colorHexes?: string[]
  colorNames?: string[]
  storage?: string[]
  features: string[]
}

export interface CartItem extends CatalogItem {
  quantity: number
}

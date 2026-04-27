import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { CartDrawer } from './components/CartDrawer'
import { CatalogSection } from './components/CatalogSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductModal } from './components/ProductModal'
import { Ticker } from './components/Ticker'
import { accessories, iphones } from './data/catalog'
import type { CartItem, CatalogItem } from './types/store'

const STORAGE_KEY = 'sultan_iphones_cart_v1'

function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setCart(JSON.parse(stored) as CartItem[])
      }
    } catch {
      setCart([])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  function addToCart(item: CatalogItem) {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id)
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry,
        )
      }
      return [...current, { ...item, quantity: 1 }]
    })
  }

  function removeFromCart(id: number) {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  function scrollToIphones() {
    document.getElementById('iphones')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero items={iphones.slice(0, 3)} onShop={scrollToIphones} />
        <Ticker />
        <CatalogSection
          id="iphones"
          eyebrow="Linha Completa"
          items={iphones}
          onAdd={addToCart}
          onView={setSelectedItem}
          title="iPhones"
        />
        <CatalogSection
          id="acessorios"
          eyebrow="Complementos"
          items={accessories}
          onAdd={addToCart}
          onView={setSelectedItem}
          title="Acessórios Apple"
        />
      </main>
      <Footer />

      <ProductModal item={selectedItem} onAdd={addToCart} onClose={() => setSelectedItem(null)} />
      <CartDrawer
        isOpen={isCartOpen}
        items={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  )
}

export default App

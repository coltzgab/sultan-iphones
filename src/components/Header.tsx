interface HeaderProps {
  cartCount: number
  onCartOpen: () => void
}

const navItems = [
  { label: 'iPhones', href: '#iphones' },
  { label: 'Acessorios', href: '#acessorios' },
  { label: 'Garantia', href: '#garantia' },
  { label: 'Contato', href: '#contato' },
]

export function Header({ cartCount, onCartOpen }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="brand">
        <img alt="Logo Sultan iPhones" className="brand__logo" src="/logo-sultan.jpeg" />
        <div className="brand__text">
          <span className="brand__title">Sultan</span>
          <span className="brand__accent">iPhones</span>
        </div>
      </div>

      <nav className="site-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button className="cart-chip" onClick={onCartOpen} type="button">
        Carrinho ({cartCount})
      </button>
    </header>
  )
}

import type { CatalogItem } from '../types/store'
import { PillButton } from './PillButton'

interface HeroProps {
  items: CatalogItem[]
  onShop: () => void
}

export function Hero({ items, onShop }: HeroProps) {
  const [main, sideA, sideB] = items

  return (
    <section className="hero">
      <div className="hero__copy">
        <div className="hero__eyebrow">Loja especializada Apple - Desde 2020</div>
        <h1>
          Seu proximo
          <br />
          iPhone esta
          <br />
          <span>aqui.</span>
        </h1>
        <p>
          Novos e seminovos com garantia Sultan de 12 meses. Parcele em ate{' '}
          <strong>12x sem juros</strong>.
        </p>
        <div className="hero__actions">
          <PillButton onClick={onShop}>Comprar agora</PillButton>
          <PillButton href="https://wa.me/5511999999999" target="_blank" tone="ghost">
            WhatsApp
          </PillButton>
        </div>
        <div className="hero__stats">
          <div>
            <strong>4.9</strong>
            <span>Avaliacao media</span>
          </div>
          <div>
            <strong>12x</strong>
            <span>Sem juros</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Entrega em SP</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-label="Destaque principal de iPhones">
        <div className="hero__glow hero__glow--large" />
        <div className="hero__glow hero__glow--small" />

        <div className="hero-phone hero-phone--left">
          <div className="hero-phone__crop hero-phone__crop--side">
            <img alt={sideA.imageAlt} src={sideA.image} />
          </div>
        </div>

        <div className="hero-phone hero-phone--right">
          <div className="hero-phone__crop hero-phone__crop--side">
            <img alt={sideB.imageAlt} src={sideB.image} />
          </div>
        </div>

        <div className="hero__shadow" />

        <div className="hero-phone hero-phone--main">
          <div className="hero-phone__crop hero-phone__crop--main">
            <img alt={main.imageAlt} src={main.image} />
          </div>
        </div>

        <div className="hero__caption">
          <span className="hero__dot" style={{ backgroundColor: main.accent }} />
          <div>
            <strong>{main.name}</strong>
            <span>{main.subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

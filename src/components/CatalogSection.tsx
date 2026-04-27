import type { CSSProperties } from 'react'
import type { CatalogItem } from '../types/store'
import { PillButton } from './PillButton'

interface CatalogSectionProps {
  id: string
  title: string
  eyebrow: string
  items: CatalogItem[]
  onAdd: (item: CatalogItem) => void
  onView: (item: CatalogItem) => void
}

export function CatalogSection({ id, title, eyebrow, items, onAdd, onView }: CatalogSectionProps) {
  return (
    <section className="catalog-section" id={id}>
      <div className="section-heading">
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
        </div>
      </div>

      <div className="catalog-grid">
        {items.map((item) => (
          <article className="catalog-card" key={item.id}>
            <div className="catalog-card__media" style={{ '--accent': item.accent } as CSSProperties}>
              {item.badge ? <div className="catalog-card__badge">{item.badge}</div> : null}
              <img alt={item.imageAlt} src={item.image} />
            </div>

            <div className="catalog-card__body">
              <div className="catalog-card__title-row">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="price-block">
                  {item.oldPrice ? <span>{formatMoney(item.oldPrice)}</span> : null}
                  <strong>{formatMoney(item.price)}</strong>
                </div>
              </div>

              <p className="catalog-card__description">{item.description}</p>

              <div className="catalog-card__chips">
                {item.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="catalog-card__actions">
                <PillButton onClick={() => onAdd(item)}>Adicionar</PillButton>
                <PillButton onClick={() => onView(item)} tone="ghost">
                  Ver detalhes
                </PillButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function formatMoney(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value)
}

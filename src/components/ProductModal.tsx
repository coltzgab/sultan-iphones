import type { CSSProperties } from 'react'
import type { CatalogItem } from '../types/store'
import { PillButton } from './PillButton'

interface ProductModalProps {
  item: CatalogItem | null
  onClose: () => void
  onAdd: (item: CatalogItem) => void
}

export function ProductModal({ item, onClose, onAdd }: ProductModalProps) {
  if (!item) return null

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div className="modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <button className="overlay__close" onClick={onClose} type="button">
          ×
        </button>

        <div className="modal__media" style={{ '--accent': item.accent } as CSSProperties}>
          <img alt={item.imageAlt} src={item.image} />
        </div>

        <div className="modal__content">
          <span className="modal__eyebrow">{item.kind === 'iphone' ? 'iPhone' : 'Acessorio Apple'}</span>
          <h3>{item.name}</h3>
          <p className="modal__subtitle">{item.subtitle}</p>
          <p className="modal__description">{item.description}</p>

          <div className="modal__chips">
            {item.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>

          {item.colorNames?.length ? (
            <div className="modal__meta">
              <strong>Cores</strong>
              <span>{item.colorNames.join(' · ')}</span>
            </div>
          ) : null}

          {item.storage?.length ? (
            <div className="modal__meta">
              <strong>Armazenamento</strong>
              <span>{item.storage.join(' · ')}</span>
            </div>
          ) : null}

          <div className="modal__price">
            {item.oldPrice ? <span>{formatMoney(item.oldPrice)}</span> : null}
            <strong>{formatMoney(item.price)}</strong>
          </div>

          <div className="modal__actions">
            <PillButton onClick={() => onAdd(item)}>Adicionar ao carrinho</PillButton>
            <PillButton href="https://wa.me/5511999999999" target="_blank" tone="ghost">
              Falar no WhatsApp
            </PillButton>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatMoney(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value)
}

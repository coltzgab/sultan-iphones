import type { CartItem } from '../types/store'
import { PillButton } from './PillButton'

interface CartDrawerProps {
  items: CartItem[]
  isOpen: boolean
  onClose: () => void
  onRemove: (id: number) => void
}

export function CartDrawer({ items, isOpen, onClose, onRemove }: CartDrawerProps) {
  if (!isOpen) return null

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const whatsappText = encodeURIComponent(
    `Ola! Quero finalizar meu pedido na Sultan iPhones:\n\n${items
      .map((item) => `• ${item.name} x${item.quantity} - ${formatMoney(item.price)}`)
      .join('\n')}\n\nTotal: ${formatMoney(total)}`,
  )

  return (
    <div className="overlay overlay--drawer" onClick={onClose} role="presentation">
      <aside className="drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer__header">
          <div>
            <span>Seu carrinho</span>
            <strong>{items.length} item(ns)</strong>
          </div>
          <button className="overlay__close" onClick={onClose} type="button">
            ×
          </button>
        </div>

        <div className="drawer__items">
          {items.length === 0 ? (
            <p className="drawer__empty">Seu carrinho esta vazio por enquanto.</p>
          ) : (
            items.map((item) => (
              <article className="drawer-item" key={item.id}>
                <img alt={item.imageAlt} src={item.image} />
                <div>
                  <strong>{item.name}</strong>
                  <span>
                    {item.quantity}x · {formatMoney(item.price)}
                  </span>
                </div>
                <button onClick={() => onRemove(item.id)} type="button">
                  Remover
                </button>
              </article>
            ))
          )}
        </div>

        <div className="drawer__footer">
          <div className="drawer__total">
            <span>Total</span>
            <strong>{formatMoney(total)}</strong>
          </div>
          <PillButton
            fullWidth
            href={`https://wa.me/5511999999999?text=${whatsappText}`}
            target="_blank"
          >
            Finalizar no WhatsApp
          </PillButton>
        </div>
      </aside>
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

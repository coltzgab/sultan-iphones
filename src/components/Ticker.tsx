const items = [
  'Frete gratis acima de R$ 500',
  'Parcelamento em ate 12x',
  'Garantia Sultan de 12 meses',
  'Entrega expressa para SP',
  'Atendimento rapido no WhatsApp',
]

export function Ticker() {
  return (
    <div className="ticker" aria-label="Destaques da loja">
      <div className="ticker__track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

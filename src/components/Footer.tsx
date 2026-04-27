export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="site-footer__brand">
        <img alt="Logo Sultan iPhones" src="/logo-sultan.jpeg" />
        <div>
          <strong>Sultan iPhones</strong>
          <span>Atendimento especializado em iPhones, seminovos e acessorios Apple.</span>
        </div>
      </div>

      <div className="site-footer__grid">
        <div id="garantia">
          <h4>Garantia</h4>
          <p>Garantia Sultan de 12 meses nos modelos selecionados e suporte proximo no pos-venda.</p>
        </div>
        <div>
          <h4>Entrega</h4>
          <p>Retirada agendada, envio para todo o Brasil e entrega expressa na capital paulista.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>WhatsApp para orcamento, aprovacao de pedido e duvidas sobre estoque em tempo real.</p>
        </div>
      </div>
    </footer>
  )
}

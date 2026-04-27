import { useState } from 'react'
import { iphones } from '../data/catalog'
import type { CatalogItem } from '../types/store'

interface FeaturedProductProps {
  onAdd: (item: CatalogItem) => void
  onView: (item: CatalogItem) => void
}

export function FeaturedProduct({ onAdd, onView }: FeaturedProductProps) {
  const item = iphones[0] // iPhone 16 Pro Max
  const [selectedColor, setSelectedColor] = useState('Deserto')
  const [selectedStorage, setSelectedStorage] = useState('256GB')

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="relative grid grid-cols-1 items-center gap-12 rounded-[2rem] bg-[#f8f8fb] p-8 md:p-16 lg:grid-cols-2 lg:gap-8">

        {/* Badges */}
        <div className="absolute left-6 top-6 z-10 md:left-10 md:top-10">
          <span className="rounded-md bg-[#8a2be2] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(138,43,226,0.4)]">
            Mais Vendido
          </span>
        </div>

        {/* Left: Image Container */}
        <div className="group relative flex min-h-[400px] w-full items-center justify-center md:min-h-[500px]">
          {/* Tilted White Card Background */}
          <div className="absolute inset-0 -rotate-6 transform rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-out group-hover:-rotate-3" />

          {/* Product Image */}
          <img
            src={item.image}
            alt={item.imageAlt}
            className="relative z-10 w-full max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105 md:max-w-md"
          />
        </div>

        {/* Right: Product Details */}
        <div className="relative z-10 flex flex-col pl-0 lg:pl-12">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b8804a]">
            CHIP A18 PRO · TITÂNIO · 6,9"
          </h4>
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            iPhone 16 Pro Max
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-500">
            O iPhone mais poderoso de todos os tempos. Titânio aeroespacial, câmera profissional e bateria de até 33 horas.
          </p>

          {/* Features */}
          <div className="mb-10 flex flex-wrap gap-2">
            {['Câmera 5X · Tetra-Prisma', 'ProRes Video 4K', 'Chip A18 Pro', '48 MP Principal'].map(feat => (
              <span
                key={feat}
                className="rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                {feat}
              </span>
            ))}
          </div>

          {/* Colors */}
          <div className="mb-8">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-gray-500">
              COR: <span className="ml-1 font-bold capitalize text-gray-900">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Deserto', hex: '#b8804a' },
                { name: 'Titânio Escuro', hex: '#4a4a4a' },
                { name: 'Branco', hex: '#f0f0f0' },
                { name: 'Preto', hex: '#1a1a1a' },
              ].map(color => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-8 w-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-white ring-2 ring-[#b8804a]'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Storage */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {['256GB', '512GB', '1TB'].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedStorage(size)}
                  className={`rounded-xl border px-6 py-2.5 text-sm font-medium transition-colors ${
                    selectedStorage === size
                      ? 'border-[#b8804a] bg-[#b8804a]/10 text-gray-900'
                      : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-10">
            <div className="mb-1 flex items-baseline gap-3">
              <span className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">R$ 9.999</span>
              <span className="text-lg text-gray-400 line-through decoration-1">R$ 10.999</span>
            </div>
            <p className="text-sm text-gray-400">ou 12x de R$ 833 sem juros no cartão</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onAdd(item)}
              className="flex-1 rounded-full border border-gray-700 bg-gradient-to-b from-[#2a2a2a] to-[#000] px-8 py-4 font-medium text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
            >
              Adicionar ao Carrinho
            </button>
            <button
              type="button"
              onClick={() => onView(item)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#2a2a2a] bg-[#151515] px-8 py-4 font-medium text-white transition-all hover:bg-[#222]"
            >
              Ver detalhes <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

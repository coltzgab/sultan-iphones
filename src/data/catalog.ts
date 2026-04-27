import type { CatalogItem } from '../types/store'

export const iphones: CatalogItem[] = [
  {
    id: 1,
    kind: 'iphone',
    name: 'iPhone 16 Pro Max',
    subtitle: 'Chip A18 Pro · Titânio · 6,9"',
    description:
      'O iPhone mais poderoso de todos os tempos. Titânio aeroespacial, câmera profissional e bateria de até 33 horas.',
    price: 9999,
    oldPrice: 10999,
    accent: '#b8804a',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 16 Pro Max em titânio deserto',
    badge: 'Mais Vendido',
    colorHexes: ['#3d3731', '#4a4642', '#e8ddd4', '#1c1c1e'],
    colorNames: ['Deserto', 'Natural', 'Branco', 'Preto'],
    storage: ['256GB', '512GB', '1TB'],
    features: ['Câmera 5× Tetra-Prisma', 'ProRes Video 4K', 'Chip A18 Pro', '48 MP Principal'],
  },
  {
    id: 2,
    kind: 'iphone',
    name: 'iPhone 16 Pro',
    subtitle: 'Chip A18 Pro · Titânio · 6,3"',
    description:
      'Pro em tamanho compacto. A câmera mais avançada da Apple em um design de Titânio ultrarresistente.',
    price: 8999,
    oldPrice: 9699,
    accent: '#4a8a98',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 16 Pro em titânio preto',
    colorHexes: ['#1c1c1e', '#3d3731', '#e8ddd4', '#4a4642'],
    colorNames: ['Preto', 'Deserto', 'Branco', 'Natural'],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    features: ['Tela 6,3" OLED', 'Câmera Tetra-Prisma 5×', 'Action Button', 'Chip A18 Pro'],
  },
  {
    id: 3,
    kind: 'iphone',
    name: 'iPhone 16 Plus',
    subtitle: 'Chip A18 · 6,7" · Bateria de 27h',
    description:
      'Tela enorme, bateria épica. O iPhone 16 Plus com Action Button e Botão Controle da Câmera.',
    price: 7999,
    oldPrice: 8699,
    accent: '#4a6ec0',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-black?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 16 Plus em preto',
    colorHexes: ['#1c1c1e', '#f8f0e6', '#3a5fa8', '#e8c8d0', '#3aab5c'],
    colorNames: ['Preto', 'Branco', 'Azul', 'Rosa', 'Verde'],
    storage: ['128GB', '256GB', '512GB'],
    features: ['Tela 6,7" Super Retina XDR', 'Action Button', 'Controle de Câmera', 'Chip A18'],
  },
  {
    id: 4,
    kind: 'iphone',
    name: 'iPhone 16',
    subtitle: 'Chip A18 · 6,1" · Action Button',
    description:
      'O iPhone para todos. Chip A18, câmera de 48 MP e os novos botões Action e Controle da Câmera.',
    price: 6999,
    oldPrice: 7599,
    accent: '#c05080',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 16 em ultramarine',
    colorHexes: ['#1c1c1e', '#f8f0e6', '#5b8acb', '#e8c0c8', '#3aab5c'],
    colorNames: ['Preto', 'Branco', 'Azul', 'Rosa', 'Verde'],
    storage: ['128GB', '256GB', '512GB'],
    features: ['Tela 6,1" OLED', 'Action Button', 'Controle de Câmera', 'Camera 48MP'],
  },
  {
    id: 5,
    kind: 'iphone',
    name: 'iPhone 15',
    subtitle: 'Chip A16 · Dynamic Island · USB-C',
    description:
      'Dynamic Island, USB-C e câmera de 48 MP. Um enorme salto em relação ao iPhone 14.',
    price: 5499,
    oldPrice: 6499,
    accent: '#5c8830',
    badge: 'Seminovo',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 15 em preto',
    colorHexes: ['#1c1c1e', '#f8f0e6', '#f5c5a3', '#c3ddf8', '#c0d8c0'],
    colorNames: ['Preto', 'Branco', 'Rosa', 'Azul', 'Verde'],
    storage: ['128GB', '256GB', '512GB'],
    features: ['Dynamic Island', 'USB-C', 'Camera 48MP', 'Chip A16 Bionic'],
  },
  {
    id: 6,
    kind: 'iphone',
    name: 'iPhone 14',
    subtitle: 'Chip A15 Bionic · 6,1" · MagSafe',
    description:
      'Desempenho robusto com Chip A15 Bionic, MagSafe e detecção de acidentes. Preço imbatível.',
    price: 4499,
    oldPrice: 5499,
    accent: '#3a68b8',
    badge: 'Oportunidade',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=5120&fmt=png-alpha',
    image2:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=5120&fmt=png-alpha',
    imageAlt: 'iPhone 14 em meia-noite',
    colorHexes: ['#1c1c1e', '#f0f0f0', '#c8d8f8', '#e8c8d8', '#c8e8d0'],
    colorNames: ['Meia-Noite', 'Estelar', 'Azul', 'Roxo', 'Verde'],
    storage: ['128GB', '256GB', '512GB'],
    features: ['Chip A15 Bionic', 'MagSafe', 'Camera 12MP', 'Crash Detection'],
  },
]

export const accessories: CatalogItem[] = [
  {
    id: 101,
    kind: 'accessory',
    name: 'AirPods Pro 2ª Geração',
    subtitle: 'Cancelamento Ativo de Ruído',
    description:
      'Cancelamento ativo de ruído, modo Transparência adaptativo e Áudio Espacial personalizado.',
    price: 1999,
    oldPrice: 2299,
    accent: '#4a78c0',
    badge: 'Novo',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK73?wid=2000&hei=2000&fmt=png-alpha',
    imageAlt: 'AirPods Pro 2',
    features: ['ANC', 'Estojo MagSafe', 'Áudio espacial'],
  },
  {
    id: 102,
    kind: 'accessory',
    name: 'Apple Watch Series 10',
    subtitle: 'Mais Fino. Tela Maior.',
    description:
      'O mais fino Apple Watch já feito. Tela 30% maior, natação em águas abertas.',
    price: 3999,
    oldPrice: 4299,
    accent: '#8060c8',
    badge: 'Novo',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-702-aluminum-jet-black-702-aluminum-jet-black-202409?wid=2000&hei=2000&fmt=png-alpha',
    imageAlt: 'Apple Watch Series 10',
    features: ['Tela maior', 'Ultra fino', 'Natação'],
  },
  {
    id: 103,
    kind: 'accessory',
    name: 'Capa iPhone 16 Pro FineWoven',
    subtitle: 'MagSafe · Ultra-resistente',
    description:
      'Material FineWoven com MagSafe integrado. Proteção elegante com toque de microtecido sofisticado.',
    price: 399,
    oldPrice: 499,
    accent: '#c06060',
    badge: 'Novo',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4A3?wid=2000&hei=2000&fmt=png-alpha',
    imageAlt: 'Capa FineWoven para iPhone',
    features: ['MagSafe', 'Visual limpo', 'Proteção diária'],
  },
  {
    id: 104,
    kind: 'accessory',
    name: 'MagSafe Carregador',
    subtitle: '15W de carregamento sem fio',
    description:
      'O carregador MagSafe com 15W conecta perfeitamente no iPhone 12 ou superior.',
    price: 299,
    oldPrice: 399,
    accent: '#48a888',
    badge: 'Essencial',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=2000&hei=2000&fmt=png-alpha',
    imageAlt: 'Carregador MagSafe',
    features: ['Sem fio', 'Magnético', 'Compatibilidade Apple'],
  },
]

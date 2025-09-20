import type {
    CreateProductData,
    Product,
    ProductFilters,
    ProductResponse,
    ProductSort,
    UpdateProductData
} from '../types/product'
import { ProductBrand, ProductCategory } from '../types/product'

/**
 * Serviço para gerenciar produtos
 * Em breve será integrado com Firebase
 */
export class ProductService {
  private static products: Product[] = [
    {
      id: '1',
      slug: 'smartphone-galaxy-pro',
      name: 'Smartphone Galaxy Pro',
      description: 'Smartphone com tela de 6.5" e câmera de 64MP. Desenvolvido com tecnologia de ponta para oferecer a melhor experiência mobile.',
      shortDescription: 'Smartphone com tela de 6.5" e câmera de 64MP',
      price: 1299.99,
      originalPrice: 1599.99,
      discount: 19,
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800'
      ],
      mainImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      category: ProductCategory.MOBILE,
      subcategory: 'smartphones',
      brand: ProductBrand.SAMSUNG,
      sku: 'GALAXY-PRO-001',
      stock: 15,
      isAvailable: true,
      isFeatured: true,
      isNew: false,
      rating: 4.5,
      reviewCount: 127,
      tags: ['smartphone', 'android', 'camera', 'premium'],
      specifications: [
        { name: 'Tela', value: '6.5" Super AMOLED', category: 'Display' },
        { name: 'Câmera', value: '64MP + 12MP + 8MP', category: 'Câmera' },
        { name: 'Processador', value: 'Snapdragon 888', category: 'Performance' },
        { name: 'RAM', value: '8GB', category: 'Performance' },
        { name: 'Armazenamento', value: '128GB', category: 'Storage' },
        { name: 'Bateria', value: '4500mAh', category: 'Bateria' }
      ],
      features: [
        'Câmera profissional de 64MP',
        'Tela Super AMOLED de 6.5"',
        'Processador Snapdragon 888',
        '8GB de RAM',
        '128GB de armazenamento',
        'Bateria de 4500mAh',
        'Carregamento rápido',
        'Resistente à água'
      ],
      weight: 200,
      dimensions: {
        length: 15.5,
        width: 7.2,
        height: 0.8
      },
      warranty: 12,
      shipping: {
        free: true,
        estimatedDays: 3
      },
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: '2',
      slug: 'notebook-gamer-x1',
      name: 'Notebook Gamer X1',
      description: 'Notebook gamer com RTX 4060 e 16GB RAM. Perfeito para jogos e trabalho pesado.',
      shortDescription: 'Notebook gamer com RTX 4060 e 16GB RAM',
      price: 2499.99,
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800'
      ],
      mainImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
      category: ProductCategory.COMPUTERS,
      subcategory: 'laptops',
      brand: ProductBrand.ASUS,
      sku: 'GAMER-X1-001',
      stock: 8,
      isAvailable: true,
      isFeatured: true,
      isNew: true,
      rating: 4.8,
      reviewCount: 89,
      tags: ['notebook', 'gamer', 'rtx', 'performance'],
      specifications: [
        { name: 'Processador', value: 'Intel i7-12700H', category: 'Performance' },
        { name: 'Placa de Vídeo', value: 'RTX 4060 8GB', category: 'Gráficos' },
        { name: 'RAM', value: '16GB DDR4', category: 'Performance' },
        { name: 'Armazenamento', value: '512GB SSD', category: 'Storage' },
        { name: 'Tela', value: '15.6" FHD 144Hz', category: 'Display' }
      ],
      features: [
        'Placa de vídeo RTX 4060',
        '16GB de RAM DDR4',
        'Tela de 15.6" com 144Hz',
        'Processador Intel i7',
        '512GB SSD',
        'Teclado RGB',
        'Sistema de refrigeração avançado'
      ],
      weight: 2500,
      dimensions: {
        length: 35.8,
        width: 24.9,
        height: 2.1
      },
      warranty: 24,
      shipping: {
        free: true,
        estimatedDays: 5
      },
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    },
    {
      id: '3',
      slug: 'fone-bluetooth-premium',
      name: 'Fone Bluetooth Premium',
      description: 'Fone sem fio com cancelamento de ruído ativo e qualidade de som excepcional.',
      shortDescription: 'Fone sem fio com cancelamento de ruído',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
      ],
      mainImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      category: ProductCategory.ELECTRONICS,
      subcategory: 'audio',
      brand: ProductBrand.SONY,
      sku: 'FONE-PREM-001',
      stock: 25,
      isAvailable: true,
      isFeatured: false,
      isNew: false,
      rating: 4.3,
      reviewCount: 203,
      tags: ['fone', 'bluetooth', 'audio', 'cancelamento-ruido'],
      specifications: [
        { name: 'Tipo', value: 'Over-ear', category: 'Design' },
        { name: 'Conectividade', value: 'Bluetooth 5.0', category: 'Conectividade' },
        { name: 'Bateria', value: '30 horas', category: 'Bateria' },
        { name: 'Cancelamento de Ruído', value: 'Ativo', category: 'Áudio' },
        { name: 'Drivers', value: '40mm', category: 'Áudio' }
      ],
      features: [
        'Cancelamento de ruído ativo',
        '30 horas de bateria',
        'Bluetooth 5.0',
        'Drivers de 40mm',
        'Controles touch',
        'Design confortável',
        'Qualidade de som premium'
      ],
      weight: 250,
      dimensions: {
        length: 20,
        width: 18,
        height: 8
      },
      warranty: 12,
      shipping: {
        free: true,
        estimatedDays: 2
      },
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10')
    },
    {
      id: '4',
      slug: 'smartwatch-fitness',
      name: 'Smartwatch Fitness',
      description: 'Relógio inteligente com monitoramento de saúde completo e design elegante.',
      shortDescription: 'Relógio inteligente com monitoramento de saúde',
      price: 599.99,
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
      ],
      mainImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      category: ProductCategory.ELECTRONICS,
      subcategory: 'wearables',
      brand: ProductBrand.APPLE,
      sku: 'WATCH-FIT-001',
      stock: 12,
      isAvailable: true,
      isFeatured: true,
      isNew: false,
      rating: 4.6,
      reviewCount: 156,
      tags: ['smartwatch', 'fitness', 'saude', 'wearable'],
      specifications: [
        { name: 'Tela', value: '1.9" Retina', category: 'Display' },
        { name: 'Bateria', value: '18 horas', category: 'Bateria' },
        { name: 'Resistência', value: '50m', category: 'Durabilidade' },
        { name: 'Sensores', value: 'GPS, Cardíaco, Oxigênio', category: 'Sensores' },
        { name: 'Conectividade', value: 'WiFi, Bluetooth', category: 'Conectividade' }
      ],
      features: [
        'Monitoramento cardíaco 24/7',
        'GPS integrado',
        'Medição de oxigênio no sangue',
        'Resistente à água até 50m',
        'Tela Retina sempre ligada',
        'Siri integrado',
        'App de fitness completo'
      ],
      weight: 50,
      dimensions: {
        length: 4.4,
        width: 3.8,
        height: 1.1
      },
      warranty: 12,
      shipping: {
        free: true,
        estimatedDays: 3
      },
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05')
    },
    {
      id: '5',
      slug: 'tablet-pro-max',
      name: 'Tablet Pro Max',
      description: 'Tablet com tela de 12.9" e processador A15. Perfeito para produtividade e entretenimento.',
      shortDescription: 'Tablet com tela de 12.9" e processador A15',
      price: 899.99,
      originalPrice: 1099.99,
      discount: 18,
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800'
      ],
      mainImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
      category: ProductCategory.ELECTRONICS,
      subcategory: 'tablets',
      brand: ProductBrand.APPLE,
      sku: 'TABLET-PRO-001',
      stock: 6,
      isAvailable: true,
      isFeatured: false,
      isNew: true,
      rating: 4.7,
      reviewCount: 94,
      tags: ['tablet', 'produtividade', 'tela-grande', 'apple'],
      specifications: [
        { name: 'Tela', value: '12.9" Liquid Retina', category: 'Display' },
        { name: 'Processador', value: 'A15 Bionic', category: 'Performance' },
        { name: 'Armazenamento', value: '256GB', category: 'Storage' },
        { name: 'RAM', value: '8GB', category: 'Performance' },
        { name: 'Câmera', value: '12MP + 10MP', category: 'Câmera' }
      ],
      features: [
        'Tela Liquid Retina de 12.9"',
        'Processador A15 Bionic',
        '256GB de armazenamento',
        'Câmeras profissionais',
        'Apple Pencil compatível',
        'Magic Keyboard compatível',
        'Face ID'
      ],
      weight: 680,
      dimensions: {
        length: 28.1,
        width: 21.5,
        height: 0.6
      },
      warranty: 12,
      shipping: {
        free: true,
        estimatedDays: 4
      },
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    }
  ]

  /**
   * Busca todos os produtos com filtros e paginação
   */
  static async getProducts(
    filters: ProductFilters = {},
    sort: ProductSort = { field: 'createdAt', direction: 'desc' },
    page: number = 1,
    limit: number = 12
  ): Promise<ProductResponse> {
    let filteredProducts = [...this.products]

    // Aplicar filtros
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category)
    }

    if (filters.subcategory) {
      filteredProducts = filteredProducts.filter(p => p.subcategory === filters.subcategory)
    }

    if (filters.brand) {
      filteredProducts = filteredProducts.filter(p => p.brand === filters.brand)
    }

    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!)
    }

    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!)
    }

    if (filters.isAvailable !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isAvailable === filters.isAvailable)
    }

    if (filters.isFeatured !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isFeatured === filters.isFeatured)
    }

    if (filters.isNew !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isNew === filters.isNew)
    }

    if (filters.rating !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.rating!)
    }

    if (filters.tags && filters.tags.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        filters.tags!.some(tag => p.tags.includes(tag))
      )
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    }

    // Aplicar ordenação
    filteredProducts.sort((a, b) => {
      let aValue: any
      let bValue: any

      if (sort.field === 'popularity') {
        aValue = a.reviewCount
        bValue = b.reviewCount
      } else if (sort.field === 'name') {
        aValue = a.name
        bValue = b.name
      } else if (sort.field === 'price') {
        aValue = a.price
        bValue = b.price
      } else if (sort.field === 'rating') {
        aValue = a.rating
        bValue = b.rating
      } else if (sort.field === 'createdAt') {
        aValue = a.createdAt
        bValue = b.createdAt
      } else {
        aValue = a[sort.field as keyof Product]
        bValue = b[sort.field as keyof Product]
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    // Aplicar paginação
    const total = filteredProducts.length
    const totalPages = Math.ceil(total / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

    return {
      products: paginatedProducts,
      total,
      page,
      limit,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  }

  /**
   * Busca um produto por ID
   */
  static async getProductById(id: string): Promise<Product | null> {
    return this.products.find(p => p.id === id) || null
  }

  /**
   * Busca um produto por slug
   */
  static async getProductBySlug(slug: string): Promise<Product | null> {
    return this.products.find(p => p.slug === slug) || null
  }

  /**
   * Busca produtos relacionados
   */
  static async getRelatedProducts(productId: string, limit: number = 4): Promise<Product[]> {
    const product = await this.getProductById(productId)
    if (!product) return []

    return this.products
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, limit)
  }

  /**
   * Busca produtos em destaque
   */
  static async getFeaturedProducts(limit: number = 8): Promise<Product[]> {
    return this.products
      .filter(p => p.isFeatured)
      .slice(0, limit)
  }

  /**
   * Busca produtos novos
   */
  static async getNewProducts(limit: number = 8): Promise<Product[]> {
    return this.products
      .filter(p => p.isNew)
      .slice(0, limit)
  }

  /**
   * Busca produtos por categoria
   */
  static async getProductsByCategory(category: string, limit: number = 12): Promise<Product[]> {
    return this.products
      .filter(p => p.category === category)
      .slice(0, limit)
  }

  /**
   * Busca produtos por marca
   */
  static async getProductsByBrand(brand: string, limit: number = 12): Promise<Product[]> {
    return this.products
      .filter(p => p.brand === brand)
      .slice(0, limit)
  }

  /**
   * Cria um novo produto
   */
  static async createProduct(data: CreateProductData): Promise<Product> {
    const product: Product = {
      id: Date.now().toString(),
      slug: this.generateSlug(data.name),
      ...data,
      images: data.images || [],
      mainImage: data.images?.[0] || '',
      stock: data.stock || 0,
      isAvailable: data.stock ? data.stock > 0 : false,
      isFeatured: data.isFeatured || false,
      isNew: data.isNew || false,
      rating: 0,
      reviewCount: 0,
      tags: data.tags || [],
      specifications: data.specifications || [],
      features: data.features || [],
      warranty: data.warranty || 12,
      shipping: data.shipping || { free: true, estimatedDays: 3 },
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.products.push(product)
    return product
  }

  /**
   * Atualiza um produto
   */
  static async updateProduct(id: string, data: UpdateProductData): Promise<Product | null> {
    const index = this.products.findIndex(p => p.id === id)
    if (index === -1) return null

    const currentProduct = this.products[index]
    const updatedProduct: Product = {
      ...currentProduct,
      ...data,
      slug: data.name ? this.generateSlug(data.name) : currentProduct.slug,
      updatedAt: new Date()
    }

    this.products[index] = updatedProduct
    return updatedProduct
  }

  /**
   * Remove um produto
   */
  static async deleteProduct(id: string): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id)
    if (index === -1) return false

    this.products.splice(index, 1)
    return true
  }

  /**
   * Gera um slug a partir do nome do produto
   */
  private static generateSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  /**
   * Busca produtos por termo de pesquisa
   */
  static async searchProducts(query: string, limit: number = 12): Promise<Product[]> {
    const searchTerm = query.toLowerCase()
    return this.products
      .filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        p.brand.toLowerCase().includes(searchTerm)
      )
      .slice(0, limit)
  }
}

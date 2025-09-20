/**
 * Interface para representar um produto na AllanStore
 */
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription?: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  mainImage: string
  category: string
  subcategory?: string
  brand: string
  sku: string
  stock: number
  isAvailable: boolean
  isFeatured: boolean
  isNew: boolean
  rating: number
  reviewCount: number
  tags: string[]
  specifications: ProductSpecification[]
  features: string[]
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  warranty: number // em dias
  shipping: {
    free: boolean
    estimatedDays: number
    cost?: number
  }
  createdAt: Date
  updatedAt: Date
}

/**
 * Interface para especificações técnicas do produto
 */
export interface ProductSpecification {
  name: string
  value: string
  category: string
}

/**
 * Interface para filtros de produtos
 */
export interface ProductFilters {
  category?: string
  subcategory?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  isAvailable?: boolean
  isFeatured?: boolean
  isNew?: boolean
  rating?: number
  tags?: string[]
  search?: string
}

/**
 * Interface para ordenação de produtos
 */
export interface ProductSort {
  field: 'name' | 'price' | 'rating' | 'createdAt' | 'popularity'
  direction: 'asc' | 'desc'
}

/**
 * Interface para resposta paginada de produtos
 */
export interface ProductResponse {
  products: Product[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * Interface para dados de criação/atualização de produto
 */
export interface CreateProductData {
  name: string
  description: string
  shortDescription?: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory?: string
  brand: string
  sku: string
  stock: number
  isFeatured?: boolean
  isNew?: boolean
  tags?: string[]
  specifications?: ProductSpecification[]
  features?: string[]
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  warranty?: number
  shipping?: {
    free: boolean
    estimatedDays: number
    cost?: number
  }
}

/**
 * Interface para atualização de produto
 */
export interface UpdateProductData extends Partial<CreateProductData> {
  id: string
}

/**
 * Enum para categorias de produtos
 */
export enum ProductCategory {
  ELECTRONICS = 'electronics',
  COMPUTERS = 'computers',
  MOBILE = 'mobile',
  HOME = 'home',
  FASHION = 'fashion',
  SPORTS = 'sports',
  BOOKS = 'books',
  BEAUTY = 'beauty',
  AUTOMOTIVE = 'automotive',
  TOYS = 'toys'
}

/**
 * Enum para marcas
 */
export enum ProductBrand {
  ALLANSTORE = 'allanstore',
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  SONY = 'sony',
  LG = 'lg',
  DELL = 'dell',
  HP = 'hp',
  LENOVO = 'lenovo',
  ASUS = 'asus',
  XIAOMI = 'xiaomi'
}

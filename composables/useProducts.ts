import { readonly, ref } from 'vue'
import { ProductService } from '../services/productService'
import type {
    CreateProductData,
    Product,
    ProductFilters,
    ProductSort,
    UpdateProductData
} from '../types/product'

/**
 * Composable para gerenciar produtos
 * Fornece uma interface reativa para o ProductService
 */
export const useProducts = () => {
  const products = ref<Product[]>([])
  const product = ref<Product | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Busca produtos com filtros
   */
  const fetchProducts = async (
    filters: ProductFilters = {},
    sort: ProductSort = { field: 'createdAt', direction: 'desc' },
    page: number = 1,
    limit: number = 12
  ) => {
    loading.value = true
    error.value = null

    try {
      const response = await ProductService.getProducts(filters, sort, page, limit)
      products.value = response.products
      return response
    } catch (err) {
      error.value = 'Erro ao carregar produtos'
      console.error('Erro ao buscar produtos:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca um produto por ID
   */
  const fetchProductById = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getProductById(id)
      product.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produto'
      console.error('Erro ao buscar produto:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca um produto por slug
   */
  const fetchProductBySlug = async (slug: string) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getProductBySlug(slug)
      product.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produto'
      console.error('Erro ao buscar produto:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos relacionados
   */
  const fetchRelatedProducts = async (productId: string, limit: number = 4) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getRelatedProducts(productId, limit)
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produtos relacionados'
      console.error('Erro ao buscar produtos relacionados:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos em destaque
   */
  const fetchFeaturedProducts = async (limit: number = 8) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getFeaturedProducts(limit)
      products.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produtos em destaque'
      console.error('Erro ao buscar produtos em destaque:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos novos
   */
  const fetchNewProducts = async (limit: number = 8) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getNewProducts(limit)
      products.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produtos novos'
      console.error('Erro ao buscar produtos novos:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos por categoria
   */
  const fetchProductsByCategory = async (category: string, limit: number = 12) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getProductsByCategory(category, limit)
      products.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produtos da categoria'
      console.error('Erro ao buscar produtos por categoria:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos por marca
   */
  const fetchProductsByBrand = async (brand: string, limit: number = 12) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.getProductsByBrand(brand, limit)
      products.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao carregar produtos da marca'
      console.error('Erro ao buscar produtos por marca:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Busca produtos por termo de pesquisa
   */
  const searchProducts = async (query: string, limit: number = 12) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.searchProducts(query, limit)
      products.value = result
      return result
    } catch (err) {
      error.value = 'Erro ao pesquisar produtos'
      console.error('Erro ao pesquisar produtos:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Cria um novo produto
   */
  const createProduct = async (data: CreateProductData) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.createProduct(data)
      products.value.push(result)
      return result
    } catch (err) {
      error.value = 'Erro ao criar produto'
      console.error('Erro ao criar produto:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Atualiza um produto
   */
  const updateProduct = async (id: string, data: UpdateProductData) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.updateProduct(id, data)
      if (result) {
        const index = products.value.findIndex((p: Product) => p.id === id)
        if (index !== -1) {
          products.value[index] = result
        }
        if (product.value?.id === id) {
          product.value = result
        }
      }
      return result
    } catch (err) {
      error.value = 'Erro ao atualizar produto'
      console.error('Erro ao atualizar produto:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Remove um produto
   */
  const deleteProduct = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const result = await ProductService.deleteProduct(id)
      if (result) {
        products.value = products.value.filter((p: Product) => p.id !== id)
        if (product.value?.id === id) {
          product.value = null
        }
      }
      return result
    } catch (err) {
      error.value = 'Erro ao remover produto'
      console.error('Erro ao remover produto:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Limpa o estado
   */
  const clearState = () => {
    products.value = []
    product.value = null
    loading.value = false
    error.value = null
  }

  return {
    // Estado
    products: readonly(products),
    product: readonly(product),
    loading: readonly(loading),
    error: readonly(error),

    // Métodos
    fetchProducts,
    fetchProductById,
    fetchProductBySlug,
    fetchRelatedProducts,
    fetchFeaturedProducts,
    fetchNewProducts,
    fetchProductsByCategory,
    fetchProductsByBrand,
    searchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    clearState
  }
}
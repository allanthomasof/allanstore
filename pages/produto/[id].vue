<template>
  <div>
    <AppHeader />
    <main class="container py-8">
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p class="mt-4 text-gray-600">Carregando produto...</p>
      </div>

      <div v-else-if="product" class="max-w-6xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="mb-6">
          <ol class="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
            </li>
            <li>/</li>
            <li class="text-gray-900">{{ product.name }}</li>
          </ol>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Imagem do produto -->
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Informações do produto -->
          <div class="space-y-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">
                {{ product.name }}
              </h1>
              <p class="text-2xl font-semibold text-blue-600">
                R$ {{ product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Descrição</h3>
              <p class="text-gray-600">{{ product.description }}</p>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Especificações</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex justify-between">
                  <span>Marca:</span>
                  <span class="font-medium">AllanStore</span>
                </li>
                <li class="flex justify-between">
                  <span>Disponibilidade:</span>
                  <span class="font-medium text-green-600">Em estoque</span>
                </li>
                <li class="flex justify-between">
                  <span>Frete:</span>
                  <span class="font-medium text-green-600">Grátis</span>
                </li>
              </ul>
            </div>

            <div class="flex space-x-4">
              <button class="btn-primary flex-1 py-3 text-lg">
                Adicionar ao Carrinho
              </button>
              <button class="btn-secondary px-6 py-3">
                Favoritar
              </button>
            </div>
          </div>
        </div>

        <!-- Produtos relacionados -->
        <section class="mt-16">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Produtos Relacionados
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct.id"
              :product="relatedProduct"
              @view-details="navigateToProduct"
            />
          </div>
        </section>
      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Produto não encontrado</h2>
        <p class="text-gray-600 mb-6">O produto que você está procurando não existe.</p>
        <NuxtLink to="/" class="btn-primary">
          Voltar para Home
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation'

const { navigateToProduct } = useNavigation()
const route = useRoute()
const productId = route.params.id

const loading = ref(true)
const product = ref(null)

// Dados mockados dos produtos
const allProducts = [
  {
    id: 1,
    name: 'Smartphone Galaxy Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    description: 'Smartphone com tela de 6.5" e câmera de 64MP'
  },
  {
    id: 2,
    name: 'Notebook Gamer X1',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    description: 'Notebook gamer com RTX 4060 e 16GB RAM'
  },
  {
    id: 3,
    name: 'Fone Bluetooth Premium',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Fone sem fio com cancelamento de ruído'
  },
  {
    id: 4,
    name: 'Smartwatch Fitness',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Relógio inteligente com monitoramento de saúde'
  }
]

// Simular carregamento e buscar produto
onMounted(() => {
  setTimeout(() => {
    product.value = allProducts.find(p => p.id === parseInt(productId))
    loading.value = false
  }, 500)
})

// Produtos relacionados (excluindo o atual)
const relatedProducts = computed(() => {
  return allProducts.filter(p => p.id !== parseInt(productId)).slice(0, 4)
})
</script>

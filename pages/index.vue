<template>
  <div>
    <AppHeader />
    <main class="container py-8">
      <section class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo à AllanStore
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Descubra os melhores produtos com qualidade e preços incríveis
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">
          Produtos em Destaque
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @view-details="navigateToProduct"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation'

const { navigateToProduct } = useNavigation()

// Dados mockados dos produtos
const products = ref([
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
])
</script>

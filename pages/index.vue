<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-gradient-hero text-white">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container relative py-24 lg:py-32">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="heading-1 text-white mb-6 animate-fade-in-up">
              Bem-vindo à
              <span class="text-gradient-secondary">AllanStore</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
              Descubra os melhores produtos com qualidade excepcional e preços incríveis
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style="animation-delay: 0.4s">
              <button class="btn-primary text-lg px-8 py-4">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explorar Produtos
              </button>
              <button
                class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Saiba Mais
              </button>
            </div>
          </div>
        </div>

        <!-- Decoração de fundo -->
        <div class="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-white">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 animate-fade-in-up">
              <div class="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Produtos Premium</h3>
              <p class="text-neutral-600">Selecionamos apenas os melhores produtos para você</p>
            </div>

            <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 animate-fade-in-up"
              style="animation-delay: 0.2s">
              <div class="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Frete Grátis</h3>
              <p class="text-neutral-600">Entregamos em todo o Brasil sem custo adicional</p>
            </div>

            <div
              class="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100 animate-fade-in-up"
              style="animation-delay: 0.4s">
              <div class="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Garantia Total</h3>
              <p class="text-neutral-600">30 dias de garantia em todos os produtos</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Produtos em Destaque -->
      <section class="py-16 bg-neutral-50">
        <div class="container">
          <div class="text-center mb-12">
            <h2 class="heading-2 text-neutral-900 mb-4">
              Produtos em
              <span class="text-gradient">Destaque</span>
            </h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Descubra nossa seleção especial de produtos com as melhores avaliações e preços
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductCard v-for="(product, index) in products" :key="product.id" :product="product"
              @view-details="navigateToProduct" :style="{ animationDelay: `${index * 0.1}s` }" />
          </div>

          <!-- Botão para ver mais produtos -->
          <div class="text-center mt-12">
            <button class="btn-outline text-lg px-8 py-4">
              Ver Todos os Produtos
              <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="py-16 bg-gradient-primary text-white">
        <div class="container">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="heading-2 text-white mb-4">
              Fique por dentro das novidades
            </h2>
            <p class="text-xl text-white/90 mb-8">
              Receba ofertas exclusivas e seja o primeiro a saber sobre novos produtos
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Seu melhor e-mail"
                class="flex-1 px-6 py-4 rounded-2xl border-0 text-neutral-900 placeholder-neutral-500 focus:ring-2 focus:ring-white/50" />
              <button class="btn-secondary px-8 py-4 bg-white text-primary-600 hover:bg-neutral-100">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation'
import { useProducts } from '../composables/useProducts'

const { navigateToProduct } = useNavigation()
const { products, loading, fetchFeaturedProducts } = useProducts()

// Carregar produtos em destaque (SSR)
try {
  await fetchFeaturedProducts(8)
} catch (error) {
  console.error('Erro ao carregar produtos:', error)
}

// Meta tags
useHead({
  title: 'AllanStore - Sua loja online de confiança',
  meta: [
    {
      name: 'description',
      content: 'Descubra os melhores produtos com qualidade excepcional e preços incríveis na AllanStore. Frete grátis e garantia total!'
    },
    {
      property: 'og:title',
      content: 'AllanStore - Sua loja online de confiança'
    },
    {
      property: 'og:description',
      content: 'Descubra os melhores produtos com qualidade excepcional e preços incríveis na AllanStore.'
    }
  ]
})
</script>

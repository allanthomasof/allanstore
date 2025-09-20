<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
    <AppHeader />

    <main class="container py-8">
      <div v-if="loading" class="text-center py-24">
        <div class="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-6">
        </div>
        <h3 class="text-xl font-semibold text-neutral-900 mb-2">Carregando produto...</h3>
        <p class="text-neutral-600">Aguarde um momento enquanto buscamos as informações</p>
      </div>

      <div v-else-if="product" class="max-w-7xl mx-auto">
        <nav class="mb-8 animate-fade-in-up">
          <ol class="flex items-center space-x-2 text-sm text-neutral-500">
            <li>
              <NuxtLink to="/" class="hover:text-primary-600 transition-colors duration-200 flex items-center">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NuxtLink>
            </li>
            <li class="flex items-center">
              <svg class="h-4 w-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li class="text-neutral-900 font-medium">{{ product.name }}</li>
          </ol>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up">
          <div class="space-y-4">
            <div
              class="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl overflow-hidden shadow-2xl">
              <img :src="product.mainImage" :alt="product.name"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="grid grid-cols-4 gap-4">
              <div v-for="(image, index) in product.images.slice(0, 4)" :key="index"
                class="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all duration-200"
                :class="{ 'ring-2 ring-primary-500': index === 0 }" @click="selectedImage = image">
                <img :src="image" :alt="`${product.name} - Imagem ${index + 1}`" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span v-if="product.discount" class="badge badge-secondary">
                  -{{ product.discount }}% OFF
                </span>
                <span v-if="product.isNew" class="badge badge-primary">
                  Novo
                </span>
                <span class="badge badge-success">Frete Grátis</span>
              </div>

              <h1 class="heading-2 text-neutral-900 mb-4">
                {{ product.name }}
              </h1>

              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg v-for="i in Math.floor(product.rating)" :key="i" class="h-5 w-5 text-accent-400"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg v-for="i in (5 - Math.floor(product.rating))" :key="i + Math.floor(product.rating)"
                      class="h-5 w-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-sm text-neutral-500 ml-2">({{ product.reviewCount }} avaliações)</span>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <span class="text-4xl font-bold text-gradient">
                  R$ {{ product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
                </span>
                <span v-if="product.originalPrice" class="text-2xl text-neutral-500 line-through">
                  R$ {{ product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
                </span>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-3">Descrição</h3>
              <p class="text-neutral-600 leading-relaxed">{{ product.description }}</p>
            </div>

            <div v-if="product.features.length > 0">
              <h3 class="text-xl font-semibold text-neutral-900 mb-3">Características</h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li v-for="feature in product.features" :key="feature" class="flex items-center text-neutral-600">
                  <svg class="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div v-if="product.specifications.length > 0"
              class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
              <h3 class="text-xl font-semibold text-neutral-900 mb-4">Especificações</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="spec in product.specifications" :key="spec.name"
                  class="flex justify-between py-2 border-b border-neutral-100">
                  <span class="text-neutral-600">{{ spec.name }}:</span>
                  <span class="font-medium text-neutral-900">{{ spec.value }}</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-neutral-900 mb-4">Informações de Entrega</h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div class="flex items-center">
                  <svg class="h-5 w-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <div>
                    <div class="font-medium">Frete</div>
                    <div class="text-neutral-600">{{ product.shipping.free ? 'Grátis' : `R$ ${product.shipping.cost}` }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center">
                  <svg class="h-5 w-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div class="font-medium">Entrega</div>
                    <div class="text-neutral-600">{{ product.shipping.estimatedDays }} dias úteis</div>
                  </div>
                </div>
                <div class="flex items-center">
                  <svg class="h-5 w-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div class="font-medium">Garantia</div>
                    <div class="text-neutral-600">{{ product.warranty }} meses</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex gap-4">
                <button class="btn-primary flex-1 py-4 text-lg" :disabled="!product.isAvailable || product.stock === 0">
                  <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  {{ product.isAvailable && product.stock > 0 ? 'Adicionar ao Carrinho' : 'Indisponível' }}
                </button>
                <button class="btn-outline px-6 py-4">
                  <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favoritar
                </button>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <button class="btn-secondary py-3">
                  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Compartilhar
                </button>
                <button class="btn-secondary py-3">
                  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Comparar
                </button>
              </div>
            </div>
          </div>
        </div>

        <section v-if="relatedProducts.length > 0" class="mt-24 animate-fade-in-up">
          <div class="text-center mb-12">
            <h2 class="heading-2 text-neutral-900 mb-4">
              Produtos
              <span class="text-gradient">Relacionados</span>
            </h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Você também pode se interessar por estes produtos
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductCard v-for="(relatedProduct, index) in relatedProducts" :key="relatedProduct.id"
              :product="relatedProduct" @view-details="navigateToProduct"
              :style="{ animationDelay: `${index * 0.1}s` }" />
          </div>
        </section>
      </div>

      <div v-else class="text-center py-24 animate-fade-in-up">
        <div
          class="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg class="h-16 w-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0112 4c-2.34 0-4.29 1.009-5.824 2.709" />
          </svg>
        </div>
        <h2 class="heading-2 text-neutral-900 mb-4">Produto não encontrado</h2>
        <p class="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <NuxtLink to="/" class="btn-primary text-lg px-8 py-4">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Home
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useProducts } from '../../composables/useProducts'

const { navigateToProduct } = useNavigation()
const { product, loading, fetchProductBySlug, fetchRelatedProducts } = useProducts()

const route = useRoute()
const productSlug = route.params.slug

const selectedImage = ref('')
const relatedProducts = ref([])

// Carregar produto (SSR)
try {
  await fetchProductBySlug(productSlug)

  if (product.value) {
    selectedImage.value = product.value.mainImage

    const related = await fetchRelatedProducts(product.value.id, 4)
    relatedProducts.value = related
  }
} catch (error) {
  console.error('Erro ao carregar produto:', error)
}

useHead({
  title: computed(() => product.value ? `${product.value.name} - AllanStore` : 'Produto - AllanStore'),
  meta: [
    {
      name: 'description',
      content: computed(() => product.value?.description || 'Produto da AllanStore')
    }
  ]
})
</script>
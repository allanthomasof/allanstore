<template>
  <div class="card group cursor-pointer animate-fade-in-up" @click="handleViewDetails">
    <!-- Imagem do produto -->
    <div class="relative aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
      <img :src="product.mainImage" :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

      <!-- Badge de desconto (opcional) -->
      <div v-if="product.discount" class="absolute top-3 left-3">
        <span class="badge badge-secondary">
          -{{ product.discount }}%
        </span>
      </div>

      <!-- Botão de favorito no canto superior direito -->
      <button @click.stop="handleToggleFavorite"
        class="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-400 hover:text-secondary-500 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg hover:shadow-xl"
        :class="{ 'text-secondary-500 opacity-100': isFavorited }" title="Favoritar">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <!-- Overlay com botão de ação rápida -->
      <div
        class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button @click.stop="handleAddToCart"
          class="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          Adicionar
        </button>
      </div>
    </div>

    <!-- Conteúdo do card -->
    <div class="p-6">
      <!-- Título do produto -->
      <h3
        class="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
        {{ product.name }}
      </h3>

      <!-- Descrição -->
      <p class="text-sm text-neutral-600 mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Avaliações -->
      <div class="flex items-center mb-4">
        <div class="flex items-center">
          <svg v-for="i in Math.floor(product.rating)" :key="i" class="h-4 w-4 text-accent-400" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg v-for="i in (5 - Math.floor(product.rating))" :key="i + Math.floor(product.rating)"
            class="h-4 w-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-sm text-neutral-500 ml-2">({{ product.reviewCount }})</span>
      </div>

      <!-- Preço -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-col">
          <span class="text-2xl font-bold text-gradient">
            R$ {{ product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
          </span>
          <span v-if="product.originalPrice" class="text-sm text-neutral-500 line-through">
            R$ {{ product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
          </span>
        </div>

        <!-- Badge de frete grátis -->
        <div class="text-right">
          <span class="badge badge-success text-xs">
            Frete Grátis
          </span>
        </div>
      </div>

      <!-- Botão de ver detalhes -->
      <button @click.stop="handleViewDetails"
        class="w-full btn-outline text-sm py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        Ver Detalhes
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation'

const { navigateToProduct } = useNavigation()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['view-details', 'add-to-cart', 'toggle-favorite'])

const isFavorited = ref(false)

// Verificar se o produto já está favoritado (simulação)
onMounted(() => {
  // Aqui você pode verificar se o produto está nos favoritos do usuário
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  isFavorited.value = favorites.includes(props.product.id)
})

const handleViewDetails = () => {
  emit('view-details', props.product)
  navigateToProduct(props.product.slug)
}

const handleAddToCart = () => {
  emit('add-to-cart', props.product)

  // Simular notificação de sucesso
  console.log('Produto adicionado ao carrinho:', props.product.name)

  // Aqui você pode adicionar uma notificação toast
  // Por exemplo: showToast('Produto adicionado ao carrinho!', 'success')
}

const handleToggleFavorite = () => {
  isFavorited.value = !isFavorited.value
  emit('toggle-favorite', props.product, isFavorited.value)

  // Salvar nos favoritos do localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  if (isFavorited.value) {
    favorites.push(props.product.id)
  } else {
    const index = favorites.indexOf(props.product.id)
    if (index > -1) {
      favorites.splice(index, 1)
    }
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))

  console.log('Produto favoritado:', props.product.name, isFavorited.value)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

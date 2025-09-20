<template>
  <div class="card group cursor-pointer" @click="handleViewDetails">
    <div class="aspect-square bg-gray-100 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {{ product.name }}
      </h3>
      
      <p class="text-sm text-gray-600 mb-3 line-clamp-2">
        {{ product.description }}
      </p>
      
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-blue-600">
          R$ {{ product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}
        </span>
        
        <div class="flex items-center space-x-2">
          <button
            @click.stop="handleAddToCart"
            class="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            title="Adicionar ao carrinho"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
          </button>
          
          <button
            @click.stop="handleToggleFavorite"
            class="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
            :class="{ 'text-red-500': isFavorited }"
            title="Favoritar"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <button
        @click.stop="handleViewDetails"
        class="w-full mt-3 btn-primary text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        Ver Detalhes
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation'

const { navigateToProduct } = useNavigation()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['view-details', 'add-to-cart', 'toggle-favorite'])

const isFavorited = ref(false)

const handleViewDetails = () => {
  emit('view-details', props.product)
  navigateToProduct(props.product.id)
}

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
  // Aqui você pode adicionar lógica para mostrar notificação
  console.log('Produto adicionado ao carrinho:', props.product.name)
}

const handleToggleFavorite = () => {
  isFavorited.value = !isFavorited.value
  emit('toggle-favorite', props.product, isFavorited.value)
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

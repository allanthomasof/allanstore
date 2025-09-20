<template>
  <header class="bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200 sticky top-0 z-50">
    <div class="container">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div
              class="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <img src="/assets/images/logo-shop.png" alt="AllanStore Logo" class="w-8 h-8 object-contain"
                @error="handleLogoError" />
              <!-- Fallback caso a logo não carregue -->
              <span class="hidden text-white font-bold text-xl">A</span>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-gradient">AllanStore</span>
              <span class="text-xs text-neutral-500 -mt-1">Sua loja online</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Navegação -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/"
            class="relative px-4 py-2 text-neutral-600 hover:text-primary-600 transition-all duration-300 font-medium group"
            :class="{ 'text-primary-600': $route.path === '/' }">
            Home
            <span v-if="$route.path === '/'"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary rounded-full"></span>
            <span v-else
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <a href="#"
            class="relative px-4 py-2 text-neutral-600 hover:text-primary-600 transition-all duration-300 font-medium group">
            Produtos
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#"
            class="relative px-4 py-2 text-neutral-600 hover:text-primary-600 transition-all duration-300 font-medium group">
            Categorias
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#"
            class="relative px-4 py-2 text-neutral-600 hover:text-primary-600 transition-all duration-300 font-medium group">
            Sobre
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#"
            class="relative px-4 py-2 text-neutral-600 hover:text-primary-600 transition-all duration-300 font-medium group">
            Contato
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <!-- Ações do usuário -->
        <div class="flex items-center space-x-4">
          <!-- Busca -->
          <div class="hidden md:block">
            <div class="relative group">
              <input type="text" placeholder="Buscar produtos..."
                class="w-72 pl-12 pr-4 py-3 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-neutral-50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-lg"
                v-model="searchQuery" @keyup.enter="handleSearch" />
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-neutral-400 group-focus-within:text-primary-500 transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button v-if="searchQuery" @click="clearSearch"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-600 transition-colors duration-200">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Ícones de ação -->
          <div class="flex items-center space-x-2">
            <button
              class="relative p-3 text-neutral-600 hover:text-primary-600 transition-all duration-300 rounded-2xl hover:bg-primary-50 group"
              title="Favoritos">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span
                class="absolute -top-1 -right-1 w-5 h-5 bg-secondary-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>

            <button
              class="relative p-3 text-neutral-600 hover:text-primary-600 transition-all duration-300 rounded-2xl hover:bg-primary-50 group"
              title="Carrinho">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span
                class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </button>

            <button
              class="relative p-3 text-neutral-600 hover:text-primary-600 transition-all duration-300 rounded-2xl hover:bg-primary-50 group"
              title="Perfil">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          <!-- Menu mobile -->
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-3 text-neutral-600 hover:text-primary-600 transition-all duration-300 rounded-2xl hover:bg-primary-50">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div v-if="mobileMenuOpen" class="lg:hidden border-t border-neutral-200 py-6 animate-fade-in-up">
        <div class="space-y-6">
          <!-- Busca mobile -->
          <div class="px-4">
            <div class="relative">
              <input type="text" placeholder="Buscar produtos..."
                class="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-neutral-50 focus:bg-white transition-all duration-300"
                v-model="searchQuery" @keyup.enter="handleSearch" />
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Navegação mobile -->
          <nav class="space-y-2">
            <NuxtLink to="/"
              class="flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-2xl mx-4"
              :class="{ 'text-primary-600 bg-primary-50': $route.path === '/' }" @click="mobileMenuOpen = false">
              <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </NuxtLink>
            <a href="#"
              class="flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-2xl mx-4">
              <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Produtos
            </a>
            <a href="#"
              class="flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-2xl mx-4">
              <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Categorias
            </a>
            <a href="#"
              class="flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-2xl mx-4">
              <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sobre
            </a>
            <a href="#"
              class="flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-2xl mx-4">
              <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contato
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const searchQuery = ref('')

// Função para lidar com busca
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Buscando por:', searchQuery.value)
    // Aqui você pode implementar a lógica de busca
    // Por exemplo, navegar para uma página de resultados
  }
}

// Função para limpar busca
const clearSearch = () => {
  searchQuery.value = ''
}

// Função para lidar com erro na logo
const handleLogoError = (event) => {
  // Se a logo não carregar, mostrar um fallback
  event.target.style.display = 'none'
  event.target.nextElementSibling?.classList.remove('hidden')
}

// Fechar menu mobile ao clicar fora
onMounted(() => {
  const handleClickOutside = (event) => {
    if (mobileMenuOpen.value && !event.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

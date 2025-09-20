// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      hashMode: false
    }
  },
  ssr: true,
  compatibilityDate: '2025-09-19'
})

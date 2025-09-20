/**
 * Composable para gerenciar navegação da aplicação
 * Centraliza toda a lógica de navegação em um local
 */

export const useNavigation = () => {
  const router = useRouter()

  /**
   * Navega para a página de detalhes do produto
   * @param {number|string} productId - ID do produto
   */
  const navigateToProduct = (productId) => {
    router.push(`/produto/${productId}`)
  }

  /**
   * Navega para a página inicial
   */
  const navigateToHome = () => {
    router.push('/')
  }

  /**
   * Navega para uma página específica
   * @param {string} path - Caminho da página
   */
  const navigateTo = (path) => {
    router.push(path)
  }

  /**
   * Volta para a página anterior
   */
  const goBack = () => {
    router.back()
  }

  /**
   * Navega para a próxima página no histórico
   */
  const goForward = () => {
    router.forward()
  }

  /**
   * Verifica se a rota atual corresponde ao caminho fornecido
   * @param {string} path - Caminho para verificar
   * @returns {boolean}
   */
  const isCurrentRoute = (path) => {
    const route = useRoute()
    return route.path === path
  }

  /**
   * Obtém informações da rota atual
   * @returns {Object} Informações da rota
   */
  const getCurrentRoute = () => {
    return useRoute()
  }

  /**
   * Navega para uma página com query parameters
   * @param {string} path - Caminho da página
   * @param {Object} query - Parâmetros de query
   */
  const navigateWithQuery = (path, query = {}) => {
    router.push({ path, query })
  }

  /**
   * Navega para uma página com hash
   * @param {string} path - Caminho da página
   * @param {string} hash - Hash da página
   */
  const navigateWithHash = (path, hash = '') => {
    router.push({ path, hash })
  }

  return {
    navigateToProduct,
    navigateToHome,
    navigateTo,
    goBack,
    goForward,
    isCurrentRoute,
    getCurrentRoute,
    navigateWithQuery,
    navigateWithHash
  }
}

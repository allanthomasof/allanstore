# AllanStore

Uma loja online moderna construída com Nuxt 3, Vue 3 e TypeScript.

## 🚀 Tecnologias

- **Nuxt 3** - Framework Vue.js para aplicações universais
- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Pinia** - Store de estado para Vue (preparado para integração)

## 📁 Estrutura do Projeto

```
allanstore/
├── assets/
│   ├── css/
│   │   ├── main.css          # Estilos principais
│   │   └── variables.css     # Variáveis CSS do design system
│   └── images/               # Imagens e assets
├── components/
│   ├── AppHeader.vue         # Cabeçalho da aplicação
│   └── ProductCard.vue       # Card de produto
├── composables/
│   ├── useNavigation.js      # Composable para navegação
│   └── useProducts.ts        # Composable para produtos
├── pages/
│   ├── index.vue             # Página inicial
│   └── produto/
│       └── [slug].vue        # Página de detalhes do produto
├── services/
│   └── productService.ts     # Serviço de produtos (mockado)
├── types/
│   └── product.ts            # Tipos TypeScript para produtos
└── .vscode/                  # Configurações do VS Code
```

## 🎨 Design System

O projeto utiliza um sistema de design consistente com:

- **Cores**: Paleta baseada em azul primário, vermelho secundário e verde para sucesso
- **Tipografia**: Inter como fonte principal
- **Componentes**: Botões, cards, inputs e badges padronizados
- **Animações**: Transições suaves e efeitos hover
- **Responsividade**: Design mobile-first

## 🛍️ Funcionalidades

### ✅ Implementadas
- [x] Página inicial com produtos em destaque
- [x] Página de detalhes do produto com slug
- [x] Sistema de navegação responsivo
- [x] Busca de produtos
- [x] Sistema de favoritos (localStorage)
- [x] Design responsivo
- [x] Animações e transições
- [x] Meta tags dinâmicas
- [x] TypeScript com tipagem forte

### 🔄 Em Desenvolvimento
- [ ] Integração com Firebase
- [ ] Sistema de carrinho de compras
- [ ] Autenticação de usuários
- [ ] Sistema de pagamento
- [ ] Painel administrativo
- [ ] Sistema de avaliações
- [ ] Filtros avançados de produtos

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/allanthomasof/allanstore.git

# Entre no diretório
cd allanstore

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Geração estática
npm run generate
```

## 🏗️ Arquitetura

### Modelo de Produto
O projeto utiliza um modelo robusto de produto com:
- Informações básicas (nome, descrição, preço)
- Múltiplas imagens
- Especificações técnicas
- Avaliações e reviews
- Informações de estoque e disponibilidade
- Dados de entrega e garantia

### Serviços
- **ProductService**: Gerencia operações CRUD de produtos
- **useProducts**: Composable reativo para produtos
- **useNavigation**: Composable para navegação

### URLs Amigáveis
- `/` - Página inicial
- `/produto/[slug]` - Detalhes do produto (ex: `/produto/smartphone-galaxy-pro`)

## 🔧 Configuração do VS Code

O projeto inclui configurações otimizadas para desenvolvimento:
- Extensões recomendadas
- Configurações de formatação
- Snippets para Vue
- Tasks e launch configurations

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Próximos Passos

1. **Integração com Firebase** - Substituir dados mockados
2. **Sistema de Carrinho** - Implementar carrinho de compras
3. **Autenticação** - Login e registro de usuários
4. **Pagamento** - Integração com gateway de pagamento
5. **Admin Panel** - Painel para gerenciar produtos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

**Allan Thomas** - [GitHub](https://github.com/allanthomasof)

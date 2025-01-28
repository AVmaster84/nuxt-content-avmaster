// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
  ],
  icon: {
    serverBundle: {
      collections: ['vue', 'radix-icons', 'vscode-icons', 'svg-logos', 'lucide']
    } 
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
    dataValue: 'theme'
  },
  fonts: {
    
  },
  content: {
    build: {
      markdown: {
        toc: {depth: 3},
        highlight: {
            theme: {
            default: 'github-light',
            dark: 'github-dark',
                    },
            langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
                },
            },
          },
        preview: {
          api: 'https://api.nuxt.studio',
      },
    },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  typescript: {
    typeCheck: false
  },
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})

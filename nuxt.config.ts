// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  icon: {
    serverBundle: {
      collections: ['vue', 'radix-icons', 'vscode-icons', 'svg-logos', 'lucide']
    } 
  },
  fonts: {
    
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
  devtools: { enabled: true },
  extends: '@nuxt-themes/docus',
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})
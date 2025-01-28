import DarkModeToggle from "./components/DarkModeToggle.vue";

export default defineAppConfig({
  
  seo: {
    siteName: 'AVMasTER - Knowledge Base'
  },
  header: {
    logo: {
      alt: 'AVMasTER',
      light: '/hiep_logo_light.svg',
      dark: '/hiep_logo.svg'
    },
    search: true,
    border: true,
    darkModeToggle: true,
    colorMode: true,
    nav: [{
      title: 'Home',
      links: [
      {
        title: 'OS',
        to: '/os',
        description: 'Operating System',
        icon: 'i-heroicons-desktop-computer',
        target: '_blank'
      },
      {
        title: "Self-hosted",
        to: '/self-hosted',
        description: 'Self-hosted services',
        icon: 'i-heroicons-server',
        target: '_blank'
      }
      ],
    }],
  },
  main: {
    // fluid: true,
    padded: true,
  },
  footer: {
    credits: 'Copyright © 2025',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://nuxt.com',
      'target': '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/ps2h6QT',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/nuxt_js',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/v1/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})
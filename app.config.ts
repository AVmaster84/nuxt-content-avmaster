export default defineAppConfig({
  AVMasTerdocs: {
    title: 'AVMasTer Knowledge Base',
    description: 'Knowledge Base project',
    url: 'https://avmaster.nuxt.space',
    image: '/social-card-preview.png',
    socials: {
      twitter: '@nuxt_js',
      github: '',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    layout: 'default',
    aside: {
      level: 1,
      filter: [],
    },
    header: {
      title: "AVMasTer Knowledge Base",
      logo: true,
      showLinkIcon: true,
      fluid: true,
      padded: true,
    },
    footer: {
      credits: {
        icon: '',
        text: 'Powered by AVMasTers',
        href: 'https://avmaster.nuxt.space',
      },
      textLinks: [
        {
          text: 'Nuxt',
          href: 'https://nuxt.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
      iconLinks: [
        {
          label: 'NuxtJS',
          href: 'https://nuxtjs.org',
          component: 'IconNuxtLabs',
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope',
        },
      ],
    }
  }
})

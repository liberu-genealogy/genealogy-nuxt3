// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate:
        'Family Tree 365 - Start your family tree today - free! Your first tree is 100% free. Sign-up to begin your genealogy journey today!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'Family Tree 365' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Our user-friendly yet powerful platform lets you create your own family tree the quick and easy way. No technical knowledge is required. Start your family tree today - free!'
        },
        { property: 'og:image:width', content: '2500' },
        { property: 'og:image:height', content: '780' },
        { name: 'twitter:site', content: '@familytree365' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [],
      script: []
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', 'assets/css/base.css'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
});

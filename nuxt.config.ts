import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // plugins: [{ src: '~/plugins/01.init.server' }],
  build: {
    // @ts-ignore
    transpile: ['axios', 'events'],
  },
  runtimeConfig: {
    public: {
      EXAMPLE_URI: process.env.EXAMPLE_URI
    }
  }
})

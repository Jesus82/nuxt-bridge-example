export default defineNuxtPlugin(async nuxtApp => {
  // Init store configs. This is analogous to nuxtServerInit in Nuxt 2
  const storeContext = nuxtApp.nuxt2Context.store
  storeContext.dispatch('people/loadPeople')
})

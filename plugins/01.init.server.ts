export default defineNuxtPlugin(async nuxtApp => {
  // Init store configs. This is analogous to nuxtServerInit in Nuxt 2
  const config = nuxtApp.nuxt2Context.$config
  const storeContext = nuxtApp.nuxt2Context.store
  await Promise.all([
    storeContext.dispatch('countries/loadCountries', config),
    storeContext.dispatch('noticeBanner/loadStates', config),
  ])
  storeContext.dispatch('countries/setCountriesAvailableForSignup')
})

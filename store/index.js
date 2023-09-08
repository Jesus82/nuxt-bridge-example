export const state = () => ({})

export const actions = {
  async nuxtServerInit(vuexContext) {
    await vuexContext.dispatch('people/loadPeople')
  }
}

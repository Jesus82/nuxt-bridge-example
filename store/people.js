export const state = () => ({
  people: [],
})


export const mutations = {
  SET_PEOPLE(state, people) {
    state.people = people
  },
}

export const actions = {
  async loadPeople({ state, commit }) {
    const { fetchPeople } = useExampleApi()

    if (state.people.length) return state.people

    let res = null
    try { 
      res = await fetchPeople()
    } catch(error) {
      console.log(error)
    }

    commit('SET_PEOPLE', res?.data?.results)
    return res?.data?.results
  },
}

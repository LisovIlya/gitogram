import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: []
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      state.trendings = payload.trendings
    },
    SET_README: (state, payload) => {
      state.trendings = state.trendings.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', { trendings: data.items })
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: []
  },
  getter: {
    getRepoById: (state) => (id) => state.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      state.trendings = payload.trendings.map(item => {
        item.following = { status: false, loading: false, theme: 'green' }
        return item
      })
    }
  },
  actions: {
    async getTrendings ({ commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', {
          trendings: data.items
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}

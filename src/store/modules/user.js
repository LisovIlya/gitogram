import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = payload
    }
  },
  getters: {
    hasUser (state) {
      return Boolean(Object.keys(state.data).length)
    }
  },
  actions: {
    async getUserData ({ commit }) {
      try {
        const { data } = await api.user.getUser()
        commit('SET_USER', data)
        return data
      } catch (e) {
        if (e.response.status === 401) {
          console.log('Необходимо авторизоваться')
        }
      }
    }
  }
}

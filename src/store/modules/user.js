export const user = {
  namespaced: true,
  state: {
    user: {
      data: null,
      loading: false,
      error: ''
    }
  },
  getters: {
    getIfUserIsFemale (state) {
      return state.user.data?.gender === 'female'
    }
  },
  mutations: {
    SET_USER_DATA (state, payload) {
      state.user.data = payload
    },
    SET_USER_LOADING (state, payload) {
      state.user.loading = payload
    },
    SET_USER_ERROR (state, payload) {
      state.user.error = payload
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      commit('SET_USER_LOADING', true)
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()

        commit('SET_USER_DATA', data.results[0])
      } catch (error) {
        commit('SET_USER_ERROR', 'Не удалось получить пользователя')
      } finally {
        commit('SET_USER_LOADING', false)
      }
    }
  }
}

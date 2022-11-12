import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.getCode()
    },
    async getTokenByCode (store, code) {
      const { data } = await api.auth.getToken(code)
      return data.token
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}

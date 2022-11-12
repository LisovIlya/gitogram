import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
import starred from './modules/starred'
import user from './modules/user'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.trendings.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    trendings,
    auth,
    starred,
    user
  }
})

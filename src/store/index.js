import { createStore } from 'vuex'
import { user } from './modules/user'
import trendings from './modules/trendings'

export default createStore({
  modules: {
    user,
    trendings
  }
})

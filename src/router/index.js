import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  if (authRoute) {
    next()
  }

  try {
    const response = await api.user.getUser()
    if (response.status === 401) throw new Error()
    next()
  } catch (e) {
    next({ name: 'auth' })
    console.log('необходимо авторизоваться')
  }
})

export default router

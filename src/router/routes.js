import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]

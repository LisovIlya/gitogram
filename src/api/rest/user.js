import { makeRequest } from '../requests'

export const getUser = () => makeRequest({
  url: '/user'
})

export const getRepos = () => makeRequest({
  url: '/user/repos'
})

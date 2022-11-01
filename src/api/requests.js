import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.github.com'
})

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => client({
  url,
  method,
  data,
  headers
})

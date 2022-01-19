import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

function request(
  path: string,
  headers = { 'Content-Type': 'application/json' },
) {
  return axios.create({
    baseURL: `${baseURL}${path}`,
    headers,
  })
}

export const createUser = request('/users/create-user')
export const loginUser = request('/users/login-user')

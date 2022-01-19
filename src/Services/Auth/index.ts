import { createUser, loginUser } from '../api'
class Auth {
  async createUser(email: string, password: string) {
    const res = await createUser.post('/', {
      email,
      password,
    })
    return res
  }

  async loginUser(email: string, password: string) {
    try {
      const { data } = await loginUser.post('/', {
        email,
        password,
      })
      return data
    } catch (error) {
      console.error('error =', error)
      return
    }
  }
}

export default new Auth()

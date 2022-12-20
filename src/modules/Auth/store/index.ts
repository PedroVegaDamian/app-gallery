import { defineStore } from 'pinia'
import {
  login,
  logout,
  createUser,
  getCurrentUser
} from '@/modules/Auth/services'
import { messageErrorCode } from '@/modules/Auth/services/errorCodeMessages'
import {
  User,
  ResponseAuth,
  ErrorResponse,
  CredentialsAuth
} from '@/modules/Auth/interfaces'

interface State {
  user: User | null
}

export const authModule = defineStore('authModule', {
  state: (): State => ({
    user: null
  }),
  getters: {
    getUser: state => state.user
  },
  actions: {
    setUser(user: User | null) {
      this.user = user
    },
    async init() {
      const response = await getCurrentUser()
      if (response) {
        this.setUser({ email: response.email })
      }
    },
    async signIn(credentials: CredentialsAuth): Promise<ResponseAuth> {
      try {
        const { email, password } = credentials
        const response = await login(email, password)
        this.setUser(response.data)
        return response
      } catch (error) {
        const { message, code } = error as ErrorResponse
        return {
          ok: false,
          message: messageErrorCode(code, message),
          data: null
        }
      }
    },
    async signUp(credentials: CredentialsAuth): Promise<ResponseAuth> {
      try {
        const { email, password } = credentials
        const response = await createUser(email, password)
        this.setUser(response.data)
        return response
      } catch (error) {
        const { message, code } = error as ErrorResponse
        return {
          ok: false,
          message: messageErrorCode(code, message),
          data: null
        }
      }
    },
    async signOut(): Promise<ResponseAuth> {
      try {
        const response = await logout()
        this.setUser(response.data)
        return response
      } catch (error) {
        const { message, code } = error as ErrorResponse
        return {
          ok: false,
          message: messageErrorCode(code, message),
          data: null
        }
      }
    }
  }
})

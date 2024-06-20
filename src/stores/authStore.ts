import { defineStore } from 'pinia'
import axios from 'axios'
import type { AuthState, LoginForm, RegisterForm, User } from '@/types'

import {
  login,
  logout,
  register,
} from '@/api/auth'

const defaultUser: User = {
  id: '',
  country: '',
  url: '',
  email: '',
  gender: '',
  name: '',
  phoneNumber: '',
  address: '',
  city: '',
  zipCode: '',
  introduceYourself: '',
  state: '',
  avatar: '',
  wallet: '',
};

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: JSON.parse(localStorage.getItem('user') || JSON.stringify(defaultUser)),
    success: false,
    loading: false,
    error: null,
    created: false,
  }),

  actions: {
    async handleError(error: any) {
      if (axios.isAxiosError(error))
        this.error = error.response?.data?.message || error.response?.data?.message?.email[0]
      else
        this.error = error.message || 'Network error'

      this.success = false
      this.loading = false
    },

    async loginAction(data: LoginForm) {
      this.loading = true


      try {
        const res = await login(data)
        if (res.status === 200) {
          localStorage.setItem('auth', 'true')
          this.error = ''
          this.success = true
          this.user = res.data.payload.user
          if (data.rememberMe)
            localStorage.setItem('user', JSON.stringify(this.user))
        }
      }


      catch (error) {
        await this.handleError(error)
        localStorage.setItem('auth', 'false')
      }

      finally {
        this.loading = false
      }
    },

    async registerAction(data: RegisterForm) {
      this.loading = true
      try {
        const res = await register(data)
        if (res.status === 201) {
          this.created = true
          this.error = ''
        }
      }
      catch (error) {
        this.created = false
        if (axios.isAxiosError(error))
          this.error = error.response?.data.errors.email
      }
      finally {
        this.loading = false
      }
    },

    async logoutAction() {
      this.loading = true

      try {
        await logout()
        this.success = false
        this.error = ''
        this.user = defaultUser
        localStorage.removeItem('user')
        localStorage.setItem('auth', 'false')
      }
      catch (error) {
        if (axios.isAxiosError(error))
          this.error = error.response?.data.message

        this.success = false
        localStorage.setItem('auth', 'false')
      }

      finally {
        this.loading = false
      }
    },
    
  },

  getters: {
    currentUser(): User {
      return this.user
    },

    isAuthenticated(): boolean {
      return this.success
    },

    isRegisterSuccess(): boolean {
      return this.created
    },

    isFetching(): boolean {
      return this.loading
    },

    errorMessage(): string | null {
      return this.error
    },
  },
})

export default useAuthStore

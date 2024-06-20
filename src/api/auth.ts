import type { LoginForm, RegisterForm } from '@/types'
import request from '@/utils/request'
import APIs from '@/constant/APIS'

export function register(value: RegisterForm) {
  return request.post(APIs.REGISTER_ENDPOINT, value)
}

export function login(data: LoginForm) {
  return request.post(APIs.LOGIN_ENDPOINT, data)
}

export function logout() {
  return request.get(APIs.LOGOUT_ENDPOINT)
}

export function forgotPassword(email: string) {
  return request.post(APIs.FORGOT_PASSWORD_ENDPOINT, { email })
}

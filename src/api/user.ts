import type { UserDB } from '@/types'
import request from '@/utils/request'

export function getUser() {
  return request.get(`${import.meta.env.VITE_APP_API_URL}/api/users`)
}

export function getUserList() {
  return request.get(`${import.meta.env.VITE_APP_API_URL}/api/users/list`)
}

export function updateUser(user: UserDB) {
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/users?_method=PUT`, user)
}

export function updateAvatar(file: FormData) {
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/users/avatar?_method=PUT`, file)
}

export function unFollowUser(id: string) {
  const bodyRequest = { user_follow_id: id }
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/users/unfollow`, bodyRequest)
}

export function followUser(id: string) {
  const bodyRequest = { user_follow_id: id }
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/users/follow`, bodyRequest)
}

export function searhUser(query: any) {
  let url = `${import.meta.env.VITE_APP_API_URL}/api/users/list?`
  const params = []

  if (query.name)
    params.push(`name=${query.name}`)

  url += params.join('&')

  return request.get(url)
}

export function getDetailsUser(id: number) {
  return request.get(`${import.meta.env.VITE_APP_API_URL}/api/users/${id}`)
}

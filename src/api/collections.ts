import request from '@/utils/request'

export function getCollections() {
  return request.get(`${import.meta.env.VITE_APP_API_URL}/api/collections`)
}

export function getCollectionsDetails(id: number) {
  return request.get(`${import.meta.env.VITE_APP_API_URL}/api/collections/${id}`)
}

export function createCollection(data: FormData) {
  return request.post(`${import.meta.env.VITE_APP_API_URL}/api/collections`, data)
}

export function filterCollection(query: any) {
  let url = `${import.meta.env.VITE_APP_API_URL}/api/collections?`
  const params = []

  if (query.search)
    params.push(`search=${query.search}`)

  url += params.join('&')

  return request.get(url)
}

import APIs from '@/constant/APIS'
import request from '@/utils/request'

export function carts() {
  return request.get(APIs.NFT_CART_ENDPOINT)
}

export function increasedNFT(id: number) {
  return request.put(`${APIs.NFT_CART_ENDPOINT}/${id}/increase`)
}

export function decreasedNFT(id: number) {
  return request.put(`${APIs.NFT_CART_ENDPOINT}/${id}/decrease`)
}

export function deleteNFT(id: number) {
  return request.delete(`${APIs.NFT_CART_ENDPOINT}/${id}`)
}

export function purchasedNFT(data: FormData) {
  return request.post(APIs.NFT_CART_ENDPOINT, data)
}

export function detailSelectedNFTs(data: number[]) {
  return request.post(APIs.NFT_ORDERS_ENDPOINT, data)
}

export function checkout(data : any) {
  return request.post(APIs.NFT_CHECKOUT_ENDPOINT, data)
}
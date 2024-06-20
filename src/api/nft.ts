import request from '@/utils/request'
import APIs from '@/constant/APIS'

export function trendingNFTs() {
  return request.get(`${APIs.NFT_ENDPOINT}?trending=true`)
}

export function newNFT(data: FormData) {
  return request.post(APIs.NFT_ENDPOINT, data)
}

export function NFTDetail(id: number) {
  return request.get(`${APIs.NFT_ENDPOINT}/${id}`)
}



export function getNFTDetails(id: number) {
  return request.get(`${import.meta.env.VITE_APP_API_URL}${APIs.NFT_ENDPOINT}?collection_id=${id}`)
}

export function getNFTs() {
  return request.get(`${import.meta.env.VITE_APP_API_URL}${APIs.NFT_ENDPOINT}`)
}

export function filterNFTs(query: any) {
  let url = `${import.meta.env.VITE_APP_API_URL}${APIs.NFT_ENDPOINT}?`
  const params = []

  if (query.title)
    params.push(`title=${query.title}`)

  if (query.price)
    params.push(`price=${query.price}`)

  if (query.collectionId)
    params.push(`collection_id=${query.collectionId}`)

  if (query.newIn)
    params.push(`new_in=${query.newIn}`)

  if (query.trending)
    params.push(`trending=${query.trending}`)

  if (query.minPrice)
    params.push(`price_min=${query.minPrice}`)

  if (query.maxPrice)
    params.push(`price_max=${query.maxPrice}`)

  url += params.join('&')

  return request.get(url)
}

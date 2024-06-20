import { defineStore } from 'pinia'
import axios from 'axios'
import { NFTDetail, filterNFTs, getNFTDetails, getNFTs, newNFT, trendingNFTs } from '@/api/nft'
import type { NFTState, Nft } from '@/types'
import { formatDateToISO } from '@/utils/formatDateString'
import { arrayToCamelCase } from '@/utils/toCamel'

const useNftStore = defineStore('nft', {
  state: (): NFTState => ({
    trendingNfts: [],
    success: false,
    error: null,
    loading: false,
    nftDetail: {} as Nft,
    nfts: null,
    query: {
    },
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

    async getTrendingNftsAction() {
      try {
        const res = await trendingNFTs()

        if (res.status === 200)
          this.trendingNfts = arrayToCamelCase(res.data.payload.nfts.data)
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async getNFTbyCollection(id: number) {
      this.loading = true
      try {
        const res = await getNFTDetails(id)
        if (res.status === 200) {
          this.nftDetail = arrayToCamelCase(res.data.payload.nfts.data)
          this.loading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async filterNFTsbyCollection() {
      this.loading = true
      try {
        const res = await filterNFTs(this.query)
        if (res.status === 200) {
          this.nftDetail = arrayToCamelCase(res.data.payload.nfts.data)
          this.loading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async getNFTs() {
      this.loading = true
      try {
        const res = await getNFTs()
        if (res.status === 200) {
          this.nfts = arrayToCamelCase(res.data.payload.nfts.data)
          this.loading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async filterNFTs() {
      this.loading = true
      try {
        const res = await filterNFTs(this.query)
        if (res.status === 200) {
          this.nfts = arrayToCamelCase(res.data.payload.nfts.data)
          this.loading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async createNFTAction(values: Nft) {
      const formData = new FormData()

      const fields = {
        title: values.title,
        img_url: values.imgUrl,
        current_price: values.currentPrice,
        starting_date: formatDateToISO(values.startingDate),
        expiration_date: formatDateToISO(values.expirationDate),
        description: values.description,
        collection_id: values.collectionId,
        nft_price: [values.currentPrice],
      }

      for (const [key, value] of Object.entries(fields))
        formData.append(key, value != null ? String(value) : '')

      try {
        const res = await newNFT(formData)

        if (res.data.success)
          this.success = true
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async getNFTDetailAction(id: number) {
      this.loading = true

      try {
        const res = await NFTDetail(id)

        if (res.status === 200) {
          this.success = true

          const nft = res.data.payload.nfts

          this.nftDetail = {
            id: nft.id,
            title: nft.title,
            imgUrl: nft.img_url,
            currentPrice: nft.current_price,
            startingDate: nft.starting_date,
            expirationDate: nft.expiration_date,
            description: nft.description,
            collectionId: nft.collection_id,
            createdAt: nft.created_at,
            updatedAt: nft.updated_at,
            nftPrices: [...nft.nft_prices],
            userId: nft.user_id,
          }
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.loading = false
      }
    },

  },

  getters: {
    isSuccess(): boolean {
      return this.success
    },
    errorMessage(): string | null {
      return this.error
    },
    isFetching(): boolean {
      return this.loading
    },
  },
})

export default useNftStore

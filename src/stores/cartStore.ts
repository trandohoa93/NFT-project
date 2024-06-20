import { defineStore } from 'pinia'
import axios from 'axios'
import type { CartDB, CartType } from '@/types'
import { carts, decreasedNFT, deleteNFT, detailSelectedNFTs, increasedNFT, purchasedNFT } from '@/api/cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    buyingCartId: [] as number[],
    buyingCarts: [] as CartType[],
    carts: [] as CartType[],
    loading: false,
    updateLoading: false,
    success: false,
    error: '',
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

    async getUserCartsAction() {
      try {
        const res = await carts()

        if (res.status === 200) {
          const cart = res.data.payload

          this.carts = cart.map((item: CartDB) => {
            return {
              id: item.id,
              nftId: item.nft_id,
              nfts: {
                id: item.nfts.id,
                collectionId: item.nfts.collection_id,
                currentPrice: item.nfts.current_price,
                title: item.nfts.title,
              },
              quantity: item.quantity,
            }
          })
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.loading = false
      }
    },

    async storeUserCartsAction(id: number) {
      this.loading = true

      try {
        const formData = new FormData()
        formData.append('nft_id', id.toString())

        const res = await purchasedNFT(formData)

        if (res.status === 200)
          this.success = true
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.loading = false
      }
    },

    async deleteCartAction(id: number) {
      this.updateLoading = true

      try {
        const res = await deleteNFT(id)

        if (res.status === 200) {
          this.success = true
          this.carts = this.carts.filter(item => item.id !== id)
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.updateLoading = false
      }
    },

    async increaseCartAction(id: number) {
      this.updateLoading = true
      try {
        const res = await increasedNFT(id)

        if (res.status === 200) {
          this.success = true

          const item = this.carts.find(item => item.id === id)

          if (item)
            item.quantity += 1
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.updateLoading = false
      }
    },

    async decreaseCartAction(id: number) {
      this.updateLoading = true
      try {
        const res = await decreasedNFT(id)

        if (res.status === 200) {
          this.success = true

          const item = this.carts.find(item => item.id === id)

          if (item)
            item.quantity -= 1
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.updateLoading = false
      }
    },

    async getBuyingCartAction() {
      this.loading = true

      try {
        const res = await detailSelectedNFTs(this.buyingCartId)

        if (res.status === 200) {
          this.buyingCarts = res.data.payload

          this.success = true
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
})

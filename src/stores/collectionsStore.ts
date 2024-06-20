import { defineStore } from 'pinia'
import axios from 'axios'
import { createCollection, filterCollection, getCollections, getCollectionsDetails } from '@/api/collections'
import type { Collection, CollectionState, CollectionType } from '@/types'
import { formatDateToISO } from '@/utils/formatDateString'
import { objectToCamelCase } from '@/utils/toCamel'

const useCollectionsStore = defineStore('collections', {
  state: (): CollectionState => ({
    allItems: [],
    isLoading: false,
    item: {},
    isError: false,
    isSuccess: false,
    isMenu: false,
    errorMessage: '',
    collectionQuery: {},
  }),

  actions: {
    async handleError(error: any) {
      if (axios.isAxiosError(error))
        this.errorMessage = error.response?.data?.message || error.response?.data?.message?.email[0]
      else
        this.errorMessage = error.message || 'Network error'

      this.isLoading = false
    },
    fillMenu() {
      this.isMenu = true
    },
    fillGrid() {
      this.isMenu = false
    },
    async fetchCollections() {
      this.isLoading = true

      try {
        const res = await getCollections()
        const data = res.data.payload.data

        if (res.status === 200) {
          this.allItems = data.map((item: Collection) => {
            return {
              ...item,
              createAt: item.created_at,
              updateAt: item.updated_at,
              userId: item.user_id,
              categoryName: item.category_name,
              startingDate: item.starting_date,
              expirationDate: item.expiration_date,
              logoImgUrl: item.logo_img_url,
              featureImgUrl: item.feature_img_url,
              coverImgUrl: item.cover_img_url,
              isExplicitAndSensitive: item.is_explicit_and_sensitive,
            }
          })
          this.isLoading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.isLoading = false
      }
    },

    async fetchCollectionsDetails(id: number) {
      this.isLoading = true

      this.isLoading = true

      try {
        const res = await getCollectionsDetails(id)

        if (res.status === 200) {
          this.item = { ...objectToCamelCase(res.data.payload) }
          this.isLoading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.isLoading = false
      }
    },

    async searchCollection() {
      this.isLoading = true
      try {
        const res = await filterCollection(this.collectionQuery)
        if (res.status === 200) {
          this.allItems = [...res.data.payload.data]
          this.isLoading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async createCollectionAction(values: CollectionType) {
      const formData = new FormData()

      const fields = {
        name: values.name,
        url: values.url,
        category_name: values.categoryName,
        price: values.price,
        starting_date: formatDateToISO(values.startingDate),
        expiration_date: formatDateToISO(values.expirationDate),
        description: values.description,
        is_explicit_and_sensitive: values.isExplicitAndSensitive,
        logo_img_url: values.logoImgUrl,
        feature_img_url: values.featureImgUrl,
        cover_img_url: values.coverImgUrl,

      }

      for (const [key, value] of Object.entries(fields))
        formData.append(key, value != null ? String(value) : '')

      this.isLoading = true

      try {
        const res = await createCollection(formData)

        if (res.data.success)
          this.isSuccess = true
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.isLoading = false
      }
    },
  },
})

export default useCollectionsStore

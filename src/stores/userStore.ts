import { defineStore } from 'pinia'
import axios from 'axios'
import type { User, UserDB, UserState } from '@/types'
import { arrayToCamelCase } from '@/utils/toCamel'

import {
  followUser,
  getDetailsUser,
  getUser,
  getUserList,
  searhUser,
  unFollowUser,
  updateAvatar,
  updateUser,
} from '@/api/user'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLoading: false,
    isLoadingBtn: false,
    userDetail: null,
    isSuccess: false,
    userList: [],
    isError: false,
    isCreated: false,
    message: '',
    userQuery: {},
    userNameDetails: '',
  }),

  actions: {
    async handleError(error: any) {
      if (axios.isAxiosError(error))
        this.isError = error.response?.data?.message || error.response?.data?.message?.email[0]
      else
        this.isError = error.message || 'Network error'

      this.isSuccess = false
      this.isLoading = false
    },
    async fetchUserAction() {
      this.isLoading = true
      try {
        const res = await getUser()

        if (res.data.success) {
          const user = { ...res.data.payload.user }
          this.userDetail = {
            id: user.id,
            country: user.country_region,
            url: user.custom_url,
            email: user.email,
            gender: user.gender,
            name: user.name,
            phoneNumber: user.phone_number,
            address: user.street_address,
            city: user.town_city,
            zipCode: user.zip_code,
            introduceYourself: user.introduce_yourseft,
            state: user.state,
            avatar: user.avatar,
            wallet: user.wallet_eth,
          }
        }
      }
      catch (error) {
        console.error('Error fetching user:', error)
      }
      finally {
        this.isLoading = false
      }
    },

    async editUserAction(user: User) {
      this.isLoading = true
      try {
        const userUpdate: UserDB = {
          id: user.id,
          country_region: user.country,
          custom_url: user.url,
          email: user.email,
          gender: user.gender,
          name: user.name,
          phone_number: user.phoneNumber,
          street_address: user.address,
          town_city: user.city,
          zip_code: user.zipCode,
          introduce_yourseft: user.introduceYourself,
          state: user.state,
          avatar: user.avatar,
          wallet_eth: user.wallet,
        }

        const res = await updateUser(userUpdate)

        this.isSuccess = res.status === 200
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.isLoading = false
      }
    },

    async editAvatarAction(file: FormData) {
      this.isLoading = true
      try {
        const res = await updateAvatar(file)
        this.isSuccess = res.data.success
      }
      catch (error) {
        this.handleError(error)
      }
      finally {
        this.isLoading = false
      }
    },

    async fetchUserList() {
      try {
        this.isLoading = true
        const res = await getUserList()
        if (res.status === 200) {
          this.userList = arrayToCamelCase([...res.data.payload.users.data])
          this.isLoading = false
        }
      }
      catch (error) {
      }
    },

    async fetchUserListNotLoading() {
      try {
        const res = await getUserList()
        if (res.status === 200)
          this.userList = arrayToCamelCase([...res.data.payload.users.data])
      }
      catch (error) {
      }
    },
    async unFollowerAction(id: string) {
      try {
        this.message = ''
        this.isLoadingBtn = true
        const res = await unFollowUser(id)
        if (res.status === 200)
          this.fetchUserListNotLoading()
      }
      catch (error: any) {
        this.message = error.response?.data?.message
      }
      finally {
        this.isLoadingBtn = false
      }
    },

    async followerAction(id: string) {
      try {
        this.message = ''
        this.isLoadingBtn = true
        const res = await followUser(id)
        if (res.status === 200)
          this.fetchUserListNotLoading()
      }
      catch (error: any) {
        this.message = error.response?.data?.message
      }
      finally {
        this.isLoadingBtn = false
      }
    },

    async searchCollection() {
      this.isLoading = true
      try {
        const res = await searhUser(this.userQuery)
        if (res.status === 200) {
          this.userList = [...res.data.payload.users.data]
          this.isLoading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },

    async getDetailsUserAction(id: number) {
      this.isLoading = true
      try {
        const res = await getDetailsUser(id)
        if (res.status === 200) {
          this.userNameDetails = res.data.payload.user.name
          this.isLoading = false
        }
      }
      catch (error) {
        this.handleError(error)
      }
    },
  },

  getters: {
    isFetching(): boolean {
      return this.isLoading
    },
    errorMessage(): boolean {
      return this.isError
    },
  },
})

export default useUserStore

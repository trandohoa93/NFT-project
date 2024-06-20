<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
import { useUserStore } from '@/stores'
import router from '@/router'

const store = useUserStore()

const { userList, isLoading, message } = storeToRefs(store)

onMounted(() => {
  store.fetchUserList()
})

async function updateFollowUser(id: number) {
  await store.followerAction(String(id))

  if (message.value === 'Unauthenticated.') {
    toast.error('Please log in before proceeding with this action.')
    setTimeout(() => {
      window.scrollTo(0, 0)
      router.push('/auth/login')
    }, 2000)
  }
  else if (message.value && message.value !== 'Unauthenticated.') { toast.error(message.value) }
  else { toast.success('Followed successfully!') }
}

function updateUnFollowUser(id: number) {
  store.unFollowerAction(String(id))

  if (message.value)
    toast.error(message.value)
  else
    toast.success('UnFollowed successfully!')
}
</script>

<template>
  <div class="market-user">
    <div>
      <div v-if="isLoading">
        <v-row>
          <v-col v-for="n in 8" :key="n" cols="12" lg="3">
            <v-skeleton-loader
              class="mx-auto border"
              type="card-avatar, actions"
            />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col v-for="(item, index) in userList" :key="index" cols="12" lg="3">
            <div class="card-user">
              <CommonCardUser :id="item.id" :is-follow="item.isFollowing" :image="item.avatar" :name="item.name" :followers="item.followedCount" @handle-follow="updateFollowUser" @handle-un-follow="updateUnFollowUser" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseMarketPlace/baseMarketUser.scss"></style>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const { userDetail } = storeToRefs(userStore)
</script>

<template>
  <RouterLink  to="/profile" class="common-avatar-wrapper">
    <img :src="userDetail?.avatar" class="common-avatar-image">
  </RouterLink>
</template>

<style lang="scss" scoped>
    .common-avatar-wrapper {
       flex: 0 0 44px;
    }

    .common-avatar-image {
        width:44px;
        height:44px;
        border-radius: 50%;
    }
</style>

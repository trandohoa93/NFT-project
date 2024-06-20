<script setup lang="ts">
import HeaderAuth from '@/layouts/HeaderAuth.vue'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'

import CommonCircleBackground from '@/components/Common/CommonCircleBackground.vue'

const checkAuth = ref(localStorage.getItem('auth'))

watchEffect(() => {
  checkAuth.value = localStorage.getItem('auth')
})

const checkAuthHeader = computed(() => {
  return checkAuth.value === 'true' ? HeaderAuth : Header
})
</script>

<template>
  <component :is="checkAuthHeader" />

  <div class="router-view-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position="ct" :opacity=".4" />

    <div class="router-view">
      <RouterView />
    </div>
  </div>

  <Footer />
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/default.scss">

</style>

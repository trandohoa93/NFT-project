<script lang="ts" setup>
import { MEDIA_DUMMY_DATA } from '@/constant/constants'
import email from '@/assets/images/email.png'
import phone from '@/assets/images/telephone.png'

import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? 'filter: brightness(100)' : ''
})
</script>

<template>
  <div class="router-view-wrapper">
    <RouterView />
  </div>

  <footer class="footer-wrapper">
    <h2 class="footer-title">
      We are available please connect with us:
    </h2>

    <div class="footer-connect-wrapper">
      <div class="footer-connect">
        <img :src="email" alt="NFT Footer Icon" class="footer-media-icon">
        
        <span class="footer-desc">contact@example.com</span>
      </div>

      <div class="footer-connect">
        <img :src="phone" alt="NFT Footer Icon" class="footer-media-icon">
        
        <span class="footer-desc">Customer Service 24/7:  (844) 663-4411</span>
      </div>
    </div>

    <div class="footer-media-list">
      <div v-for="media in MEDIA_DUMMY_DATA" :key="media.id" class="footer-media">
        <router-link to="/">
          <img :src="`src/assets/images/${media.image}`" alt="NFT media links" class="footer-media-icon" :style="setImgWhite">
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/noHeaderLayout.scss">

</style>

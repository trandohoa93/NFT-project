<script setup lang="ts">
import circularTextDark from '@/assets/images/circular-text.png'
import circularTextWhite from '@/assets/images/circular-text-white.png'
import arrowMiddleUp from '@/assets/images/arrow-middle-up.png'

import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? circularTextWhite : circularTextDark
})
</script>

<template>
  <div class="banner-circular-deco-wrapper">
    <div class="banner-circular-deco">
      <img :src="setImgWhite" alt="NFT Banner Circular Text" class="banner-circular-text">

      <img :src="arrowMiddleUp" alt="NFT Banner Circular Text" class="banner-circular-arrow">
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHome/baseHomeBanner/baseHomeBannerCircularText.scss">
</style>

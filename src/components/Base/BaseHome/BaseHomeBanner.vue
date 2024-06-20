<script setup lang="ts">
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? 'light' : 'dark'
})

</script>

<template>
  <div class="home-banner-wrapper global-container">
    <img src="/images/baseHome-nft-deco-tag.svg" alt="NFT Banner Decoration" class="banner-deco-tag">

    <div class="banner-main-wrapper">
      <div class="banner-main-left">
        <h1 class="banner-title">
          FULLY FEATURED

          <div class="banner-title-highlight">
              NFT
          </div>

          MARKETPLACE
        </h1>

        <p class="banner-desc">
          Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
        </p>

        <div class="banner-active">
          <div class="banner-active-left">
            <img src="/images/baseHome-circle-deco.png" alt="NFT banner ring decoration" class="banner-ring-deco">
            <img src="/images/baseHome-circle-deco.png" alt="NFT banner ring decoration" class="banner-ring-deco">
            <img src="/images/baseHome-circle-deco.png" alt="NFT banner ring decoration" class="banner-ring-deco">

            <div class="banner-tag">
              100+
            </div>
          </div>

          <div class="banner-active-right">
            <div class="banner-active-dot" />

            <span class="banner-active-content">Active Customers</span>
          </div>
        </div>

        <div class="banner-dashboards">
          <div class="banner-dashboard">
            <h2 class="banner-dashboard-title">
              100k+
            </h2>
            <p class="banner-dashboard-desc">
              Artworks
            </p>
          </div>

          <div class="banner-dashboard">
            <h2 class="banner-dashboard-title">
              32k+
            </h2>
            <p class="banner-dashboard-desc">
              Auction
            </p>
          </div>

          <div class="banner-dashboard">
            <h2 class="banner-dashboard-title">
              12k+
            </h2>
            <p class="banner-dashboard-desc">
              Artists
            </p>
          </div>
        </div>
      </div>

      <div class="banner-main-right">
        <div class="banner-main-circular-wrapper">
          <div class="banner-main-circular" />
        </div>
      </div>
    </div>

    <div class="banner-deco-circular-text">
      <div class="banner-circular-deco">
        <img :src="`/images/baseHome-text-circular-${setImgWhite}.png`" alt="NFT Banner Circular Text" class="banner-circular-text">

        <img src="/images/baseHome-arrow-middle-up.png" alt="NFT Banner Circular Text" class="banner-circular-arrow">
      </div>
    </div>

    <img src="/images/baseHome-text-wavy.svg" alt="NFT Banner Decoration" class="banner-deco-wavy-text">
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHome/baseHomeBanner.scss">

</style>

<script lang="ts" setup>
import { FOOTER_DUMMY_INFO } from '@/constant/constants'
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? 'filter: brightness(10)' : ''
})
</script>

<template>
  <footer class="footer-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position='cr' :opacity=".7" />

    <div class="footer-top-wrapper">
      <div class="footer-medias-wrapper">
        <commonLogo />

        <p class="footer-description">
          Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.
        </p>

        <div class="footer-media-list">
          <router-link to="/">
            <img
              src="/images/footer-instagram.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-facebook.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-twitter.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-tiktok.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-youtube.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-telegram.png"
              alt="NFT media links"
              class="footer-media"
              :style="setImgWhite"
            >
          </router-link>
        </div>
      </div>

      <div class="footer-info-list ">
        <div v-for="info in FOOTER_DUMMY_INFO" :key="info.id" class="footer-links">
          <h3 class="footer-info-title">
            {{ info.title }}
          </h3>

          <ul class="footer-links">
            <li v-for="link in info.contents" :key="link.id">
              <RouterLink :to="link.link" class="footer-link-name">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom-wrapper">
      <div class="footer-trade-mark">
        Copyright © 2022 NFT. All Rights Reserves
      </div>

      <div class="footer-policy-list">
        <a href="/" class="footer-trade-mark">
          Privacy Policy
        </a>

        <a href="/" class="footer-trade-mark">
          Term & Condition

          <button class="footer-policy-btn">
            <img
              src="/images/common-arrow-up.png"
              alt="NFT arrow up icon"
              class="footer-policy-icon"
              :style="setImgWhite"
            >
          </button>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/footer.scss">

</style>

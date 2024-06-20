<script lang="ts" setup>
import type { DrawerProps } from 'element-plus'

import { PAGE_DUMMY_DATA } from '@/constant/constants.ts'
import { useThemeStore } from '@/stores'

const drawer = ref(false)
const direction = ref<DrawerProps['direction']>('ltr')

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? 'filter: brightness(10)' : ''
})
</script>

<template>
  <el-button :class="$style['sidebar-menu-btn']" @click="drawer = true">
    <font-awesome-icon :icon="['fas', 'bars']" :class="$style['sidebar-menu-icon']" />
  </el-button>

  <el-drawer
    v-model="drawer"
    :direction="direction"
    size="60%"
    :class="$style['sidebar-drawer-wrapper']"
  >
    <template #header>
      <div :class="$style['sidebar-header']">
        <commonLogo :size="32" />

        <BaseHeaderAvatarAuth />
      </div>
    </template>

    <div :class="$style['sidebar-body']">
      <h2 :class="$style['sidebar-body-title']">
        Navigation
      </h2>

      <div :class="$style['sidebar-menu']">
        <div v-for="page in PAGE_DUMMY_DATA" :key="page.id" :class="$style['sidebar-menu-item']">
          <router-link :to="page.link" :class="$style['sidebar-menu-link']">
            {{ page.name }}
          </router-link>
        </div>
      </div>

      <h2 :class="$style['sidebar-body-title']">
        Referrence
      </h2>

      <div :class="$style['sidebar-settings']">

        <div :class="$style['sidebar-setting']">
          <span>
            Theme
          </span>

          <BaseHeaderThemeSwitcher />
        </div>

        <div :class="$style['sidebar-setting']">
          <span>
            New Product
          </span>

          <RouterLink to="/create-product" :class="$style['header-btn-wrapper']">
            <span :class="$style['header-btn-content']">+</span>

            <img src="/images/common-gallery-light.png" alt="Header Wallet Connect Icon" :class="$style['header-btn-icon']">
          </RouterLink>
        </div>
      </div>
    </div>

    <template #footer>
      <div :class="$style['sidebar-footer']">
        <div :class="$style['sidebar-footer-medias']">
          <router-link to="/">
            <img
              src="/images/footer-instagram.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-facebook.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-twitter.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-tiktok.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-youtube.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>

          <router-link to="/">
            <img
              src="/images/footer-telegram.png"
              alt="NFT media links"
              :class="$style['footer-media']"
              :style="setImgWhite"
            >
          </router-link>
        </div>

        <h3 :class="$style['sidebar-footer-copyright']">
          Copyright © 2022 NFT. All Rights Reserves
        </h3>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderSideBar.scss">

</style>

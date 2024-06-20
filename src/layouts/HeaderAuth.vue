<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const checkAuth = ref(localStorage.getItem('auth'))

onMounted(async () => {
  if (checkAuth.value === 'true')
    await userStore.fetchUserAction()
})
</script>

<template>
  <header class="header-wrapper">
    <div class="header-left-wrapper">
      <commonLogo />

      <BaseHeaderThemeSwitcher />

      <BaseHeaderNavBar />
    </div>

    <div class="header-right-wrapper">
      <BaseHeaderSearch />

      <BaseHeaderAvatarAuth />

      <RouterLink to="/create-product" class="header-btn-wrapper">
        <span class="header-btn-content">+</span>

        <img src="/images/common-gallery-light.png" alt="Header Wallet Connect Icon" class="header-btn-icon">
      </RouterLink>

      <BaseHeaderNotify />

      <BaseHeaderCartAuth />
    </div>
  </header>

  <header class="header-tablet-wrapper">
    <div class="header-top-wrapper">
      <CommonLogo />

      <BaseHeaderSideBar />
    </div>

    <div class="header-bottom-wrapper">
      <CommonAvatarBlank />
      
      <BaseHeaderSearch />

      <div class="header-bottom-action">
        <BaseHeaderNotify />

        <BaseHeaderCartAuth  />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/headerAuth.scss">

</style>

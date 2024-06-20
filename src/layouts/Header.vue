<script setup lang="ts">
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

      <BaseHeaderWalletConnect />

      <BaseHeaderAvatar />

      <BaseHeaderCartDefault />
    </div>
  </header>

  <header class="header-tablet-wrapper">
    <div class="header-top-wrapper">
      <CommonLogo />
      
      <BaseHeaderSideBar />
    </div>

    <div class="header-bottom-wrapper">
      <BaseHeaderAvatar />

      <BaseHeaderSearch />

      <div class="header-bottom-action">
        <BaseHeaderCartDefault />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/header.scss">
   
</style>

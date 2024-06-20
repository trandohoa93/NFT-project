<script setup lang="ts">
import monitor from '@/assets/images/monitor-logo.png'
import circle from '@/assets/images/circle-main.png'
import triangle from '@/assets/images/triangle-main.png'
import rectangle from '@/assets/images/rectangle-gray.png'
</script>

<template>
  <div class="layout-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position='c' :opacity=".7" />

    <div class="layout-content">
      <CommonCircleBackground position='br'  />

      <div class="layout-left">
        <img :src="circle" alt="NFT background decoration" class="layout-deco-circle">

        <img :src="circle" alt="NFT background decoration" class="layout-deco-circle">

        <img :src="triangle" alt="NFT background decoration" class="layout-deco-triangle">

        <img :src="triangle" alt="NFT background decoration" class="layout-deco-triangle">

        <img :src="rectangle" alt="NFT background decoration" class="layout-deco-rectangle">

        <img :src="rectangle" alt="NFT background decoration" class="layout-deco-rectangle">

        <RouterLink to="/" class="image-wrapper" >
          <img :src="monitor" alt="NFT monitor image" class="image-monitor">
        </RouterLink>
      </div>

      <div class="layout-right">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/noLayouts.scss">

</style>

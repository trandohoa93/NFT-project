<script setup lang="ts">
import Header from '@/layouts/Header.vue'
</script>

<template>
  <Header />

  <div class="router-view-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position="ct" :opacity=".7" />

    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/layouts/noFooterLayout.scss">

</style>

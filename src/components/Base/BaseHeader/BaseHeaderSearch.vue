<script setup lang="ts">
import search from '@/assets/images/search.png'

</script>

<template>
  <div class="base-header-search">
    <button class="search-wrapper">
      <img :src="search" alt="NFT Input Icon" class="search-icon">
  
      <span class="search-btn">
        Search ...
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHeader/baseHeaderSearch.scss">
    
</style>

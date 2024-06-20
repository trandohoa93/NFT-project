<script lang="ts" setup>
import logo from '@/assets/images/main-logo.png'

defineProps({
  size: {
    type: Number,
    default: 72,
  },
})
</script>

<template>
  <div class="common-logo-wrapper">
    <RouterLink to="/">
      <img
        :src="logo"
        alt="NFT Market logo"
        class="common-logo"
        :style="{
          width: `${size}px`,
          height: `${size}px`,
        }"
      >
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonLogo.scss">

</style>

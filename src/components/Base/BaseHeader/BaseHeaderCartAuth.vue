<script lang="ts" setup>
import IconShoppingCart from '@/components/Icons/IconShoppingCart.vue'
</script>

<template>
  <RouterLink to="/shopcart" :class="$style['header-cart-btn-wrapper']">
    <div :class="$style['header-cart-icon-wrapper']">
      <IconShoppingCart />
    </div>
  </RouterLink>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderCartAuth.scss">
</style>

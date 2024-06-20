<script lang="ts" setup>
import { useRouter } from 'vue-router'

import IconShoppingCart from '@/components/Icons/IconShoppingCart.vue'

const router = useRouter()
</script>

<template>
  <v-tooltip text="Please log in to proceed" location="bottom">
    <template #activator="{ props }">
      <div class="base-header-cart">
        <button class="cart-wrapper" v-bind="props" @click="router.push('/auth/login')">
          <div class="cart-icon-wrapper">
            <IconShoppingCart />
          </div>
        </button>
      </div>
    </template>
  </v-tooltip>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHeader/baseHeaderCartDefault.scss">

</style>

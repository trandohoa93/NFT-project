<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/cartStore'
import type { CartType } from '@/types'
import CommonButton from '@/components/Common/CommonButton.vue'

const cartStore = useCartStore()
const { buyingCarts } = storeToRefs(cartStore)

const shippingCost = 0.8

const subtotal = computed(() => {
  return buyingCarts.value.reduce((acc, item: CartType) => {
    const price = item.nfts.currentPrice !== null ? item.nfts.currentPrice : 0
    return acc + price * item.quantity
  }, 0)
})

const totalCost = computed(() => {
  return subtotal.value + shippingCost
})
</script>

<template>
  <div class="cart-total">
    <v-card
      class="cart-total-card" rounded="0
    "
    >
      <v-card-title
        class="total-card-title d-flex justify-space-between"
      >
        <p class="text">
          Cart Total
        </p>
        <p class="value">
          {{ buyingCarts.length }} items
        </p>
      </v-card-title>
      <v-card-text
        class="sub-total-card d-flex justify-space-between"
      >
        <p class="text">
          Sub Total
        </p>
        <p class="value">
          {{ subtotal }} ETH
        </p>
      </v-card-text>
      <v-card-text
        class="sub-shipping-card d-flex justify-space-between"
      >
        <p class="text">
          Shipping
        </p>
        <p class="value">
          {{ shippingCost.toFixed(2) }} ETH
        </p>
      </v-card-text>
      <v-card-text
        class="sub-tax-card d-flex justify-space-between"
      >
        <p class="text">
          Tax
        </p>
        <p class="value">
          Free
        </p>
      </v-card-text>
      <v-card-text
        class="total-card d-flex justify-space-between"
      >
        <p class="text">
          Total
        </p>
        <p class="value">
          {{ totalCost.toFixed(2) }} ETH
        </p>
      </v-card-text>
      <v-card-text>
        <CommonTextfieldButton label="Apply coupon" bg-textfield="color-bg-apply-coupon" bg-button="gray-400" />
      </v-card-text>

      <v-card-actions class="card-checkout">
        <CommonButton
          v-if="!buyingCarts.length || buyingCarts.length === 0"
          label="Please choose which NFT you want to buy"
          full-width
          button-style="outline"
          :is-disabled="true"
          class="mx-auto"
        />
        
        <RouterLink v-else to="/checkout" class="btn-checkout rounded-pill">
          <CommonButtonSubmit label=" Proceed to checkout" full-width />
        </RouterLink>
      </v-card-actions>

      <v-card-actions class="card-continue">
        <RouterLink to="/" class="btn-continue rounded-pill">
          <CommonButton
            label=" Continue shopping"
            full-width
            button-style="outline"
          />
        </RouterLink>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseShopCart/baseCartTotal.scss"></style>

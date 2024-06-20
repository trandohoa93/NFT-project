<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { toast } from 'vue3-toastify'
import { useCartStore } from '@/stores/cartStore'
import CommonPageLoading from '@/components/Common/CommonPageLoading.vue'

const cartStore = useCartStore()
const { getUserCartsAction, increaseCartAction, decreaseCartAction } = cartStore
const { loading, carts } = storeToRefs(cartStore)

async function handleChangeQuantity({ id, increment }: { id: number, increment: number }) {
  if (increment === 1)
    await increaseCartAction(id)
  else if (increment === -1)
    await decreaseCartAction(id)
  else
    toast.error('Something went wrong! Please try again!')
}

onMounted(async () => {
  loading.value = true

  await getUserCartsAction()
  try {
    toast.success('Get user cart success!', {
      autoClose: 500,
    })
  }
  catch (error) {
    toast.error('Something went wrong! Please try again!')
  }
  finally {
    loading.value = false
  }
})

function deleteSelectedCart(id: number) {
  carts.value = carts.value.filter(item => item.id !== id)
}
</script>

<template>
  <div class="theme-switch-wrapper">
    <div class="shop-cart">
      <p class="shop-cart-title">
        shopping cart
      </p>

      <div v-if="carts.length === 0" class="cart-empty-wrapper">
        <h2>OOps! Your cart is empty</h2>

        <img src="/images/404-image.png" alt="" class="cart-empty-image">

        <CommonButtonSubmit label="Explore NFTs" />
      </div>

      <div v-else class="shop-cart-container">
        <BaseShoppingCart
          @update-quantity="handleChangeQuantity"
          @delete-item="deleteSelectedCart"
        />

        <BaseCartTotal />
      </div>

      <teleport v-if="loading" to="body">
        <CommonPageLoading />
      </teleport>
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/pages/shopcart.scss"></style>

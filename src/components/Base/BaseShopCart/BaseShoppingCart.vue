<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash'

import type { CartType } from '@/types'
import { deleteNFT } from '@/api/cart'
import { useCartStore } from '@/stores/cartStore'

import CommonCardItem from '@/components/Common/CommonCardItem.vue'

const emit = defineEmits(['updateQuantity', 'deleteItem'])

const headers = [
  { key: 'id', title: 'check all items' },
  { key: 'price', title: 'price' },
  { key: 'quality', title: 'quality' },
  { key: 'total', title: 'total' },
  { key: 'action', title: '' },
]

const cartStore = useCartStore()
const { carts, buyingCarts } = storeToRefs(cartStore)

const dialogDelete = ref<boolean>(false)
const isSelectedAll = ref(false)

const defaultImage = 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'

function handleClickAll() {
  if (isSelectedAll.value)
    buyingCarts.value = cloneDeep(carts.value)
  else
    buyingCarts.value = []
}

function handleClickSingle() {
  if (buyingCarts.value.length === carts.value.length)
    isSelectedAll.value = true
  else
    isSelectedAll.value = false
}

async function increaseValue(id: number) {
  emit('updateQuantity', { id, increment: 1 })
}

async function decreaseValue(id: number) {
  emit('updateQuantity', { id, increment: -1 })
}

function deleteItem() {
  dialogDelete.value = true
}

async function deleteItemConfirm(id: number) {
  await deleteNFT(id)
  emit('deleteItem', id)
  closeDelete()
}

function closeDelete() {
  dialogDelete.value = false
}

function computeTotalPrice(item: CartType) {
  const totalPrice = (item.nfts.currentPrice ?? 0) * item.quantity
  return totalPrice.toFixed(2)
}
</script>

<template>
  <div class="base-shopping-cart">
    <v-card rounded="0" class="cart-item">
      <v-data-table
        :headers="headers"
        :items="carts"
        class="cart-table"
        hide-default-footer
      >
        <template #headers="{ columns }">
          <tr class="row-title ">
            <td class="icon-title">
              <v-checkbox-btn
                v-model="isSelectedAll"
                false-icon="mdi:mdi-checkbox-blank-outline"
                true-icon="mdi:mdi-checkbox-intermediate"
                base-color="var(--color-icon-checkbox)"
                color="var(--color-icon-checkbox)"
                @change="handleClickAll"
              />
            </td>

            <template v-for="column in columns" :key="column.key">
              <td class="data-title">
                {{ column.title }}
              </td>
            </template>
          </tr>
        </template>

        <template #item="{ item }">
          <tr class="row-item">
            <td class="data-item">
              <div class="h-100 d-flex align-center">
                <v-checkbox-btn
                  v-model="buyingCarts"
                  false-icon="mdi:mdi-checkbox-blank-outline"
                  true-icon="mdi:mdi-checkbox-intermediate"
                  base-color="var(--color-icon-checkbox)"
                  color="var(--color-icon-checkbox)"
                  :value="item"
                  @change="handleClickSingle"
                />
              </div>
            </td>

            <td class="data-item">
              <div class="item">
                <CommonCardItem :id="item.nftId" :image="defaultImage" :collection-name="item.nfts.title" owner="Owner" />
              </div>
            </td>
            <td class="data-item">
              <div class="item text">
                <IconEth />
                {{ item.nfts.currentPrice ?? 'N/A' }} ETH
              </div>
            </td>
            <td class="data-item">
              <div class="item">
                <div class="input-quality">
                  <v-input
                    class="text"
                    single-line
                    hide-details
                  >
                    {{ item.quantity }}
                    <template #append>
                      <v-icon @click="increaseValue(item.id)">
                        mdi:mdi-plus
                      </v-icon>
                    </template>

                    <template #prepend>
                      <v-icon @click="decreaseValue(item.id)">
                        mdi:mdi-minus
                      </v-icon>
                    </template>
                  </v-input>
                </div>
              </div>
            </td>

            <td class="data-item">
              <div class="item text">
                <IconEth />
                {{ computeTotalPrice(item) }} ETH
              </div>
            </td>

            <td class="data-item">
              <button class="item" @click="deleteItem()">
                <IconTrash />
              </button>

              <v-dialog v-model="dialogDelete" max-width="500px" class="dialog">
                <v-card rounded="0">
                  <div class="dialog-delete">
                    <v-card-title>
                      <p class="dialog-title">
                        Are you sure you want to delete this item?
                      </p>
                    </v-card-title>
                    <v-card-actions class="dialog-button">
                      <v-btn class="dialog-button-cancel rounded-pill" @click="closeDelete">
                        Cancel
                      </v-btn>
                      <v-btn
                        class="dialog-button-ok rounded-pill"
                        @click="deleteItemConfirm(item.id)"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-card>
              </v-dialog>
            </td>
          </tr>
        </template>
        <template #bottom />
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseShopCart/baseShoppingCart.scss"></style>

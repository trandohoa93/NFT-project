<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCollectionsStore } from '@/stores'

const collectionStore = useCollectionsStore()

const { allItems, isLoading } = storeToRefs(collectionStore)

onMounted(() => {
  collectionStore.fetchCollections()
})

const headers = [
  { key: 'collection', title: 'collection' },
  { key: 'volume', title: 'volume' },
  { key: 'floorprice', title: 'floor price' },
  { key: 'protein', title: '' },
]
</script>

<template>
  <v-skeleton-loader v-if="isLoading" type="table" />
  <div v-else class="market-collection">
    <v-data-table
      :items="allItems"
      :headers="headers"
      hide-default-footer
      class="data-table"
    >
      <template #headers="{ columns }">
        <tr class="row-title">
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
            <div class="h-100 d-flex justify-center align-center">
              <RouterLink :to="`/marketplace/collection/${item.id}`">
                <p class="text">
                  {{ item.name }}
                </p>
              </RouterLink>
            </div>
          </td>
          <td class="data-item">
            <div class="h-100 d-flex justify-center align-center">
              {{ item.price }}
            </div>
          </td>
          <td class="data-item">
            <div class="h-100 d-flex justify-center align-center">
              {{ item.price }}
            </div>
          </td>
          <td class="data-item w-50">
            <div class="button-group">
              <template v-for="_ in 5" :key="_">
                <v-btn
                  class="button-eth"
                  rounded
                >
                  <template #prepend>
                    <div class="icon">
                      <IconEth />
                    </div>
                  </template>
                  <div class="text">
                    {{ item.price }} ETH
                  </div>
                </v-btn>
              </template>
            </div>
          </td>
        </tr>
      </template>
      <template #bottom />
    </v-data-table>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseMarketPlace/baseMarketCollection.scss"></style>

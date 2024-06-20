<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCollectionsStore, useNftStore, useUserStore } from '@/stores'

import CommonSearch from '@/components/Common/CommonSearch.vue'
import CommonAllChains from '@/components/Common/CommonAllChains.vue'

const nftStore = useNftStore()
const collectionStore = useCollectionsStore()
const userStore = useUserStore()

const { query } = storeToRefs(nftStore)

const { collectionQuery, allItems, isLoading } = storeToRefs(collectionStore)
const { userQuery } = storeToRefs(userStore)

const tab = ref('null')

onMounted(() => {
  collectionStore.fetchCollections()
})

function updateSearchValue(value: string) {
  if (tab.value === 'one') {
    query.value = {
      ...query.value,
      title: value,
    }
    nftStore.filterNFTs()
  }
  if (tab.value === 'two') {
    collectionQuery.value = {
      ...collectionQuery.value,
      search: value,
    }
    collectionStore.searchCollection()
  }

  if (tab.value === 'three') {
    userQuery.value = {
      ...userQuery.value,
      name: value,
    }
    userStore.searchCollection()
  }
}

const label = computed<string>(() => {
  switch (tab.value) {
    case 'one':
      return 'Search by NFTs'
    case 'two':
      return 'Search by Collections'
    case 'three':
      return 'Search by Users'
    default:
      return ''
  }
})
</script>

<template>
  <div class="market-place">
    <div v-if="isLoading" class="loading">
      <v-progress-circular indeterminate :size="74" :width="7" color="var(--color-orange-1)" />
    </div>
    <div v-else>
      <SliderBanner :items="allItems" />
    </div>
    <v-tabs
      v-model="tab"
      class="tabs-container"
      hide-slider
      height="auto"
      selected-class="text-selectecd"
    >
      <div class="container-title">
        <div>
          <v-tab value="one" class="tab-value" :ripple="false">
            <p class="text">
              NFTs
            </p>
          </v-tab>
          <v-tab value="two" class="tab-value" :ripple="false">
            <p class="text">
              Collection
            </p>
          </v-tab>
          <v-tab value="three" class="tab-value" :ripple="false">
            <p class="text">
              User
            </p>
          </v-tab>
        </div>
        <div class="wrapper">
          <CommonSearch :label="label" @input="updateSearchValue" />
          <div v-if="tab !== 'three'">
            <CommonAllChains />
          </div>
        </div>
      </div>
    </v-tabs>
    <v-card-text class="card-text">
      <v-window v-model="tab">
        <v-window-item value="one">
          <BaseMarketNFTs />
        </v-window-item>
        <v-window-item value="two">
          <BaseMarketCollection />
        </v-window-item>
        <v-window-item value="three">
          <BaseMarketUser />
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style scoped src="@/assets/scss/pages/marketplace/index.scss"></style>

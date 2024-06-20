<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNftStore } from '@/stores'

const nftStore = useNftStore()
const { getTrendingNftsAction } = nftStore
const { trendingNfts } = storeToRefs(nftStore)

onMounted(async () => {
  await getTrendingNftsAction()
})
</script>

<template>
  <div class="not-result-wrapper global-container">
    <div class="not-result-top">
      <h2 class="not-result-title">
        Sorry, we couldn’t find any results for this search.
      </h2>

      <p class="not-result-subtitle">
        Maybe give one of these a try?
      </p>

      <div class="not-result-input-wrapper">
        <input type="text" class="not-result-input" placeholder="Enter your search ...">

        <button class="not-result-btn">
          <img src="/images/common-search-light.png" alt="Search Icon" class="not-result-icon">
          Search
        </button>
      </div>
    </div>

    <div class="not-result-bottom">
      <div class="not-result-view">
        <h2 class="not-result-title">
          Hot NFTs
        </h2>

        <button class="not-result-view-btn">
          view all
        </button>
      </div>

      <div class="not-result-collections">
        <v-row no-gutters class="ga-5">
          <v-col auto  v-for="(nft, index) in trendingNfts" :key="index">
            <CommonCardProduct :product="nft" label-price="Floor Price" :height-img="264" :show-bg="true" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/notResult.scss">

</style>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNftStore } from '@/stores'

const nftStore = useNftStore()
const { nfts, loading, query } = storeToRefs(nftStore)

onMounted(async () => {
  nftStore.getNFTs()
})

function getFilter(value: any) {
  const obj = value.reduce((o: boolean, key: string) => Object.assign(o, { [key]: true }), {})
  query.value = {
    ...query.value,
    newIn: (Boolean(obj.newIn)),
    trending: (Boolean(obj.trending)),
  }
  nftStore.filterNFTs()
}

function minPriceFilter(value: any) {
  if (value) {
    query.value = {
      ...query.value,
      minPrice: value,
    }
  }
  else {
    const { minPrice, ...rest } = query.value
    query.value = rest
  }
  nftStore.filterNFTs()
}

function maxPriceFilter(value: any) {
  if (value) {
    query.value = {
      ...query.value,
      maxPrice: value,
    }
  }
  else {
    const { maxPrice, ...rest } = query.value
    query.value = rest
  }
  nftStore.filterNFTs()
}
</script>

<template>
  <div class="market-nfts">
    <v-row>
      <v-col cols="12" sm="12" lg="3">
        <CommonFilter @filter="getFilter" @min-price="minPriceFilter" @max-price="maxPriceFilter" />
      </v-col>
      <v-col cols="12" sm="12" lg="9">
        <v-row>
          <v-col v-for="(item, index) in nfts" :key="index" cols="12" lg="3" sm="12">
            <CommonCardProduct :is-loading="loading" :product="item" label-price="Floor Price" :height-img="180" :show-bg="true" :show-heart-icon="true" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseMarketPlace/baseMarketNFTs.scss"></style>

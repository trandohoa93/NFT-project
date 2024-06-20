<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import type { SelectedLabel } from '@/types'
import CommonSearch from '@/components/Common/CommonSearch.vue'
import { useCollectionsStore, useNftStore, useUserStore } from '@/stores'
import { formatYear } from '@/utils/formatDateString'

const route = useRoute()

const nftStore = useNftStore()
const userStore = useUserStore()
const { nftDetail, loading, query } = storeToRefs(nftStore)

const collectionStore = useCollectionsStore()
const { isMenu, item, isLoading } = storeToRefs(collectionStore)
const { userNameDetails } = storeToRefs(userStore)

const { fillMenu, fillGrid } = collectionStore

const currrentItem = Number(route.params.id)
const itemPerRow = ref(3)
const isMenuComputed = computed(() => isMenu.value)

watch(isMenuComputed, () => {
  if (isMenu.value)
    itemPerRow.value = 6

  else
    itemPerRow.value = 3
})

onMounted(() => {
  query.value = {}
  collectionStore.fetchCollectionsDetails(currrentItem)
  nftStore.getNFTbyCollection(currrentItem)
  userStore.getDetailsUserAction(currrentItem)
})

const iconColor = computed(() => {
  if (isMenu.value) {
    return {
      menuColor: 'var(--color-icon-active)',
      gridColor: 'var(--color-icon-in-active)',
    }
  }
  else {
    return {
      menuColor: 'var(--color-icon-in-active)',
      gridColor: 'var(--color-icon-active)',
    }
  }
})

const defaultSelected = ref<SelectedLabel>(
  'Price low to high',
)

const itemSelect = ref<Array<SelectedLabel>>([
  'Price low to high',
  'Price high to low',
])

function updateSearchValue(value: string) {
  query.value = {
    ...query.value,
    title: value,
    collectionId: currrentItem,
  }
  nftStore.filterNFTsbyCollection()
}

function getFilter(value: any) {
  const obj = value.reduce((o: boolean, key: string) => Object.assign(o, { [key]: true }), {})
  query.value = {
    ...query.value,
    collectionId: currrentItem,
    newIn: (Boolean(obj.newIn)),
    trending: (Boolean(obj.trending)),
  }
  nftStore.filterNFTsbyCollection()
}

function minPriceFilter(value: any) {
  if (value) {
    query.value = {
      ...query.value,
      collectionId: currrentItem,
      minPrice: value,
    }
  }
  else {
    const { minPrice, ...rest } = query.value
    query.value = rest
  }
  nftStore.filterNFTsbyCollection()
}

function maxPriceFilter(value: any) {
  if (value) {
    query.value = {
      ...query.value,
      collectionId: currrentItem,
      maxPrice: value,
    }
  }
  else {
    const { maxPrice, ...rest } = query.value
    query.value = rest
  }
  nftStore.filterNFTsbyCollection()
}

watch(defaultSelected, () => {
  if (defaultSelected.value === 'Price low to high') {
    query.value = {
      ...query.value,
      collectionId: currrentItem,
      price: 'asc',
    }
  }

  if (defaultSelected.value === 'Price high to low') {
    query.value = {
      ...query.value,
      collectionId: currrentItem,
      price: 'desc',
    }
  }
  nftStore.filterNFTsbyCollection()
})
</script>

<template>
  <div class="collection-wrapper">
    <div class="collection-img">
      <div class="avatar">
        <img :src="item.logoImgUrl" class="img">
      </div>
    </div>
    <div class="wrapper">
      <div v-if="isLoading" class="info-skeleton">
        <div class="left">
          <v-skeleton-loader type="article" />
        </div>
        <div class="right">
          <v-skeleton-loader type="card" />
        </div>
      </div>
      <div v-else class="info">
        <v-card class="info-left" flat>
          <v-card-title class="title">
            {{ item.name }}
          </v-card-title>
          <v-card-subtitle class="subtitle-author">
            <p class="subtitle-left">
              Created by
            </p>
            <p class="subtitle-right">
              {{ userNameDetails }}
            </p>

            <img src="@/assets/images/collectiondetail-info.png">
          </v-card-subtitle>
          <v-card-subtitle class="subtitle-details pa-0 pb-5">
            <div class="details-item">
              <p class="subtitle-left">
                Items
              </p>
              <p class="subtitle-right">
                {{ item.volume }}K
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Created
              </p>
              <p class="subtitle-right">
                {{ formatYear(item.createdAt) }}
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Creator earnings
              </p>
              <p class="subtitle-right">
                5%
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Chain
              </p>
              <p class="subtitle-right">
                {{ item.blockchain }}
              </p>
            </div>
          </v-card-subtitle>
          <v-card-text class="text pa-0">
            {{ item.description }}
          </v-card-text>
        </v-card>
        <v-card class="info-right" variant="text" rounded="0">
          <v-card-text class="text pa-0">
            <div class="details-item">
              <p class="subtitle-left">
                Floor Price
              </p>
              <p class="subtitle-right">
                {{ item.price }} ETH
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Total Volume
              </p>
              <p class="subtitle-right">
                {{ item.price }} ETH
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Items
              </p>
              <p class="subtitle-right">
                {{ item.items }} K
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                Owners
              </p>
              <p class="subtitle-right">
                {{ item.owner }}K
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                unique owners
              </p>
              <p class="subtitle-right">
                {{ item.percentOwner }}%
              </p>
            </div>
            <div class="details-item">
              <p class="subtitle-left">
                blockchain
              </p>
              <p class="subtitle-right">
                {{ item.blockchain }}
              </p>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="content">
        <CommonFilter @filter="getFilter" @min-price="minPriceFilter" @max-price="maxPriceFilter" />
        <div class="content-right">
          <v-container class="content-right-filter pa-0">
            <v-row>
              <v-col cols="6">
                <CommonSearch class="search" @input="updateSearchValue" />
              </v-col>
              <v-col>
                <v-select
                  v-model="defaultSelected"
                  class="select"
                  :items="itemSelect"
                  variant="outlined"
                  menu-icon=""
                  rounded="0"
                  bg-color="var(--color-bg)"
                >
                  <template #append-inner>
                    <DropDown color="var(--color-text)" />
                  </template>
                </v-select>
              </v-col>
              <v-col cols="auto">
                <div class="filter-icon">
                  <button class="menu-box" :class="{ active: isMenu }" @click="fillMenu">
                    <IconMenu :color="iconColor.menuColor" />
                  </button>
                  <button class="grid-box" :class="{ active: !isMenu }" @click="fillGrid">
                    <IconGrid :color="iconColor.gridColor" />
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col v-for="(item, index) in nftDetail" :key="index" cols="12" :lg="itemPerRow" sm="12">
              <CommonCardProduct :is-loading="loading" :product="item" label-price="Floor Price" :height-img="220" :show-bg="true" :show-heart-icon="true" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/pages/marketplace/collection/[id].scss"></style>

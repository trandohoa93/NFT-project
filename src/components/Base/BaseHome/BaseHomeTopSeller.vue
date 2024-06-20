<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNftStore } from '@/stores'

const nftStore = useNftStore()
const { getTrendingNftsAction } = nftStore
const { trendingNfts } = storeToRefs(nftStore)

const nftTrendingList = ref<any[]>([])

const listTopSeller = reactive([
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
  {
    name: 'Darrell Steward',
    avatar: '',
    price: 0.78,
  },
])

const listCategory = [
  {
    name: 'All category',
    key: 'all',
    isActive: true,
  },
  {
    name: 'Art',
    key: 'art',
    isActive: false,
  },
  {
    name: 'Music',
    key: 'music',
    isActive: false,
  },
  {
    name: 'Sport',
    key: '',
    isActive: false,
  },
  {
    name: 'Gaming',
    key: '',
    isActive: false,
  },
  {
    name: 'Photoraphy',
    key: '',
    isActive: false,
  },
]

function changeActiveCategory(index: number) {
  listCategory.forEach((element) => {
    element.isActive = false
  })

  listCategory[index].isActive = true
}

onMounted(async () => {
  await getTrendingNftsAction()
  nftTrendingList.value = trendingNfts.value
})
</script>

<template>
  <v-row no-gutters class="global-container top-marketlace">
    <v-col cols="12" lg="3" sm="12" class="top-sellers">
      <div class="header-top-sellers py-5 color-text">
        <h1>Top Sellers</h1>
      </div>

      <div class="body-top-sellers">
        <div v-for="(item, index) in listTopSeller" :key="index" class="list-top-sellers py-2">
          <div class="number-best-sellers px-3">
            <span>{{ index + 1 }}</span>
          </div>

          <div class="avatar-user px-3">
            <img src="/images/baseHome-avatar-user.png">
            <img class="custom-check" src="/images/baseHome-icon-check.png">
          </div>

          <div class="info-user px-3">
            <div class="name-user py-2 color-text">
              <span>{{ item.name }}</span>
            </div>

            <div class="price-eth py-2">
              <img src="/images/common-ETH.png" alt="ETH NFT">

              <span class="number-price">{{ item.price }} ETH</span>
            </div>
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="12" lg="9" sm="12" class="market-place">
      <v-row class="header-market-place py-5">
        <v-col lg="4" sm="12" class="title-market-place color-text">
          <h1>Marketplace</h1>
        </v-col>

        <v-col lg="8" sm="12" class="list-category-market">
          <div
            v-for="(item, index) in listCategory" :key="index"
            class="item-category-market px-3 py-3" :class="{ active: item.isActive }"
            @click="changeActiveCategory(index)"
          >
            <span>
              {{ item.name }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row class="best-list-product">
        <v-col lg="5" sm="12" cols="12" class="top-product">
          <CommonCardProduct
            :product="nftTrendingList[0]"
            label-price="Floor Price"
            :height-img="490"
            :show-bg="true"
            :show-last-sale="false"
          />
        </v-col>

        <v-col lg="7" sm="12" cols="12" class="second-product">
          <v-row class="list-second">
            <v-col cols="12" md="6" lg="6" class="item-list pr-2 pb-1">
              <CommonCardProduct
                :product="trendingNfts[1]"
                class="pr-1"
                label-price="Floor Price"
                :height-img="180"
                :show-bg="true"
                :show-last-sale="false"
              />
            </v-col>

            <v-col cols="12" md="6" lg="6" class="item-list pl-2 pb-1 right">
              <CommonCardProduct
                :product="trendingNfts[2]"
                label-price="Floor Price"
                :height-img="180"
                :show-bg="true"
                :show-last-sale="false"
              />
            </v-col>
          </v-row>

          <v-row class="list-second">
            <v-col cols="12" md="6" lg="6" class="item-list pr-2 pt-2">
              <CommonCardProduct
                :product="trendingNfts[3]"
                class="pr-1"
                label-price="Floor Price"
                :height-img="180"
                :show-bg="true"
                :show-last-sale="false"
              />
            </v-col>

            <v-col cols="12" md="6" lg="6" class="item-list pl-2 pt-2 right">
              <CommonCardProduct
                :product="trendingNfts[4]"
                label-price="Floor Price"
                :height-img="180"
                :show-bg="true"
                :show-last-sale="false"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHome/baseHomeTopSellers.scss"></style>

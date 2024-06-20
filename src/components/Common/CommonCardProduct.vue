<script setup lang="ts">
import { computed } from 'vue'
import EthIcon from '@/assets/images/eth.png'
import type { Nft } from '@/types'

const props = defineProps({
  product: {
    type: Object as PropType<Nft>,
    default: () => ({
      id: null,
      createdAt: '',
      updatedAt: '',
      userId: 0,
      collectionId: 0,
      title: '',
      startingDate: '',
      expirationDate: '',
      description: '',
      imgUrl: '',
      currentPrice: null,
      nftPrices: [],
    }),
  },
  labelPrice: {
    type: String,
    default: '',
  },
  heightImg: {
    type: Number,
    default: 300,
  },
  showHeartIcon: {
    type: Boolean,
    default: false,
  },
  showBg: {
    type: Boolean,
    default: false,
  },
  showLastSale: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggleFavourite'])

const toggleShowBg = computed(() => {
  return props.showBg && 'bg-card'
})

function handleBtnHeartIcon() {
  emit('toggleFavourite')
}
</script>

<template>
  <div v-if="isLoading">
    <v-skeleton-loader
      class="mx-auto border"
      type="image, article"
    />
  </div>
  <div v-else>
    <v-card
      class="card-product position-relative mx-auto" rounded="0"
    >
      <v-img
        class="card-product-img"
        :class="toggleShowBg"
        :height="heightImg"
        cover
        :src="typeof product.imgUrl === 'string' ? product.imgUrl : ''"
      >
        <v-btn v-show="showHeartIcon" icon="mdi:mdi-account" size="small" class="card-product-heart" @click="handleBtnHeartIcon">
          <div class="card-product-icon">
            <font-awesome-icon :icon="['far', 'heart']" />
          </div>
        </v-btn>
      </v-img>
      <v-card-item>
        <v-card-title class="card-product-header">
          <RouterLink :to="`/marketplace/nft/${product?.id}`">
            <div class="card-product-title">
              {{ product?.title }}
            </div>
          </RouterLink>
          <div v-show="product?.id" class="card-product-number">
            #{{ product?.id }}
          </div>
        </v-card-title>
        <v-card-text class="card-product-text">
          <div>
            <p class="text-label">
              {{ labelPrice }}
            </p>
            <div class="card-product-value">
              <img :src="EthIcon" alt="ETH icon">
              <p>
                {{ product?.currentPrice || 0 }} ETH
              </p>
            </div>
          </div>
          <div>
            <p class="text-label text-right">
              Volume
            </p>
            <div class="card-product-value">
              <img :src="EthIcon" alt="ETH icon">
              <p>
                {{ product?.currentPrice || 0 }} ETH
              </p>
            </div>
          </div>
        </v-card-text>
        <v-card-text v-if="showLastSale" class="card-product-text">
          <div class="text-label">
            Last sale: {{ product?.nftPrices[0]?.price ?? 0 }} ETH
          </div>
        </v-card-text>
      </v-card-item>
    </v-card>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonCardProduct.scss">

</style>

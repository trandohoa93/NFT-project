<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
import router from '@/router'

import { LIST_TABS } from '@/constant/constants.ts'
import { useNftStore } from '@/stores'
import { purchasedNFT } from '@/api/cart'

import CommonButtonSubmit from '@/components/Common/CommonButtonSubmit.vue'

const route = useRoute()

const nftStore = useNftStore()
const { getNFTDetailAction } = nftStore
const { nftDetail, isSuccess } = storeToRefs(nftStore)

const tab = ref(null)
const isExpand = ref(false)
const isFetching = ref(false)

const options = {
  chart: {
    height: 100,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#FE8C00', '#F83600'],
  series: [
    {
      name: 'Series A',
      data: [0, 12, 24],
    },
    {
      name: 'Series B',
      data: [0, 12, 24],
    },
  ],
  stroke: {
    width: [4, 4],
  },
  plotOptions: {
    bar: {
      columnWidth: '20%',
    },
  },
  xaxis: {
    categories: ['Oct 22', 'Nov 22', 'Dec 22', 'Jan 23', ' Feb 23', ' Mar 23'],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: '#050505',
        },
      },
      title: {
        text: 'Volume (ETH)',
        style: {
          color: '#050505',
        },
      },
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: '#050505',
        },
      },
      title: {
        text: 'Average (ETH)',
        style: {
          color: '#050505',
        },
      },
    },
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40,
  },
}

const series: any[] = [
  {
    name: 'Series A',
    data: [12, 9, 22, 27, 25, 24],
  },
]

function handleExpandText() {
  isExpand.value = !isExpand.value
}

const expandTextContainer = computed(() => {
  return {
    text: isExpand.value ? 'text-view-expand' : 'text-view-minimize',
    button: isExpand.value ? 'none' : 'inline',
  }
})

const calculatePrice = computed(() => {
  if (!nftDetail.value.currentPrice)
    return
  return (nftDetail.value.currentPrice * 1.7).toFixed(2)
})

async function handleBuyNow(id: number) {
  isFetching.value = true

  try {
    const formData = new FormData()
    formData.append('nft_id', id.toString())

    const res = await purchasedNFT(formData)

    if (res.status === 200)
      toast.success('Success! Redirecting to cart...')

    setTimeout(() => {
      router.push('/shopcart')
    }, 3000)
  }
  catch (error) {
    toast.error('There is an error occurs')
  }
  finally {
    isFetching.value = false
  }
}

async function handleAddToCart(id: number) {
  isFetching.value = true

  try {
    const formData = new FormData()
    formData.append('nft_id', id.toString())

    const res = await purchasedNFT(formData)

    if (res.status === 200) {
      toast.success('Add to cart successfully', {
        autoClose: 1000,
      })
    }
  }
  catch (error) {
    toast.error('There is an error occurs')
  }
  finally {
    isFetching.value = false
  }
}

onMounted(async () => {
  await getNFTDetailAction(Number(route.params.id))
  
  if (!isSuccess.value)
    router.push('/404')
})
</script>

<template>
  <div class="detail-nfts global-container">
    <v-row class="tab-menu">
      <v-col cols="12" lg="6" class="left-detail-info">
        <v-card>
          <v-tabs
            v-model="tab"
            :hide-slider="true"
            align-tabs="center"
            color="var(--color-text)"
            selected-class="tab-selected"
          >
            <v-tab :value="1">
              Description
            </v-tab>

            <v-tab :value="2">
              Owners
            </v-tab>

            <v-tab :value="3">
              History
            </v-tab>

            <v-tab :value="4">
              Bids
            </v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <v-window-item v-for="(item, index) in LIST_TABS" :key="index" :value="item.value">
              <div class="info-tab">
                <h1 class="title-info">
                  {{ item.title }}
                </h1>

                <div class="pt-3 desc-info">
                  {{ item.text }}
                </div>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6" class="right-detail-info">
        <div class="title-collection">
          <span>Collection </span>

          <span class="text-collection">Bored Hey Monkey Club </span>

          <img
            class="icon-check"
            src="/images/baseHome-icon-check.png"
          >
        </div>
        <div class="id-detail">
          #{{ nftDetail?.id }}
        </div>

        <div class="info-author">
          <span>Owned by </span>

          <span class="name-author">JustinAK90</span>
        </div>

        <div class="info-review">
          <div class="number-view">
            <font-awesome-icon :icon="['far', 'eye']" /> <span>1.2K views</span>
          </div>

          <div class="number-heart">
            <font-awesome-icon :icon="['far', 'heart']" /> <span>33 favorites</span>
          </div>

          <div class="date-sale">
            <font-awesome-icon :icon="['far', 'clock']" /> <span>Sale ends</span> <span class="date-time">23D : 22H :
              54M : 49S </span>
          </div>
        </div>

        <div class="view-more">
          <div class="text-view-container" :class="expandTextContainer.text">
            The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living
            on the Ethereum blockchain. Your Bored Ape card.
            The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living
            on the Ethereum blockchain. Your Bored Ape card.
          </div>

          <span
            class="text-view-more" :style="{
              display: expandTextContainer.button,
            }" @click.once="handleExpandText"
          >
            VIEW MORE
          </span>
        </div>

        <div class="buy-coin">
          <v-row>
            <v-col cols="12" lg="6" class="p-2">
              <div class="left-detail">
                <div class="title-price py-1">
                  <span>Current price</span>
                </div>

                <div class="quantity-coin py-1">
                  <span>{{ nftDetail?.currentPrice }}</span>
                </div>

                <div class="price-coin py-1">
                  <span>${{ calculatePrice }}</span>
                </div>
              </div>
            </v-col>

            <v-col cols="12" lg="6">
              <div class="right-detail">
                <div class="title-coin py-1">
                  <span>Highest </span><span class="text-red">Floor bid</span>
                </div>

                <div class="quantity-coin py-1">
                  <span>0.4 wETH</span>
                </div>

                <div class="author-coin py-1">
                  <span>by </span>

                  <span class="by-author">PepeSB/ Hysch</span>
                </div>
              </div>
            </v-col>

            <v-col cols="9">
              <CommonButtonSubmit
                :label="`Buy now for ${nftDetail?.currentPrice} ETH`"
                color="secondary"
                full-width
                @click="handleBuyNow(nftDetail?.id)"
              />
            </v-col>

            <v-col cols="3">
              <CommonButtonSubmit
                label="+" color="secondary"
                sub-icon="common-shopping-cart-light"
                :icon-size="20"
                full-width
                @click="handleAddToCart(nftDetail?.id)"
              />
            </v-col>

            <v-col cols="12">
              <CommonButton label="Place a bid" button-style="outline" full-width />
            </v-col>
          </v-row>
        </div>

        <div class="price-history mt-3">
          <div class="title-chart">
            <IconNFTChart />

            <span class="text-chart pl-2">Price History</span>
          </div>

          <div class="custom-chart">
            <apexchart width="100%" height="230" type="line" :options="options" :series="series" />
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="more-collection">
      <div class="header-more-collection">
        <div class="title-more-collection">
          <span>
            More from this collection
          </span>
        </div>

        <CommonButton border-radius="normal" button-style="outline" label="VIEW COLLECTION" />
      </div>
    </div>

    <CommonPageLoading v-if="isFetching" />
  </div>
</template>

<style scoped src="@/assets/scss/pages/detailNFT.scss"></style>

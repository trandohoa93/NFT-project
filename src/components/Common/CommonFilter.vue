<script lang="ts" setup>
import { useThemeStore } from '@/stores'

const emit = defineEmits(['filter', 'minPrice', 'maxPrice'])
const themeStore = useThemeStore()

const selectedStatus = ref([])
const selectedPrice = ref({
  value: 'eth',
  text: 'ETH',
})
const minPrice = ref(null)
const maxPrice = ref(null)
const isShowFilter = ref(true)
const isShowStatus = ref(true)
const isShowPrice = ref(true)
const items = [
  {
    value: 'eth',
    text: 'ETH',
  },
]

const setOpacity = computed(() => {
  return themeStore.currentTheme === 'dark' ? 'opacity: 1' : 'opacity: 0.5'
})

watch(minPrice, () => {
  emit('minPrice', minPrice.value)
})

watch(maxPrice, () => {
  emit('maxPrice', maxPrice.value)
})

watch(selectedStatus, () => {
  emit('filter', selectedStatus.value)
})
</script>

<template>
  <div class="d-flex justify-center">
    <div class="filter">
      <div class="header-filter">
        <div class="arrow-left">
          <div v-if="isShowFilter === true" class="cursor-pointer" @click.stop="isShowFilter = !isShowFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
              viewBox="0 0 320 512"
            ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </div>
          <div v-else class="cursor-pointer" @click.stop="isShowFilter = !isShowFilter">
            <svg
              xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
              viewBox="0 0 320 512"
            ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </div>
        </div>
        <div class="font-weight-bold px-2 text-theme-dark">
          Filter
        </div>
      </div>
      <div v-show="isShowFilter" class="body-filter">
        <div class="status-filter py-3">
          <div class="header-status-filter">
            <v-row>
              <v-col>
                <div class="font-weight-bold text-theme-dark">
                  Status
                </div>
              </v-col>
              <v-col cols="auto">
                <div v-if="isShowStatus === true" class="cursor-pointer" @click.stop="isShowStatus = !isShowStatus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
                    viewBox="0 0 448 512"
                  ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                    />
                  </svg>
                </div>
                <div v-else class="cursor-pointer" @click.stop="isShowStatus = !isShowStatus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
                    viewBox="0 0 448 512"
                  ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-show="isShowStatus" class="body-status-filter">
            <div class="item-status-filter text-theme-dark">
              <v-row align="center">
                <v-col>
                  <div>
                    Has Offers
                  </div>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox-btn
                    v-model="selectedStatus"
                    class="icon"
                    false-icon="mdi:mdi-checkbox-blank-outline"
                    true-icon="mdi:mdi-checkbox-intermediate"
                    base-color="var(--color-icon-checkbox)"
                    color="var(--color-icon-checkbox)"
                    value="hasOffers"
                  />
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div>
                    New in
                  </div>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox-btn
                    v-model="selectedStatus"
                    class="icon"
                    false-icon="mdi:mdi-checkbox-blank-outline"
                    true-icon="mdi:mdi-checkbox-intermediate"
                    base-color="var(--color-icon-checkbox)"
                    color="var(--color-icon-checkbox)"
                    value="newIn"
                  />
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div>
                    Trending
                  </div>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox-btn
                    v-model="selectedStatus"
                    class="icon"
                    false-icon="mdi:mdi-checkbox-blank-outline"
                    true-icon="mdi:mdi-checkbox-intermediate"
                    base-color="var(--color-icon-checkbox)"
                    color="var(--color-icon-checkbox)"
                    value="trending"
                  />
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div>
                    Live Auction
                  </div>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox-btn
                    v-model="selectedStatus"
                    class="icon"
                    false-icon="mdi:mdi-checkbox-blank-outline"
                    true-icon="mdi:mdi-checkbox-intermediate"
                    base-color="var(--color-icon-checkbox)"
                    color="var(--color-icon-checkbox)"
                    value="liveAuction"
                  />
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
        <div class="price-status">
          <div class="header-price-filter">
            <div class="font-weight-bold text-theme-dark">
              Price
            </div>
            <div>
              <div v-if="isShowPrice === true" class="cursor-pointer" @click.stop="isShowPrice = !isShowPrice">
                <svg
                  xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
                  viewBox="0 0 448 512"
                ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                  />
                </svg>
              </div>
              <div v-else class="cursor-pointer" @click.stop="isShowPrice = !isShowPrice">
                <svg
                  xmlns="http://www.w3.org/2000/svg" class="arrow-theme-dark" style="height: 20px; width: 20px;"
                  viewBox="0 0 448 512"
                ><!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div v-show="isShowPrice" class="body-price-filter">
            <div class="type-price">
              <v-select
                v-model="selectedPrice"
                class="select-price" :items="items" item-title="text" item-value="value" variant="outlined"
                return-object single-line rounded="0"
              />
            </div>
            <div class="render-price px-1">
              <div class="min-price">
                <v-text-field v-model="minPrice" class="min" label="Min" variant="outlined" rounded="0" type="number" hide-spin-buttons />
              </div>
              <div class="px-1 custom-text text-theme-dark">
                <span>to</span>
              </div>
              <div class="max-price">
                <v-text-field v-model="maxPrice" class="max" label="Max" variant="outlined" rounded="0" type="number" hide-spin-buttons />
              </div>
            </div>
          </div>
          <div v-show="isShowPrice" :style="setOpacity" class="button-apply">
            <v-btn>Apply</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonFilter.scss">

</style>

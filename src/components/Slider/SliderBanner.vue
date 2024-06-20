<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import type { PropType } from 'vue'
import type { SliderBannerProp } from '@/types'
import EthIcon from '@/assets/images/ethSlide.png'

const props = defineProps({
  items: {
    type: Array as PropType<SliderBannerProp[]>,
    required: true,
  },
})

const modules = [Autoplay, Navigation]

const navigationOptions = {
  prevEl: '.buttonPrevBanner',
  nextEl: '.buttonNextBanner',
}
</script>

<template>
  <div class="slider-banner">
    <div class="swiper-container">
      <Swiper
        :centered-slides="true"
        :space-between="24"
        :navigation="navigationOptions"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          375: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 1.33,
            spaceBetween: 24,
          },
        }"

        class="mySwiper"
      >
        <SwiperSlide v-for="(item, index) in props.items" :key="index" class="swiper-slide">
          <v-card
            class="card-container"
            :image="item.cover_img_url"
          >
            <div class="card-content">
              <v-card-title class="card-title">
                {{ item.name }}
              </v-card-title>
              <v-card-text class="card-subtitle">
                <div class="card-subtitle-left">
                  <div class="card-price">
                    Floor Price:
                    <div class="card-value-price">
                      <img :src="EthIcon" alt="ETH icon">
                      <p class="price-text">
                        {{ item.price }} ETH
                      </p>
                    </div>
                  </div>
                  <div class="card-volume">
                    Volume:
                    <div class="card-value-volume">
                      <img :src="EthIcon" alt="ETH icon">
                      <p class="volume-text">
                        {{ item.price }} ETH
                      </p>
                    </div>
                  </div>
                </div>
                <router-link :to="`marketplace/collection/${item.id}`">
                  <v-btn rounded="xl" class="card-button">
                    <p class="card-text-button">
                      View Collection
                    </p>
                  </v-btn>
                </router-link>
              </v-card-text>
            </div>
          </v-card>
        </SwiperSlide>
      </Swiper>
      <button class="buttonPrevBanner button-prev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="icon" />
      </button>
      <button class="buttonNextBanner button-next">
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/slider/sliderBanner.scss">
</style>

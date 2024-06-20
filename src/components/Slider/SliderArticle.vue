<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import type { PropType } from 'vue'
import type { SliderArticleProp } from '@/types'

const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<SliderArticleProp[]>,
  },
})

const modules = [Autoplay, Scrollbar, Navigation]

const navigationOptions = {
  prevEl: '.buttonPrevArticles',
  nextEl: '.buttonNextArticles',
}

const scrollbarOptions = {
  el: '.scrollbar',
  hide: true,
  draggable: true,
}
</script>

<template>
  <div class="slider-article">
    <div class="swiper-container">
      <Swiper
        :scrollbar="scrollbarOptions"
        :centered-slides="true"
        :space-between="24"
        :navigation="navigationOptions"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          375: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(item, index) in props.items" :key="index" class="swiper-slide">
          <v-card
            class="card-container"
            variant="text"
          >
            <v-img
              class="card-img"
              :src="item.imageUrl"
              cover
            />
            <div class="card-content">
              <v-card-title class="card-title">
                <div class="text-title">
                  {{ item.title }}
                </div>
              </v-card-title>
              <v-card-subtitle class="card-subtitle">
                <div class="sub-title">
                  {{ item.date }}
                </div>
              </v-card-subtitle>
            </div>
          </v-card>
        </SwiperSlide>
      </Swiper>
      <button class="buttonPrevArticles button-prev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="icon" />
      </button>
      <button class="buttonNextArticles button-next">
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />
      </button>
      <div class="scrollbar-container">
        <div class="scrollbar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/slider/sliderArticle.scss">
</style>

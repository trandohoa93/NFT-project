<script setup lang="ts">
import { SLIDER_ARTICLE_DUMMY_DATA } from '@/constant/constants.ts'
</script>

<template>
  <div class="theme-switch-wrapper">
    <div class="home-articles">
      <div class="title-container">
        <div class="text-title">
          Notable articles
        </div>
        <v-btn rounded="0" class="button-title" height="50px" :flat="true">
          View all
        </v-btn>
      </div>
      <SliderArticle :items="SLIDER_ARTICLE_DUMMY_DATA" />
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseHome/baseHomeArticles.scss"></style>

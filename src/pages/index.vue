<script setup lang="ts">
import { COLLECTIONS } from '@/constant/constants'
</script>

<template>
  <div>
    <BaseHomeBanner />
    <BaseHomeTopCollection :items="COLLECTIONS" />
    <BaseHomeTopSeller />
    <BaseHomeCreateSell />
    <BaseHomeChooseUs />
    <BaseHomeArticles />
    <BaseHomeCommunity />
  </div>
</template>

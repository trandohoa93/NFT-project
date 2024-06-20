<script setup lang="ts">
import { POLICY_TERM } from '@/constant/constants'
</script>

<template>
  <div class="base-term-service-wrapper">
    <div v-for="term in POLICY_TERM" :key="term.id" class="term">
      <h2 class="term-title">
        {{ term.title }}
      </h2>

      <p v-for="(content, index) in term.content" :key="index" class="term-content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseTerm/baseTerm.scss">

</style>

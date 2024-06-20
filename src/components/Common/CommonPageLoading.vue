<script lang="ts" setup>
defineProps({
  size: {
    type: Number,
    default: 500,
  },
})
</script>

<template>
  <div class="common-page-loading-wrapper">
    <v-progress-circular
      model-value="50"
      :size="size"
      :width="12"
      indeterminate
      color="var(--color-orange-1)"
      class="common-page-loading"
    />
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonPageLoading.scss">

</style>

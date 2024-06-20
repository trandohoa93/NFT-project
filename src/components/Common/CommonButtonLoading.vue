<script setup lang="ts">
const props = defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['handleSubmit'])

const isBtnFullWidth = computed(() => {
  return props.fullWidth ? 'full-width' : ''
})
</script>

<template>
  <div class="common-submit-button-wrapper">
    <button class="submit-button" :class="isBtnFullWidth" @click="emit('handleSubmit')">
      <v-progress-circular
        color="var(--color-white-1)"
        model-value="50"
        indeterminate
        size="20"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonButtonLoading.scss">

</style>

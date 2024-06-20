<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Label',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  preIcon: {
    type: String,
  },
  subIcon: {
    type: String,
  },
  iconSize: {
    type: Number,
    default: 27,
  },
  position: {
    type: String,
    default: 'left',
  },
  color: {
    type: String,
    default: 'primary',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['handleSubmit'])

const buttonPosition = computed(() => {
  return props.position === 'left' ? '' : 'margin: 0 auto'
})

const isBtnFullWidth = computed(() => {
  return props.fullWidth ? 'full-width' : ''
})

const btnColor = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'var(--color-mix-1)'
    case 'secondary':
      return 'var(--color-button-buy)'
    default:
      return 'var(--color-mix-1)'
  }
})
</script>

<template>
  <div class="common-submit-button-wrapper" :style="buttonPosition">
    <v-btn
      class="submit-button "
      :class="isBtnFullWidth"
      :style="`background: ${btnColor}`"
      @click="emit('handleSubmit')"
      :disabled="isDisabled"
    >
      <img
        v-if="props.preIcon"
        :src="`/images/${props.subIcon}.png`"
        alt="Input Icon" class="text-field-image"
        :width="`${props.iconSize}px`"
      >

      {{ props.label }}

      <img
        v-if="props.subIcon"
        :src="`/images/${props.subIcon}.png`"
        alt="Input Icon" class="text-field-image"
        :width="`${props.iconSize}px`"
      >
    </v-btn>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonButtonSubmit.scss">

</style>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'tl',
  },
  size: {
    type: Number,
    default: 800,
  },
  opacity: {
    type: Number,
    default: 0.35,
  },
})

const positionStyles = computed(() => {
  switch (props.position) {
    case 'tl':
      return {
        top: '-500px',
        left: '-350px',
      }
    case 'ct':
      return {
        right: '70px',
        top: '100px'
      }
    case 'cr':
      return {
        right: '-550px',
        bottom: '-100px',
      }
    case 'br':
      return {
        right: '-200px',
        bottom: '-600px',
      }
    case 'c':
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    default:
      return {
        top: '0px',
        left: '0px',
      }
  }
})
</script>

<template>
  <div
    class="common-background-circular"
    :style="{
      opacity: props.opacity,
      width: `${props.size}px`,
      height: `${props.size}px`,
      ...positionStyles,
    }"
  />
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonCircleBackground.scss"></style>

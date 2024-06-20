<script setup lang="ts">
const props = defineProps({
  colorPrimary: {
    type: String,
    default: '#F83600',
  },
  colorSecondary: {
    type: String,
    default: '#FE8C00',
  },
  size: {
    type: String,
    default: '22'
  },
})
</script>

<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.1 0.5H6.9C5.6 0.5 4.5 1.6 4.5 2.9V4.5H2.9C1.6 4.5 0.5 5.6 0.5 6.9V19.1C0.5 20.4 1.6 21.5 2.9 21.5H15.1C16.4 21.5 17.5 20.4 17.5 19.1V17.5H19.1C20.4 17.5 21.5 16.4 21.5 15.1V2.9C21.5 1.6 20.4 0.5 19.1 0.5ZM15.5 19.1C15.5 19.3 15.3 19.5 15.1 19.5H2.9C2.7 19.5 2.5 19.3 2.5 19.1V6.9C2.5 6.7 2.7 6.5 2.9 6.5H15.1C15.3 6.5 15.5 6.7 15.5 6.9V19.1ZM19.5 15.1C19.5 15.3 19.3 15.5 19.1 15.5H17.5V6.9C17.5 5.6 16.4 4.5 15.1 4.5H6.5V2.9C6.5 2.7 6.7 2.5 6.9 2.5H19.1C19.3 2.5 19.5 2.7 19.5 2.9V15.1Z" fill="url(#paint0_linear_4773_232223)" />
    <defs>
      <linearGradient id="paint0_linear_4773_232223" x1="0.5" y1="0.5" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop :stop-color="props.colorSecondary" />
        <stop offset="1" :stop-color="props.colorPrimary" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style lang="scss" scoped>

</style>

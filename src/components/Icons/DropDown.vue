<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg width="18" height="10" viewBox="0 0 18 10" :fill="props.color" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L9 8L16 2" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

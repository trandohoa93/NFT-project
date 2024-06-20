<script setup lang="ts">
const props = defineProps({
    isIncluded: {
        type: Boolean,
        default: false
    }
})

const checkBenefit = computed(() => {
    return props.isIncluded ? 'var(--color-green-2)' : 'var(--color-gray-8)'
})
</script>

<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4773_230625)">
      <path d="M17.3506 2.53906L7.16034 11.9926L2.8508 7.39365L0 10.065L6.96228 17.495L20 5.41092L17.3506 2.53906Z" :fill="checkBenefit" />
    </g>
    
    <defs>
      <clipPath id="clip0_4773_230625">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts" setup>
import type { SearchProp } from '@/types'

defineProps<SearchProp>()

const emit = defineEmits(['input'])

const inputValue = ref('')

function updateValue() {
  emit('input', inputValue.value)
}
</script>

<template>
  <v-text-field
    v-model="inputValue"
    class="search"
    :label="label"
    single-line
    color="#E2E5E8"
    variant="outlined"
    rounded="0"
    @keydown.enter="updateValue"
  >
    <template #prepend-inner>
      <img src="@/assets/images/basemarketplace-search.svg" alt="">
    </template>
  </v-text-field>
</template>

<style scoped src="@/assets/scss/components/common/commonSearch.scss"></style>

<script setup lang="ts">
import { useField } from 'vee-validate'
import type { SelectItemProp } from '@/types'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  title: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String
  },
  preIcon: {
    type: String,
  },
  subIcon: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  items: {
    type: Array as () => SelectItemProp[],
    default: () => [],
  },
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <div class="common-dropdown-group">
    <p v-if="props.title" class="dropdown-title">
      {{ props.title }}
    </p>

    <v-select 
      v-model="value"
      :label="props.label"
      :placeholder="props.placeholder"
      class="dropdown"
      :error-messages="errorMessage"
      hide-details
      :class="{ 'border-red': errorMessage }"
    >
      <template #prepend-inner>
        <img v-if="props.preIcon" :src="`/src/assets/images/${props.preIcon}.png`" alt="Input Icon" class="dropdown-image mx-3" width="27">
      </template>

      <template #append-inner>
        <img v-if="props.subIcon" :src="`/src/assets/images/${props.subIcon}.png`" alt="Input Icon" class="dropdown-image mx-3" width="27">
      </template>
    </v-select>

    <p class="dropdown-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonDropdown.scss">

</style>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useField } from 'vee-validate'
import type { SelectItemProp } from '@/types'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => SelectItemProp[],
    default: () => [],
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
const { value, errorMessage } = useField<string>(() => props.name)

const emit = defineEmits(['update:modelValue', 'change'])

function handleChange(selectedValue: string) {
  if (!selectedValue) return
  emit('update:modelValue', selectedValue)
  emit('change', selectedValue)
}
</script>

<template>
  <div class="common-select">
    <p v-if="props.title" class="select-title">
      {{ props.title }} 
      <span v-if="props.required" class="required">*</span>
    </p>

    <v-select
      v-model="value"
      class="select-input"
      :items="items"
      item-title="name"
      item-value="value"
      :label="props.label"
      variant="outlined"
      :placeholder="props.placeholder"
      hide-details
      menu-icon=""
      rounded="0"
      :menu-props="{ contentClass: 'menu' }"
      :error-messages="errorMessage"
      flat
      bg-color="var(--color-text-area)"
      @change="handleChange"
    >
      <template #append-inner>
        <DropDown color="var(--color-icon-dropdown)" />
      </template>
    </v-select>

    <p class="select-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonSelect.scss"></style>

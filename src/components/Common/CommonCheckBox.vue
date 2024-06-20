<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Label',
  },
  checkedValue: {
    type: String,
    default: 'false',
  },
  position: {
    type: String,
    default: 'left',
  },

})

const labelPosition = computed(() => {
  return props.position === 'left' ? '' : 'margin: 0 auto'
})

const { handleChange, checked, errorMessage } = useField(() => props.name, undefined, {
  type: 'checkbox',
  checkedValue: props.checkedValue,
})
</script>

<template>
  <div class="common-checkbox-wrapper" :style="labelPosition">
    <label class="common-checkbox-group">
      <input
        id="checkbox"
        type="checkbox"
        class="checkbox"
        :value="checkedValue"
        :checked="checked"
        @change="handleChange"
      >
      <span class="checkbox-container" />

      <span for="checkbox" class="checkbox-label">{{ label }}</span>
    </label>

    <p v-if="errorMessage" class="checkbox-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonCheckBox.scss">

</style>

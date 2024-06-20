<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  title: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  height: {
    type: Number,
    default: 1,
  },
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <div class="common-textarea-group">
    <p v-if="props.title" class="textarea-title">
      {{ props.title }}
    </p>

    <v-textarea
      v-model="value"
      :label="props.label"
      :placeholder="props.placeholder"
      class="textarea"
      :error-messages="errorMessage"
      hide-details
      :rows="props.height"
      no-resize
      row-height="45"
      bg-color="var(--color-text-area)"
      flat
      rounded="0"
      variant="solo"
    />

    <p class="textarea-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonTextarea.scss">

</style>

<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Date',
  },
  errorMessage: {
    type: String,
  },
})

const { value, errorMessage } = useField(() => props.name)

</script>

<template>
  <div class="common-date-input-wrapper">
    <p class="date-input-title">
      {{ props.title }}
    </p>

    <div class="date-input-group">
      <v-date-input
        v-model="value"
        :name="props.name"
        prepend-icon=""
        variant="solo"
        hide-details
        class="date-input"
        :error-messages="errorMessage"
        autocomplete="off"
        bg-color="var(--color-text-area)"
      />
      <IconCallendar class="date-icon" />
    </div>

    <p class="date-input-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonDateInput.scss">

</style>

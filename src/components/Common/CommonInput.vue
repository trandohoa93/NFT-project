<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  preIcon: {
    type: String,
  },
  subIcon: {
    type: String,
  },
})

const { value } = useField(() => props.name)
</script>

<template>
  <div class="common-input-group">
    <img v-if="props.preIcon" :ref="`src/assets/images/${props.preIcon}`" alt="Input icon" class="common-input-icon">

    <input
      :id="props.id"
      v-model="value"
      :type="props.type"
      :name="props.name"
      class="common-input"
    >
  </div>

  <img  v-if="props.preIcon" :ref="`src/assets/images/${props.subIcon}`" alt="Input icon" class="common-input-icon">
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonInput.scss">

</style>

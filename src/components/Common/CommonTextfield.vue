<script setup lang="ts">
import { useField } from 'vee-validate'

type InputType = 'text' | 'email' | 'password' | undefined
type ImgType = 'png' | 'svg'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String as () => InputType,
    default: 'text',
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
  preIcon: {
    type: String,
  },
  subIcon: {
    type: String,
  },
  typePreIcon: {
    type: String as () => ImgType,
    default: 'png',
  },
  typeSubIcon: {
    type: String as () => ImgType,
    default: 'png',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['changeTypePassword'])

const { value, errorMessage } = useField(() => props.name)

function emitPasswordVisibility() {
  emit('changeTypePassword')
}
</script>

<template>
  <div class="common-text-field-group">
    <p v-if="props.title" class="text-field-title">
      {{ props.title }} <span v-if="props.required" class="text-field-required">*</span>
    </p>

    <v-text-field
      v-model="value"
      :type="props.type"
      :placeholder="props.placeholder"
      class="text-field"
      :error-messages="errorMessage"
      hide-details
      :class="{ 'border-red': errorMessage }"
      variant="outlined"
      rounded="0"
      bg-color="var(--color-text-area)"
      color="red"
    >
      <template #prepend-inner>
        <img v-if="props.preIcon" :src="`/images/${props.preIcon}.${props.typePreIcon}`" alt="Input Icon" class="text-field-image mx-3" width="27">
      </template>

      <template #append-inner>
        <button v-if="props.subIcon" class="text-field-button" @click="emitPasswordVisibility">
          <img :src="`/images/${props.subIcon}.${props.typeSubIcon}`" alt="Input Icon" class="text-field-image mx-3" width="27">
        </button>
      </template>
    </v-text-field>

    <p class="text-field-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonTextfield.scss">

</style>

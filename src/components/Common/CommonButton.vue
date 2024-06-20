<script setup lang="ts">
type BtnStyle = "outline" | "primary"

const props = defineProps({
  label: {
    type: String,
    default: 'Label',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  subIcon: {
    type: String,
  },
  iconSize: {
    type: Number,
    default: 27,
  },
  buttonStyle: {
    type: String as () => BtnStyle,
    default: "primary",
  },
  borderRadius: {
    type: String,
    default: "rounded-pill",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'left',
  },
})

const emit = defineEmits(['handleSubmit'])

const buttonPosition = computed(() => {
  return props.position === 'left' ? '' : 'margin: 0 auto'
})

const isBtnFullWidth = computed(() => {
  return props.fullWidth ? 'full-width' : ''
})

const buttonStyle = computed(() => {
    switch (props.buttonStyle) {
        case 'primary':
            return 'btn-primary';
        case 'outline':
            return 'btn-outline';
        default:
            return 'btn-primary';
    }
})

const buttonRadius = computed(() => {
    switch (props.borderRadius) {
      case 'rounded-pill':
        return '90px';
      case 'normal':
        return '0px';
      default:
        return '90px';
    }
})
</script>

<template>
  <div class="common-button-wrapper" :style="buttonPosition">
    <v-btn
      class="button"
      :class="[isBtnFullWidth, buttonStyle] "
      @click="emit('handleSubmit')"
      :style="{
        borderRadius: buttonRadius,
      }"
      :disabled="isDisabled"
    >
      <img
        v-if="props.subIcon"
        :src="`/src/assets/images/${props.subIcon}.png`"
        alt="Input Icon"
        class="text-field-image"
        :width="`${props.iconSize}px`"
      >
      {{ props.label }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonButton.scss">

</style>

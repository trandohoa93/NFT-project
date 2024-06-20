<script setup lang="ts">

const props = defineProps({
  id: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    required: true,
  },

  required: {
    type: Boolean,
    default: false,
  },

  size: {
    type: Number,
    default: 150,
  },

  errorMessage: {
    type: String,
    default: '',
  },
  
  label: {
    type: String,
    default: 'Logo image',
  },

})

const emit = defineEmits(['upload'])

function handleFileChange(event: Event) {
  emit('upload', event)
}

const fileInputRef = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  fileInputRef.value?.click()
}
</script>

<template>
  <div class="common-upload-file-wrapper">
    <CommonCircleBackground position="br" />

    <p v-if="props.label" class="upload-title">
      {{ props.label }}
      <span v-if="props.required" class="upload-required">*</span>
    </p>

    <div class="upload-image-wrapper">
      <label :htmlFor="props.id">
        <button class="upload-btn" @click.prevent="triggerFileInput">
          <font-awesome-icon :icon="['fas', 'plus']" class="upload-icon" />
        </button>

        <input
          :id="props.id"
          ref="fileInputRef"
          :name="props.name"
          hidden
          accept="image/*"
          type="file"
          @change="handleFileChange"
        >
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonUploadFile.scss">

</style>

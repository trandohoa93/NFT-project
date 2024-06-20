<script setup lang="ts">
import { useUploadImage } from '@/utils/useUploadImage'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  modelValue: {
    type: File || String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const fileInputRef = ref<HTMLInputElement | null>(null)

const { previewUrl, onFileChange, removeImage } = useUploadImage(emit)

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal)
      previewUrl.value = null
  },
)

function triggerFileInput() {
  fileInputRef.value?.click()
}

</script>

<template>
  <div class="nft-upload-wrapper">
    <CommonCircleBackground position="br" />

    <IconUploadNFT />

    <h2 class="nft-upload-title">
      Drag and drop your file
    </h2>

    <p class="nft-upload-subtitle">
      PNG, JPG, GIF, WEBP, MP4 or MP3. Max 100mb.
    </p>

    <p class="nft-upload-description">
      or choose a file
    </p>

    <v-btn class="nft-upload-btn" @click.prevent="triggerFileInput">
      Upload files
    </v-btn>

    <input
      :id="props.id"
      ref="fileInputRef"
      :name="props.name"
      type="file"
      hidden
      accept="image/*"
      @change="onFileChange"
    >

    <v-btn v-if="previewUrl" icon="mdiCloseCircleOutline" class="nft-image-remove" @click="removeImage">
      <font-awesome-icon :icon="['far', 'circle-xmark']" style="color: var(--color-orange-1); font-size: 50px;" />
    </v-btn>

    <img v-if="previewUrl" class="nft-image-preview" :src="previewUrl" alt="Image preview">
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/base/baseCreateProduct/baseCreateNFTUpload.scss">

</style>

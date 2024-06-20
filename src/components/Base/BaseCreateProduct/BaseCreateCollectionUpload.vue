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
  modelValue: {
    type: File || String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const { previewUrl, onFileChange, removeImage } = useUploadImage(emit)

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal)
      previewUrl.value = null
  },
)
</script>

<template>
  <div class="upload-image-wrapper">
    <CommonUploadFile
      required
      :name="props.name"
      @upload="onFileChange"
    />
    
    <v-btn v-if="previewUrl" icon="mdiCloseCircleOutline" class="image-remove" @click="removeImage">
        <font-awesome-icon :icon="['far', 'circle-xmark']" class="upload-delete-icon" style="color: var(--color-orange-1); font-size: 50px;" />
      </v-btn>

      <div class="upload-error-message">
        {{ props.errorMessage }}
      </div>

      <img v-if="previewUrl" class="image-preview" :src="previewUrl" alt="Image preview">
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseCreateProduct/baseCreateCollectionUpload.scss">

</style>

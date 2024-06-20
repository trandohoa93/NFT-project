<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import { storeToRefs } from 'pinia'

import { useCollectionsStore } from '@/stores'
import type {  CollectionType } from '@/types'
import { collectionSchema } from '@/utils/validator'
import { useUploadImage } from '@/utils/useUploadImage'

const emit = defineEmits(['update:modelValue'])
const store = useCollectionsStore()
const { createCollectionAction, fetchCollections } = store
const { allItems } = storeToRefs(store)

const { handleSubmit, resetForm, setFieldValue } = useForm<CollectionType>({
  initialValues: {
    name: '',
    url: '',
    categoryName: '',
    price: null,
    startingDate: null,
    expirationDate: null,
    description: '',
    isExplicitAndSensitive: 0,
    logoImgUrl: null,
    featureImgUrl: null,
    coverImgUrl: null,
  },

  validationSchema: toTypedSchema(collectionSchema),
})

const { removeImage } = useUploadImage(emit)

const handleCreateCollection = handleSubmit(async (values) => {
  try {
    await createCollectionAction(values)

    if (store.isSuccess) {
      toast.success('Create collection success!')
      resetForm()
      removeImage()
    }
  }
  catch (error) {
    if (store.errorMessage)
      toast.error(store.errorMessage)
    console.error(error)
  }
})

onMounted(async () => {
  await fetchCollections()
})

const categoryNames = computed(() => {
  return allItems.value.map((category: CollectionType) => ({
    name: category.categoryName,
    value: category.categoryName,
  }))
})
</script>

<template>
  <div class="base-create-collection-wrapper">
    <form class="base-create-collection-form" @submit.prevent="handleCreateCollection">
      <div class="collection-form-input global-container">
        <div class="collection-upload-wrapper">
          <CommonCircleBackground position="br" />

          <h2 class="collection-upload-title">
            Drag and drop your file
            
          </h2>

          <p class="collection-upload-subtitle">
            PNG, JPG, GIF, WEBP, MP4 or MP3. Max 100mb.
          </p>

          <div class="collection-upload-group">
            <div class="group-top">
              <BaseCreateCollectionUpload
                name="logoImgUrl"
                label="Logo image"
                @update:model-value="(file: File) => setFieldValue('logoImgUrl', file)"
              />

              <BaseCreateCollectionUpload
                name="coverImgUrl"
                label="Cover image"
                @update:model-value="(file: File) => setFieldValue('coverImgUrl', file)"
              />
            </div>

            <div class="group-bottom">
              <BaseCreateCollectionUpload
                name="featureImgUrl"
                label="Feature image"
                @update:model-value="(file: File) => setFieldValue('featureImgUrl', file)"
              />
            </div>
          </div>
        </div>

        <div class="collection-create-form">
          <CommonTextfield name="name" title="Name Collection" placeholder="e.g. ‘nft design art’" />

          <CommonTextfield title="URL" name="url" />

          <div class="form-group">
            <CommonSelect name="categoryName" title="Choose Category" placeholder="Art" :items="categoryNames" />

            <CommonTextfield name="price" title="Price" placeholder="Enter price for one item (ETH)" />
          </div>

          <div class="form-group">
            <CommonDateInput title="Start Date" name="startingDate" />

            <CommonDateInput title="End Date" name="expirationDate" />
          </div>

          <CommonTextArea title="Description" name="description" placeholder="e.g. ‘This is very limited item’" :height="2" />
          <div class="collection-create-fee">
            <p>
              You will receive : <span class="collection-create-fee-propotion">22.425 ETH - $41,637.78</span>
            </p>

            <CommonCheckBox label="Is explicit & sensitive content" check-value="0" />
          </div>
        </div>
      </div>
    </form>

    <div class="collection-form-buttons global-container">
      <CommonButton label="Cancel" button-style="outline" @click="resetForm" />

      <CommonButtonSubmit label="Create item" button-style="primary" class="ml-auto" @click="handleCreateCollection" />
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseCreateProduct/baseCreateCollection.scss"></style>

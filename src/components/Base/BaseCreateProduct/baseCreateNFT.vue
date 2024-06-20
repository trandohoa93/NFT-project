<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'

import { storeToRefs } from 'pinia'
import { nftSchema } from '@/utils/validator'
import type { Nft } from '@/types'
import { useCollectionsStore, useNftStore } from '@/stores'
import CommonCardProduct from '@/components/Common/CommonCardProduct.vue'

const dialog = ref(false)
const previewValue = ref<Nft>()

const nftStore = useNftStore()
const collectionStore = useCollectionsStore()
const { fetchCollections } = collectionStore

const { createNFTAction } = nftStore
const { allItems } = storeToRefs(collectionStore)

const { handleSubmit, resetForm, setFieldValue } = useForm<Nft>({
  initialValues: {
    title: '',
    imgUrl: '',
    currentPrice: null,
    startingDate: null,
    expirationDate: null,
    description: '',
    collectionId: null,
  },

  validationSchema: toTypedSchema(nftSchema),
})

const handleCreateNft = handleSubmit(async (values) => {
  try {
    await createNFTAction(values)

    if (nftStore.isSuccess) {
      previewValue.value = values
      toast.success('Create NFT success!')
      resetForm()
    }
  }
  catch (error) {
    if (nftStore.errorMessage)
      toast.error(nftStore.errorMessage)

    console.error(error)
  }
})

onMounted(async () => {
  await fetchCollections()
})

const collectionNames = computed(() => {
  return allItems.value.map(collection => ({
    name: collection.name,
    value: collection.id,
  }))
})
</script>

<template>
  <div class="base-create-nft-wrapper">
    <form class="base-create-nft-form" @submit.prevent="handleCreateNft">
      <div class="nft-form-input global-container">
        <BaseCreateNFTUpload
          id="image"
          name="imgUrl"
          @update:model-value="(file: File) => setFieldValue('imgUrl', file)"
        />

        <div class="nft-create-form">
          <CommonTextfield
            title="Title"
            placeholder="e.g. ‘nft design art’"
            name="title"
          />

          <CommonTextfield
            title="Price"
            placeholder="Enter price for one item (ETH)"
            name="currentPrice"
          />

          <CommonSelect
            title="Choose Collection"
            name="collectionId"
            placeholder="First Name Collection"
            :items="collectionNames"
          />

          <div class="nft-create-form-date">
            <CommonDateInput
              title="Start Date"
              name="startingDate"
            />

            <CommonDateInput
              title="End Date"
              name="expirationDate"
            />
          </div>

          <CommonTextArea
            title="Description"
            name="description"
            placeholder="e.g. ‘This is very limited item’"
            :height="2"
          />

          <div class="nft-create-fee">
            <p>
              Service fee :
              <span class="nft-create-fee-propotion">2.5%</span>
            </p>

            <p>
              You will receive : <span class="nft-create-fee-propotion">22.425 ETH  -  $41,637.78</span>
            </p>
          </div>
        </div>
      </div>
    </form>

    <div class="nft-form-buttons global-container">
      <CommonButton label="Cancel" button-style="outline" @click="resetForm" />

      <CommonButton label="Preview" @click="dialog = true" />

      <CommonButtonSubmit label="Create item" button-style="primary" class="ml-auto" @click="handleCreateNft" />
    </div>

    <v-dialog
      v-model="dialog"
      width="auto"
      class="nft-dialog"
    >
      <CommonCardProduct />
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseCreateProduct/baseCreateNFT.scss">

</style>

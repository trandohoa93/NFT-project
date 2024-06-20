<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { toTypedSchema } from '@vee-validate/yup'
import { toast } from 'vue3-toastify'
import { useForm } from 'vee-validate'

import { AxiosError } from 'axios'
import type { ContactForm } from '@/types'
import { contactSchema } from '@/utils/validator'
import { newContact } from '@/api/contact'
import { useCollectionsStore } from '@/stores'

const collectionStore = useCollectionsStore()
const { fetchCollections } = collectionStore

const { allItems } = storeToRefs(collectionStore)
const isFetching = ref(false)

const { values, handleSubmit } = useForm<ContactForm>({
  initialValues: {
    name: '',
    email: '',
    phone: null,
    category: '',
    title: '',
    message: '',
    agreeTerms: false,
  },

  validationSchema: toTypedSchema(contactSchema),
})

const onSubmit = handleSubmit(async (data) => {
  isFetching.value = true

  try {
    const res = await newContact(data)

    if (res.data.success)
      toast.success('Your request has been sent successfully. We will contact you soon.')
  }
  catch (error: unknown) {
    if (error instanceof AxiosError && error.response && error.response.status === 401)
      toast.error('Please login first!')
    else
      toast.error('Something went wrong! Please try again!')
  }
  finally {
    isFetching.value = false
  }
})

onMounted(async () => {
  await fetchCollections()
})

const collectionNames = computed(() => {
  return allItems.value.map(collection => ({
    name: collection.name,
    value: collection.name,
  }))
})
</script>

<template>
  <div class="contact-page-wrapper global-container">
    <h2 class="contact-title">
      get in touch with us
    </h2>

    <p class="contact-desc">
      We will contact again after receive your request in 24h
    </p>

    <div class="contact-details">
      <div class="contact-connect">
        <img src="/images/common-email.svg" alt="NFT Footer Icon" class="contact-media-icon">

        <span class="contact-desc">contact@example.com</span>
      </div>

      <div class="contact-connect">
        <img src="/images/common-location.svg" alt="NFT Footer Icon" class="contact-media-icon">

        <span class="contact-desc">200 North Spring Street, Room 101Los Angeles, CA 90012</span>
      </div>

      <div class="contact-connect">
        <img src="/images/common-phone.svg" alt="NFT Footer Icon" class="contact-media-icon">

        <span class="contact-desc">Customer Service 24/7:  (844) 663-4411</span>
      </div>
    </div>

    <form class="contact-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <CommonTextfield
          placeholder="Name"
          name="name"
        />

        <CommonTextfield
          placeholder="Email"
          name="email"
        />
      </div>

      <div class="form-group">
        <CommonTextfield
          placeholder="Number"
          name="phone"
        />

        <CommonSelect
          name="category"
          placeholder="Choose Category"
          :items="collectionNames"
        />
      </div>

      <CommonTextfield
        placeholder="Title"
        name="title"
      />

      <CommonTextArea
        placeholder="Message..."
        :height="3"
        name="message"
      />

      <CommonCheckBox
        v-model="values.agreeTerms"
        position="center"
        label="By submitting, i'm agree to the Terms & Conditions"
        checked-value="true"
        name="agreeTerms"
      />

      <CommonButtonLoading v-if="isFetching" label="Waiting" class="form-button-loading" />

      <CommonButtonSubmit v-else label="Send your request" position="center" class="contact-button mt-5" @click="onSubmit" />
    </form>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/contact.scss">

</style>

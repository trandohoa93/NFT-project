<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import { emailSchema } from '@/utils/validator'
import { forgotPassword } from '@/api/auth'
import router from '@/router';

const isLoading = ref(false)

const { handleSubmit } = useForm({
  initialValues: {
    email: '',
  },

  validationSchema: emailSchema,
})

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  const res = await forgotPassword(values.email)

  try {
    if (res.data.success) {
       toast.success('Email sent successfully! Please check your email.')

       setTimeout(() => {
         router.push('/auth/login')
       }, 3000)
    }
     
  }
  catch (error) {
    toast.error('Something went wrong!')
  }
  finally {
    isLoading.value = false
  }
})

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault()
    onSubmit()
  }
}
</script>

<template>
  <div class="form-forgot-wrapper">
    <form class="form-wrapper" @submit="onSubmit" @keydown="handleKeyDown">
      <h1 class="form-forgot-title">
        FORGOT PASSWORD
      </h1>

      <div class="form-forgot-content">
        <CommonTextfield
          name="email"
          pre-icon="common-user"
          placeholder="Email"
        />
      </div>

      <CommonButtonLoading v-if="isLoading" full-width />

      <CommonButtonSubmit v-else label="Send" full-width @click="onSubmit" />
    </form>

    <router-link to="/auth/login" class="form-link">
      < Back to Login
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/form/formForgotPassword.scss">

</style>

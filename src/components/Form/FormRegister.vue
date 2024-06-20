<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import type { RegisterForm } from '@/types'
import { registerSchema } from '@/utils/validator'
import { useAuthStore } from '@/stores'
import router from '@/router'

const authStore = useAuthStore()
const { registerAction } = useAuthStore()

const isPasswordVisible = ref(false)

function handleChangePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

const checkPasswordVisibility = computed(() => {
  return isPasswordVisible.value ? 'text' : 'password'
})

const currentPasswordIcon = computed(() => {
  return isPasswordVisible.value ? 'common-eye-slash' : 'common-eye'
})

const { handleSubmit } = useForm<RegisterForm>({
  initialValues: {
    email: '',
    password: '',
    confirmPassword: '',
  },

  validationSchema: registerSchema,
})

const onSubmit = handleSubmit(async (values) => {
  await registerAction(values)

  if (authStore.isRegisterSuccess) {
    toast.success('Registration success! Please verify your email....')

    setTimeout(() => {
      router.push('/auth/login')
    }, 3000)
  }
  else {
    toast.error(`${authStore.errorMessage}`, {
      autoClose: 2000,
    })
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
  <div class="form-register-wrapper">
    <form class="form-wrapper" @submit="onSubmit" @keydown="handleKeyDown">
      <h1 class="form-register-title">
        REGISTER
      </h1>

      <div class="form-register-content">
        <CommonTextfield
          name="email"
          type="text"
          pre-icon="common-user"
          placeholder="Email"
        />

        <CommonTextfield
          name="password"
          :type="checkPasswordVisibility"
          placeholder="Password"
          pre-icon="common-lock"
          :sub-icon="currentPasswordIcon"
          type-sub-icon="svg"
          @change-type-password="handleChangePasswordVisibility"
        />

        <CommonTextfield
          name="confirmPassword"
          :type="checkPasswordVisibility"
          placeholder="Confirm Password"
          pre-icon="common-lock"
          :sub-icon="currentPasswordIcon"
          type-sub-icon="svg"
          @change-type-password="handleChangePasswordVisibility"
        />
      </div>

      <CommonButtonLoading v-if="authStore.isFetching" full-width/>

      <CommonButtonSubmit v-else label="Register" full-width @click="onSubmit" />
    </form>

    <router-link to="/auth/login" class="form-link">
      < Back to login
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/form/formRegister.scss">

</style>

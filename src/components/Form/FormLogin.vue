<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import { loginSchema } from '@/utils/validator'
import { useAuthStore } from '@/stores'
import type { LoginForm } from '@/types'
import router from '@/router'

const authStore = useAuthStore()
const { loginAction } = authStore
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

const { values, handleSubmit } = useForm<LoginForm>({
  initialValues: {
    email: '',
    password: '',
    rememberMe: false,
  },

  validationSchema: loginSchema,
})

const onSubmit = handleSubmit(async (data) => {
  await loginAction(data)

  if (!authStore.isAuthenticated) {
    if (authStore.errorMessage)
      toast.error(`${authStore.errorMessage}`)
  }
  else {
    toast.success('Login success!')

    setTimeout(() => {
      router.push('/')
    }, 2000)
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
  <div class="form-login-wrapper">
    <form class="form-wrapper" @submit.enter="onSubmit" @keydown="handleKeyDown">
      <h1 class="form-login-title">
        LOGIN
      </h1>

      <div class="form-login-content">
        <CommonTextfield
          name="email"
          type="text"
          pre-icon="common-user"
          placeholder="Email"
        />

        <CommonTextfield
          name="password"
          :type="checkPasswordVisibility"
          pre-icon="common-lock"
          :sub-icon="currentPasswordIcon"
          type-sub-icon="svg"
          @change-type-password="handleChangePasswordVisibility"
          placeholder="Password"
        />
      </div>

      <CommonCheckBox
        v-model="values.rememberMe"
        name="rememberMe"
        label="Remember password"
        checked-value="true"
      />

      <CommonButtonLoading v-if="authStore.isFetching" label="Waiting" full-width class="form-button-loading" />

      <CommonButtonSubmit v-else label="Login" :full-width="true" />
    </form>

    <router-link to="/auth/forgot-password" class="form-link">
      Forgot password
    </router-link>

    <router-link to="/auth/register" class="form-link">
      Register
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/form/formLogin.scss">

</style>

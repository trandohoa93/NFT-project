<script setup lang="ts">
import { useForm } from 'vee-validate'
import { changePasswordSchema } from '@/utils/validator'

import type { ChangePasswordForm } from '@/types'

const { handleSubmit } = useForm<ChangePasswordForm>({
  validationSchema: changePasswordSchema,
})

const onSubmit = handleSubmit((values) => {
  try {
    console.log({ values })
  }
  catch (error) {

  }
})
</script>

<template>
  <div class="change-password">
    <p class="change-password-title">
      Create your password
    </p>
    <p class="change-password-subtitle">
      Use the password generator to change and strengthen your passwords
      <br>
      Passwords are a critical part of information and network security.
    </p>
    <form class="form-change-password" @submit="onSubmit">
      <CommonTextfield
        title="Enter your email"
        name="email"
        type="text"
        label=""
        pre-icon=""
        placeholder="example@gmail.com"
      />
      <CommonTextfield
        title="Enter old password"
        name="oldPassword"
        type="text"
        label=""
        pre-icon=""
      />
      <CommonTextfield
        title="Create new password"
        name="newPassword"
        type="text"
        label=""
        pre-icon=""
        placeholder="House number and street name"
      />
      <CommonTextfield
        title="Confirm password"
        name="confirmPassword"
        type="text"
        label=""
        pre-icon=""
        placeholder="House number and street name"
      />
      <div class="d-flex justify-center">
        <CommonButtonSubmit label="Save" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/form/formChangePassword.scss">

</style>

<script setup lang="ts">
</script>

<template>
  <v-tooltip text="Click here to Log in" location="bottom" >
    <template #activator="{ props }">
      <div class="base-header-avatar">
        <RouterLink to="/auth/login" class="avatar-login-wrapper"  v-bind="props">
          <img src="/images/baseHeader-default-avatar.png" alt="Account Setting" class="avatar-login-icon" v-bind="props">
        </RouterLink>
      </div>
    </template>
  </v-tooltip>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHeader/baseHeaderAvatar.scss">
   
</style>

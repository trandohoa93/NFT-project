<route>
    {
      meta: {
        layout: "noFooterLayout"
      }
    }
</route>

<script setup lang="ts">
</script>

<template>
  <div class="not-found-wrapper global-container ">
    <div class="not-found-left">
      <div class="not-found-title">
        404
      </div>

      <div class="not-found-sub-title">
        OOOps!
        <br>
        Page Not Found
      </div>

      <div class="not-found-desc">
        This page doesn’t exist or was removed!
        <br>
        We suggest you back to home
      </div>

      <router-link to="/" class="not-found-link">
        <CommonButtonSubmit label="Back to Homepage" />
      </router-link>
    </div>

    <div class="not-found-right">
      <img src="/images/404-image.png" alt="404 Page" class="not-found-image">
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/notFound.scss">

</style>

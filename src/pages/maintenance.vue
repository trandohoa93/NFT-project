<route>
    {
      meta: {
        layout: "noHeaderLayout"
      }
    }
</route>

<script setup lang="ts">
</script>

<template>
  <div class="maintenance-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position='c' :opacity=".7" />

    <CommonLogo :size="120" />

    <div class="maintenance-content">
      <div class="maintenance-left">
        <p class="maintenance-desc">
          The site is
          <br>
          currently down for
        </p>

        <h2 class="maintenance-title">
          Maintenance.
        </h2>
      </div>
      <div class="maintenance-right">
        <img src="/images/maintenance-image.png" alt="NFT Maintenance Image" class="maintenance-image">
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/pages/maintenance.scss">

</style>

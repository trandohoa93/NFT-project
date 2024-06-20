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
  <div class="coming-soon-wrapper">
    <CommonCircleBackground />
    <CommonCircleBackground position="ct" :opacity=".7" />

    <CommonLogo size="120" />

    <div class="coming-soon-count-down">
      <div class="time-wrapper">
        <div class="time-number text-border">
          20
        </div>

        <span class="time-type text-border">
          d
        </span>
      </div>

      <div class="time-wrapper">
        <div class="time-number text-border">
          13
        </div>

        <span class="time-type text-border">
          h
        </span>
      </div>

      <div class="time-wrapper">
        <div class="time-number text-border">
          26
        </div>

        <span class="time-type text-border">
          m
        </span>
      </div>
    </div>

    <div class="coming-soon-title">
      We are Coming Soon...
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/comingSoon.scss">

</style>

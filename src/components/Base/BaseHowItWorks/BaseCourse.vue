<script setup lang="ts">
const props = defineProps({
  mainTheme: {
    type: String,
  },
  packType: {
    type: String,
    default: 'Basic',
  },
  packColor: {
    type: String,
  },
  cost: {
    type: Number,
    default: 59,
  },
  firstBenefit: {
    type: Boolean,
    default: false,
  },
  secondBenefit: {
    type: Boolean,
    default: false,
  },
  
})

const checkFirstBenefit = computed(() => {
  const isBenefit = props.firstBenefit

  return {
    color: isBenefit ? 'var(--color-text)' : 'var(--color-gray-8)',
    check: isBenefit ? 'true' : 'false',
  }
})

const checkSecondBenefit = computed(() => {
  const isBenefit = props.secondBenefit

  return {
    color: isBenefit ? 'var(--color-text)' : 'var(--color-gray-8)',
    check: isBenefit ? 'true' : 'false',
  }
})
</script>

<template>
  <div class="base-course-wrapper">
    <div
      class="base-course-theme" :style="{
        background: props.mainTheme,
      }"
    >
      <div class="theme-background" />
    </div>

    <div class="base-course">
      <h3 class="base-course-title">
        {{ props.packType }} Pack
      </h3>

      <div class="base-course-cost">
        <p
          :style="{
            color: props.packColor,
          }"
        >
          ${{ props.cost }}

          <span class="base-course-duration">
            / per month
          </span>
        </p>
      </div>

      <div class="base-course-benefits">
        <div class="benefit">
          <IconCheck is-included />

          <span>
            Contrary to popular belief
          </span>
        </div>

        <div class="benefit">
          <IconCheck is-included />

          <span>
            There are many variations of passages
          </span>
        </div>

        <div class="benefit">
          <IconCheck :is-included="checkFirstBenefit.check" />

          <span :style="{ color: checkFirstBenefit.color }">
            Combined with a handful of model sentence
          </span>
        </div>

        <div class="benefit">
          <IconCheck :is-included="checkSecondBenefit.check" />

          <span :style="{ color: checkSecondBenefit.color }">
            Various versions have over the years
          </span>
        </div>
      </div>

      <CommonButton button-style="outline" label="GET STARTED" position="center" />
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHowItWorks/baseCourse.scss">

</style>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  bgTextfield: {
    type: String,
    required: true,
  },
  bgButton: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="common-textfield-button">
    <v-text-field variant="outlined" hide-details class="apply-coupon" rounded="0" :style="{ backgroundColor: `var(--${props.bgTextfield})` }">
      <template #append-inner>
        <v-btn
          variant="text"
          class="apply-coupon-btn"
          rounded="0"
          color="var(--color-white-1)"
          :style="{ background: `var(--${props.bgButton})` }"
        >
          {{ props.label }}
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<style scoped src="@/assets/scss/components/common/commonTextfieldButton.scss"></style>

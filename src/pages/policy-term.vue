<script setup lang="ts">
const tab = ref(null)
</script>

<template>
  <div class="policy-term-wrapper">
    <v-tabs
      v-model="tab"
      class="tab-wrapper"
      slider-color="var(--color-orange-1)"
      align-tabs="center"
      selected-class="tab-selected"
      bg-color="var(--color-background)"    
    >
      <v-tab value="one" class="tab">
        <p class="tab-text">
          Privacy Policy
        </p>
      </v-tab>

      <v-tab value="two" class="tab">
        <p class="tab-text">
          Terms of service
        </p>
      </v-tab>
    </v-tabs>

    <v-card-text class="tab-content">
      <v-window v-model="tab">
        <v-window-item value="one">
          <BaseTerm />
        </v-window-item>

        <v-window-item value="two">
          <BaseTerm />
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/policyTerm.scss">

</style>

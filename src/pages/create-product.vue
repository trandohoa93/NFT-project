<route>
  {
    meta: {
      layout: "noFooterLayout"
    }
  }
</route>

<script setup lang="ts">

const tab = ref(null)
</script>

<template>
  <div class="create-product-wrapper">
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
          Create NFT
        </p>
      </v-tab>

      <v-tab value="two" class="tab">
        <p class="tab-text">
          Create Collection
        </p>
      </v-tab>
    </v-tabs>

    <v-card-text class="tab-content">
      <v-window v-model="tab">
        <v-window-item value="one">
          <BaseCreateNFT />
        </v-window-item>

        <v-window-item value="two">
          <BaseCreateCollection />
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/createProduct.scss">

</style>

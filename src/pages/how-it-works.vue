<script setup lang="ts">

</script>

<template>
  <div class="how-it-works-wrapper global-container">
    <div class="how-it-works-header">
      <h2 class="works-title">
        4000+

        <span>
          Wallets Connected
        </span>
      </h2>

      <h2 class="works-title">
        20,000+

        <span>
          Collections NFTs
        </span>
      </h2>

      <h2 class="works-title">
        2.5X

        <span>
          Difference in Floor & Estimated Value
        </span>
      </h2>

      <router-link to="/marketplace">
        <CommonButtonSubmit label="View Marketplace" />
      </router-link>
    </div>

    <div class="how-it-works-body">
      <h3 class="body-title">
        POWERED BY AMAZING INVESTORS:
      </h3>

      <div class="list-investors">
        <div class="investor">
          <InvestorMetamark />
        </div>

        <div class="investor">
          <InvestorBitgo />
        </div>

        <div class="investor">
          <img src="/images/investor-coinbase.svg" alt="Investor branch">
        </div>

        <div class="investor">
          <InvestorTrustWallet />
        </div>

        <div class="investor">
          <InvestorExodus />
        </div>
      </div>

      <BaseHomeCreateSell />
    </div>

    <div class="how-it-works-footer">
      <BaseCourse
        main-theme="var(--color-mix-3)"
        pack-type="Basic"
        pack-color="var(--color-blue-5)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/howItWorks.scss">

</style>

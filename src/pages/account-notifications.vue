<script setup lang="ts">

</script>

<template>
  <div class="account-notifications-wrapper global-container">
    <div class="notifications-title">
      Notifications
    </div>

    <div class="notifications-filters">
      <button class="filter-button active">
        All
      </button>

      <button class="filter-button">
        Purchases
      </button>

      <button class="filter-button">
        Sales
      </button>

      <button class="filter-button">
        Follows
      </button>

      <button class="filter-button">
        Following
      </button>

      <button class="filter-button">
        Reversed
      </button>

      <button class="filter-button">
        Live Auction
      </button>
    </div>

    <div class="notifications-display">
      <div class="display-actions">
        <button class="read-all">
          Mark all read
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/accountNotifications.scss">

</style>

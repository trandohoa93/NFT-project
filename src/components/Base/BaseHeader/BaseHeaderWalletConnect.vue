<script setup lang="ts">
import wallet from '@/assets/images/wallet.png'
import defaultAvatar from '@/assets/images/default-avatar.png'
import phantomIcon from '@/assets/images/phantom-currency.png'

const isDrawerOpen = ref<boolean>(false)
const drawerArea = ref<HTMLDivElement | null>(null)

function handleCloseDrawer(event: MouseEvent) {
  if (!drawerArea.value?.contains(event.target as Node))
    isDrawerOpen.value = false
}

onMounted(() => {
  window.addEventListener('click', handleCloseDrawer)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleCloseDrawer)
})
</script>

<template>
  <div ref="drawerArea" :class="$style['header-wallet-wrapper']">
    <button :class="$style['wallet-btn']" @click="isDrawerOpen = !isDrawerOpen">
      <img :src="wallet" alt="Header Wallet Connect Icon" :class="$style['wallet-icon']">

      <span :class="$style['wallet-content']">Connect Wallet</span>
    </button>

    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="isDrawerOpen" :class="$style['wallet-drawer-wrapper']">
          <h2 :class="$style['wallet-drawer-title']">
            Connect Wallet
          </h2>

          <p :class="$style['wallet-drawer-content']">
            If you don't have a wallet yet,
            <br>
            you can select a provider and create one now.
          </p>

          <div :class="$style['wallet-name-list']">
            <router-link to="/" :class="$style['wallet-name']">
              <img :src="defaultAvatar" alt="Account Setting" :class="$style['wallet-image']">
              <span :class="$style['header-wallet-desc']">MetaMark</span>
            </router-link>

            <router-link to="/" :class="$style['wallet-name']">
              <div :class="$style['wallet-image']" />

              <span :class="$style['header-wallet-desc']">Coinbase Wallet</span>
            </router-link>

            <router-link to="/" :class="$style['wallet-name']">
              <div :class="$style['wallet-image']" />

              <span :class="$style['header-wallet-desc']">WalletConnect</span>
            </router-link>

            <router-link to="/" :class="$style['wallet-name']">
              <div :class="$style['wallet-image']" />

              <span :class="$style['header-wallet-desc']">BitKeep</span>
            </router-link>

            <router-link to="/" :class="$style['wallet-name']">
              <div :class="$style['wallet-image']" />
              <span :class="$style['header-wallet-desc']">Ledger</span>
            </router-link>

            <router-link to="/" :class="$style['wallet-name']">
              <img :src="phantomIcon" alt="Account Setting" :class="$style['wallet-image']">
              <span :class="$style['header-wallet-desc']">Phantom</span>
            </router-link>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderWalletConnect.scss">

</style>

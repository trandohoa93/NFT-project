<script lang="ts" setup>
import ArbitrumIcon from '@/assets/images/arbitrum.png'
import AvalancheIcon from '@/assets/images/avalanche.png'
import BnbIcon from '@/assets/images/bnb.png'
import EthereumIcon from '@/assets/images/ethereum.png'
import KlaytnIcon from '@/assets/images/klaytn.png'
import OptimismIcon from '@/assets/images/optimism.png'
import PolygonIcon from '@/assets/images/polygon.png'
import SolanaIcon from '@/assets/images/solana.png'
</script>

<template>
  <div class="chain-wrapper">
    <p class="chain-title">
      All chains
    </p>
    <div class="chain-icons">
      <img :src="ArbitrumIcon">
      <img :src="AvalancheIcon">
      <img :src="BnbIcon">
      <img :src="EthereumIcon">
      <img :src="KlaytnIcon">
      <img :src="OptimismIcon">
      <img :src="PolygonIcon">
      <img :src="SolanaIcon">
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/components/common/commonAllChains.scss"></style>

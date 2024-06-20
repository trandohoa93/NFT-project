<script setup lang="ts">
</script>

<template>
  <div class="theme-switch-wrapper">
    <div class="home-create-sell">
      <v-container class="create-sell-container">
        <h2 class="text-title">
          Create & sell your NFTs
        </h2>

        <v-row>
          <v-col lg="3" sm="6" xs="12">
            <v-card class="card-item rounded-0">
              <img src="/images/basehome-wallet.svg" alt="NFT wallet">

              <v-card-title class="card-title pa-0">
                Set up your wallet
              </v-card-title>

              <v-card-subtitle class="card-subtitle pa-0">
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the <span class="card-hightight">wallets we support</span>.
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="3" sm="6" xs="12">
            <v-card class="card-item rounded-0">
              <img src="/images/basehome-geometry.svg" alt="NFT wallet">

              <v-card-title class="card-title pa-0">
                Create your collection
              </v-card-title>

              <v-card-subtitle class="card-subtitle pa-0">
                Click <span class="card-hightight">My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="3" sm="6" xs="12">
            <v-card class="card-item rounded-0">
              <img src="/images/basehome-picture.svg" alt="NFT wallet">

              <v-card-title class="card-title pa-0">
                Add your NFTs
              </v-card-title>

              <v-card-subtitle class="card-subtitle pa-0">
                Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="3" sm="6" xs="12">
            <v-card class="card-item rounded-0">
              <img src="/images/basehome-shoppingbag.svg" alt="NFT wallet">

              <v-card-title class="card-title pa-0">
                List them for sale
              </v-card-title>

              <v-card-subtitle class="card-subtitle pa-0">
                Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseHome/baseHomeCreateSell.scss"></style>

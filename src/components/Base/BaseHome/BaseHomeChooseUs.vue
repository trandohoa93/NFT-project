<script setup lang="ts">
const items = [
  {
    title: 'Huge collection',
    subtitle: 'A collection of 5,000 unique NFT built to go beyond the digital space that will unlock numerous benefits for our community.',
  },
  {
    title: 'High quality',
    subtitle: 'The NFT’s collection includes dozens of rare heads, costumes, and colorways of the artist\'s palette. They are drawn with great care.',
  },
  {
    title: 'Top resource',
    subtitle: 'Tasty design resources made with care for each pixel. Tokens, metaverse and game resources NFTs. Access additional drops.',
  },
  {
    title: 'Big community',
    subtitle: 'Be part of a community of NFT owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover.',
  },
]
</script>

<template>
  <div class="theme-switch-wrapper">
    <div class="home-choose-us">
      <div class="home-choose-us-container">
        <div class="choose-us-image" />
        <div class="text-container">
          <div class="text-title">
            Why choose us?
          </div>
          <v-list lines="one" class="pa-0">
            <v-list-item
              v-for="(item, index) in items "
              :key="index"
              class="pa-0"
            >
              <v-container class="content-container">
                <v-row no-gutters class="pb-2">
                  <v-col align-self="center" cols="auto" class="mr-4">
                    <img src="@/assets/images/basehome-accept.png">
                  </v-col>
                  <v-col>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class="ml-12">
                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-container>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseHome/baseHomeChooseUs.scss"></style>

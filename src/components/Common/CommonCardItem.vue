<script lang="ts" setup>
import type { CardItemProp } from '@/types'

const props = defineProps<CardItemProp>()

const {
  id,
  image,
  collectionName,
  owner,
} = props
</script>

<template>
  <div class="card-item">
    <v-card class="card" variant="text">
      <v-img
        class="card-img"
        height="160px"
        width="150px"
        :src="image"
        cover
      />
      <v-card-text class="text-card">
        <div class="colection">
          <p class="text-collection">
            Collection
          </p>
          <p class="collection-name">
            {{ collectionName }}
          </p>
          <Verify />
        </div>
        <div class="id-card">
          <p>#</p>
          <p>{{ id }}</p>
        </div>
        <div class="owned">
          <p class="text-owned">
            Owned by
          </p>
          <p class="owned-name">
            {{ owner }}
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

 <style scoped src="@/assets/scss/components/common/commonCardItem.scss"></style>

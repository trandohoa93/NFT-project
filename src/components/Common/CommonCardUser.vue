<script setup lang="ts">
import type { CardUserProp } from '@/types'

const props = defineProps<CardUserProp>()
const emit = defineEmits(['handleFollow', 'handleUnFollow'])
const isLoading = ref(false)

function handleFollow() {
  emit('handleFollow', props.id)
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

function handleUnFollow() {
  emit('handleUnFollow', props.id)

  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <v-card class="card-user" rounded="0">
    <v-avatar
      color="grey-darken-3"
      :image="props.image"
      size="60"
      class="card-avatar"
    />
    <v-card-item>
      <div class="card-item">
        <v-card-text class="card-text">
          <div class="card-user-name">
            <div class="card-name">
              {{ props.name }}
            </div>
            <div class="card-user-icon">
              <font-awesome-icon :icon="['fas', 'check']" />
            </div>
          </div>
          <p class="card-user-follower">
            {{ props.followers }} Followers
          </p>
        </v-card-text>
        <div v-if="!props.isFollow">
          <v-btn
            text="Follow"
            variant="outlined"
            class="btn-follow rounded-pill"
            height="44"
            width="120"
            :loading="isLoading"
            @click="handleFollow"
          />
        </div>

        <div v-else>
          <v-btn
            text="UnFollow"
            variant="outlined"
            class="btn-follow rounded-pill"
            height="44"
            width="120"
            :loading="isLoading"
            @click="handleUnFollow"
          />
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped src="@/assets/scss/components/common/commonCardUser.scss">

</style>

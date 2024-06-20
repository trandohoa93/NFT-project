<script setup lang="ts">
import { toast } from 'vue3-toastify'
import { storeToRefs } from 'pinia'
import { useClipboard } from '@vueuse/core'

import router from '@/router'
import { useAuthStore, useUserStore } from '@/stores'

import IconCopy from '@/components/Icons/IconCopy.vue'
import IconGallery from '@/components/Icons/IconGallery.vue'
import IconEdit from '@/components/Icons/IconEdit.vue'
import IconLogout from '@/components/Icons/IconLogout.vue'

const authStore = useAuthStore()
const userStore = useUserStore()
const { userDetail } = storeToRefs(userStore)
const { isFetching } = storeToRefs(authStore)

const { logoutAction } = authStore

const userId = ref(null)

const { copy, copied, isSupported } = useClipboard({ legacy: true })

async function handleCopyUserId() {
  copy(userDetail.value?.id as string)
}

async function handleLogout() {
  await logoutAction()

  if (authStore.isAuthenticated) {
    if (authStore.errorMessage)
      toast.error(`${authStore.errorMessage}`)
  }
  else {
    toast.success('Logout success!')

    setTimeout(() => {
      router.push('/auth/login')
    }, 2000)
  }
}

function redirectPage(path: string) {
  router.push(path)
}
</script>

<template>
  <v-menu
    transition="slide-y-transition"
  >
    <template #activator="{ props }">
      <button :class="$style['header-avatar-btn-wrapper']" v-bind="props">
        <div :class="$style['avatar-user-balance']" >
          {{ userDetail?.wallet }}
        </div>

        <div :class="$style['avatar-user-image']">
          <img v-if="userDetail?.avatar" :src="userDetail?.avatar" :class="$style['avatar-user']">

          <img v-else src="/images/baseHeader-default-avatar.png" :class="$style['avatar-user']">
        </div>
      </button>
    </template>

    <v-list :class="$style['header-avatar-dropdown-wrapper']">
      <div :class="$style['header-avatar-id-wrapper']">
        <p ref="userId" :class="$style['header-avatar-id']">
          {{ userDetail?.id ?? '' }}
        </p>

        <div v-if="isSupported" :class="$style['copy-wrapper']">
          <button :class="$style['copy-btn']" @click.prevent="handleCopyUserId()">
            <IconCopy :class="$style['header-avatar-icon']" color-primary="var(--color-button-copy-1)" color-secondary="var(--color-button-copy-2)" />
          </button>

          <span :class="$style['copy-text']">{{ copied ? 'Copied!' : 'Copy' }}</span>
        </div>
      </div>

      <div :class="$style['header-avatar-currency-wrapper']">
        <img src="/images/baseHeader-currency.png" alt="NFT currency icon" :class="$style['header-avatar-currency-icon']">

        <div :class="$style['header-avatar-currency-content']">
          <div :class="$style['avatar-chip-currency-title']">
            Balance
          </div>

          <div :class="$style['avatar-chip-currency-desc']">
            {{ userDetail?.wallet }}
          </div>
        </div>
      </div>

      <div :class="$style['header-avatar-divider']" />

      <div :class="$style['header-avatar-link-wrapper']">
        <RouterLink to="/" :class="$style['header-avatar-link']">
          <IconGallery />

          <span :class="$style['header-avatar-link-name']">
            My items
          </span>
        </RouterLink>

        <RouterLink to="/profile" :class="$style['header-avatar-link']">
          <IconEdit />

          <span :class="$style['header-avatar-link-name']" @click="redirectPage('/profile')">
            Edit Profile
          </span>
        </RouterLink>

        <button :class="$style['header-avatar-link']" @click="handleLogout">
          <IconLogout />

          <span :class="$style['header-avatar-link-name']">
            Logout
          </span>
        </button>
      </div>
    </v-list>
  </v-menu>
  <teleport v-if="isFetching" to="body">
    <CommonPageLoading />
  </teleport>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderAvatarAuth.scss">
</style>

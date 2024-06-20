<script lang="ts" setup>
import notify from '@/assets/images/notification-light.png'

import { NOTIFICATION_DATA } from '@/constant/constants.ts'
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgMode = computed(() => {
  const isDark = themeStore.currentTheme === 'dark'

  return {
    image: isDark ? 'filter: brightness(100)' : '',
    dropdownBtn: isDark ? '' : 'filter: brightness(0)',
  }
})

const notificationLength = computed<number>(() => {
  return NOTIFICATION_DATA.length
})

const notificationSeenStatus = computed(() => {
  const $style = useCssModule('$style')

  const unseenNotifications = NOTIFICATION_DATA.some(notification => !notification.is_seen);

  return unseenNotifications ? '' : $style['header-notify-unseen']
})
</script>

<template>
  <v-menu
    transition="slide-y-transition"
  >
    <template #activator="{ props }">
      <button :class="$style['header-notify-wrapper']" v-bind="props">
        <img 
        :src="notify" 
        alt="NFT Shopping cart Icon" 
        :class="$style['header-notify-icon']"
        :style="setImgMode.dropdownBtn"
        >
      </button>
    </template>

    <v-list :class="$style['header-notify-dropdown-wrapper']">
      <div :class="$style['header-notify-top']">
        <p :class="$style['header-notify-title']">
          Notifications

          <span :class="$style['header-notify-span']">({{ notificationLength }})</span>
        </p>

        <button :class="$style['header-notify-btn']">
          <router-link to="/">
            View all
          </router-link>
        </button>
      </div>

      <div :class="$style['header-notify-bottom']">
        <div v-for="notification in NOTIFICATION_DATA" :key="notification.id" :class="$style['header-notify-bottom-item']">
          <div :class="[$style['header-notify-seen-status'], notificationSeenStatus]" />

          <div :class="$style['header-notify-content']">
            <div :class="$style['header-notify-content-title']">
              {{ notification.title }}
            </div>

            <div :class="$style['header-notify-content-desc']" v-html="notification.name" />
          </div>
        </div>
      </div>
    </v-list>
  </v-menu>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderNotify.scss">
</style>

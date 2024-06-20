<script setup lang="ts">
import { useThemeStore } from '@/stores'

import darkModeIcon from '@/assets/images/dark-mode-shape.png'
import lightModeIcon from '@/assets/images/light-mode-shape.png'

const themeStore = useThemeStore()

function handleSwitchTheme() {
  themeStore.toggleDark()
}

const checkIsCheck = computed(() => {
  return themeStore.currentTheme === 'dark'
})
</script>

<template>
  <div :class="$style['theme-switcher-wrapper']">
    <label :class="$style['theme-switcher-label']">
      <input
        v-bind="$attrs"
        :class="$style['theme-switcher-input']"
        type="checkbox"
        :checked="checkIsCheck"
        @change="handleSwitchTheme"
      >
      <span :class="$style['theme-switcher-btn']" />

      <Transition name="fade">
        <img v-if="checkIsCheck" :src="darkModeIcon" alt="Dark mode icon" :class="[$style['theme-switcher-icon'], $style['theme-switcher-icon-light']]">

        <img v-else :src="lightModeIcon" alt="Light mode icon" :class="[$style['theme-switcher-icon'], $style['theme-switcher-icon-dark']]">
      </Transition>
    </label>
  </div>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderThemeSwitcher.scss">

</style>
@/stores/themeStore

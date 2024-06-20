<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores'
import { Themes } from '@/types/index.d'

const { currentTheme } = storeToRefs(useThemeStore())
const bodyElement = document.body

watch(
  currentTheme,
  (value) => {
    bodyElement.classList.toggle('dark', value === Themes.Dark)
    bodyElement.classList.toggle('light', value !== Themes.Dark)
  },
  { immediate: true },
)
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="slide">
      <v-app :class="currentTheme">
        <component :is="Component" :key="route" />
      </v-app>
    </Transition>
  </RouterView>
</template>


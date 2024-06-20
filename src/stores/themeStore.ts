import { defineStore } from 'pinia'
import { Themes } from '@/types/index.d'

const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(false)

  const initTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    isDark.value = storedTheme === Themes.Dark
  }

  const toggleDark = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? Themes.Dark : Themes.Light)
  }

  const currentTheme = computed(() => {
    return isDark.value ? 'dark' : 'light'
  })

  initTheme()

  return {
    isDark,
    toggleDark,
    currentTheme,
  }
})

export default useThemeStore

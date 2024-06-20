<script setup lang="ts">
import arrowDown from '@/assets/images/arrow-down-light.png'
import { PAGE_DUMMY_DATA } from '@/constant/constants.ts'
import type { HeaderNavBar } from '@/types'
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const setImgWhite = computed(() => {
  return themeStore.currentTheme === 'dark' ? '' : 'filter: brightness(0)'
})

const headerNavList: HeaderNavBar[] = reactive([
  {
    id: 1,
    link: '/',
    name: 'Homepage',
    image: 'gallery-dark.png',
    isHidden: false,
    screenSize: 'sm',
  },
  {
    id: 2,
    link: '/marketplace',
    name: 'Marketplace',
    image: 'gallery-dark.png',
    isHidden: false,
    screenSize: 'sm',
  },
  {
    id: 3,
    link: '/',
    name: 'Community',
    image: 'gallery-dark.png',
    isHidden: false,
    screenSize: 'md',
  },
  {
    id: 4,
    link: '/',
    name: 'How it works',
    image: 'edit-button.png',
    isHidden: false,
    screenSize: 'lg',
  },
  {
    id: 5,
    link: '/about-us',
    name: 'About us',
    image: 'edit-button.png',
    isHidden: false,
    screenSize: 'xl',
  },
])

const screenWidth = ref(window.innerWidth)

function handleResize() {
  screenWidth.value = window.innerWidth

  headerNavList.forEach((nav) => {
    if (getBreakpointWidth(nav.screenSize) >= screenWidth.value)
      nav.isHidden = true
    else
      nav.isHidden = false
  })
}

function getBreakpointWidth(size: string) {
  switch (size) {
    case 'sx':
      return 930
    case 'sm':
      return 1280
    case 'md':
      return 1500
    case 'lg':
      return 1700
    case 'xl':
      return 1920
    default:
      return 0
  }
}

const checkPageIsHidden = computed(() => {
  return headerNavList.filter(nav => !nav.isHidden)
})

const dropdownPages = computed(() => {
  const visibleNavNames = headerNavList.filter(nav => !nav.isHidden).map(nav => nav.name)

  return PAGE_DUMMY_DATA.filter(page => !visibleNavNames.includes(page.name))
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav :class="$style['header-navbar-wrapper']">
    <ul :class="$style['header-navbar-list']">
      <li v-for="item in checkPageIsHidden" :key="item.id">
        <router-link :to="item.link" :class="$style['header-navbar']">
          {{ item.name }}
        </router-link>
      </li>
    </ul>

    <div :class="$style['header-navbar-dropdown']">
      <v-menu>
        <template #activator="{ props }">
          <button
            v-bind="props"
            flat
            :class="$style['header-navbar-dropdown-btn']"
          >
            Pages
            <img :src="arrowDown" alt="NFT arrow down" :class="[$style['header-navbar-icon'], $style['header-navbar-dropdown-icon']]" :style="setImgWhite">
          </button>
        </template>

        <v-list
          :class="$style['header-navbar-list']"
        >
          <v-list-item
            v-for="(page, index) in dropdownPages"
            :key="index"
            :value="index"
            @click="() => $router.push(page.link)"
          >
            <v-list-item-title :class="$style['header-navbar']">
              <img :src="`/images/${page.image}`" alt="NFT nav icon" :class="$style['header-navbar-image']" :style="setImgWhite">

              {{ page.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </nav>
</template>

<style lang="scss" module src="@/assets/scss/components/base/baseHeader/baseHeaderNavBar.scss">

</style>

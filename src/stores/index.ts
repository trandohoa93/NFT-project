import { createPinia } from 'pinia'

import useUserStore from '@/stores/userStore'
import useThemeStore from '@/stores/themeStore'
import useAuthStore from '@/stores/authStore'
import useCollectionsStore from '@/stores/collectionsStore'
import useNftStore from '@/stores/nftStore'

const store = createPinia()

export { 
useUserStore, 
useThemeStore, 
useAuthStore, 
useCollectionsStore, 
useNftStore 
}

export default store

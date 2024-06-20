import 'vue3-toastify/dist/index.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import vuetify from './plugins/vuetify'

import router from '@/router'
import store from '@/stores'
import Root from '@/Root.vue'

import '@/assets/scss/main.scss'

library.add(fas, far)

const app = createApp(Root)
app.use(router)
app.use(VueAxios, axios)
app.use(vuetify)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions)

router.isReady().then(() => {
  app.mount('#root')
})

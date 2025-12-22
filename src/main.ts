import { createApp } from 'vue'
import App from './App.vue'

import VueLazyLoad from 'vue3-lazyload'
import { dragscrollNext } from 'vue-dragscroll'

const loadingImg = `${process.env.VUE_APP_ASSETS}img/loading.svg`

createApp(App)
  .use(VueLazyLoad, { // https://github.com/murongg/vue3-lazyload#-options
    loading: loadingImg,
    error: loadingImg,
    log: false
  })
  .directive('dragscroll', dragscrollNext)
  .mount('#app')

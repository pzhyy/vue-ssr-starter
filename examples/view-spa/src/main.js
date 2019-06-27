import '@/assets/styles/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import seoMixin from './util/seo'
import * as filters from './util/filters'
import './registerServiceWorker'

Vue.config.productionTip = false

// mixin for handling title
Vue.mixin(seoMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

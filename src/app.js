import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const shouldSW = 'serviceWorker' in navigator
if (shouldSW) {
  navigator.serviceWorker.register('service-worker-cache.js').then(() => {
    console.log("Service Worker Registered!")
  })
}
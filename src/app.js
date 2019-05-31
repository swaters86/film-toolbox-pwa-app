import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker-cache.js', { scope: '/' }).then(function(registration) {
    console.log('Service Worker Registered');
  });
  navigator.serviceWorker.ready.then(function(registration) {
    console.log('Service Worker Ready');
  });
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

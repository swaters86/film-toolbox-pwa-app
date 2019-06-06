import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from '../node_modules/firebase';
import {firebaseConfig} from "./firebase";

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
  created() {
    firebase.initializeApp(firebaseConfig);
  },
  components: {App},
  template: '<App/>'
})

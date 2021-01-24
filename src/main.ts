import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import anime from "@/animejs.install"
import "@/css/global.less";

Vue.config.productionTip = false

Vue.prototype.$anime = anime;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

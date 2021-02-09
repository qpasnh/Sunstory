import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import anime from "@/animejs.install";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "@/css/global.less";
import "swiper/css/swiper.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import "./interface";
// @ts-ignore
import VueCheckView from "vue-check-view";
import NProgress from 'nprogress';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

NProgress.configure({
  showSpinner: false
})

Vue.use(anime);
Vue.use(VueAwesomeSwiper);
Vue.use(VueCheckView);
Vue.use(VueLazyload, {
  error: require("./assets/solid-black.jpg"),
  loading: require("./assets/solid-black.jpg")
});

router.beforeEach((to, from, next) => {
  if (to.name !== from.name) NProgress.start();
  next();
})

router.afterEach((to, from) => {
  if (to.name !== from.name) NProgress.done();
  document.documentElement.scrollTo({
    top: 0
    // note: don't use behavior: 'smooth' here,
    // because it'll cause too-early animation setting off.
  });
  
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

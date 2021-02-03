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

Vue.config.productionTip = false;

Vue.use(anime);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

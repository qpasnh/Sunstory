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
import NProgress from "nprogress";
import VueLazyload from "vue-lazyload";
import Cookies from "vue-cookies";
import Meta from "vue-meta";

Vue.config.productionTip = false;

NProgress.configure({
  showSpinner: false,
});

Vue.use(anime);
Vue.use(VueAwesomeSwiper);
Vue.use(VueCheckView);
Vue.use(VueLazyload);
Vue.use(Cookies);
Vue.use(Meta);

Vue.mixin({
  metaInfo: {
    meta: [
      { property: "og:title", content: "SoTap | Waiting for You" },
      { property: "og:site_name", content: "SoTap" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sotap.org" },
      {
        property: "og:image",
        content:
          "https://sotapmc.oss-cn-beijing.aliyuncs.com/img/logo/logo-1000x1000-transparent.png",
      },
      {
        property: "og:description",
        content: "Hey，这里是 SoTap 服务器官方网站，来看看吧 OwO",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "https://sotap.org" },
      { name: "twitter:title", content: "SoTap | Waiting 4 U" },
      {
        name: "twitter:description",
        content: "Hey，这里是 SoTap 服务器官方网站，来看看吧 OwO",
      },
      { name: "twitter:creator", content: "@subilan95" },
      {
        name: "twitter:image:src",
        content:
          "https://sotapmc.oss-cn-beijing.aliyuncs.com/img/logo/logo-1000x1000-transparent.png",
      },
      { itemprop: "name", content: "SoTap | Waiting for U" },
      {
        itemprop: "description",
        content: "Hey，这里是 SoTap 服务器官方网站，来看看吧 OwO",
      },
      {
        itemprop: "image",
        content:
          "https://sotapmc.oss-cn-beijing.aliyuncs.com/img/logo/logo-1000x1000-transparent.png",
      },
      { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Hey，这里是 SoTap 服务器的官方网站。你可以在这里获取到服务器的最新情报和其它有用的信息，同时也可以阅读服务器规则和其它资讯！",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://sotap.org",
      },
    ],
  },
});

export const store = Vue.observable({
  darkmode: false,
});

export const actions = {
  setDarkmode(set: boolean) {
    store.darkmode = set;
    Vue.$cookies.set("darkmode_state", store.darkmode);
  },
  toggleDarkmode() {
    store.darkmode = !store.darkmode;
    Vue.$cookies.set("darkmode_state", store.darkmode);
  },
};

Vue.prototype.$store = store;
Vue.prototype.$actions = actions;

router.beforeEach((to, from, next) => {
  if (to.name !== from.name) NProgress.start();
  next();
});

router.afterEach((to, from) => {
  if (to.name !== from.name) NProgress.done();
  document.documentElement.scrollTo({
    top: 0,
    // note: don't use behavior: 'smooth' here,
    // because it'll cause too-early animation setting off.
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

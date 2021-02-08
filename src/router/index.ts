import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

// @ts-ignore
VueRouter.prototype.push = function (location) {
  // @ts-ignore
  return originalPush.call(this, location).catch((err) => err);
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/gallery/:option?/:target?",
    name: "gallery",
    component: () => import("@/views/Gallery.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/views/Rules.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

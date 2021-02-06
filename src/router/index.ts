import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

// @ts-ignore
VueRouter.prototype.push = location => {
  // @ts-ignore
  return originalPush.call(this, location).catch((err) => err);
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("@/views/Gallery.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import { actions, store } from "./main";

declare module "vue/types/vue" {
  interface Vue {
    $actions: typeof actions;
    $store: typeof store;
  }
}

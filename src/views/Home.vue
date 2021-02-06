<template>
  <div class="home">
    <banner />
    <feature />
    <description />
    <gallery />
    <blog />
    <prefooter />
    <links />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/layouts/Home/Banner.vue";
import Feature from "@/layouts/Home/Feature.vue";
import Description from "@/layouts/Home/Description.vue";
import Prefooter from "@/layouts/Home/Prefooter.vue";
import Gallery from "@/layouts/Home/Gallery.vue";
import Blog from "@/layouts/Home/Blog.vue";
import Links from "@/layouts/Home/Links.vue";

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    Banner,
    Feature,
    Description,
    Prefooter,
    Gallery,
    Blog,
    Links,
  },
});
</script>
<template>
  <div class="home">
    <banner />
    <feature />
    <description />
    <gallery />
    <blog />
    <prefooter />
    <links />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/layouts/Banner.vue";
import Feature from "@/layouts/Feature.vue";
import Description from "@/layouts/Description.vue";
import Prefooter from "@/layouts/Prefooter.vue";
import Gallery from "@/layouts/Gallery.vue";
import Blog from "@/layouts/Blog.vue";
import Footer from "@/layouts/Footer.vue";
import Links from "@/layouts/Links.vue";

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
    Footer,
    Links,
  },
});
</script>
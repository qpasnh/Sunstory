<template>
  <div class="home">
    <banner />
    <feature />
    <divider />
    <gallery />
    <blog />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/layouts/Banner.vue";
import Feature from "@/layouts/Feature.vue";
import Divider from "@/layouts/Divider.vue";
import Gallery from "@/layouts/Gallery.vue";
import Blog from "@/layouts/Blog.vue";

export default Vue.extend({
  data() {
    return {
      
    };
  },
  components: {
    Banner,
    Feature,
    Divider,
    Gallery,
    Blog
  },
});
</script>

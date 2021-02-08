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
import Vue from 'vue';
import Banner from '@/components/home-components/Banner.vue';
import Feature from '@/components/home-components/Feature.vue';
import Description from '@/components/home-components/Description.vue';
import Prefooter from '@/components/home-components/Prefooter.vue';
import Gallery from '@/components/home-components/Gallery.vue';
import Blog from '@/components/home-components/Blog.vue';
import Links from '@/components/home-components/Links.vue';

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
        Links
    }
});
</script>
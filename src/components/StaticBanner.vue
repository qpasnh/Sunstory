<template>
    <div class="static-banner" :style="'background-image: url(' + bg + ')'">
        <div class="banner-text-box">
            <h1 class="banner-title">
                <slot name="title"></slot>
            </h1>
            <p class="banner-text">
                <slot name="text"></slot>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Animation } from '@/functions';
import Vue from 'vue';
export default Vue.extend({
    props: ['bg'],
    mounted() {
        Animation.ease('in', 'top', '.banner-title');
        Animation.ease('in', 'top', '.banner-text', undefined, 200);
    }
});
</script>

<style lang="less" scoped>
.static-banner {
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    line-height: 1.8;

    @media screen and (min-width: 690px) {
        height: @bannerheight-d;
    }
    @media screen and (max-width: 690px) {
        height: @bannerheight-m;
    }
}
</style>
<template>
    <swiper class="banner-swiper" ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="(x, i) in bannerList" :key="i">
            <div class="swiper-item" :style="'background-image: url(' + x.bg + ')'">
                <div class="banner-text-box">
                    <h1 class="banner-title">{{ x.title }}</h1>
                    <p class="banner-text">{{ x.text }}</p>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next banner-swiper-button"></div>
        <div class="swiper-button-prev banner-swiper-button"></div>
    </swiper>
</template>

<script lang="ts">
import { Animation } from '@/functions';
import Vue from 'vue';
import HomeBannerList from "@/data/content/HomeBannerList.json";
import HomeSwiperOptions from "@/data/config/HomeSwiperOptions.json";

export default Vue.extend({
    data() {
        return {
            swiperOptions: HomeSwiperOptions,
            bannerList: HomeBannerList
        };
    },
    mounted() {
        Animation.ease("in", "top", ".banner-title");
        Animation.ease("in", "top", ".banner-text", undefined, 200);
    }
});
</script>

<style lang="less" scoped>
.banner-swiper {
    width: 100%;
    @media screen and (min-width: 690px) {
        height: @bannerheight-d;
    }
    @media screen and (max-width: 690px) {
        height: @bannerheight-m;
    }
}

.swiper-item {
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.swiper-button-next,
.swiper-button-prev {
    @media screen and (max-width: 690px) {
        display: none;
    }

    color: rgba(255, 255, 255, 0.4);
    background: rgba(0, 0, 0, 0.21);
    padding: 10px;
    border-radius: 4px;
    transition: color 0.2s ease;

    &:hover {
        color: white;
    }
}

.swiper-button-prev {
    position: absolute;
    left: 0;
}

.swiper-button-next {
    position: absolute;
    right: 0;
}

.swiper-pagination {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 16px;
    background: rgba(0, 0, 0, 0.21);
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
    padding: 0 8px 2px 8px;
    border-radius: 10px;
}
</style>

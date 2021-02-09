<template>
    <div>
        <swiper class="banner-swiper" ref="swiper" :options="swiperOptions">
            <swiper-slide v-for="(x, i) in bannerList" :key="i">
                <div class="swiper-item" v-lazy:background-image="x.bg">
                    <div class="banner-text-box">
                        <h1 class="banner-title">{{ x.title }}</h1>
                        <p class="banner-text">{{ x.text }}</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div @click="swiperSlide(0, $refs.swiper.swiperInstance)" class="swiper-prev">
            <span class="mdi mdi-arrow-left"></span>
        </div>
        <div @click="swiperSlide(1, $refs.swiper.swiperInstance)" class="swiper-next">
            <span class="mdi mdi-arrow-right"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Animation, swiperSlide } from '@/functions';
import Vue from 'vue';
import HomeBannerList from '@/data/content/HomeBannerList.json';
import HomeSwiperOptions from '@/data/config/HomeSwiperOptions.json';

export default Vue.extend({
    data() {
        return {
            swiperOptions: HomeSwiperOptions,
            bannerList: HomeBannerList
        };
    },
    mounted() {
        Animation.ease('in', 'top', '.banner-title');
        Animation.ease('in', 'top', '.banner-text', undefined, 200);
        this.$Lazyload.$on('loaded', ({ el, src }) => {
            let slide: HTMLDivElement = el.parentNode as HTMLDivElement;
            let dup = document
                .querySelector(
                    ".swiper-slide-duplicate[data-swiper-slide-index='" +
                        slide.getAttribute('data-swiper-slide-index') +
                        "']"
                )
                ?.querySelector('.swiper-item') as HTMLDivElement | null;
            if (dup === null) return;
            dup.style.backgroundImage = 'url(' + src + ')';
        });
    },
    methods: {
        swiperSlide
    }
});
</script>

<style lang="less" scoped>
.banner-swiper {
    width: 100%;
    position: relative;

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
    background-color: #000;
    transition: all 0.2s ease;
}

.swiper-next,
.swiper-prev {
    @media screen and (max-width: 690px) {
        display: none;
    }
    bottom: calc(50% + 72px);
    transform: translateY(50%);
    position: absolute;
    transition: all 0.2s ease;
    opacity: .3;

    &:hover {
        opacity: 1;
    }
}

.swiper-prev {
    left: 0;
}

.swiper-next {
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

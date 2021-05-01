<template>
    <div class="main-banner">
        <swiper class="banner-swiper" ref="swiper" :options="swiperOptions">
            <swiper-slide class="swiper-slide" :class="i === 0 ? 'primary-slide' : ''" v-for="(x, i) in bannerList"
                :key="i" :data-swiper-autoplay="(x.videoLength) || false">
                <div class="swiper-item" v-lazy:background-image="x.bg" v-if="!x.video">
                    <div class="banner-text-box">
                        <h1 class="banner-title" v-html="x.title"></h1>
                        <p class="banner-text">{{ x.text }}</p>
                    </div>
                    <span class="banner-author" v-if="x.bgAuthor">
                        <player text="背景作者" :name="x.bgAuthor"/>
                    </span>
                </div>
                <div class="swiper-item video" v-else v-lazy:background-image="x.firstFrame" :key="x.firstFrame">
                    <video class="banner-video" muted autoplay loop preload="none" @play="showBg(false)"
                        @pause="showBg(true)">
                        <source :src="x.video" type="video/mp4" />
                    </video>
                    <div class="banner-text-box">
                        <h1 class="banner-title" v-html="x.title"></h1>
                        <p class="banner-text">{{ x.text }}</p>
                    </div>
                    <a class="video-link hide-mobile" :href="x.link" target="_blank">前往
                        <img src="@/assets/bilibili-text.svg" /> 观看高清视频</a>
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
import { Animation, fixLoopSwiper, swiperSlide, isMobile } from '@/functions';
import Vue from 'vue';
import HomeBannerList from '@/data/content/HomeBannerList.json';
import HomeSwiperOptions from '@/data/config/HomeSwiperOptions.json';
import Player from '../Player.vue';

export default Vue.extend({
  components: { Player },
    data() {
        return {
            swiperOptions: HomeSwiperOptions,
            bannerList: HomeBannerList,
            bgImgTmp: ''
        };
    },
    mounted() {
        Animation.ease('in', 'top', '.banner-title');
        Animation.ease('in', 'top', '.banner-text', undefined, 200);
        fixLoopSwiper(this, '.swiper-item');
    },
    methods: {
        swiperSlide,
        isMobile,
        isWidthLT(x: number) {
            return window.innerWidth < x;
        },
        showBg(isShow: boolean) {
            if (isShow) {
                this.bgImgTmp = this.bannerList[0].firstFrame as string;
                this.bannerList[0].firstFrame = '';
                if (Vue.$cookies.get('darkmode_state')) {
                }
            } else {
                this.bannerList[0].firstFrame = this.bgImgTmp;
            }
        }
    }
});
</script>

<style lang="less" scoped>
.main-banner {
    width: 100%;
    position: relative;
}

.swiper-slide {
    overflow: hidden;
}

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

    bottom: 50%;
    transform: translateY(50%);
    position: absolute;
    transition: all 0.2s ease;
    opacity: 0.3;

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

.banner-video {
    position: absolute;
    @media screen and (min-width: 690px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
    }

    @media screen and (min-width: 1900px) {
        height: 115% !important;
    }

    @media screen and (max-width: 690px) {
        left: -50%;
        right: -50%;
        transform: translateX(-25%);
    }
}

.video-link {
    position: absolute;
    right: 32px;
    bottom: 32px;
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    text-shadow: @textshadow-1;
    transform: scale(0.7);

    img {
        display: inline-block;
        margin: 16px 0;
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.5));
    }
}

.banner-author {
    position: absolute;
    right: 32px;
    bottom: 32px;
    color: white;
    text-shadow: @textshadow-1;
}
</style>

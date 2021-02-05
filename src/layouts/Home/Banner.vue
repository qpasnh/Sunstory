<template>
  <swiper class="banner-swiper" ref="swiper" :options="swiperOptions">
    <swiper-slide v-for="(x, i) in bannerList" :key="i">
      <div class="swiper-item" :style="'background-image: url(' + x.bg + ')'">
        <div class="text-box">
          <h1>{{ x.title }}</h1>
          <p>{{ x.text }}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next banner-swiper-button"></div>
    <div class="swiper-button-prev banner-swiper-button"></div>
  </swiper>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      swiperOptions: {
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next.banner-swiper-button",
          prevEl: ".swiper-button-prev.banner-swiper-button",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      bannerList: [
        { title: "测试标题", text: "测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文", bg: "https://i.loli.net/2021/01/24/XY1z2MrBbf9m8nV.png" },
        { title: "测试标题", text: "测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文", bg: "https://i.loli.net/2021/01/24/tTY2vnsPgh3H7ZB.png" },
        { title: "测试标题", text: "测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文", bg: "https://i.loli.net/2021/01/24/MZW7LRoGylx1wFI.png" },
        { title: "测试标题", text: "测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文", bg: "https://i.loli.net/2021/01/24/lEfq7KoSVhHuxtr.png" },
        { title: "测试标题", text: "测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文测试正文", bg: "https://i.loli.net/2021/01/24/qML4thaSIWrd7P5.png" },
      ],
    };
  },
});
</script>

<style lang="less" scoped>
.banner-swiper {
  width: 100%;
  @media screen and (min-width: 690px) {
    height: 50rem;
  }
  @media screen and (max-width: 690px) {
    height: 20rem;
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

  .text-box {
    position: absolute;
    left: 128px;
    top: 20rem;
    color: white;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    max-width: 1200px;

    h1 {
      width: 100%;
      font-size: 4rem;
      margin-top: 0;
      margin-bottom: 32px;
      .font-header;
    }

    p {
      width: 100%;
      font-size: 1.2rem;
      .font-text;
    }
  }
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

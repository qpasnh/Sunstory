<template>
  <swiper class="banner-swiper" ref="swiper" :options="swiperOptions">
    <swiper-slide v-for="(x, i) in bannerList" :key="i"
      ><div class="swiper-item" :style="'background-image: url(' + x + ')'"></div></swiper-slide>
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
      },
      bannerList: [
        "https://i.loli.net/2021/01/24/XY1z2MrBbf9m8nV.png",
        "https://i.loli.net/2021/01/24/tTY2vnsPgh3H7ZB.png",
        "https://i.loli.net/2021/01/24/MZW7LRoGylx1wFI.png",
        "https://i.loli.net/2021/01/24/lEfq7KoSVhHuxtr.png",
        "https://i.loli.net/2021/01/24/qML4thaSIWrd7P5.png",
      ],
    };
  },
});
</script>

<style lang="less" scoped>
.banner-swiper {
  width: 100%;
  @media screen and (min-width: 690px) {
      height: 40rem;
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
}
</style>

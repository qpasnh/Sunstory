<template>
  <div class="sotap-gallery">
    <section-title>
      <template #subtitle>服务器掠影</template>
      <template #title>Gallery</template>
      <template #desc>这里，包含了 SoTap 数位玩家拍摄的服务器内美景。<br><small>p.s. {{ isMobile ? "轻按图片" : "将鼠标移动至图片上"}}可查看作者信息和原图哦</small></template>
    </section-title>
    <div class="container">
      <div class="gallery-container">
        <div class="gallery-row" v-for="(x, i) in gallery" :key="i">
          <gallery-card :style="'width: ' + y.width + '%'" v-for="(y, i) in x" :bg="y.bg" :key="i">
            <template #title>{{ y.title }}</template>
            <template #subtitle>{{ y.subtitle }}</template>
            <template #text>{{ y.text }}</template>
          </gallery-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GalleryCard from "@/components/GalleryCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { isMobile } from "@/functions";

export default Vue.extend({
  components: {
    GalleryCard,
    SectionTitle,
  },
  data() {
    return {
      gallery: [
        [
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text: "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35,
          },
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text: "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55,
          },
        ],
        [
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text: "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55,
          },
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text: "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35,
          },
        ],
      ],
    };
  },
  methods: {
      isMobile
  }
});
</script>

<style lang="less" scoped>
.sotap-gallery {
  max-width: 1200px;
  margin: auto;

  .gallery-container {
    .gallery-row {
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (min-width: 690px) {
        flex-wrap: nowrap;
      }

      @media screen and (max-width: 690px) {
        flex-wrap: wrap;
      }

      > * {
        flex: 1 1 auto;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 8px;

        @media screen and (max-width: 690px) {
          width: 100% !important;
          margin: 8px 0 8px 0;
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
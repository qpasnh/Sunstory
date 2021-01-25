<template>
  <div class="home">
    <banner />
    <section-title>
      <template #subtitle>特色内容预览</template>
      <template #title>Features</template>
      <template #desc>在这里，我们展示了一些服务器内的特色内容。</template>
    </section-title>
    <div class="container">
      <div class="card-container">
        <div class="card-row" v-for="(x, i) in cards" :key="i">
          <card :style="'width: ' + y.width + '%'" v-for="(y, i) in x" :bg="y.bg" :key="i">
            <template #title>{{ y.title }}</template>
            <template #subtitle>{{ y.subtitle }}</template>
            <template #text>{{ y.text }}</template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default Vue.extend({
  data() {
    return {
      cards: [
        [
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text:
              "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35
          },
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text:
              "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55
          },
        ],
        [
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text:
              "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55
          },
          {
            title: "测试一下呢",
            subtitle: "测试一下副标题呢",
            text:
              "这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35
          },
        ],
      ],
    };
  },
  components: {
    Banner,
    Card,
    SectionTitle
  },
});
</script>

<style lang="less" scoped>
.container {
  max-width: 1200px;
  display: block;
  margin: auto;

  .card-container {
    .card-row {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      position: relative;

      > * {
        flex: 1 1 auto;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 8px;

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

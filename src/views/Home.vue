<template>
  <div class="home">
    <banner />
    <card bg="https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png">
      <template #title>
        测试一下呢
      </template>
      <template #subtitle>副标题测试一下呢</template>
      <template #text
        >这里是详细的介绍噢噢噢噢噢噢噢噢哦哦为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么</template
      >
    </card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    Banner,
    Card,
  },
});
</script>

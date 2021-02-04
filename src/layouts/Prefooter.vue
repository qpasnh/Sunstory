<template>
  <divider class="sotap-prefooter" img="https://i.loli.net/2021/02/02/pFxYjXhqrTz2Ced.png">
    <h1>独乐不如众乐</h1>
    <p>现在你可以无门槛*地加入 SoTap 了。无论你是一位普通的 Minecraft 玩家，或者是建筑爱好者，亦或者是红石大师，甚至于编程大佬，这里都有你的一席之地。我们随时欢迎你的到来！</p>
    <small>*门槛其实是有的：你需要一个 Minecraft 国际正版账号，仅此而已！</small>
    <a target="_blank" href="//baidu.com">立即加入讨论群 &raquo;</a>
  </divider>
</template>

<script lang="ts">
import Vue from "vue";
import Divider from "@/components/Divider.vue";

export default Vue.extend({
  components: {
    Divider,
  },
});
</script>

<style lang="less" scoped>
.sotap-prefooter {
  h1 {
    color: #fff;
    font-size: 3rem;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    &::after {
      background: @primary;
      height: 6px;
      content: "";
    }
  }

  p {
    color: #fff;
    text-shadow: 0px 1px 8px #000;
    font-size: 20px;
    line-height: 1.8;
  }

  a {
    position: relative;
    text-decoration: none;
    color: white;
    background: @primary;
    padding: 16px;
    position: absolute;
    right: 32px;
    bottom: 32px;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: @mdui-shadow-6;
    }
  }

  small {
    color: @textgrayl;
  }
}
</style>
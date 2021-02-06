<template>
    <divider :speedFactor="0.6" :gradients="gradients" class="sotap-description"
        img="https://mcsunrise.oss-cn-qingdao.aliyuncs.com/sunrise1.png">
        <h1>
            嘿，这里是全新的
            <span class="logo-text">SoTap</span>
            官网
        </h1>
        <h2>我们重新彻底编写了我们的网站，带来了许多新的特性，也简化了一些冗余之处<br>无论你是从前 SoTap
            的老玩家，还是人生中第一次打开此网站，我们都有许多新东西带给你</h2>
        <a class="ui-button outlined" target="_blank" href="https://wiki.sotap.org">
            <span class="mdi mdi-book-outline"></span>
            阅读 Wiki
        </a>
        <router-link class="ui-button backgrounded" to="/about-website">
            <span class="mdi mdi-launch"></span>
            了解更多
        </router-link>
    </divider>
</template>

<script lang="ts">
import Vue from 'vue';
import Divider from '@/components/Divider.vue';
export default Vue.extend({
    components: {
        Divider
    },
    data() {
        return {
            gradients: ['linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2))']
        };
    }
});
</script>

<style lang="less" scoped>
.sotap-description {
    text-align: center;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    h1 {
        color: white;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 2.5rem;

        .logo-text {
            font-size: inherit !important;
        }
    }

    h2 {
        margin: 0;
        color: white;
        font-weight: normal;
        font-size: 1.3rem;
    }

    p {
        color: rgba(255, 255, 255, 0.9);
    }

    a {
        margin-left: 16px;
        margin-right: 16px;
        margin-top: 16px;
    }
}
</style>
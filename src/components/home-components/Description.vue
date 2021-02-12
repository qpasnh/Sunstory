<template>
    <divider :speedFactor="0.6" :coverOpacity="0.2" class="sotap-description"
        img="https://mcsunrise.oss-cn-qingdao.aliyuncs.com/sunrise1.png">
        <h1>
            嘿，这里是全新的
            <span class="logo-text">SoTap</span>
            官网
        </h1>
        <h2>SoTap 一直以来都提倡为玩家营造全方位的优良体验，官网也是我们的计划之一<br>闲暇之余，你可以阅读官网了解 SoTap 本身，亦可以阅读 Wiki
            来了解相关知识，使游戏体验更为丰富</h2>
        <div class="button-bar">
            <a class="ui-button outlined" target="_blank" href="https://wiki.sotap.org">
                <span class="mdi mdi-book-outline"></span>
                阅读 Wiki
            </a>
            <router-link class="ui-button backgrounded" to="/rules">
                <span class="mdi mdi-launch"></span>
                查看服规
            </router-link>
        </div>
    </divider>
</template>

<script lang="ts">
import Vue from 'vue';
import Divider from '@/components/Divider.vue';
export default Vue.extend({
    components: {
        Divider
    }
});
</script>

<style lang="less" scoped>
.sotap-description {
    @media screen and (min-width: 1000px) {
        text-align: center;
    }

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
        line-height: 1.8;
    }

    p {
        color: rgba(255, 255, 255, 0.9);
    }

    .button-bar {
        width: 100%;
        position: relative;
        text-align: center;

        .ui-button {
            display: inline-block;
            margin-left: 16px;
            margin-right: 16px;
            margin-top: 16px;
        }
    }
}
</style>
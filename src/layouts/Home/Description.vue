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
        <a class="outlined btn-outlined" target="_blank" href="https://wiki.sotap.org">
            <span class="mdi mdi-book-outline"></span>
            阅读 Wiki
        </a>
        <router-link class="backgrounded btn-backgrounded" to="/about-website">
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
        color: white;
        text-decoration: none;
        display: inline-block;
        margin-top: 16px;
        padding: 14px;
        margin-left: 16px;
        margin-right: 16px;
        text-shadow: none !important;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        &.outlined {
            color: white;
            border: 1px solid white;

            transition: all 0.2s ease;

            &:hover {
                box-shadow: @mdui-shadow-20;
            }
        }

        &.btn-outlined {
            &:hover {
                background-color: darken(white, 60%);
            }
        }

        &.backgrounded {
            color: white;
            background: darken(@primary, 5%);
            border: 1px solid @primary;
            transition: all 0.2s ease;

            &:hover {
                box-shadow: @mdui-shadow-20;
            }
        }

        &.btn-backgrounded {
            &:hover {
                background: darken(@primary, 15%);
                border: 1px solid darken(@primary, 10%);
            }
        }
    }
}
</style>
<template>
    <footer class="sotap-footer">
        <div class="row">
            <div class="root-bar">
                <div class="primary-bar">
                    <div class="logo"><img class="logo-svg" src="@/assets/logo.svg"
                            draggable="false" />
                        <span class="logo-text">SoTap</span>
                    </div>
                    <div class="flex-spacer"></div>
                    <div class="social">
                        <div class="social-item" @click="go('https://github.com/sotapmc')">
                            <span class="mdi mdi-github" />
                        </div>
                        <div class="social-item"
                            @click="go('https://space.bilibili.com/1774506862')">
                            <img src="@/assets/bilibili.svg" draggable="false" />
                        </div>
                    </div>
                </div>
                <div class="secondary-bar">
                    <p>&copy; 2021 SoTap 运营团队<br>SoTap 隶属于 SAME TEAM<br><small>SoTap 是一个由 Minecraft
                            爱好者所组成的兴趣圈</small><br><small v-if="!isMobile()">网站代码由 SoTap 运营团队编写并维护，Powered by <span class="font-vue" style="font-size: 14px">Vue.js</span></small><br><small>任何第三方未经允许不得随意使用本站文本和图片，侵权必究。</small></p>
                </div>
            </div>
        </div>
        <div class="back-to-top" @click="toTop()">
            <span class="mdi mdi-chevron-up"></span>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from "@/functions";

export default Vue.extend({
    data() {
        return {};
    },
    methods: {
        toTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        go(url: string) {
            window.open(url);
        },
        isMobile
    }
});
</script>

<style lang="less" scoped>
.sotap-footer {
    background: @bggray;
    position: relative;
    padding: 32px;
    color: #aaa;

    .row {
        max-width: 1200px;
        display: block;
        margin: auto;
    }

    .back-to-top {
        @media screen and (max-width: 690px) {
            display: none;
        }

        background-color: @midgray;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        box-shadow: @mdui-shadow-6;
        cursor: pointer;
        right: 64px;
        top: -24px;
        transition: all 0.2s ease;
        z-index: 500;

        &:hover {
            background-color: @primary;
            color: white;
        }

        .mdi {
            font-size: 1.5rem;
        }
    }

    .root-bar {
        display: flex;
        flex-direction: column;

        .secondary-bar {
            /* the padding-left is for better vision experience */
            padding-left: 8px;
            display: block;
            text-align: left;
            line-height: 1.8;
            small {
                color: rgba(255, 255, 255, 0.4);
            }
        }

        .primary-bar {
            display: flex;
            align-items: center;
            flex-direction: row;

            .logo {
                display: flex;
                align-items: center;
                .logo-svg {
                    width: 58px;
                }

                .logo-text {
                    font-size: 2.5rem;
                }
            }

            .social {
                display: flex;
                align-items: center;
                color: white;

                .social-item {
                    background: @midgray;
                    box-shadow: @mdui-shadow-6;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    margin-left: 4px;
                    margin-right: 4px;
                    transition: all 0.2s ease;
                    cursor: pointer;

                    &:hover {
                        background: @primary;
                    }

                    &:first-child {
                        margin-left: 0;
                    }

                    &:last-child {
                        margin-right: 0;
                    }

                    img {
                        width: 24px;
                    }

                    .mdi {
                        &::before {
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }
}
</style>

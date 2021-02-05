<template>
    <footer class="sotap-footer">
        <div class="row">
            <div class="primary-bar">
                <div class="footer-logo">
                    <img class="logo-svg" src="@/assets/logo.svg" draggable="false" />
                    <span class="logo-text">SoTap</span>
                </div>
                <div class="flex-spacer"></div>
                <div class="social">
                    <div class="social-item" @click="go('https://github.com/sotapmc')">
                        <span class="mdi mdi-github" />
                    </div>
                    <div class="social-item" @click="go('https://space.bilibili.com/1774506862')">
                        <img src="@/assets/bilibili.svg" draggable="false" />
                    </div>
                </div>
            </div>
            <div class="secondary-bar">
                <p>&copy; 2021 SoTap 管理组<br><small>SoTap 是一个由 Minecraft
                        爱好者所组成的兴趣圈子</small></p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {};
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

    .secondary-bar {
        display: block;
        margin-top: 64px;
        text-align: center;
        line-height: 1.8;
        small {
            color: rgba(255, 255, 255, 0.4);
        }
    }

    .primary-bar {
        display: flex;
        align-items: center;

        .footer-logo {
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
                background: rgb(56, 56, 56);
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
</style>
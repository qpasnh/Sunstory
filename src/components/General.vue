<template>
    <div class="general">
        <static-banner :bg="banner">
            <template #title>
                <slot name="bannerTitle"></slot>
            </template>
            <template #text>
                <slot name="bannerText"></slot>
            </template>
        </static-banner>
        <div class="general-container">
            <div id="typo" class="general-typo sotap-typo">
                <slot name="content" />
            </div>
            <div class="sidebar">
                <div v-if="recents" class="sidebar-item recents">
                    <div class="sidebar-item-title">其它你需要知道的...</div>
                    <div class="recents-item" v-for="(x, i) in recentItems" :key="i"
                        @click="go(x.href)">
                        <div v-if="x.img" class="recents-img"
                            :style="'background-image: url(' + x.img + ')'" />
                        <span class="recents-text">
                            {{ x.text }}
                        </span>
                    </div>
                </div>
                <div v-if="catalogue" class="sidebar-item catalogue">
                    <div class="catalogue-container">
                        <div class="sidebar-item-title">文章目录</div>
                        <Catalogue class="catalogue-instance" />
                    </div>
                </div>
                <div v-if="help" class="sidebar-item help">
                    <img src="https://sotap.org/images/help.png" />
                    <div class="sidebar-item-title">需要帮助？</div>
                    <ul>
                        <li>客服邮箱：support@sotap.org</li>
                        <li>玩家社区的帮助中心 24H 开放</li>
                        <li>前往官方博客中的 support 中心联系客服</li>
                        <li>前往官方博客获取最新社区消息和公告</li>
                    </ul>
                </div>
                <div v-if="afdian" class="sidebar-item afdian">
                    <div class="sidebar-item-title">支持我们</div>
                    <div class="afdian-container">
                        <img @click="go('https://afdian.net/@sotap')" class="afdian-logo"
                            src="@/assets/afdian.svg" draggable="false" />
                        <div class="afdian-text sotap-typo">
                            <p>SoTap 的运营不易。如果你喜欢 SoTap，可以选择到<a href="https://afdian.net/@sotap"
                                    target="_blank">爱发电</a>上为我们充值。<small><em>亦可点击上方按钮</em></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticBanner from './StaticBanner.vue';
import Catalogue from '@/components/vue-side-catalog/vue-side-catalog.vue';

export default Vue.extend({
    props: {
        banner: {
            type: String
        },
        recents: {
            type: Boolean,
            default: true
        },
        help: {
            type: Boolean,
            default: true
        },
        afdian: {
            type: Boolean,
            default: true
        },
        catalogue: {
            type: Boolean,
            default: true
        }
    },
    components: {
        StaticBanner,
        Catalogue
    },
    data() {
        return {
            recentItems: [
                {
                    img: 'https://sotap.oss-cn-qingdao.aliyuncs.com/0.jpg',
                    text: 'FAQ：常见问题及其解答',
                    href: '//baidu.com'
                },
                {
                    img: 'https://sotap.oss-cn-qingdao.aliyuncs.com/0.jpg',
                    text: 'FAQ：常见问题及其解答',
                    href: '//baidu.com'
                },
                {
                    text: 'FAQ：常见问题及其解答',
                    href: '//baidu.com'
                }
            ]
        };
    },
    methods: {
        go(url: string) {
            if (url.substr(0, 1) === '/' && url.substr(1, 1) !== '/') {
                this.$router.push(url);
            } else {
                window.open(url);
            }
        }
    }
});
</script>

<style lang="less" scoped>
.general {
    width: 100%;
    position: relative;
}

.general-container {
    max-width: 1200px;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 64px 0;

    @media screen and (max-width: 1200px) {
        margin-left: 32px;
        margin-right: 32px;
    }

    .general-typo {
        width: 70%;
        margin-right: 16px;
    }

    .sidebar {
        width: 30%;
        margin-left: 16px;
        position: sticky;
        top: calc(72px + 16px);
        display: flex;
        flex-direction: column;

        .sidebar-item {
            width: 100%;
            margin-bottom: 32px;
            color: @textgray;

            .sidebar-item-title {
                margin-bottom: 16px;
                font-size: 20px;
                font-weight: bold;
                color: black;
            }

            &.help {
                img {
                    width: 100%;
                    margin-bottom: 16px;
                }

                ul {
                    line-height: 1.8;
                    padding-left: 16px;
                }
            }

            &.catalogue {
                position: relative;
            }

            &.afdian {
                .afdian-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .afdian-logo {
                        .hide-selection;
                        width: 100%;
                        margin-bottom: 16px;
                        cursor: pointer;
                        transition: all .2s ease;
                        border-radius: 8px;

                        &:hover {
                            box-shadow: @mdui-shadow-2;
                        }
                    }
                }
            }

            &.recents {
                display: flex;
                flex-direction: column;

                .recents-item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 32px;
                    cursor: pointer;
                    .font-header;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &:hover {
                        .recents-text {
                            color: @primary;
                        }
                    }

                    .recents-img {
                        width: 80px;
                        height: 80px;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        margin-right: 16px;
                    }

                    .recents-text {
                        font-size: 22px;
                        max-width: calc(100% - 80px - 16px);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        transition: all 0.2s ease;
                    }
                }
            }
        }
    }
}
</style>
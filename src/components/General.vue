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
            <slot name="content" />
            <div class="sidebar" v-if="!isMobile()">
                <div v-if="recents" class="sidebar-item recents">
                    <div class="sidebar-item-title">其它你可能感兴趣的...</div>
                    <div class="recents-item" v-for="(x, i) in recentItems" :key="i"
                        @click="go(x.href)">
                        <div v-if="x.img" class="recents-img" v-lazy:background-image="x.img" />
                        <span class="recents-text">
                            {{ x.text }}
                        </span>
                    </div>
                </div>
                <div v-if="catalogue" class="sidebar-item catalogue">
                    <div class="catalogue-container">
                        <div class="sidebar-item-title">文章目录</div>
                        <Catalogue :container="'.general-typo'" :innerScroll="true"
                            class="catalogue-instance" />
                    </div>
                </div>
                <div v-if="help" class="sidebar-item help">
                    <img src="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/help.png" />
                    <div class="sidebar-item-title">需要帮助？</div>
                    <ul class="sotap-typo">
                        <li>管理邮箱：support@sotap.org</li>
                        <li><a href="https://g.sotap.org/t/support" target="_blank">社区 BBS 的帮助板块</a> 24H 开放</li>
                        <li><a href="https://qm.qq.com/cgi-bin/qm/qr?k=8kbYiHNk0L8Neqo_SbnLYo6in0TtA0WS&jump_from=webapi" target="_blank">加入官方 QQ 群</a>联系管理组成员</li>
                        <li>阅读<a href="https://wiki.sotap.org" target="_blank">官方 Wiki</a> 来查找你的问题解答</li>
                        <li>前往<a href="https://blog.sotap.org" target="_blank">官方博客</a>获取最新消息和公告</li>
                    </ul>
                </div>
                <div v-if="afdian" class="sidebar-item afdian">
                    <div class="sidebar-item-title">支持我们</div>
                    <div class="afdian-container">
                        <img @click="go('https://afdian.net/@sotap')" class="afdian-logo"
                            src="@/assets/afdian.svg" draggable="false" />
                        <div class="afdian-text sotap-typo">
                            <p>SoTap 的运营不易。如果你喜欢 SoTap，可以选择到<a href="https://afdian.net/@sotap"
                                    target="_blank">爱发电</a>上赞助我们。<small><em>亦可点击上方按钮</em></small>
                            </p>
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
import { isMobile } from '@/functions';
import SidebarItems from '@/data/content/SidebarItems.json';

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
            recentItems: SidebarItems
        };
    },
    methods: {
        go(url: string) {
            if (url.substr(0, 1) === '/' && url.substr(1, 1) !== '/') {
                this.$router.push(url);
            } else {
                window.open(url);
            }
        },
        isMobile
    },
    mounted() {
        if (this.isMobile()) {
            (document.querySelector('.general-typo') as HTMLDivElement).style.width = '100%';
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
    margin-bottom: 96px;

    @media screen and (max-width: 1200px) {
        margin-left: 32px;
        margin-right: 32px;
    }

    .general-typo {
        @media screen and (max-width: 1200px) {
            width: 100%;
        }

        @media screen and (min-width: 1200px) {
            width: 70%;
            margin-right: 16px;
        }
    }

    .sidebar {
        @media screen and (max-width: 1200px) {
            display: none;
        }

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
                    border-radius: 4px;
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
                        transition: all 0.2s ease;
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
                        transition: all 0.2s ease;
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
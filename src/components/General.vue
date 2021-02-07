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
                <div class="sidebar-item recents">
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
                <div class="sidebar-item catalogue">
                    <div class="catalogue-container">
                        <div class="sidebar-item-title">文章目录</div>
                        <Catalogue class="catalogue-instance"/>
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
    props: ['banner'],
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
        position: relative;
        display: flex;
        flex-direction: column;

        .sidebar-item {
            width: 100%;
            margin-bottom: 32px;

            .sidebar-item-title {
                margin-bottom: 16px;
                font-size: 20px;
                font-weight: bold;
                color: black;
            }

            &.catalogue {
                position: relative;

                .catalogue-container {
                    position: absolute;
                    top: 0;
                    width: 100%;

                    .catalogue-instance {
                        position: sticky;
                        width: 100%;
                    }
                }
            }

            &.recents {
                display: flex;
                flex-direction: column;
                color: @textgray;

                .recents-item {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    margin-bottom: 32px;
                    cursor: pointer;

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
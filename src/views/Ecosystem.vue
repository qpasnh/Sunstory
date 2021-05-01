<template>
    <div class="ecosystem">
        <static-banner bg="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/ecosystem.jpg">
            <template #title>SoTap 生态系统</template>
            <template #text>在这里，我们汇总了 SoTap 所有的子网站、服务器地址等衍生，它们都是<em> SoTap
                    生态系统</em>的组成部分。你可以在这里查阅到你所需要的网址和服务器地址。</template>
        </static-banner>
        <div class="ecosystem-container">
            <div class="ecosystem-section">
                <h1 style="opacity: 0" v-view.once="visEffect">服务器地址</h1>
                <div style="opacity: 0" v-view.once="visEffect" class="ips-container"
                    v-for="(x, i) in ips" :key="i">
                    <h2>{{ x.ip }}
                        <smart-button v-if="!isMobile()" :onclick="[copyIP, x.ip]"
                            class="copy-button" iconInactive="mdi mdi-clipboard-multiple-outline"
                            iconActive="mdi mdi-check" textInactive="点击复制" textActive="复制成功"
                            colorInactive="" colorActive="white" backgroundInactive=""
                            backgroundActive="#4caf50" borderColorInactive=""
                            borderColorActive="#4caf50" />
                    </h2>
                    <p v-html="x.desc"></p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="ecosystem-section">
                <h1 style="opacity: 0" v-view.once="visEffect">站点</h1>
                <ecosystem-item style="opacity: 0" v-view.once="visEffect"
                    :style="i === 0 ? 'margin-top: 0' : ''" class="ecosystem-item-box"
                    v-for="(x, i) in eco" :key="i" :logo="x.logo" :badges="x.badges" :desc="x.desc"
                    :info="x.info" :features="x.features" :links="x.links" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticBanner from '@/components/StaticBanner.vue';
import EcosystemItem from '@/components/EcosystemItem.vue';
import Ecosystem from '@/data/content/Ecosystem.json';
import { copy, isMobile, visEffect } from '@/functions';
import SmartButton from '@/components/SmartButton.vue';

export default Vue.extend({
    components: {
        StaticBanner,
        EcosystemItem,
        SmartButton
    },
    data() {
        return {
            eco: Ecosystem,
            ips: [
                {
                    ip: "inside.sotap.org",
                    desc: '<strong>内服通用地址，第一推荐，仅限内服玩家。</strong>无需特别指明端口。进入需要内服白名单。如果你没有，可以到<a href="https://join.sotap.org" target="_blank">这里</a>填写表单申请一个。'
                },
                {
                    ip: 'play.sotap.org',
                    desc:
                        '<strong>外服通用地址，第一推荐。</strong>无需特别指明端口。其指向将会伴随着服务器的周目更替而变化，原则上保持最新。'
                },
                {
                    ip: 'd2.toho.cloud:22003',
                    desc:
                        '<strong>由服务商提供的优化地址。</strong>SoTap 由于并没有足够的资金购买独立机，因此使用了「淘宝服务商+SoTap 自备份」的方案进行日常运营。这是服务商提供的 IP 地址，可放心链接，亦可用于 play.sotap.org 失效时的解决方案。'
                },
                {
                    ip: 'bgp.d2.toho.cloud:22003',
                    desc:
                        '<strong>由服务商提供的「阿里云八线 BGP 节点」优化地址。</strong>可在网速较差或上述 IP 出现问题时使用。'
                },
                {
                    ip: 'hw.d2.toho.cloud:22003',
                    desc:
                        '<strong>由服务商提供的「海外香港 CN2 节点」优化地址。</strong>如果你身处非中国大陆地区，则可能需要该地址以防止网络抖动等情况。'
                }
            ],
            clipboardIcon: 'mdi-clipboard-multiple-outline',
            clipboardBackground: '',
            clipboardText: '点击复制'
        };
    },
    methods: {
        copyIP(ip: string) {
            copy(ip);
            this.clipboardIcon = 'mdi-check';
            this.clipboardBackground = '#4caf50';
            this.clipboardText = '复制成功';
        },
        isMobile,
        visEffect
    }
});
</script>

<style lang="less" scoped>
.ecosystem {
    width: 100%;
    position: relative;

    .ecosystem-container {
        max-width: 1200px;
        margin: auto;

        @media screen and (max-width: 1200px) {
            padding: 0 32px;
        }
    }

    .ecosystem-item-box {
        margin: 64px 0;
    }

    .ecosystem-section {
        h1 {
            font-size: 3rem;
        }

        .ips-container {
            h2 {
                .copy-button {
                    cursor: pointer;
                    padding: 2px 6px;
                    border: 0;
                    border: 1px solid @primary;
                    background: @primary;
                    color: white;
                    transition: all 0.2s ease;
                    vertical-align: middle;
                    margin-left: 16px;
                    outline: none;
                    .font-text;

                    &:hover {
                        background: @inv;
                        color: @primary;
                        border-color: @primary;
                        transform: scale(1.1);
                    }
                }
            }

            p {
                color: @textgray;
                font-size: 20px;
                line-height: 1.8;

                strong {
                    color: black;
                }
            }
        }
    }
}
</style>
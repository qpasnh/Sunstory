<template>
    <div class="ecosystem-item">
        <div class="ecosystem-logo">
            <div v-html="logo" />
            <div v-if="badges && !isMobile()" class="badges">
                <div class="badge" v-for="(x, i) in badges" :key="i"
                    :style="'background: ' + x.background + '; color: ' + x.color + ';'">
                    {{ x.text }}
                </div>
            </div>
        </div>
        <div class="ecosystem-desc sotap-typo" v-html="desc.join('')">
        </div>
        <div class="ecosystem-info">
            <div class="column">
                <div class="column-title">基本信息</div>
                <div class="info-item" v-for="(x, i) in info" :key="i">
                    <div class="info-icon">
                        <span class="mdi" :class="x.icon" />
                    </div>
                    <div class="info-text">
                        {{ x.text }}
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="column-title">特点</div>
                <div class="info-item" v-for="(x, i) in features" :key="i">
                    <div class="info-icon">
                        <span class="mdi" :class="x.icon" />
                    </div>
                    <div class="info-text">
                        {{ x.text }}
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="column-title">链接及说明</div>
                <div class="sotap-typo" v-html="links.join('')" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/functions';

export default Vue.extend({
    props: {
        info: {
            type: Array
        },
        logo: {
            type: String
        },
        desc: {
            type: Array
        },
        badges: {
            type: Array
        },
        features: {
            type: Array
        },
        links: {
            type: Array
        }
    },
    methods: {
        isMobile
    }
});
</script>

<style lang="less" scoped>
.ecosystem-item {
    width: 100%;
    text-align: left;

    .ecosystem-logo {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        & > *:not(.badges) {
            font-size: 3.3rem;
        }

        &,
        & > * {
            .hide-selection;
        }

        .badges {
            margin-left: 32px;
            display: flex;
            align-items: flex-end;

            > * {
                margin-left: 8px;
                margin-right: 8px;

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .ecosystem-desc {
        font-size: 20px;
        color: @textgray;
        line-height: 1.8;
    }

    .ecosystem-info {
        width: 100%;
        position: relative;
        display: flex;
        
        @media screen and (min-width: 1200px) {
            flex-direction: row;
        }

        @media screen and (max-width: 1200px) {
            flex-direction: column;
        }

        .column {
            @media screen and (min-width: 1200px) {
                width: 33.3333%;
            }
            position: relative;

            .column-title {
                font-weight: bold;
                margin: 16px 0;
                font-size: 18px;
            }

            .sotap-typo {
                line-height: 1.8;
                color: @textgray;
            }

            .info-item {
                display: flex;
                align-items: center;
                margin: 8px 0;

                .mdi {
                    font-size: 1.8rem;
                    color: @textgray;
                }

                .info-icon {
                    @media screen and (min-width: 1200px) {
                        display: inline-block;
                    }
                }

                .info-text {
                    margin-left: 1em;
                    font-size: 22px;
                    @media screen and (min-width: 1200px) {
                        display: inline-block;
                    }
                }
            }
        }
    }
}
</style>
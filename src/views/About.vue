<template>
    <div class="about">
        <static-banner bg="https://sotap.oss-cn-qingdao.aliyuncs.com/xc2.png">
            <template #title>
                关于 SoTap
            </template>
            <template #text>
                在这里你可以了解到 SoTap 自建立以来所发生的<em>大事记</em>。同时，欢迎认识我们的运营团队！
            </template>
        </static-banner>
        <div class="row about-intro-container">
            <div class="about-intro">
                <div class="intro-content">
                    <h1 style="opacity: 0" v-view.once="visEffect">SoTap 是怎样的一个社区？</h1>
                    <p class="sotap-typo" style="opacity: 0" v-view.once="visEffect">
                        <strong>「海纳百川，有容乃大。」</strong>社区欢迎所有拥有着开放和包容理念的人群。
						无论你是熟悉 MC 或是初次接触 MC，加入即为家人。<br>
						这里，社区成员不仅仅是游戏玩乐，卖萌打滚，更有着多元且合适的想法交流，热烈而欢快的讨论。<br>
						无论早中晚，一声「你好！」表达了所有真挚的问候。游戏内有各种特色活动，从夏季 SoTap 运动会到玩家自发组织各类活动比赛；
						从各色小游戏到组团下地牢；玩家们在玩乐中体会生活的花红柳绿，社区的温馨美好。<br>我们由衷希望 SoTap 是一个愉快的服务器，亦是一个温馨的兴趣社区，是玩家的庇护所，养老地，甚至是心中的一片乐土。
						我们也希望通过这个社区，去沟通世界，去成为不同地区玩家的友情的桥梁，成为所有成员自由而充满着温柔的港湾。
                    </p>
                </div>
                <div v-view.once="visEffect" class="intro-image"
                    style="background-image: url(https://sotap.oss-cn-qingdao.aliyuncs.com/xc3.png); opacity: 0" />
            </div>
            <div class="about-intro">
                <div v-view.once="visEffect" class="intro-image"
                    style="opacity: 0; background-image: url(https://sotap.oss-cn-qingdao.aliyuncs.com/3.png)" />
                <div class="intro-content">
                    <h1 style="opacity: 0" v-view.once="visEffect">OFG 的意义与和其它服务器的区别</h1>
                    <p class="sotap-typo" style="opacity: 0" v-view.once="visEffect">
                        OFG 是 <strong>O</strong>ught <strong>F</strong>or <strong>G</strong>ay 的缩写，OFG 性质的社区则是专注于 LGBT
                        群体用户体验的社区。LGBT 群体将是本游戏服务器的主要玩家。<br>我们与其它服务器最大不同的一点是，我们的服务器的主要受众群体是
                        Gay<code>/geɪ/</code>同性恋，当然也会有「直男/直女」的加入。我们欢迎所有对同性恋抱着「包容、不歧视、理解」的态度的人们。
						我们致力于为玩家提供一个线上的社区，另一个维度的温馨世界。我们希望营造一个轻松、舒适、友善的环境和提供极致的游戏体验，同时以游戏为载体将其变为一个有趣的交友平台让玩家在游玩的同时找到更多志同道合的的伙伴。
                        <br>我们更希望将这里构建成一个没有歧视的理想世界，这里同/直/双都可以无偏见的和平友好共处，让这里成为 LGBT 玩家们的心灵港湾。
                    </p>
                </div>
            </div>
        </div>
        <section-title>
            <template #subtitle>发展历程</template>
            <template #title>Timeline</template>
            <template #desc>在这里，你可以以时间线的形式查看自 2019 年 7 月 SoTap 创立以来的发展历程。</template>
        </section-title>
        <div class="row timeline">
            <div class="timeline-content">
                <div class="line"></div>
                <div class="year-row" v-for="(x, i) in timeline" :key="i">
                    <div style="opacity: 0" class="year" v-view.once="visLeft">{{ x.year }}</div>
                    <div class="event-row" v-for="(y, k) in x.events" :key="k">
                        <div style="opacity: 0" class="event"
                            v-view.once="isMobile() ? visEffect : visRight" v-if="y.name">
                            <span>{{ y.name }}</span>
                        </div>
                        <div class="content sotap-typo">
                            <swiper style="opacity: 0" v-view.once="visEffect" v-if="y.swiper"
                                class="content-swiper" :ref="'contentSwiper-' + i + '-' + k"
                                :options="swiperOptions">
                                <swiper-slide v-for="(z, u) in y.swiper" :key="u"
                                    class="content-swiper-item"
                                    :style="'background-image: url(' + z + ')'"></swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                            <div v-if="y.swiper" @click="slide(0, i + '-' + k)" class="swiper-prev">
                                <span class="mdi mdi-arrow-left"></span>
                            </div>
                            <div v-if="y.swiper" @click="slide(1, i + '-' + k)" class="swiper-next">
                                <span class="mdi mdi-arrow-right"></span>
                            </div>
                            <h1 style="opacity: 0" v-if="y.title" v-view.once="visEffect">
                                {{ y.title }}
                            </h1>
                            <p style="opacity: 0" v-if="y.text" v-view.once="visEffect"
                                v-html="y.text">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section-title>
            <template #subtitle>运营团队介绍</template>
            <template #title>SoTaper</template>
            <template #desc>这里，是目前在职的 SoTap 运营团队成员<br><small>排名并列，不分先后，此处仅作视觉展示</small></template>
        </section-title>
        <div class="row no-margin-bottom">
            <div class="people-description background-primary">
                <div class="people-box" v-for="(x, i) in people" :key="i">
                    <img draggable="false" class="people-avatar" :src="x.avatar" />
                    <div class="people-content">
                        <div class="people-title">
                            <h2>{{ x.position }}</h2>
                            <h1>{{ x.name }}</h1>
                        </div>
                        <div class="people-desc" v-html="x.desc">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row no-margin">
            <divider :coverOpacity="0.2" class="join-divider"
                img="https://sotap.oss-cn-qingdao.aliyuncs.com/8.png" :speedFactor="0.05">
                <h1>编程设计，样样在行？</h1>
                <p>SoTap 运营团队欢迎你的加入！当然，即使你并不会编程，你仍然拥有加入的机会——只要你热爱 SoTap，并愿意为之付出努力！和我们一起建设一个更美丽、美好的
                    SoTap 吧！</p>
                <div class="join-link">
                    <a class="ui-button backgrounded" href="https://wiki.sotap.org/#/about/management" target="_blank">
                        <span class="mdi mdi-launch"></span>&emsp;了解更多
                    </a>
                </div>
            </divider>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticBanner from '@/components/StaticBanner.vue';
import { Animation, visEffect, isMobile } from '@/functions';
import SectionTitle from '@/components/SectionTitle.vue';
import Divider from '@/components/Divider.vue';
import AboutTimeline from '@/data/content/AboutTimeline.json';
import AboutPeople from '@/data/content/AboutPeople.json';

export default Vue.extend({
    components: {
        StaticBanner,
        SectionTitle,
        Divider
    },
    methods: {
        visEffect,
        visRight(x: ViewObject) {
            x.target.element.style.opacity = '';
            Animation.ease('in', 'right', x.target.element, 1000, 150, 50);
        },
        visLeft(x: ViewObject) {
            x.target.element.style.opacity = '';
            Animation.ease('in', 'left', x.target.element, 1000, 150, 50);
        },
        slide(direction: 0 | 1, target: string) {
            // @ts-ignore
            let instance = this.$refs['contentSwiper-' + target][0].swiperInstance;
            if (direction === 0) {
                instance.slidePrev();
            } else {
                instance.slideNext();
            }
        },
        isMobile
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            timeline: AboutTimeline as Array<TimelineObject>,
            people: AboutPeople
        };
    },
    mounted() {
        document.querySelectorAll("img").forEach(k => {
            k.draggable = false;
        })
    }
});
</script>

<style lang="less" scoped>
.row {
    width: 100%;
    position: relative;
    margin: 32px 0;

    @media screen and (min-width: 1024px) {
        margin: 64px 0;
    }

    &.about-intro-container {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        position: relative;
        margin: auto;
        margin-bottom: 96px;

        .about-intro {
            display: flex;
            align-items: center;
            position: relative;

            @media screen and (min-width: 1024px) {
                margin: 0 32px;
                &:first-child {
                    margin-bottom: 64px;
                }
            }

            @media screen and (max-width: 1024px) {
                flex-direction: column;

                &:first-child {
                    margin-bottom: 32px;
                }
            }

            .intro-image {
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 4px;
                box-sizing: content-box;
                transition: all 0.3s ease;
                z-index: 500;

                @media screen and (min-width: 1024px) {
                    width: 50%;
                    height: 320px;

                    &:last-child {
                        margin-left: 64px;
                    }

                    &:first-child {
                        margin-right: 64px;
                    }
                }

                @media screen and (max-width: 1024px) {
                    width: calc(100% - 64px);
                    height: 200px;
                }

                &:hover {
                    box-shadow: @mdui-shadow-20;
                    @media screen and (min-width: 1200px) {
                        &:first-child {
                            transform: scale(1.3) rotateZ(-5deg) !important;
                        }

                        &:last-child {
                            transform: scale(1.3) rotateZ(5deg) !important;
                        }
                    }
                }
            }

            .intro-content {
                @media screen and (min-width: 1024px) {
                    width: 50%;
                }

                @media screen and (max-width: 1024px) {
                    padding: 32px;
                }

                h1 {
                    font-size: 2rem;
                    .font-header;
                    margin-top: 0;
                }

                p {
                    font-size: 18px;
                    color: @textgray;
                    line-height: 1.6;
                    margin-bottom: 0;
                }
            }
        }
    }

    .people-description {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;

        .people-box {
            max-width: 1200px;
            margin: auto;
            display: flex;
            align-items: center;
            padding: 32px;
            color: black;

            @media screen and (min-width: 1024px) {
                flex-direction: row;
            }

            @media screen and (max-width: 1024px) {
                flex-direction: column;
            }

            &:first-child {
                margin-top: 64px;
            }

            &:last-child {
                margin-bottom: 64px;
            }

            .people-avatar {
                width: 150px;
                border-radius: 50%;
                .hide-selection;
            }

            .people-content {
                @media screen and (min-width: 1024px) {
                    margin-left: 48px;
                }

                @media screen and (max-width: 1024px) {
                    text-align: center;
                }

                .people-title {
                    @media screen and (max-width: 1024px) {
                        margin-top: 32px;
                    }

                    h2 {
                        margin-top: 0;
                        margin-bottom: 8px;
                        font-weight: 400;
                        line-height: 1;
                        font-size: 1.4rem;
                    }

                    h1 {
                        line-height: 1;
                        margin-top: 0;
                        margin-bottom: 16px;
                        font-size: 2.5rem;
                    }
                }

                .people-desc {
                    font-size: 20px;
                    line-height: 1.8;
                    margin-bottom: 0;
                    color: @textgray;
                }
            }
        }
    }

    &.timeline {
        .timeline-content {
            max-width: 1200px;
            position: relative;
            margin: auto;

            .line {
                height: 100%;
                position: absolute;
                border-left: 2px dotted rgba(0, 0, 0, 0.1);
                width: 2px;
                left: 8rem;

                @media screen and (max-width: 1024px) {
                    display: none;
                }
            }

            .year-row {
                position: relative;
                @media screen and (min-width: 1024px) {
                    max-width: calc(1200px - 9rem);
                    margin-left: 13rem;
                }

                .year {
                    .font-roman;
                    .hide-selection;
                    font-size: 2.5rem;

                    @media screen and (min-width: 1024px) {
                        position: absolute;
                        left: -11rem;
                        line-height: 1;
                    }

                    @media screen and (max-width: 1024px) {
                        padding: 16px 32px;
                        padding-top: 0;
                    }
                }

                .event-row {
                    position: relative;

                    @media screen and (max-width: 1024px) {
                        margin: 0 32px;
                        width: initial !important;
                    }

                    @media screen and (max-width: 1200px) {
                        width: calc(100% - 32px);
                    }

                    .event {
                        max-width: 6rem;
                        word-wrap: break-word;
                        position: absolute;
                        z-index: 50;

                        @media screen and (max-width: 1024px) {
                            position: absolute;
                            right: 0;
                        }

                        @media screen and (min-width: 1024px) {
                            left: -4rem;
                            margin-top: 4px;
                        }

                        span {
                            font-weight: bold;
                            position: relative;
                            font-size: 14px;
                            .hide-selection;

                            &::after {
                                content: '';
                                width: 110%;
                                display: block;
                                height: 0.3rem;
                                background: @primary;
                                position: absolute;
                                bottom: 1px;
                                z-index: -1;
                                left: -50%;
                                right: -50%;
                                margin: auto;
                            }
                        }
                    }

                    .content {
                        @media screen and (min-width: 1024px) {
                            margin-left: 3rem;
                        }

                        h1 {
                            margin-top: 0;
                        }

                        .swiper-next,
                        .swiper-prev {
                            position: absolute;
                            z-index: 200;
                            opacity: 0.3;

                            @media screen and (max-width: 1024px) {
                                top: calc(12rem - 48px);
                            }

                            @media screen and (min-width: 1024px) {
                                top: calc(25rem - 48px);
                            }

                            &:hover {
                                opacity: 1;
                            }
                        }

                        .swiper-next {
                            right: 0;
                            @media screen and (max-width: 960px) {
                                right: 32px;
                            }
                            border-bottom-right-radius: 4px;
                        }

                        .swiper-prev {
                            left: 48px;
                            @media screen and (max-width: 960px) {
                                left: calc(48px - 16px);
                            }
                            border-bottom-left-radius: 4px;
                        }

                        .content-swiper {
                            width: 100%;

                            @media screen and (min-width: 960px) {
                                height: 25rem;
                            }

                            @media screen and (max-width: 960px) {
                                height: 12rem;
                            }

                            border-radius: 4px;
                            margin-bottom: 32px;
                            position: relative;

                            .content-swiper-item {
                                background-size: cover;
                                background-position: center;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

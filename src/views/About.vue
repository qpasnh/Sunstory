<template>
    <div class="about">
        <static-banner bg="https://i.loli.net/2021/02/06/PKBviXMZ5bm6YJx.png">
            <template #title>
                关于 SoTap
            </template>
            <template #text>
                在这里你可以了解到 SoTap 自建立以来所发生的<em>几乎</em>一切事情。同时，欢迎认识我们的管理组！
            </template>
        </static-banner>
        <div class="row about-intro-container">
            <div class="about-intro">
                <div class="intro-content">
                    <h1 style="opacity: 0" v-view.once="visEffect">SoTap 是怎样的一个社区</h1>
                    <p style="opacity: 0" v-view.once="visEffect">
                        SoTap 是怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区
                        怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一
                        个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎
                        样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个
                        社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样
                        的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社
                        区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的
                        一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区
                        怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一
                        个社区怎样的一个社区怎样的一个社区怎样的一个社区
                    </p>
                </div>
                <div v-view.once="visEffect" class="intro-image"
                    style="background-image: url(https://i.loli.net/2021/02/06/iOtYR8xsmrQdg1a.png); opacity: 0" />
            </div>
            <div class="about-intro">
                <div v-view.once="visEffect" class="intro-image"
                    style="opacity: 0; background-image: url(https://i.loli.net/2021/02/06/8IyeYc76wEDL53v.png)" />
                <div class="intro-content">
                    <h1 style="opacity: 0" v-view.once="visEffect">OFG 的意义与和其它服务器的区别</h1>
                    <p style="opacity: 0" v-view.once="visEffect">
                        SoTap 是怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区
                        怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一
                        个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎
                        样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个
                        社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样
                        的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社
                        区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的
                        一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区
                        怎样的一个社区怎样的一个社区怎样的一个社区怎样的一个社区怎样的一
                        个社区怎样的一个社区怎样的一个社区怎样的一个社区
                    </p>
                </div>
            </div>
        </div>
        <section-title>
            <template #subtitle>发展历程</template>
            <template #title>Timeline</template>
            <template #desc>在这里，你可以以时间线的形式查看自 2019 年 SoTap 创立以来的发展历程。</template>
        </section-title>
        <div class="row timeline">
            <div class="timeline-content">
                <div class="line"></div>
                <div class="year-row" v-for="(x, i) in timeline" :key="i">
                    <div style="opacity: 0" class="year" v-view.once="visLeft">{{ x.year }}</div>
                    <div class="event-row" v-for="(y, k) in x.events" :key="k">
                        <div style="opacity: 0" class="event" v-view.once="visRight" v-if="y.name">
                            <span>{{ y.name }}</span>
                        </div>
                        <div class="content sotap-typo">
                            <swiper style="opacity: 0" v-view.once="visEffect" v-if="y.swiper" class="content-swiper"
                                :ref="'contentSwiper-' + i + '-' + k" :options="swiperOptions">
                                <swiper-slide v-for="(z, u) in y.swiper" :key="u"
                                    class="content-swiper-item"
                                    :style="'background-image: url(' + z + ')'"></swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                            <div v-if="y.swiper" @click="slide(0, i + '-' + k)" class="swiper-prev">
                                <span class="mdi mdi-arrow-left"></span></div>
                            <div v-if="y.swiper" @click="slide(1, i + '-' + k)" class="swiper-next">
                                <span class="mdi mdi-arrow-right"></span></div>
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
            <template #subtitle>管理组介绍</template>
            <template #title>SoTaper</template>
            <template #desc>这里，是目前在职的四名 SoTap 管理组成员<br><small>排名并列，不分先后，此处仅作视觉展示</small></template>
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
                img="https://i.loli.net/2021/02/06/fWOFoxL3nE2V4pN.jpg" :speedFactor="0.15">
                <h1>编程设计，样样在行？</h1>
                <p>SoTap 管理组欢迎你的加入！当然，即使你并不会编程，你仍然拥有加入的机会——只要你热爱 SoTap，并愿意为之付出努力！和我们一起建设一个更美丽、美好的
                    SoTap 吧！</p>
                <router-link class="ui-button backgrounded" to="/join/management">
                    <span class="mdi mdi-launch"></span>&emsp;了解更多
                </router-link>
            </divider>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticBanner from '@/components/StaticBanner.vue';
import { Animation, visEffect } from '@/functions';
import SectionTitle from '@/components/SectionTitle.vue';
import Divider from '@/components/Divider.vue';

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
        }
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            timeline: [
                {
                    year: 2019,
                    events: [
                        {
                            swiper: [
                                'https://i.loli.net/2021/02/06/PKBviXMZ5bm6YJx.png',
                                'https://i.loli.net/2021/02/06/PKBviXMZ5bm6YJx.png',
                                'https://i.loli.net/2021/02/06/PKBviXMZ5bm6YJx.png'
                            ],
                            name: 'eventX',
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        }
                    ]
                },
                {
                    year: 2020,
                    events: [
                        {
                            name: 'eventX',
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            name: 'eventX',
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        }
                    ]
                },
                {
                    year: 2021,
                    events: [
                        {
                            title: 'titleX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        },
                        {
                            name: 'eventX',
                            text:
                                '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
                        }
                    ]
                }
            ] as Array<TimelineObject>,
            people: [
                {
                    name: 'Sapherise',
                    position: 'Founder & Owner',
                    desc:
                        'SoTap 服务器服主、运营者，负责服务器的运维和推广，统筹服务器的各种开销和资金流管理，策划活动和编写文案，调配组织管理组完成服务器事项。',
                    avatar: 'https://sotap.org/images/sapherise.png'
                },
                {
                    name: 'Subilan',
                    position: 'Developer',
                    desc:
                        '现就职 Tencent，负责服务器后台技术指导和一些相关功能的开发，职责是维护所有相关服务器的稳定运行和技术故障排查，开发网页新功能和新插件。',
                    avatar: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/assets/avatar-big.jpg'
                },
                {
                    name: 'Cropenfe',
                    position: 'In-game Operator',
                    desc:
                        '大学鸡一只，主要负责新玩家游戏内玩法指导和游戏答疑，参与修建公共设施，维护游戏内的秩序，辅助活动组织，处理玩家游戏内问题和监督玩家行为。',
                    avatar: 'https://i.loli.net/2021/02/06/xBrncPUVEzThkK6.jpg'
                },
                {
                    name: 'Constant137',
                    position: 'Operator & Developer',
                    desc:
                        '爱好物理的大学生，真·量子力学研究者，负责服务器和社区群组内的管理事务，协调问题和解决等。同时也是开发组的一员，负责开发新的插件和项目，丰富服务器内容。',
                    avatar: 'https://sotap.org/images/constant137.jpg'
                }
            ]
        };
    }
});
</script>

<style lang="less" scoped>
.row {
    width: 100%;
    position: relative;
    margin: 32px 0;

    > * {
        @media screen and (max-width: 1200px) {
            margin-left: 32px !important;
            margin-right: 32px !important;
        }
    }

    &.about-intro-container {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        position: relative;
        margin: auto;

        .about-intro {
            margin: 64px 0;
            display: flex;
            align-items: center;
            flex-direction: row;
            position: relative;

            > * {
                margin-right: 32px;
                margin-left: 32px;

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }

            .intro-image {
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 50%;
                height: 320px;
                border-radius: 4px;
                box-sizing: content-box;
                transition: all 0.3s ease;
                z-index: 500;

                &:hover {
                    box-shadow: @mdui-shadow-20;
                    @media screen and (min-width: 1200px) {
                        transform: rotateZ(-5deg) scale(1.3) !important;
                    }
                }
            }

            .intro-content {
                width: 50%;

                h1 {
                    font-size: 2rem;
                    .font-header;
                }

                p {
                    font-size: 18px;
                    color: @textgray;
                    line-height: 1.6;
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
            flex-direction: row;
            align-items: center;
            padding: 32px;
            color: black;

            &:first-child {
                padding-top: 64px;
            }

            &:last-child {
                padding-bottom: 64px;
            }

            .people-avatar {
                width: 150px;
                border-radius: 50%;
                .hide-selection;
            }

            .people-content {
                margin-left: 48px;

                .people-title {
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
            }

            .year-row {
                position: relative;
                max-width: calc(1200px - 9rem);
                margin-left: 13rem;

                .year {
                    .font-roman;
                    position: absolute;
                    left: -11rem;
                    font-size: 2.5rem;
                    line-height: 1;
                    .hide-selection;
                }

                .event-row {
                    position: relative;
                    width: 100%;

                    .event {
                        max-width: 6rem;
                        word-wrap: break-word;
                        position: absolute;
                        left: -4rem;
                        margin-top: 4px;

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
                        margin-left: 3rem;
                        h1 {
                            margin-top: 0;
                        }

                        .swiper-next,
                        .swiper-prev {
                            position: absolute;
                            z-index: 200;
                            top: calc(25rem - 48px);        
                            opacity: .3;  

                            &:hover {
                                opacity: 1;
                            }
                        }

                        .swiper-next {
                            right: 0;
                            border-bottom-right-radius: 4px;
                        }

                        .swiper-prev {
                            left: 48px;
                            border-bottom-left-radius: 4px;
                        }

                        .content-swiper {
                            width: 100%;
                            height: 25rem;
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
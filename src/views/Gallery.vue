<template>
    <div class="gallery">
        <CoolLightBox thumbsPosition="right" effect="fade" :items="lightboxItems" :index="index"
            @close="index = null" />
        <static-banner bg="https://sotap.oss-cn-qingdao.aliyuncs.com/xc3.png">
            <template #title>
                SoTap 图库
            </template>
            <template #text>
                这里是 SoTap 的专属图库界面，你可以在这里找到由管理组或玩家所拍摄的服务器内的美景，以及它们精彩而迷人的幕后故事...
            </template>
        </static-banner>
        <div class="row">
            <div class="gallery-description">
                <h1 class="description-title" style="opacity: 0" v-view.once="vis1">这里，<br>我们记录
                    SoTap 珍奇而瑰丽的点滴</h1>
                <div class="text-cols">
                    <div class="left-col" style="opacity: 0" v-view.once="visEffect">
                        <p><strong>这里是 SoTap Gallery。</strong></p>
                        <p>这是一个你也许先前从来没有听闻过的页面。在这里，我们将摆放一些有关 SoTap
                            服务器（内服或外服）的优秀摄影作品，并挑选恰当的作品来讲述它们的故事。</p>
                        <p>别担心，别着急，每一个人都有加入 Gallery 的机会，哪怕你的摄影技术并不好。我们只需要慢慢等待······</p>
                    </div>
                    <div class="right-col" style="opacity: 0" v-view.once="visEffect">
                        <p><strong>而这样做有什么意义呢？</strong></p>
                        <p>想必意义是明显的。</p>
                        <p>SoTap 不仅是一个简单的 Minecraft 服务器，更是一个承载着许多玩家珍贵 Minecraft
                            记忆的地方。随着周目的更替和人员的流逝换代，我们希望将这一切美好永远记录下来，成为不可取代的珍贵记忆。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div @click="slide(0)" class="swiper-prev"><span class="mdi mdi-arrow-left"></span>
            </div>
            <div @click="slide(1)" class="swiper-next"><span class="mdi mdi-arrow-right"></span>
            </div>
            <swiper class="story-swiper" ref="storySwiper" :options="swiperOptions">
                <swiper-slide v-for="(x, i) in bannerList" :key="i">
                    <div class="swiper-item">
                        <div class="story-img" v-lazy:background-image="x.bg" />
                        <div class="story-container">
                            <div class="story-box">
                                <div class="story">
                                    <h1>{{ x.title }}</h1>
                                    <p>{{ x.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination" />
            </swiper>
        </div>
        <section-title>
            <template #subtitle>佳作展览</template>
            <template #title>Exhibition</template>
            <template #desc>我们会不定期地挑选玩家作品放在此处展览，按时间顺序排列<br><small>p.s.
                    点击即可查看大图 /
                    图片宽度每次刷新随机分配<br>{{ isMobile() ? "由于 Minecraft 多为横屏截图，横屏欣赏效果更佳！" : "" }}</small></template>
        </section-title>
        <div class="row no-margin-bottom">
            <div class="gallery-container">
                <div class="gallery-row" v-for="i in Math.ceil(waterfall.length / 2)" :key="i">
                    <gallery-card v-view.once="animateGallery"
                        :onclick="() => { index = k + 1 + (i - 2) * 2 }"
                        :class="getRandomWidth(i, k) <= 25 ? 'thin' : (waterfallWidthData[i + '.' + k] <= 50 ? 'mid-thin' : '')"
                        :id="'gallery-' + (k + 1 + (i - 2) * 2)" :imageOnly="true"
                        class="gallery-img" v-for="k in 2" :key="k + 1 + (i - 2) * 2"
                        :bg="getWaterfall(k + 1 + (i - 2) * 2, 'bg')"
                        :style="'width: ' + waterfallWidthData[i + '.' + k] + '%; display: ' + (waterfall[k + 1 + (i - 2) * 2] === undefined ? 'none' : '')">
                        <template #text>
                            <span
                                class="description">{{ getWaterfall(k + 1 + (i - 2) * 2, 'desc') }}</span>
                            <div class="meta">
                                <div class="meta-item">
                                    <span class="meta-title">provided by</span>
                                    <player :name="getWaterfall(k + 1 + (i - 2) * 2, 'author')" />
                                </div>
                                <div class="meta-item">
                                    <span class="meta-title">at</span>
                                    <span
                                        class="location">{{ getWaterfall(k + 1 + (i - 2) * 2, 'loc') }}</span>
                                </div>
                            </div>
                            <span
                                class="date">{{ getWaterfall(k + 1 + (i - 2) * 2, 'date') }}</span>
                        </template>
                    </gallery-card>
                </div>
            </div>
        </div>
        <div class="row no-margin">
            <divider :speedFactor="0.2" class="join-divider" :coverOpacity="0.3"
                img="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/gallery/gallery_6.png">
                <h1>参与到这所有的瑰丽中</h1>
                <p>SoTap 瑰丽而神秘的故事可以由你来谱写。只需要一台电脑，一个 Minecraft 国际正版账号，即可开启你的 SoTap
                    之旅。我们随时欢迎你的加入！<br><small>
                        <player name="Takanashi__" text="背景作者" />
                    </small></p>
                <div class="join-link">
                    <router-link class="ui-button backgrounded" to="/join">
                        立即加入 &raquo;
                    </router-link>
                </div>
            </divider>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticBanner from '@/components/StaticBanner.vue';
import { Animation, fixLoopSwiper, getRandomInt, isMobile, visEffect } from '@/functions';
import GalleryCard from '@/components/GalleryCard.vue';
// @ts-ignore
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import Divider from '@/components/Divider.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import GalleryWaterfall from '@/data/content/GalleryWaterfall.json';
import GalleryBannerList from '@/data/content/GalleryBannerList.json';
import Player from '@/components/Player.vue';

export default Vue.extend({
    components: {
        StaticBanner,
        GalleryCard,
        CoolLightBox,
        Divider,
        SectionTitle,
        Player
    },
    methods: {
        visEffect,
        vis1(x: ViewObject) {
            let el = x.target.element;
            el.style.opacity = '';
            if (isMobile()) {
                Animation.ease('in', 'right', el);
            } else {
                Animation.ease('in', 'top', el);
            }
        },
        slide(direction: 0 | 1) {
            // @ts-ignore
            let instance = this.$refs.storySwiper.swiperInstance;
            if (direction === 0) {
                instance.slidePrev();
            } else {
                instance.slideNext();
            }
        },
        getRandomWidth(globalIndex: number, scopeIndex: number) {
            let randomWidth;
            if (scopeIndex === 1) {
                if (globalIndex === Math.ceil(this.waterfall.length / 2) && this.waterfall.length % 2 !== 0) {
                    randomWidth = 100;
                } else {
                    randomWidth = getRandomInt(20, 75);
                    this.waterfallWidthData[globalIndex.toString() + '.1'] = randomWidth;
                }
            } else {
                randomWidth = 100 - this.waterfallWidthData[globalIndex.toString() + '.1'];
                this.waterfallWidthData[globalIndex.toString() + '.2'] = randomWidth;
            }
            return randomWidth;
        },
        getWaterfall(index: number, key: string) {
            if (this.waterfall[index] !== undefined) {
                return this.waterfall[index][key];
            } else {
                return undefined;
            }
        },
        getLightboxItems() {
            this.waterfall.forEach((k) => {
                this.lightboxItems.push({
                    title: k.desc,
                    description: '由 ' + k.author + ' 在' + k.loc + '拍摄。' + k.date,
                    src: k.bg
                });
            });
        },
        // @ts-ignore
        animateGallery(e) {
            let id = e.target.element.id;
            Animation.scale('in', 1, '#' + id.toString(), 1500);
        },
        isMobile
    },
    data() {
        return {
            bannerList: GalleryBannerList,
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            waterfall: GalleryWaterfall as Array<GalleryItem>,
            waterfallWidthData: {} as Dictionary,
            index: null as null | number,
            lightboxItems: [] as Array<LightboxItem>
        };
    },
    mounted() {
        this.getLightboxItems();
        if (this.$route.params.option === 'view' && this.$route.params.target !== undefined) {
            this.index = parseInt(this.$route.params.target);
        }
        fixLoopSwiper(this, '.swiper-item .story-img');
    },
    watch: {
        index(v: number | null) {
            if (v === null && this.$route.params.option !== undefined && this.$route.params.target !== undefined) {
                this.$router.push('/gallery');
            }
        }
    }
});
</script>

<style lang="less" scoped>
.row {
    width: 100%;
    position: relative;
}

.gallery-description {
    max-width: 1200px;
    position: relative;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 96px;

    h1 {
        font-size: 3rem;
        position: relative;
        display: inline-block;
        margin-top: 32px;
        margin-bottom: 64px;

        @media screen and (max-width: 1024px) {
            text-align: left;
            font-size: 2.4rem;
            width: 100%;
        }

        @media screen and (min-width: 1024px) {
            br {
                display: none;
            }
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }

        &::after {
            content: ' ';
            background: @primary;
            width: 110%;
            height: 1.3rem;
            display: block;
            position: absolute;
            left: -50%;
            right: -50%;
            margin: auto;
            bottom: 8px;
            z-index: -1;

            @media screen and (max-width: 1024px) {
                display: none;
            }
        }
    }

    .text-cols {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        color: @textgray;
        line-height: 1.5;
        font-size: 20px;

        .left-col,
        .right-col {
            strong {
                color: black;
            }

            @media screen and (min-width: 1024px) {
                width: calc(50% - 16px);
            }

            @media screen and (min-width: 1024px) {
                margin-left: 16px;
                margin-right: 16px;
            }
            width: 100%;

            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
}

.story-swiper {
    width: 100%;

    @media screen and (min-width: 1024px) {
        height: 40rem;
    }

    @media screen and (max-width: 1024px) {
        height: 30rem;
    }

    .swiper-item {
        height: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        z-index: -100;

        .story-img {
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: black;
            transition: all 0.2s ease;

            @media screen and (min-width: 1024px) {
                width: 65%;
            }

            @media screen and (max-width: 1024px) {
                max-height: calc(75% - 4rem);
                background-position-y: 100%;
                position: absolute;
                top: 0;
                width: 100%;
            }
        }

        .story-container {
            height: 100%;
            background: @bggray;
            color: white;
            display: flex;
            align-items: center;

            @media screen and (min-width: 1024px) {
                width: 35%;
                padding: 2rem 5rem;
            }

            @media screen and (max-width: 1024px) {
                width: 100%;
                position: absolute;
                max-height: 25%;
                padding: 2rem 0;
                bottom: 0;
            }

            .story {
                position: relative;
                padding: 0 32px;

                h1 {
                    margin-top: 0;

                    @media screen and (min-width: 1024px) {
                        font-size: 3rem;
                    }

                    @media screen and (max-width: 1024px) {
                        margin-bottom: 16px;
                        font-size: 2rem;
                    }
                }

                p {
                    line-height: 1.8;

                    @media screen and (min-width: 1024px) {
                        font-size: 20px;
                    }

                    @media screen and (max-width: 1024px) {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

.swiper-next {
    right: 0;
}

.swiper-prev {
    left: 0;
}

.swiper-next,
.swiper-prev {
    opacity: 0.3;
    transition: all 0.2s ease;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    z-index: 100;

    &:hover {
        opacity: 1;
        background: @primary;
    }
}

.swiper-pagination {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 16px;
    background: rgba(0, 0, 0, 0.21);
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
    padding: 0 8px 2px 8px;
    border-radius: 10px;
}

.gallery-img {
    margin: 0 !important;
}

.gallery-container {
    background: black;
}
</style>
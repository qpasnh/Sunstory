<template>
    <div class="sotap-blog">
        <section-title>
            <template #title>Blog</template>
            <template #subtitle>博文博览</template>
            <template #desc>我们会在 SoTap Blog 上更新时事，下面是最近的几篇博文</template>
        </section-title>
        <div class="swiper-box">
            <div @click="slide(0)" class="swiper-prev"><span class="mdi mdi-arrow-left"></span>
            </div>
            <div @click="slide(1)" class="swiper-next"><span class="mdi mdi-arrow-right"></span>
            </div>
            <swiper class="blog-swiper" ref="blogSwiper" :options="swiperOptions">
                <swiper-slide v-for="(y, k) in blogs" :key="k">
                    <blog-card :href="y.permalink" class="blog-post" :ref="'post-' + (k + 1)"
                        :class="'post-' + (k + 1)" :key="2 * k + 1" :bg="y.bg">
                        <template #title>
                            {{ y.title }}
                        </template>
                        <template #text>
                            {{ y.text }}
                        </template>
                    </blog-card>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import BlogCard from '@/components/BlogCard.vue';
import removeMd from 'remove-markdown';
import SectionTitle from '@/components/SectionTitle.vue';
import BlogSwiperOptions from "@/data/config/BlogSwiperOptions.json";

export default Vue.extend({
    data() {
        return {
            blogs: [] as Array<BlogInstance>,
            firstId: 0,
            lastId: 3,
            swiperOptions: BlogSwiperOptions
        };
    },
    methods: {
        getBlogPosts() {
            axios.get('https://blog.sotap.org/api/posts?pageSize=5').then((r) => {
                let data: Array<BlogInstance> = r.data.data;
                let textLenLimit = 200;
                data.forEach((k) => {
                    let quote = /\[\/\/\]:\((.*?)\)/.exec(k.text);
                    let text = this.removeComment(removeMd(k.text));
                    if (quote === null) return true;
                    this.blogs.push({
                        title: k.title,
                        cid: k.cid,
                        permalink: k.permalink,
                        text:
                            text.substr(text[0] === '>' ? 1 : 0, textLenLimit) +
                            (k.text.length > textLenLimit ? '...' : ''),
                        created: k.created,
                        bg: quote[1]
                    });
                });
            });
        },
        removeComment(str: string) {
            return str.replace(/\[\/\/\]:\(.*?\)/g, '').replace(/[\r\n]/g, '');
        },
        slide(direction: 0 | 1) {
            // @ts-ignore
            let instance = this.$refs.blogSwiper.swiperInstance;
            if (direction === 0) {
                instance.slidePrev();
            } else {
                instance.slideNext();
            }
        }
    },
    mounted() {
        this.getBlogPosts();
    },
    components: {
        BlogCard,
        SectionTitle
    }
});
</script>

<style lang="less" scoped>
.sotap-blog {
    width: 100%;
    margin-top: 32px;
    position: relative;
    .swiper-box {
        margin: auto;
        position: relative;
        max-width: 1200px;
    }

    .blog-posts {
        display: inline-flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;

        .blog-post {
            margin-left: 16px;
            margin-bottom: 16px;
            position: relative;

            &:first-child {
                margin-left: 0;
            }

            &:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}

.swiper-next,
.swiper-prev {
    position: absolute;
    top: 50%;
    bottom: 50%;
    z-index: 200;
    
    @media screen and (max-width: 690px) {
        display: none;
    }
}

.swiper-next {
    right: calc(-48px - 16px);
}

.swiper-prev {
    left: calc(-48px - 16px);
}
</style>
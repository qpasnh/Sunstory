<template>
    <div class="sotap-gallery">
        <section-title>
            <template #subtitle>服务器掠影</template>
            <template #title>Gallery</template>
            <template #desc>这里，包含了 SoTap 数位玩家拍摄的服务器内美景。<br><small>p.s.
                    {{ isMobile() ? "轻按图片" : "将鼠标移动至图片上"}}可查看作者信息和原图</small></template>
        </section-title>
        <div class="container">
            <div class="gallery-container">
                <div class="gallery-row" v-for="(x, i) in gallery" :key="i">
                    <gallery-card :imageOnly="true" :style="'width: ' + width[i][u] + '%'"
                        v-for="(y, u) in x" :bg="y.bg" :key="u"
                        :galleryId="galleryChosen[i * 2 + u]">
                        <template #text>
                            <span class="description">{{ y.desc }}</span>
                            <div class="meta">
                                <div class="meta-item">
                                    <span class="meta-title">provided by</span>
                                    <div class="image-author">
                                        <img :src="'https://crafatar.com/avatars/' + y.uuid" />
                                        <span class="author-name">{{ y.author }}</span>
                                    </div>
                                </div>
                                <div class="meta-item">
                                    <span class="meta-title">at</span>
                                    <span class="location">{{ y.loc }}</span>
                                </div>
                            </div>
                            <span class="date">{{ y.date }}</span>
                        </template>
                    </gallery-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GalleryCard from '@/components/GalleryCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { isMobile } from '@/functions';
import GalleryWaterfall from '@/data/content/GalleryWaterfall.json';

export default Vue.extend({
    components: {
        GalleryCard,
        SectionTitle
    },
    data() {
        return {
            gallery: [[], [], []] as Array<Array<GalleryItem>>,
            galleryChosen: [0, 1, 3, 4, 5],
            width: [
                // percentage
                [35, 65],
                [65, 35],
                [100]
            ]
        };
    },
    methods: {
        isMobile,
        go(url: string) {
            window.open(url);
        },
        initGallery() {
            let i = 0;
            let u = 0;
            this.galleryChosen.forEach((k) => {
                i++;
                this.gallery[u].push(GalleryWaterfall[k]);
                if (i === 2) {
                    i = 0;
                    u++;
                }
            });
        }
    },
    mounted() {
        this.initGallery();
    }
});
</script>

<style lang="less" scoped>
.sotap-gallery {
    max-width: 1200px;
    margin: auto;
}
</style>
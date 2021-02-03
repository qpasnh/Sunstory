<template>
  <div class="sotap-gallery">
    <section-title>
      <template #subtitle>服务器掠影</template>
      <template #title>Gallery</template>
      <template #desc>这里，包含了 SoTap 数位玩家拍摄的服务器内美景。<br><small>p.s. {{ isMobile() ? "轻按图片" : "将鼠标移动至图片上"}}可查看作者信息和原图</small></template>
    </section-title>
    <div class="container">
      <div class="gallery-container">
        <div class="gallery-row" v-for="(x, i) in gallery" :key="i">
          <gallery-card :imageOnly="true" :style="'width: ' + y.width + '%'" v-for="(y, i) in x" :bg="y.bg" :key="i">
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
import Vue from "vue";
import GalleryCard from "@/components/GalleryCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { isMobile } from "@/functions";

export default Vue.extend({
  components: {
    GalleryCard,
    SectionTitle,
  },
  data() {
    return {
      gallery: [
        [
          {
            author: "Subilan",
            uuid: "5c94fc153e60447ab642431e8815f41d",
            date: "2021/02/03",
            desc: "空中的雪山",
            loc: "某地",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35,
          },
          {
            author: "Subilan",
            uuid: "5c94fc153e60447ab642431e8815f41d",
            date: "2021/02/03",
            desc: "空中的雪山",
            loc: "某地",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55,
          },
        ],
        [
          {
            author: "Subilan",
            uuid: "5c94fc153e60447ab642431e8815f41d",
            date: "2021/02/03",
            desc: "空中的雪山",
            loc: "某地",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 55,
          },
          {
            author: "Subilan",
            uuid: "5c94fc153e60447ab642431e8815f41d",
            date: "2021/02/03",
            desc: "空中的雪山",
            loc: "某地",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 35,
          },
        ],
        [
          {
            author: "Subilan",
            uuid: "5c94fc153e60447ab642431e8815f41d",
            date: "2021/02/03",
            desc: "空中的雪山",
            loc: "某地",
            bg: "https://mcsunrise.oss-cn-qingdao.aliyuncs.com/skyland4.png",
            width: 100,
          },
        ],
      ],
    };
  },
  methods: {
    isMobile,
    go(url: string) {
      window.open(url);
    },
  },
});
</script>

<style lang="less" scoped>
.sotap-gallery {
  max-width: 1200px;
  margin: auto;

  .gallery-container {
    .gallery-row {
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (min-width: 690px) {
        flex-wrap: nowrap;
      }

      @media screen and (max-width: 690px) {
        flex-wrap: wrap;
      }

      > * {
        flex: 1 1 auto;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 8px;

        @media screen and (max-width: 690px) {
          width: 100% !important;
          margin: 8px 0 8px 0;
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .date {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.4);
      }

      .meta {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 100%;
        display: flex;
        align-items: center;

        .meta-item {
          position: relative;
          display: flex;
          align-items: center;

          &:not(&:last-child)::after {
            content: "·";
            font-weight: 900;
            margin-left: 8px;
            margin-right: 8px;
            color: rgba(255, 255, 255, .4);
          }

          .meta-title {
            font-style: italic;
            .logo-text;
            font-size: 14px;
            margin-right: .5em;
            color: rgba(255, 255, 255, 0.6);
          }

          .image-author {
            img {
              width: 16px;
              margin-right: 8px;
            }

            .author-name {
              .logo-text;
              font-size: 16px;
            }
          }
        }
      }

      .description {
        display: block;
        font-size: 28px;
        margin-bottom: 8px;

        &::before,
        &::after {
          font-weight: 900;
          color: @primary;
        }

        &::before {
          content: "「";
          position: absolute;
          left: -0.5em;
        }

        &::after {
          content: "」";
          position: absolute;
          right: -0.5em;
        }
      }
    }
  }
}
</style>
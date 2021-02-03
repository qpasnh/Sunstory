<template>
  <div class="sotap-blog">
    <swiper class="blog-swiper" ref="blogSwiper" :options="swiperOptions">
      <swiper-slide v-for="(y, k) in blogs" :key="k">
        <blog-card :href="y.permalink" class="blog-post" :ref="'post-' + (k + 1)" :class="'post-' + (k + 1)" :key="2 * k + 1" :bg="y.bg">
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
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BlogCard from "@/components/BlogCard.vue";
import removeMd from "remove-markdown";

export default Vue.extend({
  data() {
    return {
      blogs: [] as Array<BlogInstance>,
      firstId: 0,
      lastId: 3,
      swiperOptions: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30
      },
    };
  },
  methods: {
    getBlogPosts() {
      axios.get("https://blog.sotap.org/api/posts?pageSize=5").then((r) => {
        let data: Array<BlogInstance> = r.data.data;
        data.forEach((k) => {
          let quote = /\[\/\/\]:\((.*?)\)/.exec(k.text);
          let text = this.removeComment(removeMd(k.text));
          if (quote === null) return true;
          this.blogs.push({
            title: k.title,
            cid: k.cid,
            permalink: k.permalink,
            text: text.substr(text[0] === ">" ? 1 : 0, 120) + (k.text.length > 120 ? "..." : ""),
            created: k.created,
            bg: quote[1],
          });
        });
      });
    },
    removeComment(str: string) {
      return str.replace(/\[\/\/\]:\(.*?\)/g, "").replace(/[\r\n]/g, "");
    }
  },
  mounted() {
    this.getBlogPosts();
  },
  components: {
    BlogCard
  },
});
</script>

<style lang="less" scoped>
.sotap-blog {
  width: 100%;
  margin-top: 32px;

  .blog-posts {
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;

    .blog-post {
      width: 33.3333%;
      margin-left: 16px;
      margin-bottom: 16px;

      &:first-child {
        margin-left: 0;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}

.post-next,
.post-prev {
  position: absolute;
  background: black;
  color: white;
  font-size: 28px;
  padding: 8px;
  white-space: nowrap;
  width: fit-content;
  z-index: 10;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: @primary;
  }

  &::selection {
    background: rgba(0, 0, 0, 0);
  }
}

.post-next {
  right: -50px;
}

.post-prev {
  left: -50px;
}
</style>
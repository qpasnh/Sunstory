<template>
  <div class="blog-card">
    <div class="card-background" :style="'background-image: url(' + bg + ')'" />
    <div class="blog-content" @click="go(href)">
      <h1 class="card-title">
        <slot name="title" />
      </h1>
      <p class="card-text">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    bg: {
      type: String,
    },
    href: {
      type: String,
    },
  },
  methods: {
    go(url: string) {
      window.open(url);
    },
  },
});
</script>

<style lang="less" scoped>
.blog-card {
  .card-background {
    height: 17rem;
    max-width: 100%;
    display: block;
    border: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .blog-content {
    background: white;
    padding: 1em 3rem;
    position: relative;
    width: 80%;
    margin: -10em auto 20px;
    margin-bottom: 64px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    box-shadow: @mdui-shadow-2;
    border-radius: 4px;

    .card-title {
      font-size: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .card-text {
      color: @textgray;
      transition: all 0.2s ease;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: @mdui-shadow-6;
      cursor: pointer;
    }
  }
}
</style>

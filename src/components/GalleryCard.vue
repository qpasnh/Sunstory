<template>
  <div class="gallery-card-box" @mouseover="updateStyles(1)" @mouseleave="updateStyles(0)" @click="go(bg)">
    <div class="gallery-card" :style="'background-image: url(' + bg + ');'">
      <div class="overlay" :style="'opacity:' + alpha"></div>
      <div v-if="!imageOnly" :class="'title-' + id" :style="'display:' + (showTitle ? 'initial' : 'none')">
        <span class="primary-title">
          <slot name="title"></slot>
        </span>
        <span class="secondary-title">
          <slot name="subtitle"></slot>
        </span>
      </div>
      <div :class="'text-' + id" :style="'opacity: 0; display:' + (showText ? 'initial' : 'none')">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    imageOnly: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
    },
  },
  data() {
    return {
      alpha: this.imageOnly ? 0 : 0.3,
      id: "",
      showTitle: true,
      showText: false,
    };
  },
  methods: {
    updateStyles(action: number) {
      this.alpha = action === 1 ? 0.7 : this.imageOnly ? 0 : 0.3;
      let titleOut = {
        targets: ".title-" + this.id,
        translateY: [0, 100],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 350,
      };
      let textIn = {
        targets: ".text-" + this.id,
        translateY: this.imageOnly ? [100, 0] : [-100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
      };
      let titleIn = {
        targets: ".title-" + this.id,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
      };
      let textOut = {
        targets: ".text-" + this.id,
        translateY: this.imageOnly ? [0, 100] : [0, -100],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 350,
      };
      if (action === 1) {
        this.$anime(titleOut);
        this.showTitle = false;
        this.showText = true;
        this.$anime(textIn);
      } else {
        this.$anime(textOut);
        this.showText = false;
        this.showTitle = true;
        this.$anime(titleIn);
      }
    },
    go(url: string) {
      window.open(url);
    },
  },
  mounted() {
    this.id = Math.random().toString(36).slice(-8);
  },
});
</script>

<style lang="less" scoped>
.gallery-card-box {
  cursor: pointer;
}

.gallery-card {
  padding: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20rem;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -100;

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #000;
    transition: all 0.2s ease;
    z-index: -1;
  }

  [class^="text"] {
    font-size: 18px;
    color: white;
  }

  [class^="title"] {
    .primary-title {
      font-weight: bold;
      display: block;
      font-size: 32px;
      color: white;
    }

    .secondary-title {
      font-weight: bold;
      display: block;
      font-size: 12px;
      color: @primary;
      letter-spacing: 4px;
    }
  }
}
</style>

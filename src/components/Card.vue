<template>
  <div
    @mouseover="updateStyles(1)"
    @mouseleave="updateStyles(0)"
    class="card"
    :style="'background-image: url(' + bg + ');'"
  >
    <div class="overlay" :style="'opacity:' + alpha"></div>
    <div class="title">
      <span class="primary-title"><slot name="title"></slot></span>
      <span class="secondary-title"><slot name="subtitle"></slot></span>
    </div>
    <div class="text" style="opacity: 0">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["bg"],
  data() {
    return {
      alpha: 0.3,
      updating: false,
      currentAction: -1,
      ignored: -1,
    };
  },
  methods: {
    updateStyles(action: number) {
      // filter for too-fast cursors
      if (this.updating === true) {
        this.ignored = action;
        return;
      }
      if (this.currentAction === action) return;
      this.currentAction = action;
      this.updating = true;
      this.alpha = action === 1 ? 0.7 : 0.3;
      let timeline = this.$anime.timeline({
        loop: false,
        complete: () => {
          this.updating = false;
        },
      });
      let titleOut = {
        targets: ".title",
        translateY: [0, 100],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 350,
      };
      let textIn = {
        targets: ".text",
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
      };
      let titleIn = {
        targets: ".title",
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
      };
      let textOut = {
        targets: ".text",
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 350,
      };
      if (action === 1) {
        timeline.add(titleOut).add(textIn);
      } else {
        timeline.add(textOut).add(titleIn);
      }
    },
  },
  watch: {
    updating(v) {
      if (v === false && [0, 1].includes(this.ignored)) {
        this.updateStyles(this.ignored);
        this.ignored = -1;
      }
    },
  },
});
</script>

<style lang="less" scoped>
.card {
  display: inline-block;
  padding: 16px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 10rem;
  position: relative;
  text-align: center;
  max-width: 30%;

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #000;
    transition: all 0.2s ease;
    z-index: 0;
  }

/** todo: fix not aligned */
  .text {
    font-size: 18px;
    color: white;
  }

  .title {
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
      color: #fcd307;
      letter-spacing: 4px;
    }
  }
}
</style>

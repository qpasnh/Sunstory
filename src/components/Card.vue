<template>
  <div
    @mouseover="updateStyles(1)"
    @mouseleave="updateStyles(0)"
    class="card"
    :style="'background-image: url(' + bg + ');'"
  >
    <div class="overlay" :style="'opacity:' + alpha"></div>
    <div :class="'title-' + id" :style="'display:' + (showTitle ? 'initial': 'none')">
      <span class="primary-title"><slot name="title"></slot></span>
      <span class="secondary-title"><slot name="subtitle"></slot></span>
    </div>
    <div :class="'text-' + id" :style="'opacity: 0; display:' + (showText ? 'initial' : 'none')">
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
      id: "",
      showTitle: true,
      showText: false,
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
        changeBegin: () => {
          this.showTitle = !!!action;
          this.showText = !!action;
        },
      });
      let titleOut = {
        targets: ".title-" + this.id,
        translateY: [0, 100],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 350,
      };
      let textIn = {
        targets: ".text-" + this.id,
        translateY: [-100, 0],
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
  mounted() {
    this.id = Math.random()
      .toString(36)
      .slice(-8);
  },
});
</script>

<style lang="less" scoped>
.card {
  padding: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 10rem;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

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
      color: #fcd307;
      letter-spacing: 4px;
    }
  }
}
</style>

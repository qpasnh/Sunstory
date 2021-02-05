<template>
  <div class="sotap-divider">
    <parallax-background :bg-img="img" :speedFactor="0.7" event-type="scroll" direction="up">
      <template #content>
        <div class="divider-row">
          <slot></slot>
        </div>
      </template>
    </parallax-background>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ParallaxBackground from "@/components/parallax-background.vue";

export default Vue.extend({
  components: {
    ParallaxBackground,
  },
  props: ["img"],
});
</script>

<style lang="less" scoped>
.sotap-divider {
  .divider-row {
    padding-top: 16px;
    padding-bottom: 32px;
    margin: auto;
    max-width: 1200px;
    position: relative;
  }
}
</style>
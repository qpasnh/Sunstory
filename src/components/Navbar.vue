<template>
  <div class="sotap-nav">
    <div class="nav-logo">
      <img class="logo-svg" src="@/assets/logo.svg" draggable="false" />
      <span class="logo-text">SoTap</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    this.$anime.timeline({ loop: false }).add({
      targets: ".sotap-nav",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 750,
      delay: (e, i) => 300 + 30 * i,
    });
  },
});
</script>

<style lang="less" scoped>
.sotap-nav {
  background: black;
  display: block;
  height: 3rem;
  margin: auto;
  padding: 8px;
  border-radius: 2px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 4px 4px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media screen and (min-width: 660px) {
    width: 80%;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
  }

  .nav-logo {
    display: inline-flex;
    align-items: center;
    cursor: default;

    .logo-svg {
      width: 40px;
      margin-right: 8px;
    }

    .logo-text {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      color: white;
      font-size: 1.75rem;

      &::selection {
        background: rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>

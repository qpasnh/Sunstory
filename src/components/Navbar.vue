<template>
  <nav class="sotap-nav">
    <div class="toolbar">
      <div
        class="hamburger"
        :class="hamburgerOpen ? 'open' : ''"
        @click="
          hamburgerOpen = !hamburgerOpen;
          toggleDropdown();
        "
      >
        <span class="hamburger__top-bun"></span>
        <span class="hamburger__bottom-bun"></span>
      </div>
      <div class="nav-logo" @click="$router.push('/')">
        <img class="logo-svg" src="@/assets/logo.svg" draggable="false" />
        <span class="logo-text">SoTap</span>
      </div>
      <div class="nav-items">
        <span
          class="nav-item"
          v-for="(x, i) in navItems"
          :key="i"
          @click="openURL(x.to, x.href)"
          :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''"
        >
          {{ x.name }}
        </span>
      </div>
      <div class="nav-spacer"></div>
      <span class="mdi mdi-magnify search-icon"></span>
    </div>
    <div ref="dropdown" class="dropdown" style="opacity: 0">
      <span
        class="dropdown-item"
        v-for="(x, i) in navItems"
        :key="i"
        @click="openURL(x.to, x.href); hamburgerOpen = false; toggleDropdown()"
        :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''"
      >
        {{ x.name }}
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { isMobile } from "@/functions"

export default Vue.extend({
  mounted() {
    this.$anime.timeline({ loop: false }).add({
      targets: ".sotap-nav",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 750,
    }).add({
      targets: ".nav-item",
      translateY: [0, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (e, i) => 100 * i,
    }).add({
      targets: ".search-icon",
      translateY: [0, 0],
      opacity: isMobile() ? [1, 1] :[0, 1],
      easing: "easeOutExpo",
      duration: 750
    });
  },
  data() {
    return {
      navItems: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "About",
          to: "/about",
        },
        {
          name: "Rules",
          to: "/rules",
        },
        {
          name: "BBS",
          href: "https://g.sotap.org",
        },
        {
          name: "Blog",
          href: "https://blog.sotap.org",
        },
        {
          name: "Wiki",
          href: "https://wiki.sotap.org",
        },
      ],
      hamburgerOpen: false
    };
  },
  methods: {
    openURL(to: string, url: string) {
      if (to !== undefined) {
        this.$router.push(to);
      }
      if (url !== undefined) {
        window.open(url);
      }
    },
    toggleDropdown(target: string, directOption?: boolean) {
      let obj: HTMLDivElement = this.$refs[target] as HTMLDivElement;
      // p => positive option; n => negative option.
      let p = directOption !== undefined ? directOption : obj.style.display === "none" || (this.hamburgerOpen && target === "dropdown");
      let n = directOption !== undefined ? !directOption : obj.style.display === "" || (!this.hamburgerOpen && target === "dropdown");
      if (p) {
        obj.style.display = "";
        obj.style.pointerEvents = "auto";
            }
      this.$anime({
        targets: "." + target,
        translateY: p ? [-100, 0] : [0, -100],
        opacity: p ? [0, 1] : [1, 0],
          easing: "easeOutExpo",
          duration: 500,
        });
      if (n) {
        obj.style.pointerEvents = "none";
      }
    },
  }
});
</script>

<style lang="less" scoped>
.sotap-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  .toolbar {
    margin: auto;
    padding: 12px;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
    height: 3rem;
    display: flex;
    align-items: center;
    border-radius: 2px;
    background: black;

    @media screen and (min-width: 800px) {
      width: 80%;
      border-radius: 0px 0px 4px 4px;
    }

    @media screen and (max-width: 800px) {
      border-radius: 0;
    }

    .nav-logo {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      z-index: 10000;

      @media screen and (max-width: 800px) {
        margin-left: 56px;
      }

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

    .nav-items {
      margin-left: 2rem;

      @media screen and (max-width: 800px) {
        display: none;
      }

      .nav-item {
        color: #aaa;
        cursor: pointer;
        transition: color 0.2s ease;
        text-decoration: none;
        margin-right: 10px;
        margin-left: 10px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          color: #fff;
        }
      }
    }

    .nav-spacer {
      flex-grow: 1;
    }

    .search-icon {
      color: #aaa;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.2s ease;
      width: 2rem;
      height: 2rem;
      z-index: 10000;

      &:hover {
        color: #fff;
      }
    }

    /* Hamburger from https://apple.com */

    .hamburger {
      cursor: pointer;
      position: absolute;
      width: 48px;
      height: 48px;
      transition: all 0.25s;
      z-index: 10000;

      @media screen and (min-width: 800px) {
        display: none;
      }

      &:hover {
        .hamburger__top-bun,
        .hamburger__bottom-bun {
          background: #fff;
        }
      }
    }

    .hamburger__top-bun,
    .hamburger__bottom-bun {
      content: "";
      display: block;
      position: absolute;
      left: 15px;
      width: 18px;
      height: 2px;
      background: #aaa;
      transform: rotate(0);
      transition: all 0.25s;
    }

    .hamburger__top-bun {
      top: 23px;
      transform: translateY(-3px);
    }

    .hamburger__bottom-bun {
      bottom: 23px;
      transform: translateY(3px);
    }

    .open {
      transform: rotate(90deg);
      .hamburger__top-bun {
        transform: rotate(45deg) translateY(0px);
      }
      .hamburger__bottom-bun {
        transform: rotate(-45deg) translateY(0px);
      }
    }
  }

  .dropdown {
    z-index: -1000;

    .dropdown-item {
      width: 100%;
      display: block;
      background: black;
      color: #aaa;
      padding: 16px;
      font-size: 1.1rem;
      transition: all 0.2s ease;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>

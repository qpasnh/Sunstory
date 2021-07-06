<template>
    <nav class="sotap-nav">
        <div class="toolbar">
            <div class="hamburger" :class="hamburgerOpen ? 'open' : ''" @click="
          hamburgerOpen = !hamburgerOpen;
          toggleDropdown('dropdown');
        ">
                <span class="hamburger__top-bun"></span>
                <span class="hamburger__bottom-bun"></span>
            </div>
            <div class="nav-logo" @click="$router.push('/')">
                <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <title>Logo</title>
                    <circle cx="250" cy="250" r="71"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M142.53,324.94A131,131,0,0,1,324.94,142.53"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path
                        d="M367.82,99.66c-75-58.89-183.79-53.8-252.88,15.28S40.77,292.86,99.66,367.82"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path
                        d="M135.38,402.8c74.83,56.27,181.57,50.37,249.68-17.74s74-174.85,17.74-249.68"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M359.75,178.44A131,131,0,0,1,178.44,359.75"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M186.24,281.23a71,71,0,0,1,95-95"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M324.94,142.53A131,131,0,0,0,142.53,324.94"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M178.44,359.75A131,131,0,0,0,359.75,178.44"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                    <path d="M315.53,222.66a71,71,0,0,1-92.87,92.87"
                        style="fill:none;stroke:#30adf4;stroke-linecap:round;stroke-miterlimit:10;stroke-width:18px" />
                </svg>
                <span class="logo-text rainbow">SoTap</span>
            </div>
            <div class="nav-items">
                <span class="nav-item" v-for="(x, i) in navItems" :key="i"
                    @click="openURL(x.to, x.href)"
                    :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''">
                    {{ x.name }}
                </span>
            </div>
            <div class="flex-spacer"></div>
            <icon-group>
                <div v-if="!isMobile()" class="mdi mdi-dots-horizontal-circle-outline more-icon"
                    @mouseenter="toggleDropdown('more-dropdown', true)"
                    @mouseover="$refs['more-dropdown'].style.display=''"
                    @mouseleave="toggleDropdown('more-dropdown', false)">
                    <div ref="more-dropdown" class="more-dropdown" style="display: none;">
                        <span class="more-item" v-for="(x, i) in moreItems" :key="i"
                            @click="openURL(x.to, x.href); toggleDropdown('more-dropdown', false)"
                            :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''">
                            {{ x.name }}
                        </span>
                    </div>
                </div>
                <span @click="$actions.toggleDarkmode()" class="mdi dark-mode-toggle-icon" :class="$store.darkmode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"></span>
            </icon-group>
        </div>
        <div ref="dropdown" class="dropdown" style="display: none;">
            <span class="dropdown-item" v-for="(x, i) in navItems" :key="i"
                @click="openURL(x.to, x.href); hamburgerOpen = false; toggleDropdown('dropdown')"
                :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''">
                {{ x.name }}
            </span>
            <div class="external" v-if="isMobile()">
                <span class="dropdown-item" v-for="(x, i) in moreItems"
                    :key="i + navItems.length + 1"
                    @click="openURL(x.to, x.href); hamburgerOpen = false; toggleDropdown('dropdown')"
                    :class="x.hasOwnProperty('to') ? ($route.path === x.to ? 'link-active' : 'link-inactive') : ''">
                    {{ x.name }}
                </span>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/functions';
import IconGroup from './IconGroup.vue';
import NavbarPrimaryItems from '@/data/config/NavbarPrimaryItems.json';
import NavbarSecondaryItems from '@/data/config/NavbarSecondaryItems.json';

export default Vue.extend({
    mounted() {
        this.drawLogo();
        if (!isMobile()) {
            this.$anime
                .timeline({ loop: false })
                .add({
                    targets: '.sotap-nav',
                    translateY: [-100, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 750
                })
                .add({
                    targets: '.nav-item',
                    translateY: [0, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 500,
                    delay: (e, i) => 100 * i
                })
                .add({
                    targets: '.more-icon',
                    translateY: [0, 0],
                    opacity: isMobile() ? [1, 1] : [0, 1],
                    easing: 'easeOutExpo',
                    duration: 500
                })
                /* .add({
                    targets: '.search-icon',
                    translateY: [0, 0],
                    opacity: isMobile() ? [1, 1] : [0, 1],
                    easing: 'easeOutExpo',
                    duration: 250
                }) */.add({
                    targets: '.dark-mode-toggle-icon',
                    translateY: [0, 0],
                    opacity: isMobile() ? [1, 1] : [0, 1],
                    easing: 'easeOutExpo',
                    duration: 250
                })
        }
    },
    data() {
        return {
            navItems: NavbarPrimaryItems,
            moreItems: NavbarSecondaryItems,
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
            let p =
                directOption !== undefined
                    ? directOption
                    : obj.style.display === 'none' || (this.hamburgerOpen && target === 'dropdown');
            let n =
                directOption !== undefined
                    ? !directOption
                    : obj.style.display === '' || (!this.hamburgerOpen && target === 'dropdown');
            if (p) {
                obj.style.display = '';
            }
            this.$anime({
                targets: '.' + target,
                translateY: p ? [-50, 0] : [0, -50],
                opacity: p ? [0, 1] : [1, 0],
                easing: 'easeOutExpo',
                duration: 500
            });
            if (n) {
                obj.style.pointerEvents = 'none';
            }
            if (p) {
                obj.style.pointerEvents = 'auto';
            }
        },
        isMobile,
        drawLogo() {
            this.$anime({
                targets: '.nav-logo .logo-svg > *',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1200,
                delay: function (el, i) {
                    return i * 250;
                },
                direction: 'alternate',
                loop: false
            });
            this.$anime({
                targets: '.nav-logo .logo-text',
                easing: 'easeOutExpo',
                opacity: [0, 1],
                translateX: [-10, 0],
                delay: 2300,
                duration: 1000
            });
        }
    },
    components: {
        IconGroup
    }
});
</script>

<style lang="less" scoped>
.sotap-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1000;
    height: 72px;
    max-width: 1920px;

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
            transition: all 0.2s ease;

            @media screen and (max-width: 800px) {
                margin-left: 56px;
            }

            .logo-svg {
                width: 40px;
                margin-right: 8px;
            }

            .logo-text {
                color: transparent; 
                background: white;
                background-clip: text;
                -webkit-background-clip: text;
            }

            .logo-text {
                &:hover {
                    background: linear-gradient(
                        130deg,
                        #ff2400,
                        #ff2400,
                        #ff2400,
                        #ffa000,
                        @primary,
                        #4caf50,
                        #2195f3,
                        #fff,
                        #fff,
                        #fff,
                        #fff,
                    );
                    background-repeat: no-repeat;
                    background-size: 1800% 1800%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    -webkit-animation: rainbow 2s ease forwards;
                    animation: rainbow 2s ease forwards;
                    height: 100%;
                    width: fit-content;
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
                cursor: pointer !important;
                transition: color 0.2s ease;
                text-decoration: none;
                margin-right: 10px;
                margin-left: 10px;
                .hide-selection;

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
            content: '';
            display: block;
            position: absolute;
            left: 15px;
            width: 18px;
            height: 2.2px;
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

    .icon-group {
        > * {
            color: #aaa;
            cursor: pointer;
            display: block;
            margin: 0 12px 0 12px;
            transition: all 0.2s ease;
            height: 100%;
            width: 2rem;
            font-size: 1.6rem;
            z-index: 10000;

            &:hover {
                color: #fff;
            }
        }
    }

    .more-icon {
        @media screen and (max-width: 1200px) {
            display: none;
        }
    }

    .more-dropdown {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        top: 100%;
        font-size: 16px;
        min-width: 132px;
        right: 0;
        /* to be continued */
        padding-top: 20px;

        .more-item {
            display: block;
            text-align: left;
            padding: 8px;
            color: #aaa;
            transition: all 0.2s ease;

            &:hover {
                color: #fff;
                background: rgba(0, 0, 0, 1);
                border-left: 3px solid @primary;
            }
        }
    }
}
</style>

<template>
    <div class="side-catalog" :style="{height}">
        <div class="catalog-list">
            <div>
                <div v-for="(item) in topList" :key="item.ref"
                    :style="[{'padding-left': getTitleMargin(item.level)}]"
                    class="catalog-list-item" @click="activeAnchor(item.ref)" :class="{
			'active': active === item.ref,
			['child-' + item.level]: isChildren(item.level)
		  }">
                    <slot name="row" v-bind:level="item.level" v-bind:isActive="active === item.ref"
                        v-bind:title="item.title">
                        <slot name="default" v-bind:level="item.level"
                            v-bind:isActive="active === item.ref">
                        </slot>
                        <span class="catalog-list-item-title" :class="[
			`catalog-list-item-title-child${item.level || 1}`
		  ]" :title="item.title">{{ item.title }}</span>
                    </slot>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

export default {
    name: 'SideCatalog',
    data() {
        return {
            active: '',
            refTopMap: {},
            topList: [],
            reverseTopList: [],
            isBeforeDestroy: false,
            observer: null,
            itemClicking: false,
            debounceIntoView: null,
            throttleScroll: null,
            levelList: ['h1', 'h2', 'h3', 'h4', 'h5'],
            levelGap: 16,
            lineLeft: 22,
            lineShow: true,
            height: '',
            container: '#typo',
            innerScroll: false,
            watch: false,
            refList: []
        };
    },
    computed: {
        scrollElement() {
            return this.innerScroll ? document.querySelector(this.container) : window;
        },
        scrollToEle() {
            return this.innerScroll ? this.scrollElement : document.documentElement;
        }
    },
    async mounted() {
        this.debounceIntoView = debounce(this.activeIntoView, 250);
        this.throttleScroll = throttle(this.scrollHandle, 200);
        await this.setOffsetParent();
        await this.setTopList();
        this.initActive();
        this.scrollElement.addEventListener('scroll', this.throttleScroll);
        if (!this.watch) return;
        setTimeout(() => {
            this.setWatcher();
        }, 500);
    },
    beforeDestroy() {
        if (!this.watch) return;
        this.isBeforeDestroy = true;

        this.observer.disconnect();
        this.scrollElement.removeEventListener('scroll', this.throttleScroll);
    },
    methods: {
        activeAnchor(ref) {
            if (this.active === ref) return;

            this.itemClicking = true;
            this.scrollToEle.scrollTop = this.refTopMap[ref];
            this.active = ref;

            setTimeout(() => {
                this.itemClicking = false;
            }, 150);
            this.$emit('title-click', ref);
        },

        getRefDom(_ref) {
            const ref = this.$parent.$refs[_ref];
            if (Array.isArray(ref)) {
                return this.vueOrDom(ref[0]);
            }
            return this.vueOrDom(ref);
        },

        vueOrDom(ref) {
            if (ref instanceof HTMLElement) return ref;
            if (ref._isVue) return ref.$el;
        },

        setTopList() {
            if (this.isBeforeDestroy) return;
            this.topList = [];
            if (this.refList.length) {
                this.topForList();
            } else {
                this.topForDom();
            }
            this.reverseTopList = JSON.parse(JSON.stringify(this.topList)).reverse();
        },

        scrollHandle() {
            if (this.itemClicking) return;
            const { scrollTop, clientHeight, scrollHeight } = this.scrollToEle;

            if (scrollTop === 0) {
                this.initActive();
                return;
            }

            if (scrollTop + clientHeight >= scrollHeight) {
                this.initActive(true);
                return;
            }
            this.reverseTopList.some((item) => {
                if (scrollTop >= item.offsetTop) {
                    this.active = item.ref;

                    return true;
                }
                return false;
            });
        },
        initActive(last) {
            if (!this.topList.length) return;
            const index = last ? this.topList.length - 1 : 0;
            this.active = this.topList[index].ref;
        },
        activeIntoView(edge) {
            this.$nextTick(() => {
                const activeEl = document.querySelector('.catalog-list-item-active');
                if (!activeEl) return;

                activeEl.scrollIntoView({
                    block: 'center',
                    behavior: edge ? 'auto' : 'smooth'
                });
            });
        },
        getTitleMargin(level) {
            if (level === 1) return '';
            return level ? `${parseInt(level, 10) * this.levelGap}px` : this.levelGap + 'px';
        },

        setOffsetParent() {
            if (!this.innerScroll) return;
            const ele = document.querySelector(this.container);
            if (ele.style.position) return;
            ele.style.position = 'relative';
        },
        isChildren(level) {
            return level && level > 1;
        },
        setWatcher() {
            this.observer = new MutationObserver(debounce(this.setTopList, 700));
            this.observer.observe(document.querySelector(this.container), {
                childList: true,
                subtree: true,
                attributes: true
            });
        },

        topForList() {
            this.refList.forEach((item) => {
                const offsetTop = this.getRefDom(item.ref).offsetTop;
                const title = item.title || this.getRefDom(item.ref).innerText;
                this.topList.push({
                    ref: item.ref,
                    title,
                    offsetTop,
                    level: item.level
                });
                this.refTopMap[item.ref] = offsetTop;
            });
        },

        topForDom() {
            let headlevel = {};
            this.levelList.forEach((item, index) => {
                headlevel[item] = index + 1;
            });
            const childrenList = Array.from(document.querySelectorAll(`${this.container}>*`));
            childrenList.forEach((item, index) => {
                const nodeName = item.nodeName.toLowerCase();
                if (this.levelList.includes(nodeName)) {
                    this.topList.push({
                        ref: `${item.nodeName}-${index}`,
                        title: item.innerText,
                        offsetTop: item.offsetTop,
                        level: headlevel[nodeName]
                    });
                    this.refTopMap[`${item.nodeName}-${index}`] = item.offsetTop;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.side-catalog {
    .catalog-list {
        .catalog-list-item {
            position: relative;
            padding-left: 16px;
            padding-bottom: 16px;
            margin: 8px 0;
            transition: all 0.2s ease;
            cursor: pointer;
            font-size: 18px;
            width: fit-content;
            text-align: right;

            &.child-2::after {
                width: calc(110% - 32px);
                left: calc(32px - 5%);
            }

            &.child-3::after {
                width: calc(110% - 48px);
                left: calc(48px - 5%);
            }

            &::after {
                display: block;
                content: '';
                width: calc(110% - 16px);
                background: @inv;
                position: absolute;
                height: 6px;
                left: calc(16px - 5%);
                margin: 0 auto;
                bottom: 16px;
                z-index: -1;
                transition: all 0.2s ease;
            }

            &.active {
                font-weight: bold;
                transform: scale(1.3);
                transform-origin: left left;

                &::after {
                    background: @primary;
                }
            }

            &:not(.active) {
                &:hover {
                    &::after {
                        background: @primaryl;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="sotap-divider">
        <parallax-background :key="Math.random().toString().substr(2, 5)"
            :gradients="opacityGradient" :bg-img="img" :speedFactor="speedFactor"
            event-type="scroll" direction="up">
            <template #content>
                <div class="divider-row">
                    <slot></slot>
                </div>
            </template>
        </parallax-background>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ParallaxBackground from '@/components/parallax-background/parallax-background.vue';

export default Vue.extend({
    components: {
        ParallaxBackground
    },
    props: {
        img: {
            type: String
        },
        coverOpacity: {
            type: Number,
            default: 0
        },
        speedFactor: {
            type: Number,
            default: 0.5
        }
    },
    computed: {
        opacityGradient() {
            return [`linear-gradient(rgba(0, 0, 0, ${this.coverOpacity}), rgba(0, 0, 0, ${this.coverOpacity}))`];
        }
    }
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

        @media screen and (max-width: 1000px) {
            padding-left: 32px;
            padding-right: 32px;
        }
    }
}
</style>
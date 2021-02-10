<template>
    <div class="sotap-prefooter" v-lazy:background-image="bg" :class="alignPos === 'left' ? 'left-aligned' : 'right-aligned'">
        <h1><slot name="title"></slot></h1>
        <p><slot name="text"></slot></p>
        <slot name="button"></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Divider from '@/components/Divider.vue';

export default Vue.extend({
    components: {
        Divider
    },
    props: {
        bg: {
            type: String
        },
        alignPos: {
            type: String,
            default: "left"
        }
    }
});
</script>

<style lang="less" scoped>
.sotap-prefooter {
    @media screen and (min-width: 1200px) {
        padding-top: 128px;
        padding-bottom: 128px;
        padding-left: 64px;
        padding-right: 64px;

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 32px;

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 18px;
        }
    }

    background-size: cover;
    background-position: center;
    position: relative;
    background-color: black;
    transition: all .2s ease;

    h1 {
        color: #fff;
        text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
        margin-top: 0;
        margin-bottom: 32px;

        &::after {
            background: @primary;
            height: 6px;
            content: '';
        }
    }

    p {
        color: #fff;
        text-shadow: 0px 1px 8px #000;
        line-height: 1.8;

        @media screen and (min-width: 1200px) {
            max-width: 1200px;
        }
    }
}
</style>
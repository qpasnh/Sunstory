<template>
    <div class="premium-item">
        <span class="premium-item-title">
            <slot name="title"></slot>
        </span>
        <span class="premium-item-description">
            <slot name="desc"></slot>
        </span>
        <span class="premium-item-icon">
            <slot name="icon"></slot>
        </span>
        <span class="money-count"><span class="￥">￥</span>{{ price }}<span class="per"
                v-if="per">/{{ per }}</span></span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['price', 'per']
});
</script>

<style lang="less" scoped>
.premium-item {
    border-radius: 4px;
    box-shadow: @mdui-shadow-2;
    cursor: pointer;
    padding: 32px;
    text-align: center;
    transition: all 0.2s ease;
    background: white;

    @media screen and (min-width: 1200px) {
        &:hover {
            transform: scale(1.1);
            background: linear-gradient(135deg, #ffff00, @primary);

            .premium-item-icon {
                color: white;
            }
        }
    }

    .premium-item-title {
        font-weight: bold;
        font-size: 2rem;
        display: block;
        margin-top: 0;
        margin-bottom: 16px;
    }

    .premium-item-description {
        color: @textgray;
        line-height: 1.5;
        font-size: 14px;
        display: block;
        margin: auto;
    }

    .money-count {
        .font-currency;
        display: block;
        font-size: 3rem;
    }

    .￥ {
        font-size: 2rem;
        color: black;
    }

    .per {
        .font-text;
        font-size: 1rem;
        font-weight: normal;
        color: @textgray;
    }

    .premium-item-icon {
        font-size: 6rem;
        color: @primary;
        display: block;
        margin: 32px 0;
    }
}
</style>
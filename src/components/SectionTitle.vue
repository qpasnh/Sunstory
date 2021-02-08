<template>
    <div class="section-title">
        <span class="section-subtitle">
            <slot name="subtitle"></slot>
        </span>
        <span class="section-header">
            <slot name="title"></slot>
        </span>
        <span class="section-description">
            <slot name="desc"></slot>
        </span>
    </div>
</template>

<style lang="less" scoped>
.section-title {
    text-align: center;
    margin-top: 72px;
    margin-bottom: 72px;

    @media screen and (max-width: 1000px) {
        padding: 0 16px;
    }

    .section-subtitle {
        font-size: 12px;
        font-weight: bold;
        color: @primary;
        display: block;
        letter-spacing: 2px;
    }

    .section-header {
        .font-header;
        font-weight: bold;
        display: block;

        @media screen and (min-width: 690px) {
            font-size: 4rem;
        }

        @media screen and (max-width: 690px) {
            font-size: 3rem;
        }
    }

    .section-description {
        color: @textgray;
        line-height: 1.8;

        small {
            color: #aaa;
        }
    }
}
</style>

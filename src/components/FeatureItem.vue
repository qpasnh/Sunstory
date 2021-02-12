<template>
    <div class="feature-item">
        <div class="feature-icon">
            <slot name="icon"></slot>
        </div>
        <div class="feature-content">
            <h1 class="feature-title">
                <slot name="title"></slot>
            </h1>
            <p class="feature-text">
                <slot name="text"></slot>
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
.feature-item {
    display: flex;
    align-items: flex-start;

    .feature-icon {
        font-size: 5rem;
        margin-right: 24px;
        color: @primary;
    }

    .feature-content {
        .feature-title {
            margin: 0 0 16px 0;
            font-size: 24px;
        }

        .feature-text {
            color: @textgray;
            font-size: 15px;
            line-height: 1.5;
        }
    }
}
</style>
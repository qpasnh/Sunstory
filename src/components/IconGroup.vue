<template>
    <div class="icon-group">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
.icon-group {
    display: flex;
    align-items: center;

    > * {
        margin: 0 8px 0 8px;
    }
}
</style>
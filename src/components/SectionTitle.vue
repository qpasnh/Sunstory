<template>
  <div class="section-title">
    <span class="section-subtitle"><slot name="subtitle"></slot></span>
    <span class="section-header"><slot name="title"></slot></span>
    <span class="section-description"><slot name="desc"></slot></span>
  </div>
</template>

<style lang="less" scoped>
.section-title {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;

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
           font-size: 2.5rem;
       }
    }

    .section-description {
        color: rgba(0, 0, 0, .7);
    }
}
</style>

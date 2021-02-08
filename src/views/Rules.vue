<template>
    <General banner="https://sotap.oss-cn-qingdao.aliyuncs.com/header-background.jpg">
        <template #bannerTitle>服务器规则</template>
        <template #bannerText>这里是 SoTap 旗下所有服务器规则的共有部分。最近一次更新是在 2021 年 2 月 7 日。</template>
        <template #content>
            <rules />
        </template>
    </General>
</template>

<script lang="ts">
import Vue from 'vue';
import General from '@/components/General.vue';
import Rules from '@/data/doc/Rules.md';

export default Vue.extend({
    components: {
        General,
        Rules
    }
});
</script>
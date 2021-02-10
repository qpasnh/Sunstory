<template>
    <General banner="https://mcsunrise.oss-cn-qingdao.aliyuncs.com/sunrise1.png">
        <template #bannerTitle>服务器规则</template>
        <template #bannerText>这里是 SoTap 游戏服务器规则，请在加入游戏之前认真阅读本规则，以免出现损失。最近一次更新是在 2021 年 2 月 7 日。</template>
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
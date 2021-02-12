<template>
    <General :catalogue="false" :help="false" banner="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/join.jpg">
        <template #bannerTitle>加入 SoTap</template>
        <template #bannerText>在本页面，你可以了解到加入 SoTap 不同社群的几种方式。</template>
        <template #content>
            <join />
        </template>
    </General>
</template>

<script lang="ts">
import Vue from 'vue';
import General from '@/components/General.vue';
import Join from '@/data/doc/Join.md';

export default Vue.extend({
    components: {
        General,
        Join
    }
});
</script>
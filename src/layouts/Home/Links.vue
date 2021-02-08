<template>
    <div class="sotap-links">
        links友链部分回炉重做中，勿cue
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import HomeLinks from "@/data/content/HomeLinks.json";

export default Vue.extend({
    components: {
        SectionTitle
    },
    data() {
        return {
            links: HomeLinks
        };
    }
});
</script>

<style lang="less" scoped>
.sotap-links {
    font-size: 32px;
    font-style: italic;
    text-align: center;
    padding: 128px;
}
</style>
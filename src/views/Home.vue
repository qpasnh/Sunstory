<template>
    <div class="home">
        <banner />
        <feature />
        <description />
        <gallery />
        <blog />
        <prefooter alignPos="left" bg="https://i.loli.net/2021/02/02/pFxYjXhqrTz2Ced.png">
            <template #title>独乐不如众乐</template>
            <template #text>现在你可以无门槛*地加入 SoTap 了。无论你是一位普通的 Minecraft
                玩家，或者是建筑爱好者，亦或者是红石大师，甚至于编程大佬，这里都有你的一席之地。我们随时欢迎你的到来！<small>*门槛其实是有的：你需要一个 Minecraft
                    国际正版账号，仅此而已！</small></template>
            <template #button><a class="ui-button backgrounded" target="_blank"
                    href="//baidu.com">立即加入讨论群 &raquo;</a></template>
        </prefooter>
        <links />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/home-components/Banner.vue';
import Feature from '@/components/home-components/Feature.vue';
import Description from '@/components/home-components/Description.vue';
import Prefooter from '@/components/home-components/Prefooter.vue';
import Gallery from '@/components/home-components/Gallery.vue';
import Blog from '@/components/home-components/Blog.vue';
import Links from '@/components/home-components/Links.vue';

export default Vue.extend({
    data() {
        return {};
    },
    components: {
        Banner,
        Feature,
        Description,
        Prefooter,
        Gallery,
        Blog,
        Links
    }
});
</script>
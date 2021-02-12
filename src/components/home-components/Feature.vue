<template>
    <div class="sotap-feature">
        <div class="feature-row">
            <feature-item>
                <template #icon>
                    <span class="flaticon-ideas"></span>
                </template>
                <template #title>
                    友好型的商业服
                </template>
                <template #text>
                    遵循 Mojang EULA 协议，商业服也可以有公益服的感觉。遵循无强制、无暗费的基本准则；不设定土旧「神装/神器」等破坏平衡的增值服务；
					不阉割任何原版游戏的功能；提供「偏外观类」的增值物品。在这里，每一个玩家都能享受到完整、公平、舒适的游戏。
                </template>
            </feature-item>
            <feature-item>
                <template #icon>
                    <span class="flaticon-web-design"></span>
                </template>
                <template #title>
                    最小化的限制
                </template>
                <template #text>
                    我们一直紧跟最新稳定版本，抛开恼人的条条框框，没有规划限制、建筑外观限制和流水/岩浆/怪物数量限制，也没有生物密集养殖限制。
					无论是选择当名探险家还是打算找一片「世外桃源」来安心养老抑或是建筑爱好者都可以在这里尽情发挥你的才能。
                </template>
            </feature-item>
            <feature-item>
                <template #icon>
                    <span class="flaticon-idea"></span>
                </template>
                <template #title>
                    富有创造力的社区
                </template>
                <template #text>
                    在这片地大物博的世界里，创造是铸造伟大的阶梯。玩家们创建了城镇与市场，谱写了温馨与美好，亦在互助中孕育友情。
					时间流淌在高楼大厦之间，亦流动在红石的光辉中。从宏伟的世界建筑到喜闻乐见的玩家雕塑，社区驱使着创造力，丰富着世界的多彩。
                </template>
            </feature-item>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FeatureItem from '@/components/FeatureItem.vue';

export default Vue.extend({
    components: {
        FeatureItem
    }
});
</script>

<style lang="less" scoped>
.sotap-feature {
    width: 100%;

    .feature-row {
        padding-top: 64px;
        padding-bottom: 64px;
        position: relative;
        max-width: 1200px;
        margin: auto;
        position: relative;
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;

        @media screen and (max-width: 1200px) {
            flex-direction: column;
        }

        > * {
            @media screen and (min-width: 1200px) {
                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }

                margin: 0 16px 0 16px;
                width: calc(33.3% - 32px);
            }

            @media screen and (max-width: 1200px) {
                padding: 16px 32px;
            }
        }
    }
}
</style>
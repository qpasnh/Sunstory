<template>
    <div class="sotap-feature">
        <div class="feature-row">
            <feature-item>
                <template #icon>
                    <span class="flaticon-ideas"></span>
                </template>
                <template #title>
                    商业友好型
                </template>
                <template #text>
                    最公益的商业服：遵循 Mojang EULA
                    协议，商业服也可以有公益服的感觉。始终遵循无强制、无限制、无暗费的三大基本准则；不设定任何土旧的「神装|神器|坐骑」等破坏平衡的增值服务；同时提供「Pay
                    as you go」支付方案，按需付费模式使玩家节省更多。
                </template>
            </feature-item>
            <feature-item>
                <template #icon>
                    <span class="flaticon-analysis"></span>
                </template>
                <template #title>
                    隐私不留痕
                </template>
                <template #text>
                    社区管辖的所有服务器均遵循欧盟 GDPR 规定，不在任何情况下收集保存玩家 IP
                    地址、聊天记录、互动记录等敏感数据；在任何时候都不会将玩家数据分享给第三方；同时玩家有权利要求将自己的数据从服务器上永久删除和要求服务器提供自己的个人数据下载。
                </template>
            </feature-item>
            <feature-item>
                <template #icon>
                    <span class="flaticon-web-design"></span>
                </template>
                <template #title>
                    用心制作
                </template>
                <template #text>
                    我们重新设计了社区官网的界面，让其保持轻盈而加载快速的同时又不失其美观性。为了确保游戏服务器和社区相关服务器的平稳运行，我们花费了许多的时间来校调、修改和完善。精心设计的游戏设定到活跃的活动策划团队，这一切都是为了给玩家最好体验。
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
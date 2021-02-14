<template>
    <div class="premium">
        <static-banner bg="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/premium.png">
            <template #title>付费项目</template>
            <template #text>在这里，你可以查看 SoTap 现有的付费增值服务项目。SoTap 运营不易，除了「爱发电」的捐助，购买付费增值服务也是支持 SoTap
                运行的方式之一。</template>
        </static-banner>
        <div class="premium-container">
            <div class="description typo">
                <h1>为什么会有付费服务？</h1>
                <p>这也是在问「为什么 SoTap 是商业服」。实际上，SoTap
                    运营初期曾有一段时间是完全免费的公益服，预想凭借玩家的<strong>自愿捐助</strong>来维持服务器的运行。但是后来发现效果并不显著，导致 SoTap
                    运营陷入危机。</p>
                <p>后来，SoTap 转型为商业服，情况略为好转。因此，付费服务实际上是用于保证 SoTap 正常运行的一种手段。现阶段，我们保证所有玩家的付费金额都能 100%
                    地用于服务器的维护和续费。目前服务器的月消耗约为 <span class="font-currency">￥600</span>。</p>
                <p><strong>付款充值即代表已经阅读并知晓《简单付费须知》（见下方）。</strong></p>
            </div>
            <div class="premium typo">
                <h1>现有付费服务</h1>
                <p>由于内服暂未开启，目前的付费服务类型较为单一，大致有以下四种。</p>
                <div class="premium-row">
                    <premium-item :price="30">
                        <template #title>
                            10 个家权限
                        </template>
                        <template #desc>
                            为你的游戏添加 10 个额外可设置的家额度，一次购买永久持有。
                        </template>
                        <template #icon>
                            <span class="mdi mdi-home-plus-outline" />
                        </template>
                    </premium-item>
                    <premium-item :price="25" per="月">
                        <template #title>
                            传送免费
                        </template>
                        <template #desc>
                            免除 tpa、back、home 等指令的额外费用
                        </template>
                        <template #icon>
                            <span class="mdi mdi-currency-usd-off" />
                        </template>
                    </premium-item>
                    <premium-item :price="15" per="月">
                        <template #title>
                            拓展背包
                        </template>
                        <template #desc>
                            解锁虚拟拓展背包，可携带更多物品且背包内物品死亡后不掉落
                        </template>
                        <template #icon>
                            <span class="mdi mdi-package-variant" />
                        </template>
                    </premium-item>
                    <premium-item :price="5" per="月">
                        <template #title>
                            彩色字
                        </template>
                        <template #desc>
                            可在聊天框中使用<br>彩色字体
                        </template>
                        <template #icon>
                            <span class="mdi mdi-sparkles"></span>
                        </template>
                    </premium-item>
                </div>
                <p class="sotap-typo">要获取指定的付费服务，你需要首先前往 <a href="https://sotap.mcrmb.com"
                        target="_blank">MCRMB 页面</a>进行充值，将得到「宝石<span
                        class="mdi mdi-diamond-stone"></span>」货币（<span class="font-currency">1×<span
                            class="mdi mdi-diamond-stone"></span> =
                        ￥1</span>）。在服务器内，你可以利用宝石货币<span
                        class="mdi mdi-diamond-stone"></span>在菜单中购买相应的权限，立即生效。
                </p>
            </div>
            <div class="policy typo">
                <h1>简单付费须知</h1>
                <p>在购买前，请务必阅读简单付费须知。</p>
                <p>
                <ul>
                    <li><strong>SoTap 不鼓励未成年人在服务器内消费。</strong>未成年人应当在父母明确允许的情况下在 SoTap
                        进行消费行为。未成年消费行为一旦发生，SoTap 将视为你已经经过了家长同意。</li>
                    <li class="sotap-typo"><strong>SoTap 希望你适度游戏充值。</strong>虽然充值对 SoTap
                        的运营来说很重要，但请适度充值。本服不提倡「月亮岛式」充值行为。有关「月亮岛」事件可以阅读<a
                            href="https://www.zhihu.com/question/52686537"
                            target="_blank">知乎有关文章</a>或者<a
                            href="https://www.baidu.com/s?ie=UTF-8&wd=%E6%9C%88%E4%BA%AE%E5%B2%9B%E4%BA%8B%E4%BB%B6"
                            target="_blank">百度月亮岛事件</a>。</li>
                    <li><strong>SoTap
                            不允许任何倒卖权限行为。</strong>包括但不仅限于私下售卖账号以获取特定权限等行为。一经发现，<strong>购买者与被购买者双方账号封禁，且付款时间超过
                            3 天的不予以退款。</strong></li>
                    <li><strong>SoTap
                            不会因为充值而提供其它特殊待遇或保护。</strong>充值所购买的内容即为上述规定内容，不会有任何超出其范围的内容。禁止主动讨要相关权限。一经发现，酌情给予警告等。
                    </li>
                    <li><strong>SoTap 不建议随意赠送账号、转让物品等。</strong>只要未牵涉到线上线下金钱交易，这一切都是符合规定且可行的，但 SoTap
                        并不建议这样做。任何因此而造成的纠纷和矛盾与 SoTap 无关。</li>
                    <li><strong>宝石一经充值，不可退款。</strong>不接受任何类似于「退服了，能不能把宝石余额退款，不退全额也行」的理由。望充值前谨慎考虑。
                    </li>
                </ul>
                </p>
                <p>充值即代表已阅读并知晓上述须知内容。</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import StaticBanner from '@/components/StaticBanner.vue';
import PremiumItem from '@/components/PremiumItem.vue';
import Vue from 'vue';

export default Vue.extend({
    components: { StaticBanner, PremiumItem }
});
</script>

<style lang="less" scoped>
.premium {
    width: 100%;
    position: relative;

    .premium-container {
        max-width: 1200px;
        position: relative;
        margin: auto;

        @media screen and (max-width: 1200px) {
            padding: 0 32px;
        }

        .typo {
            h1 {
                font-size: 3rem;
            }

            p {
                line-height: 1.8;
                color: @textgray;
                font-size: 20px;

                strong {
                    color: black;
                }
            }
        }

        .premium-row {
            display: flex;
            align-items: stretch;

            @media screen and (max-width: 1200px) {
                flex-wrap: wrap;
            }

            margin-top: 32px;

            > * {

                @media screen and (max-width: 1200px) {
                    width: 100%;
                    margin: 16px 0;
                }

                @media screen and (min-width: 1200px) {
                    width: 33.33%;
                    margin: 0 16px;
                }

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
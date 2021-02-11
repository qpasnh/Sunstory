<template>
    <!-- WARNING: YINTING IS HERE. dont move and no bb -->
    <div class="yinting-container">
        <div @click="$router.push('/')" class="go-back-button swiper-prev"><span
                class="mdi mdi-arrow-left"></span></div>
        <div class="control">
            <status :status="status" />
            <button v-if="status === '' && allow" ref="startButton" @click="start()"
                class="ui-button backgrounded">你准备好了就开始
                :)</button>
            <p class="sotap-typo" v-if="!allow">宝，需要用浏览器窗口宽度大于 1200px 的电脑访问这个页面，快去弄一台。<br><br><a
                    href="https://www.taobao.com/" target="_blank">淘宝网</a> · <a
                    href="https://www.tmall.com/" target="_blank">天猫</a> · <a
                    href="https://www.jd.com/" target="_blank">京东</a></p>
            <audio>
                <source src="https://sotapmc.oss-cn-beijing.aliyuncs.com/yinting.mp3"
                    type="audio/mpeg" />
            </audio>
            <vue-countdown ref="countdown" v-show="showCountdown" class="countdown" :time="196000"
                :transform="transform" :auto-start="false">
                <template slot-scope="props">{{props.minutes}}:{{props.seconds}}</template>
            </vue-countdown>
        </div>
        <div class="subtitle-container">
            <div class="subtitle-box">
                <div class="subtitle" v-html="subtitle"></div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { Animation, isMobile } from '@/functions';
import Vue from 'vue';
// @ts-ignore
import VueCountdown from '@chenfengyuan/vue-countdown';
import Status from '@/components/Status.vue';

export default {
    methods: {
        async start() {
            document.querySelector('audio')?.play();
            Animation.ease('out', 'top', '.ui-button');
            await this.sleep(0.75);
            document.querySelector(".ui-button").style.display = 'none';
            this.showCountdown = true;
            document.body.style.background = "url('https://sotapmc.oss-cn-beijing.aliyuncs.com/img/yinting/8.jpg') center center / cover no-repeat";
            this.$refs.countdown.start();
            this.startTimeline();
        },
        transform(props) {
            Object.entries(props).forEach(([key, value]) => {
                const digits = value < 10 ? `0${value}` : value;
                props[key] = `${digits}`;
            });
            return props;
        },
        createImage(number) {
            let container = document.querySelector(".yinting-container");
            let image;
            let x;
            if (Array.isArray(number)) {
                if (number.length > 2) return;
                image = [];
                number.forEach((k, i) => {
                    x = this.buildImage(k, i === 1 ? '25%' : undefined, i === 0 ? '25%' : undefined, i === 1 ? '25%' : '-25%');
                    image.push(x);
                    container.appendChild(x);
                })
            } else {
                x = this.buildImage(number, '50%', undefined, '50%');
                image = x;
                container.appendChild(x);
            }
            return image;
        },
        buildImage(number, right, left, translate) {
            let image = document.createElement("img");
            image.src = this.getImageURL(number);
            image.onerror = () => {
                image.src = this.getImageURL(number, "png");
                console.log("这个404错误可以忽略的，nbcs")
                return;
            }
            image.style.display = 'none';
            image.style.maxWidth = '700px';
            image.style.maxHeight = '600px';
            image.style.position = 'absolute';
            image.style.right = right  ?? '';
            image.style.left = left ?? '';
            image.style.transform = `translateX(${translate})`
            return image;
        },
        getImageURL(number, attribute = 'jpg') {
            return `https://sotapmc.oss-cn-beijing.aliyuncs.com/img/yinting/${number}.${attribute}`
        },
        sleep(s) {
            return new Promise(resolve => setTimeout(resolve, 1000 * s));
        },
        async startTimeline() {
            let image;
            for (let i = 0; i < this.timeline.length; i++) {
                this.subtitle = this.timeline[i][0];
                if (this.timeline[i].length > 3) image = this.images[i];
                if (Array.isArray(image)) {
                    image.forEach(k => {
                        k.style.display = 'block';
                    })
                } else if (image) {
                    image.style.display = 'block'
                }
                await this.sleep(this.timeline[i][2] - this.timeline[i][1]);
                if (i === this.timeline.length - 1) {
                    location.href = "/"
                    break;
                }
                if (this.timeline[i][2] !== this.timeline[i+1][1]) {
                    await this.sleep(this.timeline[i+1][1] - this.timeline[i][2]);
                }
                if (Array.isArray(image)) {
                    image.forEach(k => {
                        k.remove();
                    })
                } else {
                    image?.remove();
                }
            }
        },
        initImages() {
            for (let i = 0; i < this.timeline.length; i++) {
                if (this.timeline[i].length > 3) this.images[i] = this.createImage(this.timeline[i][3]);
                if (i === this.timeline.length - 1) {
                    this.status = '';
                    break;
                }
            }
        }
    },
    components: {
        VueCountdown,
        Status
    },
    data() {
        return {
            showCountdown: false,
            subtitle: "",
            status: "loading",
            allow: false,
            timeline: [
                ['🚓', 0.75, 3.3],
                ['Ladys and Gentlemen', 3.3, 4.525],
                ['Welcome to Nanning', 5.375, 7.064],
                ['Now listen to', 7.575, 8.75],
                ['<span class="rainbow">Yinting!</span>', 9.35, 11.421, 57],
                ['🎵', 11.421, 17.200],
                ['Yinting~', 17.200, 18.15],
                ['他那么婊气十足 自以为是只花蝴蝶', 18.65, 22.2, [1, 45]],
                ['阴婷我人淡如菊 气质爆甩她几条街', 22.6, 26.075, [10, 18]],
                ['我旋转跳跃涂上卡姿兰 来到大沙田', 26.475, 30, [69, 38]],
                ['她 三审定谳 闭嘴惊艳', 30.35, 31.55, 58],
                ['路人甲不敢发言 闭嘴惊艳', 31.575, 33.575, 20],
                ['来到这条街', 33.575, 35.652, 3],
                ['请不要叫我小姐', 35.652, 37.45, 74],
                ['有人说 我只是比较豁出去', 37.475, 40.3, 90],
                ['比较敢一点', 40.3, 41.875, 72],
                ['爱上这条街', 41.875, 43.3, 60],
                ['是属于我的世界<img src="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/yinting/mc.gif" draggable="false" width="16px"/>', 43.35, 45.4, 75],
                ['沙漏被踩碎 我的喜悲没人看见', 45.525, 49.075, 61],
                ['找不到从良的理由', 49.1, 52.5, 13],
                ['谁来给我个从良的理由', 52.75, 56.1, 11],
                ['别问怎么做', 56.225, 58.125, 59],
                ['爱❤才能长久🐎', 58.175, 60.05, 70],
                ['有天你会懂', 60.1, 61.95, 65],
                ['嘿', 61.95, 62],
                ['嘿', 62, 62.425],
                ['这道理总有一天你会懂', 62.75, 64.725, 58],
                ['找不到从良的理由🐓', 64.725, 68.35, 16],
                ['再也找不到从良的理由', 68.35, 71.875, 71],
                ['别问怎么做', 71.875, 73.55, 10],
                ['爱才能长久', 73.55, 75.55, 91],
                ['有天你会懂', 75.55, 77.5, 37],
                ['嘿', 77.525, 77.925],
                ['这道理总有一天你会懂', 78.625, 80.5, 26],
                ['🎵 嘟噜嘟噜嘟噜 🎵', 80.65, 86.175, 46],
                ['再也找不到从良的理由', 86.175, 88.45, 22],
                ['🎵 嘟噜嘟噜嘟噜 🎵', 88.45, 94.325, 47],
                ['这道理总有一天你会懂', 94.325, 95.675, 4],
                ['天了噜😮', 95.675, 96.325, 48],
                ['你竟然在补唇蜜', 96.45, 97.9, 76],
                ['难道没听说过不努力的难逃一吸⚠', 97.95, 99.925, 49],
                ['劝你吃点💩去冷静', 99.925, 101.625, 25],
                ['否则别怪我阴者自阴', 101.625, 103.575, 68],
                ['今天', 103.575, 104.175],
                ['老娘要为公主走一次钢索', 104.375, 106.2, 63],
                ['不会泄漏一点线索', 106.2, 108.175, 56],
                ['你他媽再说一遍🤮', 108.175, 109.675, 24],
                ['这话留到阴🙂里再说', 109.675, 112.125, 77],
                ['站在这条街', 112.2, 113.675, 78],
                ['请尽管叫我小姐🙋‍', 113.675, 115.55, 68],
                ['还是说 我只是比较豁出去', 115.55, 118.275, 32],
                ['比较敢一点', 118.275, 119.825, 35],
                ['爱站这条街', 119.825, 121.45, 50],
                ['我是这里的一姐', 121.45, 123.375, 79],
                ['喝下恒河水', 123.575, 125, 80],
                ['我要揭开我的庆典', 125, 127, 81],
                ['找不到从良的理由', 127, 130.625, 73],
                ['谁来给我个从良的理由😭', 130.725, 134.475, 82],
                ['别问怎么做', 134.475, 135.95, 36],
                ['爱才能长久', 136.15, 137.925, 83],
                ['有一天你会懂', 138.25, 139.8, 84],
                ['嘿', 139.8, 140.35],
                ['这道理 总有一天你会懂', 140.75, 142.925, 85],
                ['找不到从良的理由', 143.05, 146.125, 12],
                ['再也找不到从良的 理由', 146.125, 149.9, 14],
                ['别问怎么做', 149.975, 151.725, 15],
                ['爱才能长久', 151.8, 153.425, [9, 66]],
                ['有天你会懂', 153.75, 155.35, 42],
                ['嘿', 155.45, 155.875],
                ['这道理总有一天你会懂', 156.45, 158.8, 31],
                ['环游了南宁', 159.325, 160.425],
                ['环游大沙田', 160.875, 163.1],
                ['都没有发现', 163.225, 164.725],
                ['美丽旗舰店', 164.725, 167.05],
                ['我要再努力点', 167.125, 169.225, 87],
                ['看我七十二变', 169.225, 171.2, 89],
                ['甩平凡嘴↓脸↑', 171.2, 172.725, 86],
                ['靠自己变↑脸↑', 172.8, 174.475, 88],
                ['🎵 嘟噜嘟噜嘟噜 🎵', 174.575, 180, 39],
                ['再也找不到从良的理由', 180, 182.175, 54],
                ['🎵 嘟噜嘟噜嘟噜 🎵', 182.175, 187.8, 41],
                ['再也找不到从良的理由', 187.8, 190.3, 29],
                ['嘻嘻嘻嘻嘻嘻 <img src="https://sotapmc.oss-cn-beijing.aliyuncs.com/img/yinting/wuzuixiao.png" draggable="false"/>', 190.45, 192.425, 44]
            ],
            images: []
        }
    },
    mounted() {
        document.body.style.transition = "all .2s ease";
        document.body.style.height = "100vh";
        document.body.style.width = "100vw";
        document.body.style.backgroundSize = "cover";
        this.initImages();
        if (!isMobile() && window.innerWidth >= 1200) {
            this.allow = true;
        }
        window.onresize = e => {
            if (e.target.innerWidth < 1200) {
                location.reload();
            }
        }
    }
};
</script>

<style lang="less" scoped>
.yinting-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .control {
        width: 100%;
        text-align: center;

        .ui-button {
            display: inline-block;
            cursor: pointer;
            .font-text;

            @media screen and (max-width: 1200px) {
                display: none;
                pointer-events: none;
            }
        }

        .countdown {
            font-size: 3rem;
            font-weight: bold;
            color: white;
            display: inline-block;
        }
    }

    .subtitle-container {
        width: 100%;
        text-align: center;
        position: fixed;
        bottom: 32px;

        .subtitle-box {
            width: 100%;
            text-align: center;
            position: relative;

            .subtitle {
                text-shadow: @textshadow-1;
                color: white;
                font-size: 4rem;
                font-weight: bold;
                font-style: italic;
                display: inline-block;
            }
        }
    }

    .go-back-button {
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;

        &:hover {
            opacity: 1;
        }
    }

    img {
        box-shadow: @mdui-shadow-20;
    }
}
</style>
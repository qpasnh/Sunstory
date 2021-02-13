<template>
    <div class="app">
        <navbar v-if="$route.name !== 'yinting'" />
        <div class="main-content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
        <Footer v-if="$route.name !== 'yinting'" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { isNight } from './functions';

export default Vue.extend({
    data() {
        return {
            titleDict: {
                home: "Waiting for You",
                about: "关于我们",
                rules: "服务器规则",
                gallery: "图库",
                ecosystem: "生态系统",
                join: "加入我们"
            } as Dictionary
        };
    },
    components: {
        Navbar,
        Footer
    },
    watch: {
        '$store.darkmode'(v) {
            if (v) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
        '$route'(v) {
            document.title = "SoTap | " + this.titleDict[v.name];
        }
    },
    mounted() {
        if (this.$cookies.get('darkmode_state') === 'true' || isNight()) {
            this.$actions.setDarkmode(true);
        } else if (this.$cookies.get('darkmode_state') === 'false' || !isNight()) {
            this.$actions.setDarkmode(false);
        }
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        link.href = 'https://sotapmc.oss-cn-beijing.aliyuncs.com/img/logo/favicon.ico';
    }
});
</script>

<style lang="less" scoped>
.app,
.main-content {
    height: 100%;
}
</style>
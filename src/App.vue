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

export default Vue.extend({
    data() {
        return {};
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
        }
    },
    mounted() {
        if (this.$cookies.get("darkmode_state") === "true") {
            this.$actions.setDarkmode(true);
        } else if (this.$cookies.get("darkmode_state") === "false") {
            this.$actions.setDarkmode(false);
        }
    }
});
</script>

<style lang="less" scoped>
.app,
.main-content {
    height: 100%;
}
</style>
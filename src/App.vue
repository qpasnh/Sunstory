<template>
    <div class="app">
        <navbar />
        <div class="main-content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
        <Footer />
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
    }
});
</script>
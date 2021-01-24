<template>
    <div class="app">
        <navbar/>
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from "@/components/Navbar.vue"

export default Vue.extend({
    data() {
        return {

        }
    },
    components: {
        Navbar
    }
})
</script>
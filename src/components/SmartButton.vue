<template>
    <button @click="active = true; onclick[0](onclick[1])" class="smart-button"
        :style="'background: ' + background + '; color: ' + color + '; border-color: ' + borderColor + ';'">
        <span v-show="!active" :class="iconInactive" />
        <span v-show="active" :class="iconActive" />
        {{ text }}
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: [
        'iconInactive',
        'iconActive',
        'textInactive',
        'textActive',
        'backgroundInactive',
        'backgroundActive',
        'colorInactive',
        'colorActive',
        'borderColorInactive',
        'borderColorActive',
        'onclick'
    ],
    data() {
        return {
            text: '',
            background: '',
            color: '',
            borderColor: '',
            active: false
        };
    },
    methods: {
        inactivate() {
            this.text = this.textInactive;
            this.background = this.backgroundInactive;
            this.color = this.colorInactive;
            this.borderColor = this.borderColorInactive;
            this.active = false;
        },
        activate() {
            this.text = this.textActive;
            this.background = this.backgroundActive;
            this.color = this.colorActive;
            this.borderColor = this.colorActive;
            this.active = true;
        }
    },
    mounted() {
        this.inactivate();
    },
    watch: {
        active(v) {
            if (v) {
                this.activate();
                setTimeout(() => {
                    this.inactivate();
                }, 650);
            } else {
                this.inactivate();
            }
        }
    }
});
</script>
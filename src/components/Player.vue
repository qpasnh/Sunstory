<template>
    <div class="player">
        <div class="avatar" v-lazy:background-image="avatar" />
        <span class="player-name">
            {{ name }}
        </span>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
    props: {
        name: {
            type: String
        }
    },
    methods: {
        getUUID() {
            axios.get('https://api.ashcon.app/mojang/v2/user/' + this.name).then((r) => {
                this.avatar = 'https://crafatar.com/avatars/' + r.data.uuid.replaceAll('-', '');
            });
        }
    },
    mounted() {
        this.getUUID();
    },
    data() {
        return {
            uuid: '',
            avatar: ''
        };
    }
});
</script>

<style lang="less" scoped>
.player {
    display: inline-block;
    color: white;
    margin: 0 .1em;

    .avatar {
        margin-right: 4px;
        width: 16px;
        height: 16px;
        transition: all 0.2s ease;
        background-image: black;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        vertical-align: middle;
    }

    .player-name {
        .font-header;
        font-weight: 600;
    }
}
</style>
<template>
    <div class="player" @click="go()">
        <span class="text" v-if="text">
            {{ text }}
        </span>
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
        },
        text: {
            type: String
        }
    },
    methods: {
        getUUID() {
            axios.get('https://api.ashcon.app/mojang/v2/user/' + this.name).then((r) => {
                this.uuid = r.data.uuid.replaceAll('-', '');
                this.avatar = 'https://crafatar.com/avatars/' + this.uuid;
            });
        },
        go() {
            window.open("https://stats.sotap.org/#/player/" + this.uuid);
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
    display: inline-flex;
    align-items: center;
    color: white;
    margin: 0 .1em;
    cursor: pointer;

    .avatar {
        margin-right: 4px;
        width: 16px;
        height: 16px;
        transition: all 0.2s ease;
        background-image: @inv;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        vertical-align: middle;
        margin-right: .3em;
    }

    .player-name {
        .font-header;
        font-weight: 600;
    }

    .text {
        margin-right: .5em;
    }
}
</style>
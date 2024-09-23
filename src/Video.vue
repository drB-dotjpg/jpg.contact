<template>
    <div class="video">
        <video :src="props.src" :alt="props.alt" :title="props.alt" @click="openVideo" autoplay muted loop></video>
    </div>
</template>

<script setup lang="ts">
import { useWindowsStore } from './stores/windowStore';

const windows = useWindowsStore();

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    }
});

function openVideo() {
    windows.addWindow({
        title: props.alt,
        html: "<video class='fullscreen' src='" + props.src + "' alt='" + props.alt + "' autoplay muted loop controls></video>"
    })
}
</script>

<style lang="scss" scoped>
@import "./style/variables.scss";

.video {
    border: 2px solid $dark;
    border-radius: 5px;
    overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    .error {
        width: 100%;
        height: 100%;
        background-color: $dark;
        color: $light;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
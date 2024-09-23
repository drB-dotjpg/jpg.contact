<template>
    <div class="image">
        <img v-if="!error" :src="props.src" :alt="props.alt" :title="props.alt" @click="openImage" />
        <div v-else class="error">
            <ImageIcon />
            <XIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ImageIcon, XIcon } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useWindowsStore } from './stores/windowStore';

const windows = useWindowsStore();
const error = ref(false);

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

onMounted(() => {
    const img = new Image();
    img.src = props.src;
    img.onerror = () => {
        error.value = true;
    };
});

function openImage() {
    windows.addWindow({
        title: props.alt,
        html: "<img class='fullscreen' src='" + props.src + "' alt='" + props.alt + "' />"
    })
}
</script>

<style lang="scss" scoped>
@import "./style/variables.scss";

.image {
    border: 2px solid $dark;
    border-radius: 5px;
    overflow: hidden;

    img {
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
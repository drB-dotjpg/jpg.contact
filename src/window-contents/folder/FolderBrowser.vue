<template>
    <div class="folder-browser">
        <div v-if="$slots">
            <slot></slot>
        </div>
        <template v-for="item in contents">
            <div class="folder" @mousedown.prevent="item.onClick">
                <File />
                <div class="title">{{ item.name }}</div>
                <div>{{ item.date }}</div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { FolderContent } from '../../types/FolderContent';
import { File } from 'lucide-vue-next';

defineProps({
    contents: {
        type: Array as PropType<FolderContent[]>,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

.folder-browser {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;

    .folder {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        border: 3px solid $dark;
        border-radius: 5px;
        cursor: pointer;
        gap: 1rem;
        transition: background-color .1s, color .1s;
        font-weight: 500;
        font-size: 1.25rem;

        .title {
            min-width: fit-content;
            font-weight: 700;
            flex: 1;
        }
    }

    .folder:hover {
        background-color: $dark;
        color: $light;
    }
}
</style>
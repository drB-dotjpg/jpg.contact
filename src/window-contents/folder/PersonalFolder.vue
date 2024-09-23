<template>
    <FolderBrowser :contents="contents">
        <h1>Personal Projects</h1>
        <p>These are projects not related to a specific org.</p>
    </FolderBrowser>
</template>

<script setup lang="ts">
import { useWindowsStore } from '../../stores/windowStore';
import { FolderContent } from '../../types/FolderContent';
import { riptideWindow } from '../../windows';
import FolderBrowser from './FolderBrowser.vue';

const windowStore = useWindowsStore();

const contents: FolderContent[] = [
    {
        name: "Riptide",
        date: "September 2021 - Present",
        onClick: () => {
            windowStore.addWindow(riptideWindow);
        },
    }
]
</script>

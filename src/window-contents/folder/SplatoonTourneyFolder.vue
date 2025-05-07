<template>
    <FolderBrowser :contents="contents">
        <h1>SplatoonTourney</h1>
        <p>Splatoon Production group known for streaming leagues and LANS.</p>
        <p>
            <a href="https://www.twitch.tv/splatoontourney">Twitch, </a>
            <a href="https://bsky.app/profile/splatoontourney.bsky.social">Bluesky, </a>
            <a href="https://www.youtube.com/@splatoontourney">YouTube</a>
        </p>
    </FolderBrowser>
</template>

<script setup lang="ts">
import { useWindowsStore } from '../../stores/windowStore';
import { FolderContent } from '../../types/FolderContent';
import { lcsWindow } from '../../windows';
import FolderBrowser from './FolderBrowser.vue';

const windowStore = useWindowsStore();

const contents: FolderContent[] = [
    {
        name: "LAN Championship Showndown",
        date: "September 2024 - April 2025",
        onClick: () => {
            windowStore.addWindow(lcsWindow);
        },
    }
]
</script>

<template>
    <FolderBrowser :contents="contents">
        <h1>Gaming and Esports Club at ISU</h1>
        <p>The Gaming and Esports Club at ISU is a student run organization which specializes in managing a
            variety of esports teams and hosting on campus events for anyone interested in gaming. For the
            2023-2024 academic year, I was elected to be the design chair for the club.</p>
        <p>
            <a href="https://www.twitch.tv/ISUGamingEsports">Twitch, </a>
            <a href="https://twitter.com/GamingISU">Twitter, </a>
            <a href="https://github.com/GamingEsports">GitHub, </a>
            <a href="https://www.instagram.com/isugamingesports/">Instagram, </a>
            <a href="https://www.tiktok.com/@gamingesportsatisu">TikTok</a>
        </p>
    </FolderBrowser>
</template>

<script setup lang="ts">
import { useWindowsStore } from '../../stores/windowStore';
import { FolderContent } from '../../types/FolderContent';
import { charityStreamWindow, geOpenWindow, tempestWindow } from '../../windows';
import FolderBrowser from './FolderBrowser.vue';

const windowStore = useWindowsStore();

const contents: FolderContent[] = [
    {
        name: "GE Open 2024",
        date: "January 2024 - April 2024",
        onClick: () => {
            windowStore.addWindow(geOpenWindow);
        },
    },
    {
        name: "Charity Stream 2023",
        date: "June 2023 - October 2023",
        onClick: () => {
            windowStore.addWindow(charityStreamWindow);
        },
    },
    {
        name: "Tempest",
        date: "September 2023 - May 2024",
        onClick: () => {
            windowStore.addWindow(tempestWindow);
        },
    }
]
</script>

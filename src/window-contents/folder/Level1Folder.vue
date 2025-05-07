<template>
    <FolderBrowser :contents="contents">
        <h1>Level1</h1>
        <p>Level1 is a production company based in the northwest of the US. They specialize in livestreaming in-person
            fighting game tournaments, primarily Super Smash Bros. and other platform fighters.</p>
        <p>
            <a href="https://level1.tv/">Website, </a>
            <a href="https://www.twitch.tv/level1_tv">Twitch, </a>
            <a href="https://twitter.com/Level1_tv">Twitter, </a>
            <a href="https://bsky.app/profile/level1.tv">Bluesky, </a>
            <a href="https://www.youtube.com/@Level1_TV">YouTube, </a>
            <a href="https://github.com/Level1-TV">GitHub</a>
        </p>
    </FolderBrowser>
</template>

<script setup lang="ts">
import { useWindowsStore } from '../../stores/windowStore';
import { FolderContent } from '../../types/FolderContent';
import { battleOfBC5Window, battleOfBC6Window, dpotg2024Window, eggdogInv2024Window, fullBloom2024Window, lacsRivalsWindow, smashCamp2024Window, battleOfBC7Window } from '../../windows';
import FolderBrowser from './FolderBrowser.vue';

const windowStore = useWindowsStore();

const contents: FolderContent[] = [
    {
        name: "Battle of BC 7",
        date: "March 2025",
        onClick: () => {
            windowStore.addWindow(battleOfBC7Window);
        },
    },
    {
        name: "LACS Rivals",
        date: "October 2024 - November 2024",
        onClick: () => {
            windowStore.addWindow(lacsRivalsWindow);
        },
    },
    {
        name: "Don't Park On The Grass 2024",
        date: "October 2024 - November 2024",
        onClick: () => {
            windowStore.addWindow(dpotg2024Window);
        },
    },
    {
        name: "Eggdog Invitational 2024",
        date: "August 2024 - September 2024",
        onClick: () => {
            windowStore.addWindow(eggdogInv2024Window);
        },
    },
    {
        name: "Smash Camp: New Lands 2024",
        date: "May 2024 - June 2024",
        onClick: () => {
            windowStore.addWindow(smashCamp2024Window);
        },
    },
    {
        name: "Battle of BC 6",
        date: "March 2024",
        onClick: () => {
            windowStore.addWindow(battleOfBC6Window);
        },
    },
    {
        name: "Full Bloom 2024 + Genesis X",
        date: "February 2024",
        onClick: () => {
            windowStore.addWindow(fullBloom2024Window);
        },
    },
    {
        name: "Battle Of BC 5",
        date: "May 2023",
        onClick: () => {
            windowStore.addWindow(battleOfBC5Window);
        },
    }
]
</script>

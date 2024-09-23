<template>
    <FolderBrowser :contents="contents">
        <h1>Inkling Performance Labs</h1>
        <p>Inkling Performance Labs is a competitive Splatoon tournament and production organization. Its goal is to
            unite and grow the community by creating high quality Splatoon tournaments. We want to promote the growth of
            Splatoon, both in working to bring in new members, along with helping improve those already in the
            community. I've been with IPL since it's inception for tournament organizing, design, and production.</p>
        <p>
            <a href="http://iplabs.ink/">Website, </a>
            <a href="https://www.twitch.tv/iplsplatoon">Twitch, </a>
            <a href="https://twitter.com/iplSplatoon">Twitter, </a>
            <a href="https://bsky.app/profile/iplabs.ink">Bluesky, </a>
            <a href="https://www.youtube.com/@iplsplatoon">YouTube, </a>
            <a href="https://github.com/iplsplatoon">GitHub</a>
        </p>
    </FolderBrowser>
</template>

<script setup lang="ts">
import { useWindowsStore } from '../../stores/windowStore';
import { FolderContent } from '../../types/FolderContent';
import { iplVsWindow, lowInkWindow, mapsIplabsInkWindow, mediaCreatorWindow, provingGroundsWindow, sendouqWindow, swimOrSinkWindow } from '../../windows';
import FolderBrowser from './FolderBrowser.vue';

const windowStore = useWindowsStore();

const contents: FolderContent[] = [
    {
        name: "IPL VS",
        date: "Since October 2023",
        onClick: () => {
            windowStore.addWindow(iplVsWindow);
        },
    },
    {
        name: "SendouQ Season Finale Stream",
        date: "Since October 2023",
        onClick: () => {
            windowStore.addWindow(sendouqWindow);
        },
    },
    {
        name: "Proving Grounds",
        date: "Since October 2022",
        onClick: () => {
            windowStore.addWindow(provingGroundsWindow);
        },
    },
    {
        name: "Swim or Sink",
        date: "Since September 2022",
        onClick: () => {
            windowStore.addWindow(swimOrSinkWindow);
        },
    },
    {
        name: "maps.iplabs.ink",
        date: "Since April 2022",
        onClick: () => {
            windowStore.addWindow(mapsIplabsInkWindow);
        },
    },
    {
        name: "IPL Media Creator",
        date: "Since December 2021",
        onClick: () => {
            windowStore.addWindow(mediaCreatorWindow);
        },
    },
    {
        name: "Low Ink",
        date: "Since 2019",
        onClick: () => {
            windowStore.addWindow(lowInkWindow);
        },
    }
]
</script>

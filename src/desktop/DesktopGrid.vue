<template>
    <div class="grid">
        <DesktopIcon label="About" @double-clicked="windows.addWindow(aboutWindow)">
            <Info :size="48" />
        </DesktopIcon>
        <DesktopIcon label="Level1" @double-clicked="windows.addWindow(level1FolderWindow)">
            <Folder :size="48" />
        </DesktopIcon>
        <DesktopIcon label="IPL" @double-clicked="windows.addWindow(iplFolderWindow)">
            <Folder :size="48" />
        </DesktopIcon>
        <DesktopIcon label="Gaming ISU" @double-clicked="windows.addWindow(gamingISUFolderWindow)">
            <Folder :size="48" />
        </DesktopIcon>
        <DesktopIcon label="Personal" @double-clicked="windows.addWindow(personalFolderWindow)">
            <Folder :size="48" />
        </DesktopIcon>
    </div>
</template>

<script setup lang="ts">
import { Folder, Info } from 'lucide-vue-next';
import DesktopIcon from './DesktopIcon.vue';
import { useWindowsStore } from '../stores/windowStore';
import { aboutWindow, gamingISUFolderWindow, iplFolderWindow, level1FolderWindow, personalFolderWindow } from '../windows';

const windows = useWindowsStore();
</script>

<style lang="scss" scoped>
.grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
}
</style>
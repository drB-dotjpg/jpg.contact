<template>
    <div class="begin-menu">
        <div class="brand">jpg.contact</div>
        <div class="button" @click="windows.addWindow(aboutWindow); emit('close')">
            <Info :size="32" />
            <span>About</span>
        </div>
        <div class="button" @click="windows.addWindow(level1FolderWindow); emit('close')">
            <Folder :size="32" />
            <span>Level1</span>
        </div>
        <div class="button" @click="windows.addWindow(iplFolderWindow); emit('close')">
            <Folder :size="32" />
            <span>Inkling Performance Labs</span>
        </div>
        <div class="button" @click="windows.addWindow(gamingISUFolderWindow); emit('close')">
            <Folder :size="32" />
            <span>Gaming ISU</span>
        </div>
        <div class="button" @click="windows.addWindow(personalFolderWindow); emit('close')">
            <Folder :size="32" />
            <span>Personal</span>
        </div>
        <div class="button" @click="shutdown">
            <Power :size="32" />
            <span>Shut Down</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Folder, Info, Power } from 'lucide-vue-next';
import { onMounted, onUnmounted } from 'vue';
import { useWindowsStore } from '../stores/windowStore';
import { aboutWindow, gamingISUFolderWindow, iplFolderWindow, level1FolderWindow, personalFolderWindow } from '../windows';

const windows = useWindowsStore();

const emit = defineEmits({
    close: () => true
})

onMounted(() => {
    setTimeout(() => {
        document.addEventListener('click', onClick);
    }, 10);
})

onUnmounted(() => {
    document.removeEventListener('click', onClick);
});

function onClick(e: MouseEvent) {
    if (!(e.target as HTMLElement).closest('.begin-menu')) {
        emit('close');
    }
}

function shutdown() {
    document.documentElement.innerHTML = '<pre>It is now safe to leave this webpage</pre>';
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.begin-menu {
    position: absolute;
    left: 0;
    bottom: 50px;
    width: min(100dvw, 400px);
    max-height: calc(100dvh - 50px);
    height: fit-content;
    background-color: $dark;
    color: $light;
    padding: .5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    z-index: 100;
    filter: drop-shadow(0 .5rem 1.5rem rgba($dark, .3));
    border-radius: 0 5px 0 0;

    .brand {
        font-weight: 300;
        margin-left: .2rem;
    }

    .button {
        width: 100%;
        height: 60px;
        background-color: $light;
        color: $dark;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        gap: 1rem;
        cursor: pointer;
        transition: background-color .15s, color .15s, border .15s;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 0 1rem;
        border: 2px solid;

        span {
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    .button:hover {
        background-color: $dark;
        color: $light;
        border-color: $light;
    }
}
</style>
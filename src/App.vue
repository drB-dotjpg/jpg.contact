<template>
    <div class="desktop">
        <DesktopGrid />

        <Transition :CSS="false" @enter="beginEnter" @leave="beginLeave">
            <BeginMenu v-if="beginOpen" @close="beginOpen = false" />
        </Transition>

        <Taskbar :windows="windowsStore.windows" @focus="focusWindow" @minimize="taskbarWindowMinimize" :focusedId="getFocusedId" :beginOpen="beginOpen" @beginPressed="beginPressed"/>

        <TransitionGroup :css="false" @enter="windowEnter" @leave="windowLeave">
            <Window v-for="(window, i) in windowsStore.windows" :key="window.id" :data-window-id="window.id" :title="window.title"
                :id="window.id" :focus="i" :minimized="window.minimized" @focus="focusWindow" @close="closeWindow"
                @minimize="minimizeWindow">
                <component v-if="window.component" :is="{ ...window.component }" />
                <div v-else-if="window.html" v-html="window.html" style="height: 100%;"></div>

            </Window>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import Taskbar from './desktop/Taskbar.vue';
import Window from './desktop/Window.vue';
import gsap from 'gsap';
import { useWindowsStore } from './stores/windowStore';
import DesktopGrid from './desktop/DesktopGrid.vue';
import { aboutWindow } from './windows';
import BeginMenu from './desktop/BeginMenu.vue';

const windowsStore = useWindowsStore();
const beginOpen = ref(false);

onMounted(() => {
    windowsStore.addWindow(aboutWindow);
});

function focusWindow(id: number) {
    const index = windowsStore.windows.findIndex(window => window.id === id);
    if (index !== -1) {
        const window = windowsStore.windows.splice(index, 1)[0];
        windowsStore.windows.push(window);
        
        if (window.minimized) {
            unminimizeWindow(window.id);
        }
    }
}

function closeWindow(id: number) {
    const index = windowsStore.windows.findIndex(window => window.id === id);
    if (index !== -1) {
        windowsStore.windows.splice(index, 1);
    }
    if (windowsStore.windows.length === 0) {
        windowsStore.idCounter = 0;
    }
}

function taskbarWindowMinimize(id: number) {
    const index = windowsStore.windows.findIndex(window => window.id === id);
    if (index !== -1) {
        const window = windowsStore.windows[index];
        if (!window.minimized) {
            minimizeWindow(id);
        } else {
            unminimizeWindow(id);
        }
    }
}

function minimizeWindow(id: number) {
    const taskbarWindow = document.querySelector(`.task-window[data-window-id="${id}"]`);
    const window = document.querySelector(`.window[data-window-id="${id}"]`);

    if (!taskbarWindow || !window) {
        const index = windowsStore.windows.findIndex(window => window.id === id);
        if (index !== -1) {
            windowsStore.windows[index].minimized = true;
        }
        return;
    }

    const windowRect = window.getBoundingClientRect();
    const taskbarRect = taskbarWindow.getBoundingClientRect();
    const x = -(windowRect.left + windowRect.width / 2 - taskbarRect.left - taskbarRect.width / 2);
    const y = -(windowRect.top + windowRect.height / 2 - taskbarRect.top - taskbarRect.height / 2);

    gsap.to(window, {
        opacity: 0,
        duration: .2,
        ease: 'power2.in',
        x: x,
        y: y,
        scale: .2,
        onComplete: () => {
            const index = windowsStore.windows.findIndex(window => window.id === id);
            if (index !== -1) {
                windowsStore.windows[index].minimized = true;
            }

            gsap.set(window, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
            });
        },
    });
}

function unminimizeWindow(id: number) {
    const taskbarWindow = document.querySelector(`.task-window[data-window-id="${id}"]`);
    const window = document.querySelector(`.window[data-window-id="${id}"]`);

    const index = windowsStore.windows.findIndex(window => window.id === id);
    if (index !== -1) {
        windowsStore.windows[index].minimized = false;
    }

    if (!taskbarWindow || !window) {
        return;
    }

    nextTick(() => {
        const windowRect = window.getBoundingClientRect();
        const taskbarRect = taskbarWindow.getBoundingClientRect();
        const x = -(windowRect.left + windowRect.width / 2 - taskbarRect.left - taskbarRect.width / 2);
        const y = -(windowRect.top + windowRect.height / 2 - taskbarRect.top - taskbarRect.height / 2);

        gsap.fromTo(window, {
            opacity: 0,
            x: x,
            y: y,
            scale: .2
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: .3,
            ease: 'power4.out',
        });
    });
}

function windowEnter(el, done) {
    gsap.from(el, {
        opacity: 0,
        scale: .9,
        y: 75,
        duration: 0.15,
        ease: 'power2.out',
        onComplete: done,
    })
}

function windowLeave(el, done) {
    gsap.to(el, {
        opacity: 0,
        scale: .9,
        duration: 0.1,
        ease: 'power2.out',
        onComplete: done,
    })
}

const getFocusedId = computed(() => {
    return windowsStore.windows.length > 0 ? windowsStore.windows[windowsStore.windows.length - 1].id : -1;
});

function beginPressed() {
    beginOpen.value = !beginOpen.value;
}

function beginEnter(el, done) {
    gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.15,
        ease: 'power2.out',
        onComplete: done,
    });
}

function beginLeave(el, done) {
    gsap.to(el, {
        opacity: 0,
        y: 50,
        duration: 0.1,
        ease: 'power2.out',
        onComplete: done,
    });
}
</script>

<style scoped lang="scss">
@import "./style/variables.scss";

.desktop {
    width: 100dvw;
    height: 100dvh;
    background-color: $light;
    position: relative;
    overflow: hidden;
}
</style>

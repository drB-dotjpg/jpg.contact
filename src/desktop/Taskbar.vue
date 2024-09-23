<template>
    <div class="taskbar" ref="taskbar">
        <div class="begin-button" :class="{'open': beginOpen}" @click="emits('beginPressed')">
            <ImageIcon />
            <div class="text">Begin</div>
        </div>
        <TransitionGroup :css="false" @enter="taskbarWindowEnter" @leave="taskbarWindowLeave">
            <div v-for="window in orderedWindows" :key="window.id" :data-window-id="window.id" class="task-window"
                :class="window.id === focusedId ? 'active' : ''" @click="windowClick(window)" :title="window.title">
                <div class="label">{{ window.title }}</div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import { WindowType } from '../types/WindowType';
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { ImageIcon } from 'lucide-vue-next';

gsap.registerPlugin(Flip); 

const taskbar = ref<HTMLElement | null>(null);

const props = defineProps({
    windows: {
        type: Array as PropType<WindowType[]>,
        required: true,
    },
    focusedId: {
        type: Number,
        required: true,
    },
    beginOpen: {
        type: Boolean,
        required: true,
    },
});

const emits = defineEmits({
    focus: (id: number) => true,
    minimize: (id: number) => true,
    beginPressed: () => true,
});

const orderedWindows = computed(() => {
    const clone = [...props.windows];
    return clone.sort((a, b) => a.id - b.id);
});

function taskbarWindowEnter(el, done) {
    gsap.fromTo(el,{
        y: 60
    }, {
        y: 0,
        duration: 0.15,
        onComplete: done,
        ease: 'power3.out',
    })
}

function taskbarWindowLeave(el, done) {
    const state = Flip.getState('.window');
    gsap.to(el, {
        y: 60,
        duration: 0.15,
        ease: 'power3.in',
        onComplete: () => {
            taskbar.value?.removeChild(el);
            Flip.from(state, {
                duration: .35,
                ease: 'power3.inOut',
                onComplete: done,
            });
        }
    });
}

function windowClick(window: WindowType) {
    if (window.id === props.focusedId) {
        emits('minimize', window.id);
        return;
    }
    emits('focus', window.id);
}
</script>

<style lang="scss" scoped>
@import "../style//variables.scss";

.taskbar {
    width: 100dvw;
    height: 50px;
    background-color: $dark;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 100;
    user-select: none;
    padding: 0 5px;
    box-sizing: border-box;

    .begin-button {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        height: 40px;
        background-color: $light;
        color: $dark;
        padding: 0 10px;
        gap: 5px;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid;
        transition: background-color .15s, color .15s, border .15s;
    }

    .begin-button.open {
        background-color: $dark;
        color: $light;
        border-color: $light;
    }

    .task-window {
        background-color: $dark;
        color: $light;
        padding: 0 20px;
        margin: 0;
        height: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        cursor: pointer;
        flex: 1;
        min-width: 0;
        max-width: 18rem;
        transition: border-radius .25s, padding .25s, background-color .1s, color .1s, border .1s;
        border-radius: 22px;
        border: 2px solid $light;
        font-size: 1.25rem;
        font-weight: 500;

        .label {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .task-window.active {
        border-radius: 5px;
        padding: 0 10px;
        background-color: $light;
        color: $dark;
        border: none;
        font-weight: 700;
    }
}

@media only screen and (max-device-width: $phone-break){
    .taskbar{
        .begin-button {
            .text {
                display: none;
            }
        }
    }
}
</style>
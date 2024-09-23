<template>
    <div class="window" :class="{ 'maximized': maximized, 'minimized': minimized }" ref="windowElem"
        @mousedown="emits('focus', id)" @touchstart="emits('focus', id)" :style="{ zIndex: focus }">
        <div class="title-bar">
            <div class="drag-handle" @mousedown="startMouseDrag" @touchstart="startTouchDrag" :dragging="isDragging">
                <div class="text">{{ props.title }}</div>
            </div>

            <Minus class="button" @click="emits('minimize', props.id)" :size="32" />

            <Square v-if="!maximized" class="button" @click="maximized = true" :size="28" />
            <Copy v-else class="button" @click="maximized = false" :size="28" style="transform: scaleX(-1);" />

            <XIcon class="button" @click="emits('close', props.id)" :size="32" />
        </div>

        <div class="resize-handle top-left" @mousedown="startResize(ResizeAnchor.TopLeft)"
            @touchstart="startResize(ResizeAnchor.TopLeft)"></div>
        <div class="resize-handle top-right" @mousedown="startResize(ResizeAnchor.TopRight)"
            @touchstart="startResize(ResizeAnchor.TopRight)"></div>
        <div class="resize-handle bottom-left" @mousedown="startResize(ResizeAnchor.BottomLeft)"
            @touchstart="startResize(ResizeAnchor.BottomLeft)"></div>
        <div class="resize-handle bottom-right" @mousedown="startResize(ResizeAnchor.BottomRight)"
            @touchstart="startResize(ResizeAnchor.BottomRight)"></div>

        <div @mousedown.stop v-if="windows.windows.length - 1 === focus" class="content">
            <slot></slot>
        </div>
        <div v-else class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { Copy, Minus, Square, XIcon } from 'lucide-vue-next';
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { useWindowsStore } from '../stores/windowStore';

enum ResizeAnchor {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
}

const MIN_WIDTH = 300;
const MIN_HEIGHT = 300;

const windows = useWindowsStore();

const windowElem = ref<HTMLElement | null>(null);
const x = ref<number>(0);
const y = ref<number>(0);
const width = ref<number>(0);
const height = ref<number>(0);
const isDragging = ref<boolean>(false);
const isResizing = ref<boolean>(false);
const resizeAnchor = ref<ResizeAnchor>(ResizeAnchor.BottomRight);
const maximized = ref<boolean>(false);

const tweenedWidth = reactive({ value: 0 });
const tweenedHeight = reactive({ value: 0 });
const tweenedX = reactive({ value: 0 });
const tweenedY = reactive({ value: 0 });

let dragoffsetX = 0;
let dragoffsetY = 0;
let restoredState: { x: number, y: number, width: number, height: number } | null = null;

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    focus: {
        type: Number,
        required: true
    },
    minimized: {
        type: Boolean,
        required: true
    },
});

const emits = defineEmits({
    close: (id: number) => true,
    focus: (id: number) => true,
    minimize: (id: number) => true,
});

onMounted(() => {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('touchend', mouseUp);
    window.addEventListener('resize', hostWindowResize);

    width.value = tweenedWidth.value = Math.min(tweenedWidth.value = window.innerWidth * .98, 1200);
    height.value = tweenedHeight.value = tweenedHeight.value = (window.innerHeight - 50) * .8;
    x.value = ((tweenedX.value = window.innerWidth / 2 - width.value / 2) + (window.innerWidth * .025)) - Math.floor(Math.random() * (window.innerWidth * .05));
    y.value = ((tweenedY.value = (window.innerHeight - 50) / 2 - height.value / 2) + (window.innerHeight * .025)) - Math.floor(Math.random() * (window.innerHeight * .05));

    adjustSize();
    adjustFocus();
});

onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('mouseup', mouseUp);
    document.removeEventListener('touchend', mouseUp);
    window.removeEventListener('resize', hostWindowResize);
});

watch([width, height], () => {
    gsap.to(tweenedWidth, {
        value: width.value,
        duration: .25,
        ease: 'power3.out'
    });
    gsap.to(tweenedHeight, {
        value: height.value,
        duration: .25,
        ease: 'power3.out'
    });
});

watch([tweenedWidth, tweenedHeight], () => {
    adjustSize();
});

watch([x, y], () => {
    gsap.to(tweenedX, {
        value: x.value,
        duration: .25,
        ease: 'power3.out'
    });
    gsap.to(tweenedY, {
        value: y.value,
        duration: .25,
        ease: 'power3.out'
    });
});

watch([tweenedX, tweenedY], () => {
    adjustPosition();
});

watch(() => props.focus, () => {
    adjustFocus();
});

watch(maximized, () => {
    if (maximized.value) {
        restoredState = { x: x.value, y: y.value, width: width.value, height: height.value };
        x.value = 0;
        y.value = 0;
        width.value = window.innerWidth;
        height.value = window.innerHeight - 50;
    } else {
        if (restoredState) {
            if (!isDragging.value) {
                x.value = restoredState.x;
                y.value = restoredState.y;
            }
            width.value = restoredState.width;
            height.value = restoredState.height;
        } else {
            x.value = window.innerWidth / 2 - width.value / 2;
            y.value = (window.innerHeight - 50) / 2 - height.value / 2;
            width.value = window.innerWidth * .7;
            height.value = (window.innerHeight - 50) * .8;
        }
    }
});

function adjustSize() {
    if (windowElem.value) {
        windowElem.value.style.width = `${tweenedWidth.value}px`;
        windowElem.value.style.height = `${tweenedHeight.value}px`;
    }
}

function adjustPosition() {
    if (windowElem.value) {
        windowElem.value.style.left = `${tweenedX.value}px`;
        windowElem.value.style.top = `${tweenedY.value}px`;
    }
}

function adjustFocus() {
    if (windowElem.value) {
        windowElem.value.style.zIndex = props.focus.toString();
    }
}

function mouseMove(event: MouseEvent) {
    inputMove(event.clientX, event.clientY);
}

function touchMove(event: TouchEvent) {
    inputMove(event.touches[0].clientX, event.touches[0].clientY);
}

function inputMove(clientX: number, clientY: number) {
    if (isDragging.value) {
        if (maximized.value) {
            maximized.value = false;
            dragoffsetX = clientX / 2;
        } else {
            x.value = clientX - dragoffsetX;
            y.value = clientY - dragoffsetY;
        }

        if (x.value < 0) {
            x.value = 0;
        }
        if (y.value < 0) {
            y.value = 0;
        }
        if (x.value + width.value > window.innerWidth) {
            x.value = window.innerWidth - width.value;
        }
        if (y.value + height.value > (window.innerHeight - 50)) {
            y.value = (window.innerHeight - 50) - height.value;
        }
    }

    if (isResizing.value) {

        const clientXFit = Math.max(0, Math.min(clientX, window.innerWidth));
        const clientYFit = Math.max(0, Math.min(clientY, window.innerHeight - 50));

        switch (resizeAnchor.value) {
            case ResizeAnchor.TopLeft:
                width.value = x.value + width.value - clientXFit;
                height.value = y.value + height.value - clientYFit;

                if (width.value < MIN_WIDTH) {
                    width.value = MIN_WIDTH;
                } else {
                    x.value = clientXFit
                }

                if (height.value < MIN_HEIGHT) {
                    height.value = MIN_HEIGHT;
                } else {
                    y.value = clientYFit;
                }

                break;

            case ResizeAnchor.TopRight:
                width.value = clientXFit - x.value;
                height.value = y.value + height.value - clientYFit;

                if (width.value < MIN_WIDTH) {
                    width.value = MIN_WIDTH;
                }

                if (height.value < MIN_HEIGHT) {
                    height.value = MIN_HEIGHT;
                } else {
                    y.value = clientYFit;
                }

                break;

            case ResizeAnchor.BottomLeft:
                width.value = x.value + width.value - clientXFit;
                height.value = clientYFit - y.value;

                if (width.value < MIN_WIDTH) {
                    width.value = MIN_WIDTH;
                } else {
                    x.value = clientXFit;
                }

                if (height.value < MIN_HEIGHT) {
                    height.value = MIN_HEIGHT;
                }

                break;

            case ResizeAnchor.BottomRight:
                width.value = clientXFit - x.value;
                height.value = clientYFit - y.value;

                if (width.value < MIN_WIDTH) {
                    width.value = MIN_WIDTH;
                }

                if (height.value < MIN_HEIGHT) {
                    height.value = MIN_HEIGHT;
                }

                break;
        }
    }
}

function mouseUp() {
    if (isDragging.value) {
        isDragging.value = false;

        if (y.value <= 0) {
            maximized.value = true;
        }
    }
    if (isResizing.value) {
        isResizing.value = false;
    }
}

function startMouseDrag(event: MouseEvent) {
    startDrag(event.clientX, event.clientY);
}

function startTouchDrag(event: TouchEvent) {
    startDrag(event.touches[0].clientX, event.touches[0].clientY);
}

function startDrag(clientX: number, clientY: number) {
    dragoffsetX = clientX - x.value;
    dragoffsetY = clientY - y.value;
    isDragging.value = true;
}

function startResize(anchor: ResizeAnchor) {
    resizeAnchor.value = anchor;
    isResizing.value = true;
}

function hostWindowResize() {
    const hostWidth = window.innerWidth;
    const hostHeight = window.innerHeight - 50;

    if (hostWidth < width.value) {
        width.value = hostWidth;
    }

    if (x.value + width.value > hostWidth) {
        x.value = hostWidth - width.value;
    }

    if (hostHeight < height.value) {
        height.value = hostHeight;
    }

    if (y.value + height.value > hostHeight) {
        y.value = hostHeight - height.value;
    }

    if (maximized.value) {
        x.value = 0;
        y.value = 0;
        width.value = hostWidth;
        height.value = hostHeight;
    }
}
</script>

<style lang="scss" scoped>
@import "../style//variables.scss";

.window {
    position: absolute;
    background-color: $light;
    border: solid $dark;
    border-left-width: .5rem;
    border-radius: .5rem;
    box-sizing: border-box;
    border-top: none;
    outline: 2px solid $light;
    filter: drop-shadow(0 .5rem 1.5rem rgba($dark, .3));

    .title-bar {
        width: 100%;
        height: 3rem;
        background-color: $dark;
        color: $light;
        display: flex;
        align-items: center;
        user-select: none;
        gap: 1rem;
        font-size: 1.25rem;
        font-weight: 500;
        padding: 0 .5rem;
        box-sizing: border-box;

        .drag-handle {
            min-width: 0;
            width: 100%;
            flex: 1;
            height: 100%;
            cursor: grab;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            .text {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .drag-handle[dragging=true] {
            cursor: grabbing;
        }

        .button {
            cursor: pointer;
        }
    }

    .resize-handle {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        user-select: none;
    }

    .resize-handle.bottom-right {
        bottom: -.5rem;
        right: -.5rem;
        cursor: nwse-resize;
    }

    .resize-handle.bottom-left {
        bottom: -.5rem;
        left: -.5rem;
        cursor: nesw-resize;
    }

    .resize-handle.top-right {
        top: -.5rem;
        right: -.5rem;
        cursor: nesw-resize;
    }

    .resize-handle.top-left {
        top: -.5rem;
        left: -.5rem;
        cursor: nwse-resize;
    }

    .content {
        width: 100%;
        height: calc(100% - 3rem);
        overflow: scroll;
    }
}

.window.maximized {
    border: none;
    border-radius: 0;
    filter: none;

    .title-bar {
        padding: 0 .5rem;
        box-sizing: border-box;
    }
}

.window.minimized {
    display: none;
}
</style>
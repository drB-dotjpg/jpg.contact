<template>
    <div class="desktop-icon" @click="onClick">
        <slot></slot>
        <div class="label">{{ label }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


defineProps({
    label: String,
});

const emits = defineEmits({
    'double-clicked': () => true,
})

const isDoubleClicking = ref(false);

function onClick() {
    if (isDoubleClicking.value) {
        emits('double-clicked');
    } else {
        isDoubleClicking.value = true;
        setTimeout(() => {
            isDoubleClicking.value = false;
        }, 300);
    }
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.desktop-icon {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    text-align: center;
    user-select: none;
    transition: background-color .1s, color .1s;
    cursor: pointer;

    .label {
        margin-top: .25rem;
        font-weight: 500;
    }
}

.desktop-icon:hover {
    background-color: $dark;
    color: $light;
}
</style>
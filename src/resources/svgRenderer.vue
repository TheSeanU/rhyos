<template>
    <div @mouseenter="change" @mouseleave="change" ref="svgElement">
        <SvgFilter :color="color" :hover="hover" :mouseEvent="mouseEvent" />
        <img class="icon" :src="svg" :width="width">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { hoverUuid, colorUuid } from './assets/constants'
import SvgFilter from './svgFilter.vue';

const props = withDefaults(defineProps<{
    name: string;
    width: number;
    color?: string;
    hover?: string;
}>(), {
    color: '#000000',
    hover: '#fefefe'
})

const svgElement = ref<HTMLElement>();
const mouseEvent = ref<boolean>(false)

const svg = import.meta.glob<Record<string, string>>('./assets/icons/*.svg', { eager: true })[`./assets/icons/${props.name}.svg`].default;

const change = () => mouseEvent.value = !mouseEvent.value

watchEffect(() => {
    if (!svgElement.value) return;

    if (!mouseEvent.value) svgElement.value.style.filter = `invert(100%) url(#${colorUuid})`
    else svgElement.value.style.filter = `invert(100%) url(#${hoverUuid})`
});
</script>
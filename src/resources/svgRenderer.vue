<template>
    <div ref="svgElement" class="svg-container">
        <svg xmlns="<http://www.w3.org/2000/svg>" version="1.1" style="display: none;">
            <filter :id="colorUuid" x="0%" y="0%" width="100%" height="100%">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="matrixColor" />
            </filter>

            <filter :id="hoverUuid" x="0%" y="0%" width="100%" height="100%">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="matrixHover" />
            </filter>
        </svg>

        <img class="icon" :src="svg" :width="width">
        <slot class="svg-slot"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = withDefaults(defineProps<{
    name: string;
    width: string;
    color?: string;
    hover?: string;
}>(), {
    color: '#000000',
    hover: '#fefefe'
})

const svgElement = ref<HTMLElement>();

const uuid = ref(Math.floor(Math.random() * Date.now()).toString().slice(0, 5));

const colorUuid = `${uuid.value}-color`
const hoverUuid = `${uuid.value}-hover`

const matrixColor = ref<string>()
const matrixHover = ref<string>()

const svg = ref<string>();
const svgs = import.meta.glob<Record<string, string>>('./icons/*.svg', { eager: true });

const hexTofeColorMatrix = (hex: string): string | undefined => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return;

    const red = parseInt(result[1], 16) / 255;
    const green = parseInt(result[2], 16) / 255;
    const blue = parseInt(result[3], 16) / 255;

    return `${red.toFixed(2)} 0 0 0 0 0 ${green.toFixed(2)} 0 0 0 0 0 ${blue.toFixed(2)} 0 0 0 0 0 1 0`;
};

watchEffect(() => {
    svg.value = svgs[`./icons/${props.name}.svg`].default

    matrixHover.value = hexTofeColorMatrix(props.hover)
    matrixColor.value = hexTofeColorMatrix(props.color)

    if (!svgElement.value) return;
    svgElement.value.addEventListener("mouseenter", () => {
        if (!svgElement.value) return;
        svgElement.value.style.filter = `invert(100%) url(#${hoverUuid})`
    });
    svgElement.value.addEventListener("mouseleave", () => {
        if (!svgElement.value) return;
        svgElement.value.style.filter = `invert(100%) url(#${colorUuid})`
    });
});

</script>
<template>
    <svg xmlns="<http://www.w3.org/2000/svg>" version="1.1" style="display: none;">
        <filter v-if="!mouseEvent" :id="colorUuid" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="hexTofeColorMatrix(color)" />
        </filter>

        <filter v-if="mouseEvent" :id="hoverUuid" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="hexTofeColorMatrix(hover)" />
        </filter>
    </svg>
</template>

<script setup lang="ts">
import { colorUuid, hoverUuid } from './assets/constants';

defineProps<{
    mouseEvent: boolean;
    hover: string;
    color: string;
}>()

const hexTofeColorMatrix = (hex: string): string | undefined => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return;

    const red = parseInt(result[1], 16) / 255;
    const green = parseInt(result[2], 16) / 255;
    const blue = parseInt(result[3], 16) / 255;

    return `${red.toFixed(2)} 0 0 0 0 0 ${green.toFixed(2)} 0 0 0 0 0 ${blue.toFixed(2)} 0 0 0 0 0 1 0`;
};
</script>
<template>
    <svg style="display:none;">
        <filter id="filter" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix in="SourceGraphic" type="matrix" :values="matrixValue" />
        </filter>
    </svg>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    color: string
}>()

const matrixValue = computed(() => {
    if (props.color.length > 6) {
        throw "Only six-digit hex colors are allowed.";
    }

    let RGB = [];

    for (let i = 0; i < props.color.length; i += 2) {
        const firstDigit = parseInt(props.color[i], 16);
        const firstDigitPartial = firstDigit * 16;

        let RGBValue = parseInt(props.color[i + 1], 16) + firstDigitPartial;

        RGBValue = RGBValue / 255;
        RGBValue = parseInt(RGBValue.toFixed(2));

        RGB.push(RGBValue);
    }

    return `
        0 0 0 0 ${RGB[0]}
        0 0 0 0 ${RGB[1]}
        0 0 0 0 ${RGB[2]} 
        0 0 0 1 0
    `;
})

</script>
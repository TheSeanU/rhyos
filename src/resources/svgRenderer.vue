<template>
    <svg xmlns="<http://www.w3.org/2000/svg>" version="1.1" style="display: none">
        <filter id="color" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="color" />
        </filter>
    </svg>
    <svg xmlns="<http://www.w3.org/2000/svg>" version="1.1" style="display: none">
        <filter id="hover" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix color-interpolation-filters="sRGB" type="matrix" :values="hover" />
        </filter>
    </svg>

    <img :src="svg" class="icon" :width="width">
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
    hover: '#000000'
})

const hover = ref<string>()
const color = ref<string>()

const svg = ref<string>();
const svgs = import.meta.glob<Record<string, string>>('./icons/*.svg', { eager: true });

const hexTofeColorMatrix = (hex: string): string => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '';

    const red = parseInt(result[1], 16) / 255;
    const green = parseInt(result[2], 16) / 255;
    const blue = parseInt(result[3], 16) / 255;

    return `${red.toFixed(2)} 0 0 0 0 0 ${green.toFixed(2)} 0 0 0 0 0 ${blue.toFixed(2)} 0 0 0 0 0 1 0`;
};

watchEffect(() => {
    svg.value = svgs[`./icons/${props.name}.svg`].default

    hover.value = hexTofeColorMatrix(props.hover)
    color.value = hexTofeColorMatrix(props.color)
});
</script>


<style scoped lang="scss">
.icon {
    filter: invert(100%) url(#color);
    -webkit-filter: invert(100%) url(#color);
}

.icon:hover {
    filter: invert(100%) url(#hover);
    -webkit-filter: invert(100%) url(#hover);
}
</style>
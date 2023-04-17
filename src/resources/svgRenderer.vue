<template>
    <img class="svg" :src="svg" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    name: string;
    color: string;
}>()

const svg = ref<string>();
const svgs = import.meta.glob<Record<string, string>>('./icons/*.svg', { eager: true });

watchEffect(() => svg.value = svgs[`./icons/${props.name}.svg`].default);
</script>

<style scoped></style>


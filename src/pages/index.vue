<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <svgRenderer name="sunrise" :width="20" hover="#00ff00" />
                <svgRenderer name="facebook" :width="15" hover="#007cf8">
                    Groningn NL
                </svgRenderer>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import svgRenderer from '../resources/svgRenderer.vue';
</script>

<style lang="scss"></style>
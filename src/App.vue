
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>


<style>
@import "./resources/styles.css";
</style>

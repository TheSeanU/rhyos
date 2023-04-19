import { computed } from "vue";

export const UuId = computed(() => Math.floor(Math.random() * Date.now()).toString().slice(0, 5));
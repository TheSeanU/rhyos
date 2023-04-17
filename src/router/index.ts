import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'

const { BASE_URL } = import.meta.env;

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [{ path: '/', component: Index }]
})

export default router

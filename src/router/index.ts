import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Cookiedock from '../views/Cookiedock.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cookiedock',
      name: 'cookiedock',
      component: Cookiedock,
    },
  ],
});

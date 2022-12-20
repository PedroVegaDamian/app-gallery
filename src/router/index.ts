import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from '@/modules/Home/routes'
import { authRoutes } from '@/modules/Auth/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [homeRoutes, authRoutes]
})

import { RouteRecordRaw } from 'vue-router'
import { verifyAuthentication } from '@/utils/verifyAuthentication'

export const homeRoutes: RouteRecordRaw = {
  path: '/',
  name: 'LayoutHome',
  component: () => import('@/modules/Home/layouts/HomeLayout.vue'),
  children: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/modules/Home/pages/index.vue'),
      beforeEnter: () =>
        verifyAuthentication({
          ifHasAuthentication: 'CONTINUE',
          ifNotHasAuthentication: {
            redirectTo: {
              name: 'SignIn'
            }
          }
        })
    }
  ]
}

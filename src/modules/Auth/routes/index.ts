import { RouteRecordRaw } from 'vue-router'
import { verifyAuthentication } from '@/utils/verifyAuthentication'

export const authRoutes: RouteRecordRaw = {
  path: '/',
  name: 'AuthLayout',
  component: () => import('@/modules/Auth/layouts/AuthLayout.vue'),
  children: [
    {
      name: 'SignIn',
      path: '/sign-in',
      component: () => import('@/modules/Auth/pages/SignIn.vue'),
      beforeEnter: () =>
        verifyAuthentication({
          ifHasAuthentication: {
            redirectTo: {
              name: 'Home'
            }
          },
          ifNotHasAuthentication: 'CONTINUE'
        })
    },
    {
      name: 'SignUp',
      path: '/sign-up',
      component: () => import('@/modules/Auth/pages/SignUp.vue'),
      beforeEnter: () =>
        verifyAuthentication({
          ifHasAuthentication: {
            redirectTo: {
              name: 'Home'
            }
          },
          ifNotHasAuthentication: 'CONTINUE'
        })
    }
  ]
}

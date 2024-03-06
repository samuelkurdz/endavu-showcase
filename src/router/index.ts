import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return { path: '/auth/invite' }
      },
    },
    {
      path: '/auth',
      component: () => import("@views/auth/AuthLayout.vue"),
      children: [
        {
          path: 'invite',
          components: {
            default: () => import('@views/auth/Invite.vue')
          }
        }
      ]
    },
    // {
    //   path: '/app',
    // },
  ]
})

export default router
